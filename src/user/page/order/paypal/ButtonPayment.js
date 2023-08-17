import React from 'react'
import { PayPalButton } from "react-paypal-button-v2";

function ButtonPayment() {
    return (
        <div>
            <PayPalButton
                options={{
                    clientId: "Aa3kTNZ33T7SXcGZ2aCJ25yR6MhJzOhFCadqEuRDBMBkRgmJZMzFcxBi9KkpHO-qDnovxjG6fbRAgsMJ",
                    currency: "CAD",
                }}
                amount="500"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    console.log({ details, data });
                }}
            />

        </div>
    )
}

export default ButtonPayment