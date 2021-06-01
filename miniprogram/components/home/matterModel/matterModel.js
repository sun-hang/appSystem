// components/home/matterModel/matterModel.js
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
    current: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(res) {
      this.setData({
        current: res.detail.current + 1
      })
    }
  }
})
