// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animated: false,
    navigationShow: true,
    navigationLoading: false,
    navigationColor: "#FFEFEC",
    navigationBackground: "#FD6F57"
  },
  /**
   * 点击分享店铺按钮触发的事件的处理函数
   * @param {*} e 
   */
  shareClick(e) {
    wx.previewImage({
      urls: ["http://kf3.xyz/beg_qr_code.jpg"],
    })
  },

  goShopClick() {
    wx.navigateToMiniProgram({
      appId: 'wxa8a1f070e1c71a94',
      path:"pages/home/home",
      envVersion:"trial",
      success(){
        console.log('跳转成功')
      },
      fail(err){
        console.log("跳转失败",err)
      }
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
    wx.createIntersectionObserver().relativeToViewport({
      top: -50
    }).observe('.home_title_box', res => {
      if (res.intersectionRatio === 0) {
        this.setData({
          navigationShow: true
        })
      } else {
        this.setData({
          navigationShow: false
        })
      }
    })
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

  },
  onPageScroll(res) {

  }
})