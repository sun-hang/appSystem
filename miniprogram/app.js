//app.js

/**
 * openId白名单，不是白名单的人不能登录
 */
const whiteList = ['', ''];
const api = require('./utils/api');
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'test-8gbh5jn03f061fd9',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})

// api.addTag({ title: "彩妆", child: [] }, (err, res) => {
//   console.log(err, res)
// })

// api.setTag({ "_id": "60c88d7d49200510cb6c0a08","child": ["1", "2"]}, (err, res) => {
//   console.log(err, res)
// })

// api.removeTag("60c88d7d49200510cb6c0a08", (err, res) => {
//   console.log(err, res);
// })

// api.getTagList((err, res) => {
//   console.log(err, res)
// })