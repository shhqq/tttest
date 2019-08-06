// pages/我的/me/TTRecipePage.js

import { $startWuxRefresher, $stopWuxRefresher, $stopWuxLoader } from '../../dist/index'

var testData = require('../../Data/TestData.js');

let list = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }, { name: '7' }, { name: '8' }, { name: '9' }, { name: '10' }, { name: '11' }, { name: '12' }, { name: '13' }, { name: '14' }, { name: '15' }, { name: '16' }, { name: '17' }, { name: '18' }, { name: '19' }, { name: '20' }, { name: '21' }, { name: '22' }, { name: '23' }, { name: '24' }, { name: '25' }, { name: '26' }, { name: '27' }, { name: '28' }, { name: '29' }, { name: '30' }, { name: '31' }, { name: '32' }, { name: '33' }, { name: '34' }, { name: '35' }]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    size: 10,
    loading: false,
    allloaded: false,
    list: [],

    current: 'tab1',
    tabs: [
      {
        key: 'tab1',
        title: '周一',
        content: 'Content of tab 1',
      },
      {
        key: 'tab2',
        title: '周二',
        content: 'Content of tab 2',
      },
      {
        key: 'tab3',
        title: '周三',
        content: 'Content of tab 3',
      },
      {
        key: 'tab4',
        title: '周四',
        content: 'Content of tab 2',
      },
      {
        key: 'tab5',
        title: '周五',
        content: 'Content of tab 2',
      },
      {
        key: 'tab6',
        title: '周六',
        content: 'Content of tab 2',
      },
      {
        key: 'tab7',
        title: '周日',
        content: 'Content of tab 2',
      }
    ],
  },

  // 加载更多
  loadmore({
    detail
  }) {
    this.getList().then(res => {
      detail.success();
    });
  },
  // 刷新
  refresh({
    detail
  }) {
    this.setData({
      list: [],
      loading: false,
      allloaded: false,
      page: 0
    })
    this.getList().then(res => {
      detail.success();
    });
  },

  getList() {
    return new Promise((resolve, reject) => {
      if (this.data.loading || this.data.allloaded) {
        resolve();
        return;
      }
      this.setData({
        loading: true
      })
      setTimeout(() => {
        let resData = [].concat(JSON.parse(JSON.stringify(list)));
        let addList = resData.slice(this.data.size * this.data.page, (this.data.page + 1) * this.data.size);
        let newList = this.data.list.concat(addList)
        if (addList.length < this.data.size) {
          this.setData({
            allloaded: true
          })
        }
        this.setData({
          list: newList,
          loading: false,
          page: this.data.page + 1
        })
        resolve();
      }, 500)
    })
  },


  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
  onTabsChange(e) {
    console.log('onTabsChange', e)
    const { key } = e.detail
    const index = this.data.tabs.map((n) => n.key).indexOf(key)

    this.setData({
      key,
      index,
    })
  },
  onSwiperChange(e) {
    console.log('onSwiperChange', e)
    const { current: index, source } = e.detail
    const { key } = this.data.tabs[index]

    if (!!source) {
      this.setData({
        key,
        index,
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})