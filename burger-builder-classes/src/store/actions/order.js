import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

// THUNK VERSION
// export const purchaseBurger = (orderData, token) => {
//     return dispatch => {
//         dispatch(purchaseBurgerStart());
//         axios.post('/orders.json?auth=' + token, orderData)
//             .then(response => {
//                 dispatch(purchaseBurgerSuccess(response.data.name, orderData));
//             })
//             .catch(error => {
//                 dispatch(purchaseBurgerFail(error));
//             });
//     };
// };

// SAGA VERSION
export const purchaseBurger = (orderData, token) => {
    return {
        type: actionTypes.PURCHASE_BURGER,
        orderData: orderData,
        token: token
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};


// THUNK VERSION
// export const fetchOrders = (token, userId) => {
//     return dispatch => {
//         dispatch(fetchOrdersStart());
//         const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
//         axios.get('/orders.json' + queryParams)
//             .then(res => {
//                 const fetchedOrders = [];
//                 for (let key in res.data) {
//                     fetchedOrders.push({
//                         ...res.data[key],
//                         id: key
//                     });
//                 }
//                 dispatch(fetchOrdersSuccess(fetchedOrders));
//             })
//             .catch(err => {
//                 dispatch(fetchOrdersFail(err));
//             });
//     };
// };

// SAGA VERSION
export const fetchOrders = (token, userId) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        token: token,
        userId: userId
    }
};

export const deleteOrderSuccess = () => {
    return {
        type: actionTypes.DELETE_ORDER
    }
}

export const deleteOrdersFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
        error: error
    }
}


// THUNK VERSIONS
// export const deleteOrders = (orderId) => {
//     return dispatch => {
//         axios.delete(`/orders/${orderId}.json`)
//             .then(res => {
//                 dispatch(fetchOrders());
//                 dispatch(deleteOrderSuccess());
//             })
//             .catch(error => {
//                 dispatch(deleteOrdersFail(error));
//             });
//     }
// }

// SAGA VERSIONS
export const deleteOrders = (orderId) => {
    return {
        type: actionTypes.DELETE_ORDER,
        orderId: orderId
    }
}