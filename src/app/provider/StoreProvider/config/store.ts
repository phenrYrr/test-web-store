import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { goodsApi } from 'shared/api/api';
import { CombinedState, Reducer } from 'redux';
import { productReducer } from 'entities/Product/model/slice/productSlice';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { MainPageReducer } from 'pages/MainPage/model/slice/MainPageSlice';
import { CartReducer } from 'features/Cart/model/slice/CartSlice';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        product: productReducer,
        MainPage: MainPageReducer,
        Cart: CartReducer,
        [goodsApi.reducerPath]: goodsApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: goodsApi,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(goodsApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
