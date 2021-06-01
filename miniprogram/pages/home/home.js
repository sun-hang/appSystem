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
    navigationBackground: "#FD6F57",
    matter: [{ title: "重要事项1", content: "forever是一个nodejs守护进程" }, { title: "重要事项2", content: "完全由命令行操控。" }],   //重要事项数据
    order: {
      unpaidCount: 0, //待付款总数
      deliveryCount: 0  //待发货总数
    },   //订单模块数据
    data: {   //数据模块数据
      today: {
        priceCount: 0,  //支付金额
        orderCount: 0,   //订单数
        personCount: 0    //访问数
      },
      yesterday: {
        priceCount: 0,  //支付金额
        orderCount: 0,   //订单数
        personCount: 0    //访问数
      }
    },
    product: {
      saleCount: 0,   //销售中
      groundingCount: 0   //待上架
    },   //商品模块数据
    marketing: [{ text: "优惠卷", src: "pages/home/home" }, { text: "限时抢购", src: "pages/home/home" }, { text: "拼手气礼券", src: "pages/home/home" }],    //营销模块数据
    commerce: [{ text: "我要带货", src: "pages/home/home" }, { text: "带货中心", src: "pages/home/home" }],    //带货模块
    business: [{ text: "微信学堂", src: "pages/home/home" }, { text: "常见问题", src: "pages/home/home" }, { text: "商家社区", src: "pages/home/home" }]    //商家成长模块
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
      path: "pages/home/home",
      envVersion: "trial"
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