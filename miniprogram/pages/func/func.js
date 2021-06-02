/**
 * 基础功能
 */
const basics = {
  title: "基础功能",
  childs: [{
    text: "新增商品",
    class: "icon-xinzeng",
    color: "#E26954",
    page: "pages/addProduct/addProduct"
  },
  {
    text: "商品列表",
    class: "icon-gouwudai",
    color: "#EC6A5A",
    page: "pages/productList/productList"
  },
  {
    text: "订单管理",
    class: "icon-dingdan",
    color: "#20A1D8",
    page: "pages/orderList/orderList"
  },
  {
    text: "配送管理",
    class: "icon--_peisongshang",
    color: "#22AAE8"
  },
  {
    text: "地址管理",
    class: "icon-dizhi",
    color: "#25AAE5"
  },
  {
    text: "售后处理",
    class: "icon-shouhoutuikuan",
    color: "#DF9C58"
  },
  {
    text: "客服设置",
    class: "icon-kefu",
    color: "#29AD74"
  },
  {
    text: "店铺数据",
    class: "icon-tubiao-",
    color: "#EF665C"
  }
  ]
}

/**
 * 店铺管理
 */
const shop = {
  title: "店铺管理",
  childs: [{
    text: "店铺群",
    class: "icon-yonghu",
    color: "#729C84"
  },
  {
    text: "商品置顶",
    class: "icon-liebiao",
    color: "#E25F64"
  }
  ]
}

/**
 * 营销工具
 */
const marketing = {
  title: "营销工具",
  childs: [{
    text: "优惠卷",
    class: "icon-youhuiquan",
    color: "#EB6E5C"
  },
  {
    text: "限时抢购",
    class: "icon-xianshiqianggou",
    color: "#EB6E5C"
  },
  {
    text: "拼手气礼券",
    class: "icon-liquanjiangpin",
    color: "#EB6E5C"
  },
  {
    text: "拼团购",
    class: "icon-pintuangou",
    color: "#EB6E5C"
  },
  {
    text: "店铺直播",
    class: "icon-luyin",
    color: "#EB6E5C"
  }]
}

/**
 * 平台服务
 */
const platform = {
  title: "平台服务",
  childs: [{
    text: "运费险",
    class: "icon-yunfei",
    color: "#DFA553"
  }]
}

/**
 * 第三方服务
 */
const third = {
  title: "第三方服务",
  childs: [{
    text: "服务市场",
    class: "icon-shichang",
    color: "#19B56E"
  },
  {
    text: "服务管理",
    class: "icon-chajian",
    color: "#1DAC6C"
  }]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    basics,
    shop,
    marketing,
    platform,
    third
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