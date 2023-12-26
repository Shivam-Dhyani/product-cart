import * as TYPES from "./types";

interface Action<T = unknown> {
  type: string;
  payload?: T;
}

export function getAllProducts<T>(data: T): Action<T> {
  return { type: TYPES.GET_ALL_PRODUCTS, payload: data };
}

export function getAllProductsSuccess<T>(data: T): Action<T> {
  return { type: TYPES.GET_ALL_PRODUCTS_SUCCESS, payload: data };
}

export function getAllProductsFailure<T>(data: T): Action<T> {
  return { type: TYPES.GET_ALL_PRODUCTS_FAILURE, payload: data };
}

export function getProduct<T>(data: T): Action<T> {
  return { type: TYPES.GET_PRODUCT, payload: data };
}

export function getProductSuccess<T>(data: T): Action<T> {
  return { type: TYPES.GET_PRODUCT_SUCCESS, payload: data };
}

export function getProductFailure<T>(data: T): Action<T> {
  return { type: TYPES.GET_PRODUCT_FAILURE, payload: data };
}
