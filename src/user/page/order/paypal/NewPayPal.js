import React from 'react'

function NewPayPal() {
    window.paypal.Buttons().render('#paypal-button');
    return (
        <div id='paypal-button' >
        </div>
    )
}

export default NewPayPal