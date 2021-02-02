import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authUserSaga,
    authCheckStateSaga
} from './auth';

import {
    initIngredientsSaga
} from './burgerBuilder';

import {
    purchaseBurgerSaga,
    fetchOrdersSaga,
    deleteOrdersDataSaga
} from './orders';

export function* watchAuth() {

    // all lets us apply a yield to multiple items at a time as a single group. 
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ])

}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {

    // Take latest will only register final action a use submits. (For example if they hit a button a bunch of times quickly.)
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
    yield takeEvery(actionTypes.DELETE_ORDER, deleteOrdersDataSaga);
}