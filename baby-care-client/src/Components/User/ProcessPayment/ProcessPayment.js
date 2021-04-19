import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51IeBWmKGzVRjLceq7dRyGlIcRHxa8rzqbK1AkHIT2z0UxXVPaGPhRtZfDfPsG5BK5TePeNxgS8ynzGRqdN7afzPe00ZCJhH6se');

const ProcessPayment = ({handlePayment}) => {
    return (
        <div className="mt-5">
            <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment}></PaymentForm>
        </Elements>
        </div>
    );
};

export default ProcessPayment;