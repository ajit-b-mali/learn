import { Link } from "react-router-dom";
import "./checkout-header.css"

export default function CheckoutHeader({ cart = [] }) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src="images/logo.png" />
                        <img className="mobile-logo" src="images/mobile-logo.png" />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">{totalItems} items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src="images/icons/checkout-lock-icon.png" />
                </div>
            </div>
        </div>
    );
}