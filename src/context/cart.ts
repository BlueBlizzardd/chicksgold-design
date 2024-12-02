import { createContext, createSignal } from "solid-js";

const [cart, setCart] = createSignal(0);

export const counter = {
    cart,
    increment(amount: number) {
        setCart(prev => prev + amount);
    },
    decrement() {
        setCart(prev => prev - 1);
    }
}

export const CartContext = createContext(counter);