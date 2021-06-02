// components/home/orderModel/orderModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    record: {
      type: Object,
      value: {
        unpaidCount: 0, //待付款总数
        deliveryCount: 0 //待发货总数
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 按钮点击事件
     * @param {*} e 
     */
    itemClick(e) {
      wx.navigateTo({
        url: '../orderList/orderList?index=' + e.currentTarget.dataset.item
      })
    }
  }
})