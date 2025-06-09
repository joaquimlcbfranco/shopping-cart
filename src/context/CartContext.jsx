import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(["test"]);

	return (
		<CartContext.Provider value={{cart, setCart}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;