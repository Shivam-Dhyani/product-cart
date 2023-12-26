import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "../actions/types";

type ProductAction = {
  payload: string;
};

function* fetchAllProductsData(actions: ProductAction) {
  try {
    const response = yield call(axios.get, `https://fakestoreapi.com/products`);

    yield put({ type: TYPES.GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
  } catch (err) {
    yield put({
      type: TYPES.GET_ALL_PRODUCTS_FAILURE,
      payload: { error: err },
    });
  }
}

function* fetchProductData(actions: ProductAction) {
  try {
    const response = yield call(
      axios.get,
      `https://fakestoreapi.com/products/${actions.payload}`
    );

    yield put({ type: TYPES.GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (err) {
    yield put({
      type: TYPES.GET_ALL_PRODUCTS_FAILURE,
      payload: { error: err },
    });
  }
}

export default function* productSaga() {
  yield takeLatest(TYPES.GET_ALL_PRODUCTS, fetchAllProductsData);
  yield takeLatest(TYPES.GET_PRODUCT, fetchProductData);
}
