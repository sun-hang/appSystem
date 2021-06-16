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

// api.getOrderList(-1, -1, 2, (err, res) => {
//   console.log(err, res)
// })

/**
 * result:
ctime: 1619518455499
currentPric: 32
detail: "院此二提目片南市省政包龙率改组参。参件能般完相就林门因命备火儿支。"
imgs: (6) ["newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg", "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg", "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg", "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg", "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg", "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg"]
options: (2) [{…}, {…}]
optionsDetail: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
originPric: 251
productName: "迪奥999"
state: false
stock: 13
tag: "阿玛尼,粉底液"
__v: 0
_id: "6087e3f7391d1359ac4715c2"
 */
// api.getOneProduct("6087e3f7391d1359ac4715c2", (err, res) => {
//   console.log(err, res)
// })

// api.getOneOrder("60a6324dbc21584b6077cfa0", (err, res) => {
//   console.log(err, res)
// })
// const obj = {
//   "_id": ("60a6324dbc21584b6077cfa0"),
//   "isDelete": false,
//   "products": [{
//       "imgs": [
//         "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//         "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//         "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg",
//         "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//         "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//         "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg"
//       ],
//       "state": false,
//       "_id": ("6087e3f7391d1359ac4715c2"),
//       "productName": "迪奥999",
//       "originPric": 251,
//       "currentPric": 32,
//       "detail": "院此二提目片南市省政包龙率改组参。参件能般完相就林门因命备火儿支。",
//       "tag": "阿玛尼,粉底液",
//       "stock": 12,
//       "options": [{
//           "child": [
//             "999",
//             "888",
//             "777"
//           ],
//           "_id": ("6087e3f7391d1359ac4715c3"),
//           "name": "色号"
//         },
//         {
//           "child": [
//             "大",
//             "中",
//             "小"
//           ],
//           "_id": ("6087e3f7391d1359ac4715c4"),
//           "name": "大小"
//         }
//       ],
//       "optionsDetail": [{
//           "_id": ("6087e3f7391d1359ac4715c5"),
//           "type": "999-大",
//           "price": 170,
//           "total": 1
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfa5"),
//           "type": "999-中",
//           "price": 160,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfa6"),
//           "type": "999-小",
//           "price": 150,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfa7"),
//           "type": "888-大",
//           "price": 140,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfa8"),
//           "type": "888-中",
//           "price": 130,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfa9"),
//           "type": "888-小",
//           "price": 120,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfaa"),
//           "type": "777-大",
//           "price": 110,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfab"),
//           "type": "777-中",
//           "price": 100,
//           "total": 2
//         },
//         {
//           "_id": ("60a6324dbc21584b6077cfac"),
//           "type": "777-小",
//           "price": 90,
//           "total": 2
//         }
//       ],
//       "ctime": 1619518455499.0,
//       "type": {
//         "_id": ("60a6324dbc21584b6077cfad"),
//         "name": "999-大",
//         "price": 170,
//         "count": 1,
//         "checked": true,
//         "stock": 1,
//         "total": 170
//       }
//     },
//     {
//       "imgs": [
//         "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//         "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//         "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg",
//         "newZb9IkZLdAYiD312dd84e3fd4b256b37e2f6ee7b77f1a161233201379936.jpg",
//         "newf9QlpPYK7pZP414edfea3507fcd7f399236d21c18ef0161233201398476.jpg",
//         "newhvzvVJnyB2XX7df10e59c52057a3b72b79fcb1535f97161233201381488.jpg"
//       ],
//       "state": false,
//       "_id": ("6087e41e391d1359ac471c5e"),
//       "productName": "因感细",
//       "originPric": 232,
//       "currentPric": 111,
//       "detail": "究该然分际是号条按色边温群话。省级受更十作务确为西构么其。",
//       "tag": "娇兰,面霜",
//       "stock": 17,
//       "options": [{
//           "child": [
//             "999",
//             "888",
//             "777"
//           ],
//           "_id": ("6087e41e391d1359ac471c5f"),
//           "name": "色号"
//         },
//         {
//           "child": [
//             "大",
//             "中",
//             "小"
//           ],
//           "_id": ("6087e41e391d1359ac471c60"),
//           "name": "大小"
//         }
//       ],
//       "optionsDetail": [{
//         "_id": ("6087e41e391d1359ac471c61"),
//         "type": "999-大",
//         "price": 120,
//         "total": 1
//       }],
//       "ctime": 1619518494737.0,
//       "type": {
//         "_id": ("60a6324dbc21584b6077cfb2"),
//         "name": "999-大",
//         "price": 120,
//         "count": 1,
//         "checked": true,
//         "stock": 1,
//         "total": 120
//       }
//     }
//   ],
//   "adminId": ("60acd0ad4c09c846cc53218b"),
//   "address": {
//     "isDefault": false,
//     "_id": ("60a6324dbc21584b6077cfb3"),
//     "userName": "孙山峰",
//     "province": "河南省",
//     "city": "焦作市",
//     "county": "山阳区",
//     "detail": "姜河小区34号楼",
//     "phone": "17634835772"
//   },
//   "state": 4,
//   "orderTime": 1621504589486.0,
//   "__v": 0,
//   "orderNumber": "fmjb1621839327713"
// }
//data: {n: 1, nModified: 1, ok: 1}
// api.setOrider(obj, (err, res) => {
//   console.log(err, res)
// })
// data: {n: 1, ok: 1, deletedCount: 1}
// api.removeOrder(("60a6324dbc21584b6077cfa0"), (err, res) => {
//   console.log(err,res)
// })

// api.queryProduct('小方', (err, res) => {
//   console.log(err, res)
// })