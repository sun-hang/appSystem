// components/home/productModel/productModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    record: {
      type: Object,
      value: {
        saleCount: 0, //销售中
        groundingCount: 0 //待上架
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
     * 销售中和待上架商品点击事件
     * @param {*} res 
     */
    itemClick(res) {
      wx.navigateTo({
        url: '../productList/productList?index=' + res.currentTarget.dataset.item
      })
    },
    /**
     * 添加商品事件
     */
    addClick() {
      wx.navigateTo({
        url: '../addProduct/addProduct',
      })
    }
  }
})