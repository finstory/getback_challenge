//$ GENERATE IMPORT REDUCERS
import { productsReducer } from "../../services/useProductsServices";

//$

const reducers = {};

//$ GENERATE ADD REDUCERS TO INITIAL STATE
reducers.products = productsReducer;

//$

export default reducers;