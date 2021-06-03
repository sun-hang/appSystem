// components/func/itemCard/itemCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {}
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
    itemClick(e) {
      let i = e.currentTarget.dataset.item;
      if (this.data.data.childs[i].page) {
        wx.navigateTo({
          url: this.data.data.childs[i].page,
        })
      } else {
        wx.showToast({
          title: '暂未开始该功能',
          icon: "error"
        })
      }
    }
  }
})