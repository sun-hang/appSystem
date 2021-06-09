// components/public/NavMenu/NavMenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    contentList: {
      type: Array,
      value: []
    },
    index: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    i: 0
  },
  observers: {
    index(i) {
      this.setData({
        i
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeFun(e) {
      let i = e.currentTarget.dataset.item;
      // this.setData({
      //   i
      // })
      this.triggerEvent('changeTag', { i, tag: this.data.contentList[i] })
    }
  }
})
