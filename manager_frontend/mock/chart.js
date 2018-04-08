import moment from 'moment';

// mock data
const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [
  {
    index:1,
    family_code:9007,
    master:'范文来',
    group:'12人，8男，4女',
  },
  {
    index:2,
    family_code:9061,
    master:'范灿辉',
    group:'12人，7男，5女',
  },{
    index:3,
    family_code:9054,
    master:'范俊伟',
    group:'11人，6男，5女',
  },{
    index:4,
    family_code:9115,
    master:'范天来',
    group:'10人，5男，5女',
  },{
    index:5,
    family_code:9401,
    master:'范国辉',
    group:'10人，4男，6女',
  },{
    index:6,
    family_code:9367,
    master:'范党辉',
    group:'8人，5男，3女',
  },{
    index:7,
    family_code:9358,
    master:'范军武',
    group:'7人，3男，4女',
  },{
    index:8,
    family_code:9211,
    master:'范灿伟',
    group:'6人，4男，2女',
  },{
    index:9,
    family_code:9203,
    master:'范利民',
    group:'6人，3男，3女',
  },{
    index:10,
    family_code:9107,
    master:'范孟子',
    group:'6人，3男，3女',
  },{
    index:11,
    family_code:9112,
    master:'范喜庆',
    group:'6人，2男，4女',
  },{
    index:12,
    family_code:9343,
    master:'范仁和',
    group:'5人，3男，2女',
  },{
    index:13,
    family_code:9205,
    master:'范振武',
    group:'5人，3男，2女',
  },{
    index:14,
    family_code:9192,
    master:'范伊川',
    group:'4人，2男，2女',
  },{
    index:15,
    family_code:9166,
    master:'范振立',
    group:'3人，2男，1女',
  },{
    index:16,
    family_code:9271,
    master:'范飞飞',
    group:'3人，1男，2女',
  },{
    index:17,
    family_code:9166,
    master:'范灿科',
    group:'2人，1男，1女',
  },{
    index:18,
    family_code:9099,
    master:'范武军',
    group:'2人，1男，1女',
  },
];
// for (let i = 0; i < 432; i += 1) {
//   searchData.push({
//     index: i + 1,
//     keyword: 9000+Math.round(Math.random()*100),
//     count: Math.floor(Math.random() * 1000),
//     range: `${Math.round(Math.random() * 10)+Math.round(Math.random() * 10)}人，${Math.round(Math.random() * 10)}男，${Math.round(Math.random() * 10)}女`,
//     // status: Math.floor((Math.random() * 10) % 2),
//   });
// }
const salesTypeData = [
  {
    x: '男',
    y: 1054,
  },
  {
    x: '女',
    y: 988,
  },
];

const salesTypeDataOnline = [
  {
    x: '0-10岁',
    y: 101,
  },
  {
    x: '11-20岁',
    y: 403,
  },
  {
    x: '21-30岁',
    y: 585,
  },
  {
    x: '31-40岁',
    y: 372,
  },
  {
    x: '41-50岁',
    y: 255,
  },
  {
    x: '51-60岁',
    y: 180,
  },
  {
    x: '61-70岁',
    y: 98,
  }, {
    x: '71-80岁',
    y: 35,
  }, {
    x: '81-90岁',
    y: 11,
  }, {
    x: '>90岁',
    y: 2,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '个护健康',
    y: 188,
  },
  {
    x: '服饰箱包',
    y: 344,
  },
  {
    x: '母婴产品',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `门店${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

//
const radarData = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

export const getFakeChartData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

export default {
  getFakeChartData,
};
