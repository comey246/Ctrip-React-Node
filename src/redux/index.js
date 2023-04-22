import { legacy_createStore as createStore,applyMiddleware,combineReducers  } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "@/redux/global/reducer.js";
import menu from "@/redux/menu/reducer.js";
import mall from "@/redux/mall/reducer.js";
import auth from "@/redux/auth/reducer.js";

// 创建reducer(拆分reducer)
const reducer = combineReducers({
	global,
	menu,
	mall,
	auth
});

// redux 持久化配置
const persistConfig = {
	key: "redux-state",
	storage: storage
};
const persistReducerConfig = persistReducer(persistConfig, reducer);


// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建 store
const store = createStore(persistReducerConfig, middleWares);

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };