
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButtonsReact() {

    const initialOptions = {
        'client-id': 'Aa3kTNZ33T7SXcGZ2aCJ25yR6MhJzOhFCadqEuRDBMBkRgmJZMzFcxBi9KkpHO-qDnovxjG6fbRAgsMJ',
        'enable-funding': 'paylater,venmo',
        'data-sdk-integration-source': 'integrationbuilder_ac',
    };

    return (

        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{
                    shape: 'rect',
                    color: 'blue',
                    layout: 'vertical'
                }}
                createOrder={async () => {
                    try {
                        const response = await fetch('/api/orders', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },

                            body: JSON.stringify({
                                cart: [
                                    {
                                        id: 'YOUR_PRODUCT_ID',
                                        quantity: '1',
                                    },
                                ],
                            }),
                        });

                        const orderData = await response.json();

                        if (orderData.id) {
                            return orderData.id;
                        } else {
                            const errorDetail = orderData?.details?.[0];
                            const errorMessage = errorDetail
                                ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                                : JSON.stringify(orderData);

                            throw new Error(errorMessage);
                        }
                    } catch (error) {
                        console.error(error);

                    }
                }}
                onApprove={async (data, actions) => {
                    try {
                        const response = await fetch(
                            `/api/orders/${data.orderID}/capture`,
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            },
                        );

                        const orderData = await response.json();


                        const errorDetail = orderData?.details?.[0];

                        if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
                            return actions.restart();
                        } else if (errorDetail) {

                            throw new Error(
                                `${errorDetail.description} (${orderData.debug_id})`,
                            );
                        } else {
                            const transaction =
                                orderData.purchase_units[0].payments.captures[0];
                            console.log(
                                'Capture result',
                                orderData,
                                JSON.stringify(orderData, null, 2),
                            );
                        }
                    } catch (error) {
                        console.error(error);

                    }
                }}
            />
        </PayPalScriptProvider>


    )
}

export default PayPalButtonsReact 