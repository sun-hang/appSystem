const src = 'https://www.fangmmmm.top:612/api/download/1.jpg'; //头像地址
const storeName = '小方小店的店铺后台'; //小程序名字
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src,
    storeName
  },

  /**
   * 每个菜单项点击事件
   * @param {*} e 
   */
  itemClick(e) {
    wx.showToast({
      title: '暂不支持该功能',
      icon: "error"
    })
  },

  /**
   * 店铺详情点击事件
   * @param {*} e 
   */
  detailClick(e) {
    wx.showToast({
      title: '页面还没写呢',
      icon:"error"
    })
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