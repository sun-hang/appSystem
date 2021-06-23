// miniprogram/pages/addPorductOption/addPorductOption.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionPropLength: 0,
    propList: [] //规格对象数组
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
    this.setData({
      optionPropLength: this.data.optionPropLength + 1
    })
  },

  /**
   * 删除一条规格属性的点击事件
   * @param {*} e 
   */
  propDelClick(e) {
    let index = e.currentTarget.dataset.item;
    let propList = this.data.propList.splice(index, 1);
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