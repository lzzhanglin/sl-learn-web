import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface AppModelState {
  name: string;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<AppModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const AppModel: AppModelType = {
  namespace: 'app',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {
        yield put({
            type: 'save',
            payload: payload
        });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default AppModel;