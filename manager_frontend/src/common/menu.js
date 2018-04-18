import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '居民信息统计',
    icon: 'line-chart',
    path: 'dashboard',
    children: [
      {
        name: '居民人口结构',
        path: 'analysis',
      },
      {
        name: '居民人口变化',
        path: 'monitor',
      },
      // {
      //   name: '迁入迁出分析',
      //   path: 'workplace',
      //   // hideInBreadcrumb: true,
      //   // hideInMenu: true,
      // },
    ],
  },
  {
    name: '居民户籍管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '户籍信息登记',
        path: 'basic-form',
      },
    //   {
    //     name: '分步表单',
    //     path: 'step-form',
    //   },
      // {
      //   name: '贫困户信息登记',
      //   authority: 'admin',
      //   path: 'advanced-form',
      // },
      {
        name: '户籍信息查询',
        path: 'table-list',
      },
      // {
      //   name: '户籍档案列表',
      //   path: 'basic-list',
      // },
    ],
  },
  {
    name: '扶贫工作',
    icon: 'team',
    path: 'list',
    children: [
      {
        name: '贫困户信息登记',
        path: 'basic-form',
      },
      {
        name: '贫困户信息查询',
        path: 'table-list',
      },
      // {
      //   name: '贫困户档案列表',
      //   path: 'basic-list',
      // },
      // {
      //   name: '卡片列表',
      //   path: 'card-list',
      // },
      {
        name: '贫困户收支统计',
        path: 'search',
        // children: [
        //   {
        //     name: '搜索户号',
        //     path: 'articles',
        //   },
        //   {
        //     name: '搜索',
        //     path: 'projects',
        //   },
        //   {
        //     name: '搜索列表（应用）',
        //     path: 'applications',
        //   },
        // ],
      },
    ],
  },
   {
    name: '政策宣传',
    icon: 'notification',
    path: 'profile',
    children: [
      {
        name: '政策列表',
        path: 'basic',
      },
      {
        name: '政策通知',
        path: 'advanced',
        authority: 'admin',
      },
    ],
  },
  // {
  //   name: '详情页',
  //   icon: 'profile',
  //   path: 'profile',
  //   children: [
  //     {
  //       name: '基础详情页',
  //       path: 'basic',
  //     },
  //     {
  //       name: '高级详情页',
  //       path: 'advanced',
  //       authority: 'admin',
  //     },
  //   ],
  // },
  // {
  //   name: '结果页',
  //   icon: 'check-circle-o',
  //   path: 'result',
  //   children: [
  //     {
  //       name: '成功',
  //       path: 'success',
  //     },
  //     {
  //       name: '失败',
  //       path: 'fail',
  //     },
  //   ],
  // },
  // {
  //   name: '异常页',
  //   icon: 'warning',
  //   path: 'exception',
  //   children: [
  //     {
  //       name: '403',
  //       path: '403',
  //     },
  //     {
  //       name: '404',
  //       path: '404',
  //     },
  //     {
  //       name: '500',
  //       path: '500',
  //     },
  //     {
  //       name: '触发异常',
  //       path: 'trigger',
  //       hideInMenu: true,
  //     },
  //   ],
  // },
  // {
  //   name: '账户',
  //   icon: 'user',
  //   path: 'user',
  //   authority: 'guest',
  //   children: [
  //     {
  //       name: '登录',
  //       path: 'login',
  //     },
  //     {
  //       name: '注册',
  //       path: 'register',
  //     },
  //     {
  //       name: '注册结果',
  //       path: 'register-result',
  //     },
  //   ],
  // },
  {
    name: '个人中心',
    icon: 'home',
    path: 'dashboard/workplace',
  },
  {
    name: '乡村信息',
    icon: 'profile',
    path: 'dashboard/workplace',
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
