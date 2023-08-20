import React from 'react'
import { PayPalButton } from "react-paypal-button-v2";

function ButtonPayment() {
    return (
        <div>
            <PayPalButton
                options={{
                    clientId: "ASjM_FoTDw5MQ-T4XWLp3fGDNK3qtSxgTsnL5QD0YQSHQH4vl3rd9myoboZik7O1otZMlEBtg3udUkYv",
                    currency: "CAD",
                }}
                amount="500"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                   
                }}
            />

        </div>
    )
}

export default ButtonPayment