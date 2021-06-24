const api = require('../../utils/api')
// let path = 'http://127.0.0.1:529/';
const PATH = 'http://kf3.xyz/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [], //图片上传列表图片地址
    imgs: [], //上传后返回的地址
    titleValue: '', // 商品标题文本
    isFocu: false, //商品标题文本域是否聚焦
    titleMaxLength: 30, //标题最大字数
    detailMaxLength: 220, //商品详情最大字数
    detailValue: '', //商品详情的文本
    detailIsFocu: false, //商品详情文本域是否聚焦
    multiArray: [], //标签选择器的显示文本数据
    tagList: [], //请求返回的全部标签内容
    selectTags: [], //选中的标签内容可以时多个
    priceValue: "", //商品价格
    originPriceValue: "", //商品原价
    stockValue: '', //商品库存
    productOption: [], //商品规格信息
    productOptionDetail: [], // 商品规格详情
    productState: false, //是否上架
    error: "", //错误提示消息
    detailIsShow: false //详情文本域是否显示
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
          return PATH + item;
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
   * 标签选择器列变换事件
   * @param {*} e 
   */
  selectTagColumnchange(e) {
    if (e.detail.column == 0) {
      let index = e.detail.value;
      let multiArray = this.data.multiArray;
      multiArray[1] = this.data.tagList[index].child;
      this.setData({
        multiArray
      })
    }
  },

  /**
   * 标签选择器值变换事件
   * @param {*} e 
   */
  selectTagValueChange(e) {
    let titleIndex = e.detail.value[0];
    let childIndex = e.detail.value[1];
    let tag = this.data.tagList[titleIndex].child[childIndex];
    this.setData({
      selectTags: [...new Set([...this.data.selectTags, tag])]
    })
  },

  /**
   * 选中标签取消事件
   * @param {*} e 
   */
  tagCloseClick(e) {
    let index = e.detail;
    let selectTags = this.data.selectTags;
    selectTags.splice(index, 1);
    this.setData({
      selectTags
    })
  },

  /**
   * 商品是否上架状态改变事件
   * @param {*} e 
   */
  stateChange(e) {
    this.setData({
      productState: e.detail.value
    })
  },

  /**
   * 错误消息提示隐藏事件
   * @param {*} e 
   */
  msgHide(e) {
    this.setData({
      error: ""
    })
  },

  /**
   * 添加按钮点击事件
   * @param {*} e 
   */
  addClick(e) {
    if (!this.data.detailValue) {
      this.setData({
        error: "商品详情为空"
      })
    }
  },

  /**
   *  @param {*} e 
   * 修改按钮点击事件
   */
  setClick(e) {

  },

  /**
   * 添加商品规格按钮点击事件
   * @param {*} e 
   */
  optionClick(e) {
    const that = this;
    wx.navigateTo({
      url: '../addProductOption/addProductOption',
      events: {
        data(data) {
          that.setData({
            productOption: data.propList,
            productOptionDetail: data.propDetailList
          })
        }
      },
      success(res) {
        res.eventChannel.emit('data', {
          propDetailList: that.data.productOptionDetail,
          propList: that.data.productOption
        })
      }
    })
  },

  /**
   * 添加商品详情事件
   * @param {*} e 
   */
  addDetailClick(e) {
    this.setData({
      detailIsShow: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let item = options.item;
    /**
     * 如果传值的话进行修改
     */
    if (item && item._id) {
      this.setData({
        files: item.imgs.map(item => PATH + item), //图片上传列表图片地址
        imgs: item.imgs, //上传后返回的地址
        titleValue: item.productName, // 商品标题文本
        detailValue: item.detail, //商品详情的文本
        selectTags: item.tag.split(','), //选中的标签内容可以时多个
        priceValue: item.currentPric, //商品价格
        originPriceValue: item.originPric, //商品原价
        stockValue: item.stock, //商品库存
        productOption: item.options, //商品规格信息
        productOptionDetail: item.optionsDetail, // 商品规格详情
        productState: Boolean(item.state), //是否上架
        detailIsShow: Boolean(item.detail), //详情文本域是否显示
        selectFile: this.selectFile.bind(this),
        uplaodFile: this.uplaodFile.bind(this)
      })
    } else {
      this.setData({
        selectFile: this.selectFile.bind(this),
        uplaodFile: this.uplaodFile.bind(this)
      })
    }

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
    api.getTagList((err, res) => {
      if (res.data) {
        let tagTitle = [];
        let tagChild = [...res.data[0].child];
        res.data.forEach(item => {
          tagTitle.push(item.title);
        })

        this.setData({
          tagList: res.data,
          multiArray: [tagTitle, tagChild]
        })
      }
    })
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