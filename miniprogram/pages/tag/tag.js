// miniprogram/pages/tag/tag.js
const api = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideButtons: [{
      type: 'warn',
      text: '删除'
    }],
    originTags: [],
    childList: [],
    currentTag: '',
    currentIndex: 0
  },

  /**
   * 标签列表单个标签删除事件
   * @param {*} e 
   */
  tagItemClose(e) {
    let that = this;
    console.log(e)
    wx.showModal({
      title: "提示",
      content: "确认删除此标签吗",
      success(res) {
        if (res.confirm) {
          let childIndex = e.detail;
          let childList = that.data.childList;
          childList.splice(childIndex, 1);
          let originTags = that.data.originTags;
          originTags[that.data.currentIndex].child = childList;
          let desc = originTags[that.data.currentIndex];
          wx.showLoading({
            title: '删除中',
          })
          api.setTag(desc, (err, res) => {
            wx.hideLoading({})
            if (err) {
              wx.showToast({
                title: '删除失败',
              })
              return
            }
            if (res) {
              that.setData({
                originTags,
                childList
              })
              wx.showToast({
                title: '删除成功',
              })
            }
          })
        }
      }
    })

  },

  /**
   * 左侧菜单切换事件
   * @param {*} e 
   */
  menuItemClick(e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.currentIndex == index) {
      return;
    }
    let childList = this.data.originTags[index].child;
    let currentTag = this.data.originTags[index].title;
    this.setData({
      childList,
      currentTag,
      currentIndex: index
    })
  },

  /**
   * 标签左滑删除事件
   * @param {*} e 
   */
  slideButtonTap(e) {
    const index = e.currentTarget.dataset.index;
    let _id = this.data.originTags[index]._id;
    let title = this.data.originTags[index].title;
    const that = this;

    wx.showModal({
      cancelColor: 'cancelColor',
      title: "提示",
      content: `确认删除${title}吗？`,
      confirmText: "删除",
      success(res) {
        if (res) {
          if (res.confirm) {
            wx.showLoading({
              title: '删除中',
            })
            api.removeTag(_id, (err, res) => {
              wx.hideLoading({})
              if (err) {
                wx.showToast({
                  title: '删除失败',
                })
                return;
              }

              if (res) {
                getTags.call(that);
                wx.showToast({
                  title: '删除成功',
                })
              }

            })
          }
        }
      }
    })
  },

  /**
   * 添加标签一级分类
   * @param {*} e 
   */
  addTagTitle(e) {
    let value = e.detail.trim();
    let that = this;
    wx.showModal({
      title: "提示",
      content: `确认添加${value}为标签吗？`,
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '上传中',
          })
          api.addTag({
            title: value,
            child: []
          }, (err, res) => {
            wx.hideLoading({})
            if (err) {
              wx.showToast({
                title: '添加失败',
              })
              return;
            }
            if (res) {
              that.setData({
                originTags: [...that.data.originTags, res.data]
              })
              wx.showToast({
                title: '添加成功',
              })
            }
          })
        }
      }
    })
  },

  /**
   * 添加标签二级标题
   * @param {*} e 
   */
  addTagItem(e) {
    const value = e.detail.trim();
    const index = this.data.currentIndex;
    const originTag = this.data.originTags[index];
    const originTags = this.data.originTags;
    const that = this;
    originTag.child.push(value);
    originTag.child = [...new Set(originTag.child)]
    originTags[index] = originTag;
    wx.showModal({
      confirmText: "添加",
      title: "提示",
      content: `确认添加${value}吗？`,
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '上传中',
          })
          api.setTag(originTag, (err, res) => {
            wx.hideLoading({})
            if (err) {
              wx.showToast({
                title: '添加失败',
              })
              return;
            }
            if (res) {
              that.setData({
                originTags,
                childList: originTag.child
              })
              wx.showToast({
                title: '添加成功',
              })

            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getTags.call(this)
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

function getTags(index = 0) {
  api.getTagList((err, res) => {
    if (res) {
      this.setData({
        originTags: res.data,
        childList: res.data[index].child,
        currentTag: res.data[index].title,
        currentIndex: index
      })
    }
  })
}