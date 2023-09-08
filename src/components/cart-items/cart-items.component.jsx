import "./cart-items.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  incQuantity,
  decQuantity,
} from "../../store/cart/cart.action";
import { toast } from "react-toastify";

function CartItem({ cartItem }) {
  const { name, images, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handelDelete = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
    toast("Item Removed!");
  };

  const handelIncrease = () => {
    dispatch(incQuantity(cartItems, cartItem));
    toast("Item Added!");
  };

  const handelDecrease = () => {
    dispatch(decQuantity(cartItems, cartItem));
    toast("Item Removed!");
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={images[0]} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="flat-icon-btn" onClick={handelDecrease}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
            alt=""
            srcset=""
          />
        </div>
        <span className="value">{quantity}</span>
        <div className="flat-icon-btn" onClick={handelIncrease}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
            alt=""
            srcset=""
          />
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button flat-icon-btn" onClick={handelDelete}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default CartItem;
