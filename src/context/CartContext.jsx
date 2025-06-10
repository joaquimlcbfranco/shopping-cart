import { useState, createContext } from "react";

export const CartContext = createContext();
export const CartOpenContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<CartOpenContext.Provider value={{ cartOpen, setCartOpen }}>
				{children}
			</CartOpenContext.Provider>
		</CartContext.Provider>
	);
};

export default CartProvider;
