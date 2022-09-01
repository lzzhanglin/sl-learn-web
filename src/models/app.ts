import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface AppModelState {
  name: string;
  userInfo: object;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  effects: {
    [key: string]: Effect;
  };
  reducers: {
    [key : string]: Reducer<AppModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription } | {};
}

const AppModel: AppModelType = {
  namespace: 'app',

  state: {
    name: '',
    userInfo: {},
  },

  effects: {
    *setUserInfo({ payload }, { call, put }) {
        yield put({
            type: 'putUserInfo',
            payload: payload
        });
    },
  },
  reducers: {
    putUserInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {

  },
};

export default AppModel;