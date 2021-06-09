const titleMenu = [
  '上架销售中',
  '待上架',
  '已下架'
];

const systemInfo = wx.getSystemInfoSync();
const navHeight = systemInfo.system.indexOf('iOS') > -1 ? 44 + systemInfo.statusBarHeight : 48 + systemInfo.statusBarHeight;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    titleMenu,
    navHeight
  },


  /**
   * 搜索框点击事件
   */
  searchClick() {
    wx.navigateTo({
      url: '../productManagement/productManagement',
    })
  },

  /**
   * 头部菜单切换事件
   * @param {*} e 
   */
  changeTag(e) {
    this.setData({
      index: e.detail.i
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.index) {
      this.setData({
        index: +options.index
      })
    }
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