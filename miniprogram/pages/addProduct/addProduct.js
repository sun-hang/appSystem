const api = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    imgs: [],
    titleValue: '',
    isFocu: false,
    titleMaxLength: 30,
    detailMaxLength: 220,
    detailValue: '',
    detailIsFocu: false
  },

  /**
   * 图片上传失败事件
   * @param {*} e 
   */
  uploadError(e) {
    console.log('图片上传失败函数')
    let msg = '';
    if (e.detail.type == 1) {
      msg = '图片超过大小限制';
    } else if (e.detail.type == 2) {
      msg = '选择图片失败';
    } else if (e.detail.type == 3) {
      msg = '图片上传失败'
    }
    wx.showToast({
      title: msg,
      icon: "none"
    })
  },

  /**
   * 图片上传成功事件
   * @param {*} e 
   */
  uploadSuccess(e) {
    console.log(e, '上传成功函数')
  },

  /**
   * 图片删除事件
   * @param {*} e 
   */
  binddelete(e) {
    let index = e.detail.index;
    let arr = this.data.imgs.splice(index, 1);
    this.setData({
      imgs: arr
    })
    wx.showToast({
      title: '移除成功',
      icon: 'none'
    })
  },

  /**
   * 选择图片时的过滤函数，返回true表示图片有效
   * @param {*} e 
   */
  selectFile(e) {
    console.log('图片筛选处理函数执行')
    return true
  },

  /**
   * 图片选择触发的事件
   * @param {*} e 
   */
  bindselect(e) {
    console.log(e, '图片选择触发事件')
  },
  /**
   * 图片上传函数
   * @param {*} e 
   */
  uplaodFile(e) {
    console.log(e, '图片上传函数')
    return new Promise((res, rej) => {
      let urls = {
        urls: e.tempFilePaths
      }
      api.uploadImg(e.tempFilePaths, (data) => {
        this.setData({
          imgs: data
        })
        data = data.map(item => {
          // let path = 'http://127.0.0.1:529/';
          let path = 'http://kf3.xyz/';
          return path + item;
        })
        res({
          urls: data
        });
      });

    })
  },

  /**
   * 标题文本域聚焦事件
   * @param {*} e 
   */
  titleFocus(e) {
    if (e.currentTarget.dataset.name === 'title') {
      this.setData({
        isFocu: true
      })
    } else if (e.currentTarget.dataset.name === 'detail') {
      this.setData({
        detailIsFocu: true
      })
    }
  },

  /**
   * 文本域失去焦点事件
   * @param {*} e 
   */
  titleBlur(e) {
    if (e.currentTarget.dataset.name === 'title') {
      this.setData({
        isFocu: false
      })
    } else if (e.currentTarget.dataset.name === 'detail') {
      this.setData({
        detailIsFocu: false
      })
    }
  },

  /**
   * 文本域内容变换事件
   * @param {*} e 
   */
  titleInputChange(e) {
    let value = e.detail.value.trim();
    if (e.currentTarget.dataset.name === 'title') {
      value = value.substr(0, this.data.titleMaxLength);
      this.setData({
        titleValue: value
      })
    } else if (e.currentTarget.dataset.name === 'detail') {
      value = value.substr(0, this.data.detailMaxLength);
      this.setData({
        detailValue: value
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
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