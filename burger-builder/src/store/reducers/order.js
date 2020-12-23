import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}


// Helper Functions
const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });
};

const purchasedBurgerStart = (state, action) => {
    return updateObject(state, { purchased: true });
}

const purchasedBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId })

    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    });
}

const purchasedBurgerFail = (state, action) => {
    return updateObject(state, { purchased: false });
}

const fetchOrdersStart = (state, action) => {
    return updateObject(state, { purchased: true });
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, { orders: action.orders, purchased: true });

}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, { purchased: false });
}

const deleteOrder = (state, action) => {

    return updateObject(state, { orders: state.orders, purchased: true });
}

const deleteOrderFail = (state, action) => {
    // const updatedOrders = state.orders.filter(orderId => orderId.id !== action.orderId)
    console.log(action.error);
    return updateObject(state);
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);

        case actionTypes.PURCHASE_BURGER_START:
            return purchasedBurgerStart(state, action);

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchasedBurgerSuccess(state, action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchasedBurgerFail(state, action);

        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);


        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);

        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);

        case actionTypes.DELETE_ORDER:
            return deleteOrder(state, action);

        case actionTypes.DELETE_ORDER_FAIL:
            return deleteOrderFail(state, action);

        default:
            return state;
    }
}

export default reducer;