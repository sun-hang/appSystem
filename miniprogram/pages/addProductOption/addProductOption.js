// miniprogram/pages/addPorductOption/addPorductOption.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionPropLength: 0,
    propList: [], //规格对象数组
    error: ""
  },

  click() {
    const event = this.getOpenerEventChannel();
    event.emit('data', {
      data: 1
    })
  },

  /**
   * 添加一条规格属性
   */
  addProp() {
    if (this.data.optionPropLength >= 2) {
      return;
    }
    let propList = this.data.propList;
    propList[propList.length] = {
      name: "",
      child: []
    }
    this.setData({
      optionPropLength: this.data.optionPropLength + 1,
      propList
    })
  },

  /**
   * 删除一条规格属性的点击事件
   * @param {*} e 
   */
  propDelClick(e) {
    let index = e.currentTarget.dataset.item;
    let propList = this.data.propList;
    propList.splice(index, 1)
    this.setData({
      optionPropLength: this.data.optionPropLength - 1,
      propList
    })
  },

  /**
   * 规格信息变化触发的事件
   * @param {*} e 
   */
  change(e) {
    console.log(e)
    let data = e.detail;
    let propList = this.data.propList;
    propList[data.i] = {
      name: data.name,
      child: data.child
    }
    this.setData({
      propList
    })
  },

  /**
   * 确认属性填写完成按钮
   * @param {*} e 
   */
  confirmPropClick(e) {
    let propList = this.data.propList;
    console.log((!verificationPropList.call(this, propList)))
    if ((!verificationPropList.call(this, propList))) {
      console.log('没通过')
      return
    }
    console.log('验证通过')
  },

  /**
   * 错误信息隐藏事件
   * @param {*} e 
   */
  errorHide(e) {
    this.setData({
      error: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

/**
 * 验证规格属性是否正确
 * @param {Array} propList 
 */
function verificationPropList(propList) {
  if (propList.length === 0) {
    this.setData({
      error: '您为填写任何信息'
    })
    return false;
  }
  for (let i = 0; i < propList.length; i++) {
    const item = propList[i];
    if (!item.name) {
      this.setData({
        error: `规格信息的${i + 1}条的规格名称未填写`
      })
      return false;
    }
    if (item.child.length === 0) {
      this.setData({
        error: `规格信息的${i + 1}条的规格属性列表为空`
      })
      return false;
    }
    for (let j = 0; j < item.child.length; j++) {
      if (!item.child[j]) {
        this.setData({
          error: `规格信息的${i + 1}条的规格属性列表的第${j + 1}条属性未填写`
        })
        return false;
      }
    }
  }
  return true;
}

/**
 * 获取规格详情数组
 * @param {Array} propList 
 */
function getPropDetailList(propList) {
  if (propList.length === 0) {
    return []
  }
  let arr = [];
  if (propList.length === 1) {
    propList[0].child.forEach(item => {
      arr.push({
        type: item,
        price: 0,
        total: 0
      })
    })
    return arr;
  }
  for (let i = 0; i < propList.length; i++) {
    const item = propList[i];

  }
}