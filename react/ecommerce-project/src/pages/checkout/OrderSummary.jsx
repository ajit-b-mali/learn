import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import DeliveryOptions from "./DeliveryOptions";
import axios from "axios";

function CartItem({ cartItem, deliveryOptions, loadCart }) {
    const selectedDeliveryOption = deliveryOptions.find(deliveryOption => deliveryOption.id === cartItem.deliveryOptionId);

    async function deleteCartItem() {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    }

    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItem.product.name}
                    </div>
                    <div className="product-price">
                        {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary"
                            onClick={deleteCartItem}>
                            Delete
                        </span>
                    </div>
                </div>

                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
            </div>
        </div>
    );
}

export default function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {cart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />)}
        </div>
    );
}