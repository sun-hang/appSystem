// components/home/marketingModel/marketingModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    contentList: {
      type: Array,
      value: []
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
    click(e) {
      wx.showToast({
        title: '目前还未开启此功能',
        icon: "none"
      })
    }
  }
})
