import "./CheckoutPage.css"
import CheckoutHeader from "./CheckoutHeader";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";

export default function CheckoutPage({ cart = [], loadCart }) {
    const [paymentSummary, setPaymentSummary] = useState(null);
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    
    useEffect(() => {
        fetchData(setDeliveryOptions, "/api/delivery-options?expand=estimatedDeliveryTime");
        fetchData(setPaymentSummary, "/api/payment-summary");
    }, [cart]);

    return (
        <>
            <title>Checkout</title>
            <CheckoutHeader cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    {deliveryOptions.length > 0 && <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />}
                    {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />}
                </div>
            </div>
        </>
    );
}