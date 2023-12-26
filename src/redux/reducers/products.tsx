import * as TYPES from "../actions/types";

interface State {
  allProductsData?: null | undefined | any[];
  isDataLoading?: boolean;
  selectedProductData?: null | undefined | any[];
  isSelectedProductLoading?: boolean;
}

type TaskAction = { type: string; payload: any };

const initialState = {
  allProductsData: [],
  isAllProductsLoading: false,
  selectedProductData: [],
  isSelectedProductLoading: false,
};

const productReducer = (state: State = initialState, action: TaskAction) => {
  switch (action.type) {
    case TYPES.GET_ALL_PRODUCTS:
      return {
        ...state,
        isAllProductsLoading: true,
      };
    case TYPES.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProductsData: action.payload,
        isAllProductsLoading: false,
      };
    case TYPES.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        allProductsData: [],
        isAllProductsLoading: false,
      };
    case TYPES.GET_PRODUCT:
      return {
        ...state,
        isSelectedProductLoading: true,
      };
    case TYPES.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProductData: action.payload,
        isSelectedProductLoading: false,
      };
    case TYPES.GET_PRODUCT_FAILURE:
      return {
        ...state,
        selectedProductData: [],
        isSelectedProductLoading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
