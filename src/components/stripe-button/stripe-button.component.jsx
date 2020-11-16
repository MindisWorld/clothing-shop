import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HnthBFEnEK5htxI1EQrBQDxwd4mYsipK91NtyXawLxnLWZE6J1dug736ccUmtsZz9bTAJLcl3UY9iVaR8mcZbwO00wKsOT8ou';

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            // token={ttt}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;