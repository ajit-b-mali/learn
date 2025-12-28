import axios from "axios";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

function DeliveryOption({ cartItem, deliveryOption, loadCart }) {
    let priceString = "Free Shipping";

    if (deliveryOption.priceCents > 0) {
        priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
    }

    function updateDeliveryOption() {
        axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id
        });
        loadCart();
    }

    return (
        <div className="delivery-option"
            onClick={updateDeliveryOption}>
            <input type="radio"
                checked={cartItem.deliveryOptionId === deliveryOption.id}
                onChange={() => {}}
                className="delivery-option-input"
                name={`delivery-option-${cartItem.productId}`} />
            <div>
                <div className="delivery-option-date">
                    {dayjs(deliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                </div>
                <div className="delivery-option-price">
                    {priceString}
                </div>
            </div>
        </div>
    );
}

export default function DeliveryOptions({deliveryOptions, cartItem, loadCart}) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => <DeliveryOption
                key={deliveryOption.id}
                cartItem={cartItem}
                deliveryOption={deliveryOption}
                loadCart={loadCart}
            />)}
        </div>
    );
}