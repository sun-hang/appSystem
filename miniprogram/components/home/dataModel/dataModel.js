// components/home/dataModel/dataModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    record: {
      type: Object,
      value: {   //数据模块数据
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

  }
})
