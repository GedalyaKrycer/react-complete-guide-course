import { put } from 'redux-saga/effects';
import * as actions from '../actions/order';
import axios from '../../axios-orders';


export function* purchaseBurgerSaga(action) {

    yield put(actions.purchaseBurgerStart());

    const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData);

    try {
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }

}

export function* fetchOrdersSaga(action) {

    yield put(actions.fetchOrdersStart());

    const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;

    try {
        const response = yield axios.get('/orders.json' + queryParams);

        const fetchedOrders = [];

        for (let key in response.data) {
            fetchedOrders.push({
                ...response.data[key],
                id: key
            });
        }

        yield put(actions.fetchOrdersSuccess(fetchedOrders));

    } catch (error) {

        yield put(actions.fetchOrdersFail(error));

    }

}

export function* deleteOrdersDataSaga(action) {

    try {
        const response = yield axios.delete(`/orders/${action.orderId}.json`);

        yield put(actions.fetchOrders());
        yield put(actions.deleteOrderSuccess());


    } catch (error) {
        yield put(actions.deleteOrdersFail(error));

    }

}