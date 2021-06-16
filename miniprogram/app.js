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


// api.getProductStateList  为验证，服务器还为更新最新源代码



// {
//   deletedCount: 0  删除的数量
//   n: 0  数量
//   ok: 1   是否OK
// }
// api.removeProduct('6087e3f7391d1359ac4716b2', (err, res) => {
//   console.log(err, res);
// })



// let obj = {
//   "_id": "6087e3f7391d1359ac4716ce",
//   "imgs": [
//     "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//     "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//     "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg",
//     "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//     "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//     "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg"
//   ],
//   "productName": "声题值光科",
//   "originPric": 390,
//   "currentPric": 81,
//   "detail": "革是更在参我五回特要手很米在又题。称亲产员运指位风被活口件全命称才。",
//   "tag": "迪奥,眼霜",
//   "stock": 29,
//   "options": [{
//       "child": [
//         "999",
//         "888",
//         "777"
//       ],
//       "_id": "6087e3f7391d1359ac4716cf",
//       "name": "色号"
//     },
//     {
//       "child": [
//         "大",
//         "中",
//         "小"
//       ],
//       "_id": "6087e3f7391d1359ac4716d0",
//       "name": "大小"
//     }
//   ],
//   state: 1,
//   "optionsDetail": [{
//     "_id": "6087e3f7391d1359ac4716d1",
//     "type": "999-大",
//     "price": 120,
//     "total": 2
//   }],
//   "ctime": 1619518455603.0,
//   "__v": 0
// }

// /**
//  * data: {n: 1, nModified: 1, ok: 1} result
//  */
// api.setProduct(obj, (err, res) => {
//   console.log(err, res)
// })

// let obj = {
//   "imgs": [
//     "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//     "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//     "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg",
//     "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//     "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//     "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg"
//   ],
//   "productName": "小方",
//   "originPric": 390,
//   "currentPric": 81,
//   "detail": "测试后台用数据测试后台用数据测试后台用数据测试后台用数据测试后台用数据",
//   "tag": "迪奥,眼霜",
//   "stock": 29,
//   "options": [{
//       "child": [
//         "红",
//         "绿",
//         "蓝"
//       ],
//       "name": "颜色"
//     },
//     {
//       "child": [
//         "大",
//         "中",
//         "小"
//       ],
//       "name": "大小"
//     }
//   ],
//   state: 1,
//   "optionsDetail": [{
//       "type": "红-大",
//       "price": 120,
//       "total": 2
//     },
//     {
//       "type": "绿-大",
//       "price": 120,
//       "total": 2
//     },
//     {
//       "type": "蓝-大",
//       "price": 120,
//       "total": 2
//     },
//     {
//       "type": "红-中",
//       "price": 100,
//       "total": 2
//     },
//     {
//       "type": "绿-中",
//       "price": 100,
//       "total": 2
//     },
//     {
//       "type": "蓝-中",
//       "price": 100,
//       "total": 2
//     },
//     {
//       "type": "红-小",
//       "price": 80,
//       "total": 2
//     },
//     {
//       "type": "绿-小",
//       "price": 80,
//       "total": 2
//     },
//     {
//       "type": "蓝-小",
//       "price": 80,
//       "total": 2
//     }
//   ]
// }

// api.addProduct(obj, (err, res) => {
//   console.log(err, res)
// })