const cartReducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            const { init } = action.payload;
            return { ...state, cart: [...state.cart, init] };
        case "ADD_TO_CART":
            const { product } = action.payload;
            localStorage.setItem("cartList", JSON.stringify(state.cart));
            return { ...state, cart: [...state.cart, product] };
        case "SET_QUANTITY":
            const { product_id } = action.payload;
            const newCart = state.cart.filter(item => {
                if (item.product_id === product_id) {
                    item.quantity += 1;
                    localStorage.setItem(
                        "cartList",
                        JSON.stringify(state.cart)
                    );
                    return { ...state, cart: [...state.cart] };
                }
            });
        case "DECREASE_QUANTITY":
            const id = action.payload.id;
            state.cart.filter(item => {
                if (item.product_id === id) {
                    item.quantity -= 1;
                    localStorage.setItem(
                        "cartList",
                        JSON.stringify(state.cart)
                    );
                }
            });

        case "REMOVE_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    item => item.product_id !== action.payload.cart_id
                )
            };
        default:
            throw new Error();
    }
};
export { cartReducer };
