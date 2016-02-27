import appReducer from 'reducers/appReducer';
import configureStore from "stores/configureStore";

const appStore = configureStore(appReducer);
export default appStore;