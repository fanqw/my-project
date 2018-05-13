import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Card,
  // Tabs,
  Table,
  Radio,
  Spin,
  // DatePicker,
  // Tooltip,
  Menu,
  Dropdown,
} from 'antd';
import numeral from 'numeral';
import {
  // ChartCard,
  // yuan,
  // MiniArea,
  // MiniBar,
  // MiniProgress,
  // Field,
  // Bar,
  Pie,
  // TimelineChart,
} from 'components/Charts';
// import Trend from 'components/Trend';
import NumberInfo from 'components/NumberInfo';
// import { getTimeDistance } from '../../utils/utils';

import styles from './Analysis.less';

// const { TabPane } = Tabs;
// const { RangePicker } = DatePicker;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

@connect(({ chart,loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
export default class Analysis extends Component {
  state = {
    type: 'ageClassify',
    // currentTabKey: '',
    // rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    console.log("=====>willunmount",this.props.chart)
    this.props.dispatch({
      type: 'chart/fetch',
    });
  }

  componentWillUnmount() {
    console.log("=====>willunmount",this.props.chart)
    console.log("=====>this.props.chart.residentsData",this.props.chart.residentsData)
    console.log("=====>this.props.chart.residentsData && this.props.chart.residentsData.length !== 0",this.props.chart.residentsData && this.props.chart.residentsData.length !== 0)
    if(this.props.chart.residentsData && this.props.chart.residentsData.length !== 0){
      console.log("=====>this.props.chart.residentsData",this.props.chart.residentsData)
      localStorage.setItem('residentsData',JSON.stringify(this.props.chart.residentsData))
    }
    if(this.props.chart.ageClassify && this.props.chart.ageClassify.length !== 0){
      localStorage.setItem('ageClassify',JSON.stringify(this.props.chart.ageClassify))
    }
    if(this.props.chart.genderClassify && this.props.chart.genderClassify.length !== 0){
      localStorage.setItem('genderClassify',JSON.stringify(this.props.chart.genderClassify))
    }
    if(this.props.chart.groupClassify  && this.props.chart.groupClassify.length !== 0){
      localStorage.setItem('groupClassify',JSON.stringify(this.props.chart.groupClassify))
    }
    if(this.props.chart.incomeClassify && this.props.chart.incomeClassify.length !== 0){
      localStorage.setItem('incomeClassify',JSON.stringify(this.props.chart.incomeClassify))
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  handleChangetype = e => {
    this.setState({
      type: e.target.value,
    });
  };

  // handleTabChange = key => {
  //   this.setState({
  //     currentTabKey: key,
  //   });
  // };

  // handleRangePickerChange = rangePickerValue => {
  //   this.setState({
  //     rangePickerValue,
  //   });
//
  //   this.props.dispatch({
  //     type: 'chart/fetchSalesData',
  //   });
  // };

  // selectDate = type => {
  //   this.setState({
  //     rangePickerValue: getTimeDistance(type),
  //   });

  //   this.props.dispatch({
  //     type: 'chart/fetchSalesData',
  //   });
  // };

  // isActive(type) {
  //   const { rangePickerValue } = this.state;
  //   const value = getTimeDistance(type);
  //   if (!rangePickerValue[0] || !rangePickerValue[1]) {
  //     return;
  //   }
  //   if (
  //     rangePickerValue[0].isSame(value[0], 'day') &&
  //     rangePickerValue[1].isSame(value[1], 'day')
  //   ) {
  //     return styles.currentDate;
  //   }
  // }

  render() {
    // const { rangePickerValue, type, currentTabKey } = this.state;
    const { type} = this.state;
    const { chart, loading } = this.props;
    // console.log("this.props",this.props);
    // console.log("type",this.state.type);
    // const {
    //   // visitData,
    //   // visitData2,
    //   // salesData,
    //   ageClassify = [],
    //   // residentCount,
    //   // offlineData,
    //   // offlineChartData,
    //   genderClassify = [],
    //   incomeClassify = [],
    //   groupClassify = [],
    // } = chart;
//  console.log("============1", localStorage.getItem('residentsData') !== 'undefined');
//  console.log("============2", localStorage.getItem('residentsData'));
    const residentsData =  
    localStorage.getItem('residentsData') !== 'undefined'  && localStorage.getItem('genderClassify') !== null && localStorage.getItem('residentsData') !== '[]'
         ? JSON.parse(localStorage.getItem('residentsData'))
         :chart.residentsData 
          ?chart.residentsData 
          :[];
    const genderClassify =  
          localStorage.getItem('genderClassify') !== 'undefined' && localStorage.getItem('genderClassify') !== null && localStorage.getItem('genderClassify') !== '[]'
          ? JSON.parse(localStorage.getItem('genderClassify'))
          :chart.genderClassify 
            ?chart.genderClassify 
            :[];
    const ageClassify =  
          localStorage.getItem('ageClassify') !== 'undefined' && localStorage.getItem('ageClassify') !== null && localStorage.getItem('ageClassify') !== '[]'
          ? JSON.parse(localStorage.getItem('ageClassify'))
          :chart.ageClassify 
            ?chart.ageClassify 
            :[];
    const incomeClassify=  
          localStorage.getItem('incomeClassify') !== 'undefined' && localStorage.getItem('incomeClassify') !== null && localStorage.getItem('incomeClassify') !== '[]'
          ? JSON.parse(localStorage.getItem('incomeClassify'))
          :chart.incomeClassify 
            ?chart.incomeClassify 
            :[];
    const groupClassify=  
          localStorage.getItem('groupClassify') !== 'undefined' && localStorage.getItem('groupClassify') !== null && localStorage.getItem('groupClassify') !== '[]'
          ? JSON.parse(localStorage.getItem('groupClassify'))
          :chart.groupClassify 
            ?chart.groupClassify 
            :[];
    const salesPieData =
      type === 'genderClassify'
        ? genderClassify
        : type === 'ageClassify' ? ageClassify 
        : type === 'incomeClassify' ? incomeClassify
        : groupClassify;

      console.log("salespiedata",salesPieData)  
    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    );

    const iconGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis" />
        </Dropdown>
      </span>
    );

    // const salesExtra = (
    //   <div className={styles.salesExtraWrap}>
    //     <div className={styles.salesExtra}>
    //       <a className={this.isActive('today')} onClick={() => this.selectDate('today')}>
    //         今日
    //       </a>
    //       <a className={this.isActive('week')} onClick={() => this.selectDate('week')}>
    //         本周
    //       </a>
    //       <a className={this.isActive('month')} onClick={() => this.selectDate('month')}>
    //         本月
    //       </a>
    //       <a className={this.isActive('year')} onClick={() => this.selectDate('year')}>
    //         全年
    //       </a>
    //     </div>
    //     <RangePicker
    //       value={rangePickerValue}
    //       onChange={this.handleRangePickerChange}
    //       style={{ width: 256 }}
    //     />
    //   </div>
    // );

    const columns = [
      {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '分组',
        dataIndex: 'group',
        key: 'group',
      },
      {
        title: '户号',
        dataIndex: 'family_id',
        key: 'family_id',
        render: text => <a href="/">{text}</a>,
      },
      {
        title: '户主',
        dataIndex: 'master',
        key: 'master',
        // sorter: (a, b) => a.count - b.count,
        className: styles.alignRight,
      },
      {
        title: '家庭成员',
        dataIndex: 'family_count',
        key: 'family_count',
        render:(text) => (<span>{text}人</span>),align:"center",
        // sorter: (a, b) => a.family_count - b.family_count,
        // render: (text, record) => (
        //   <Trend flag={record.status === 1 ? 'down' : 'up'}>
        //     <span style={{ marginRight: 4 }}>{text}%</span>
        //   </Trend>
        // ),
        // align: 'right',
      },
    ];

    // const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);

    // const CustomTab = ({ data, currentTabKey: currentKey }) => (
    //   <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
    //     <Col span={12}>
    //       <NumberInfo
    //         title={data.name}
    //         subTitle="转化率"
    //         gap={2}
    //         total={`${data.cvr * 100}%`}
    //         theme={currentKey !== data.name && 'light'}
    //       />
    //     </Col>
    //     <Col span={12} style={{ paddingTop: 36 }}>
    //       <Pie
    //         animate={false}
    //         color={currentKey !== data.name && '#BDE4FF'}
    //         inner={0.55}
    //         tooltip={false}
    //         margin={[0, 0, 0, 0]}
    //         percent={data.cvr * 100}
    //         height={64}
    //       />
    //     </Col>
    //   </Row>
    // );

    // const topColResponsiveProps = {
    //   xs: 24,
    //   sm: 12,
    //   md: 12,
    //   lg: 12,
    //   xl: 6,
    //   style: { marginBottom: 24 },
    // };

    return (
      <Fragment>
        {/* <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="总销售额"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={() => <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />}
              footer={<Field label="日均销售额" value={`￥${numeral(12423).format('0,0')}`} />}
              contentHeight={46}
            >
              <Trend flag="up" style={{ marginRight: 16 }}>
                周同比<span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日环比<span className={styles.trendText}>11%</span>
              </Trend>
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="访问量"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(8846).format('0,0')}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
              contentHeight={46}
            >
              <MiniArea color="#975FE4" data={visitData} />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="支付笔数"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(6560).format('0,0')}
              footer={<Field label="转化率" value="60%" />}
              contentHeight={46}
            >
              <MiniBar data={visitData} />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="运营活动效果"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total="78%"
              footer={
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  <Trend flag="up" style={{ marginRight: 16 }}>
                    周同比<span className={styles.trendText}>12%</span>
                  </Trend>
                  <Trend flag="down">
                    日环比<span className={styles.trendText}>11%</span>
                  </Trend>
                </div>
              }
              contentHeight={46}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
            </ChartCard>
          </Col>
        </Row> */}

        {/* <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
          <div className={styles.salesCard}>
            <Tabs tabBarExtraContent={salesExtra} size="large" tabBarStyle={{ marginBottom: 24 }}>
              <TabPane tab="销售额" key="sales">
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar height={295} title="销售额趋势" data={salesData} />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                            <span>{item.title}</span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="访问量" key="views">
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar height={292} title="访问量趋势" data={salesData} />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                            <span>{item.title}</span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Card> */}
        {/* <Card style={{fontSize:'20px',textAlign:'center'}}>下范村居民人口分析</Card> */}
        <Row gutter={24}>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              // loading={loading}
              bordered={false}
              title="每户家庭成员数量排名"
              extra={iconGroup}
              style={{ marginTop: 24 }}
            >
              <Spin tip="数据正在加载中..." spinning={localStorage.getItem('residentsData') !== 'undefined' && localStorage.getItem('residentsData') !== null && localStorage.getItem('residentsData') !== '[]' ? false : loading} >
                <Row gutter={68}>
                  <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                    <NumberInfo
                      subTitle="总居民户数"
                      // {
                        // <span>
                        //   搜索用户数
                        //   <Tooltip title="指标文案">
                        //     <Icon style={{ marginLeft: 8 }} type="info-circle-o" />
                        //   </Tooltip> 
                        
                        // </span>
                      // }
                      gap={8}
                      total={residentsData && residentsData.length !== 0 ? numeral(residentsData.length).format('0') : ''}
                      // status="up"
                      // subTotal={17.1}
                    />
                    {/* <MiniArea line height={45} data={visitData2} /> */}
                  </Col>
                  <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                    <NumberInfo
                      subTitle="成员最多家庭"
                      // total={numeral(9007).format('0')}
                      total={residentsData && residentsData.length !== 0 ? residentsData[0]?residentsData[0].family_id:"" : ''}
                      // status="down"
                      // subTotal={26.2}
                      gap={8}
                    />
                    {/* <MiniArea line height={45} data={visitData2} /> */}
                  </Col>
                </Row>
                <Table
                  rowKey={record => record.index}
                  size="small"
                  columns={columns}
                  dataSource={residentsData}
                  pagination={{
                    style: { marginBottom: 0 },
                    pageSize: 5,
                  }}
                />
              </Spin>
            </Card>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              // loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="人口结构占比"
              bodyStyle={{ padding: 24 }}
              extra={
                <div className={styles.salesCardExtra}>
                  {iconGroup}
                  <div className={styles.salesTypeRadio}>
                    <Radio.Group value={type} onChange={this.handleChangetype}>
                      <Radio.Button value="genderClassify">性别</Radio.Button>
                      <Radio.Button value="ageClassify">年龄</Radio.Button>
                      <Radio.Button value="incomeClassify">收入</Radio.Button>
                      <Radio.Button value="groupClassify">分组</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              }
              style={{ marginTop: 24, minHeight: 509 }}
            >
              <h4 style={{ marginTop: 8, marginBottom: 32 }}>人口结构</h4>
              {/* {salesPieData.length !== 0 ? (  */}
              <Spin tip="数据正在加载..." spinning={localStorage.getItem(`${type}`) !== 'undefined' && localStorage.getItem(`${type}`) !== null && localStorage.getItem(`${type}`) !== '[]' ? false : loading} >
                <Pie
                  hasLegend
                  subTitle="人口结构"
                  type={type}
                  total={() => (
                    <span
                      dangerouslySetInnerHTML={{
                          __html:salesPieData ? numeral(salesPieData.reduce((pre, now) => now.y + pre, 0)).format('0') : "",
                        }}
                    />
                  )}
                  data={salesPieData}
                  valueFormat={val => <span dangerouslySetInnerHTML={{ __html: numeral(val).format('0') }} />}
                  height={248}
                  lineWidth={4}
                />
              </Spin>
              {/* ) : (
                  <span>暂无数据</span>
                )
              } */}
            </Card>
          </Col>
        </Row>

        {/* <Card
          loading={loading}
          className={styles.offlineCard}
          bordered={false}
          bodyStyle={{ padding: '0 0 32px 0' }}
          style={{ marginTop: 32 }}
        >
          <Tabs activeKey={activeKey} onChange={this.handleTabChange}>
            {offlineData.map(shop => (
              <TabPane tab={<CustomTab data={shop} currentTabKey={activeKey} />} key={shop.name}>
                <div style={{ padding: '0 24px' }}>
                  <TimelineChart
                    height={400}
                    data={offlineChartData}
                    titleMap={{ y1: '客流量', y2: '支付笔数' }}
                  />
                </div>
              </TabPane>
            ))}
          </Tabs>
        </Card> */}
      </Fragment>
    );
  }
}
