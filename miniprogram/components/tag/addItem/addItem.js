// components/tag/addItem/addItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindconfirm(e) {
      let value = e.detail.value;
      this.triggerEvent('done', value);
      this.setData({
        isShow: false
      })
    },
    bindblur() {
      this.setData({
        isShow: false
      })
    },
    bindtap() {
      this.setData({
        isShow: true
      })
    }
  }
})
