// components/public/pageNavTop/pageNavTop.js
// 获取状态栏高度
const systemInfo = wx.getSystemInfoSync();
const navHeight = systemInfo.system.indexOf('iOS') > -1 ? 44 : 48;
// 计算状态栏与导航栏的总高度
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight,
    statusHeight: systemInfo.statusBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 回退按钮点击事件
     * @param {*} e 
     */
    backClick(e) {
      wx.navigateBack({
        delta: 1,
      })
    },

    /**
     * 返回首页点击事件
     * @param {*} e 
     */
    homeClick(e) {
      wx.switchTab({
        url: '../home/home',
      })
    },

    /**
     * 搜索框点击事件
     * @param {*} e 
     */
    searchClick(e) {
      this.triggerEvent('searchClick', e)
    }
  }
})
