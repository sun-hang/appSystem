// components/public/tagItem/tagItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: {
      type: String,
      value: ""
    },
    index: {
      type: Number
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
    closeClick() {
      this.triggerEvent('close', this.data.index)
    }
  }
})