// miniprogram/pages/tag/tag.js
const api = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideButtons: [{
      type: 'warn',
      text: '删除'
    }],
    originTags: [],
    childList: [],
    currentTag: '',
    currentIndex: 0
  },

  /**
   * 
   * @param {*} e 
   */
  tagItemClose(e) {
    let that = this;
    console.log(e)
    wx.showModal({
      title: "提示",
      content: "确认删除此标签吗",
      success(res) {
        if (res.confirm) {
          let childIndex = e.detail;
          let childList = that.data.childList;
          childList.splice(childIndex, 1);
          let originTags = that.data.originTags;
          originTags[that.data.currentIndex].child = childList;
          that.setData({
            originTags,
            childList
          })
        }
      }
    })

  },

  /**
   * 左侧菜单切换事件
   * @param {*} e 
   */
  menuItemClick(e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.currentIndex == index) {
      return;
    }
    let childList = this.data.originTags[index].child;
    let currentTag = this.data.originTags[index].title;
    this.setData({
      childList,
      currentTag,
      currentIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getTags.call(this)
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

function getTags(index = 0) {
  api.getTagList((err, res) => {
    if (res) {
      this.setData({
        originTags: res.data,
        childList: res.data[index].child,
        currentTag: res.data[index].title
      })
    }
  })
}