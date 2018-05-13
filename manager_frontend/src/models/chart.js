import { fakeChartData } from '../services/api';

export default {
  namespace: 'chart',

  state: {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    residentsData:[],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    genderClassify:[],
    ageClassify:[],
    incomeClassify:[],
    groupClassify:[],
    loading: false,
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchSalesData(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
        },
      });
    },
    // *fetchResidentsData(_,{ call , put}){
    //   const response = yield call(residentsData);
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       residentsData:response.residentsData,
    //     },
    //   });
    // },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {
        visitData: [],
        visitData2: [],
        salesData: [],
        searchData: [],
        offlineData: [],
        offlineChartData: [],
        salesTypeData: [],
        salesTypeDataOnline: [],
        salesTypeDataOffline: [],
        residentsData:[],
        genderClassify:[],
        ageClassify:[],
        incomeClassify:[],
        groupClassify:[],
        radarData: [],
      };
    },
  },
};
