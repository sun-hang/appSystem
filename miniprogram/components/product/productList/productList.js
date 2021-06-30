// components/product/productList/productList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: []
  },
  observers: {
    productList(list) {
      this.setData({
        list
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})