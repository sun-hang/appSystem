// components/addProductOption/optionProp/optionProp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    propList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    propLength: 0,
    propList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击添加属性按钮触发的事件
     * @param {*} e 
     */
    addPropClick(e) {
      this.setData({
        propLength: this.data.propLength + 1
      })
    },
    /**
     * 删除一个属性的点击事件
     * @param {*} e 
     */
    deletePropClick(e) {
      let index = e.currentTarget.dataset.item;
      let propLength = this.data.propLength - 1;
      let propList = this.data.propList.splice(index, 1);
      this.setData({
        propLength,
        propList
      })
    },
    /**
     * 文本框文本变化事件
     * @param {*} e 
     */
    inputChange(e) {
      console.log(e)
      let index = e.currentTarget.dataset.item;
      let value = e.detail.value;
      let propList = this.data.propList;
      propList[index] = value.trim();
      this.setData({
        propList
      })
    }
  }
})