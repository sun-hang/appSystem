// const url = 'http://127.0.0.1:529';
const url = 'https://fangmmmm.top:508';

const success = (callback) => {
  return (res) => {
    callback(null, res)
  }
}

const fail = (callback) => {
  return (err) => {
    callback(err, null)
  }
}

/**
 * 图片上传
 * @param {Array} files  图片临时路径数组
 * @param {Function} callback  上传完成后的回调函数
 */
module.exports.uploadImg = (files = [], callback = () => {}) => {
  let path = '/api/upload';
  let result = [];
  let count = 0;
  files.forEach(item => {
    wx.uploadFile({
      filePath: item,
      name: 'image',
      url: url + path,
      success(res) {
        console.log(res)
        count++;
        let data = JSON.parse(res.data);
        if (data.status == 200) {
          result = [...result, ...data.result]
        }
        if (count == files.length) {
          callback(result)
        }
      },
      fail(err) {
        console.log(err)
        count++;
      }
    })
  })
}



/**
 * 
 * 
 * 标签部分api
 * 
 * 
 * 
 */



/**
 * 
 * @param {*} tag 要添加的标签对象
 * @param {*} callback 完成的回调函数
 */
module.exports.addTag = (tag = {}, callback = () => {}) => {
  let path = `/api/tag`;

  wx.request({
    url: url + path,
    method: "POST",
    data: tag,
    header: {
      'content-type': 'application/json'
    },
    dataType: "json",
    success: success(callback),
    fail: fail(callback)
  })
}

/**
 * 修改一个标签
 * @param {*} desc 修改的标签对象 包含ObjectId
 * @param {*} callback 完成的回调函数
 */
module.exports.setTag = (desc = {}, callback = () => {}) => {
  let path = `/api/tag/${desc._id}`;
  wx.request({
    url: url + path,
    method: "PUT",
    dataType: "json",
    data: desc,
    header: {
      'content-type': 'application/json'
    },
    success: success(callback),
    fail: fail(callback)
  })
}

/**
 * 删除一条标签信息
 * @param {*} _id  ObjectId
 * @param {*} callback  完成后的回调函数
 */
module.exports.removeTag = (_id, callback = () => {}) => {
  let path = `/api/tag/${_id}`;
  wx.request({
    url: url + path,
    method: "DELETE",
    dataType: "json",
    header: {
      'content-type': 'application/json'
    },
    success: success(callback),
    fail: fail(callback)
  })
}

/**
 * 获取所有标签
 * @param {Function} callback 
 */
module.exports.getTagList = (callback = () => {}) => {
  let path = `/api/tag`;
  wx.request({
    url: url + path,
    method: "GET",
    dataType: "json",
    header: {
      'content-type': 'application/json'
    },
    success: success(callback),
    fail: fail(callback)
  })
}




/**
 * 

 商品部分api



 */


/**
 * 添加一个商品
 * @param {*} desc  添加的商品对象
 * @param {*} callback  完成后执行的回调函数
 */
module.exports.addProduct = (desc = {}, callback = () => {}) => {
  const path = `/api/product`;

  wx.request({
    url: url + path,
    method: "POST",
    header: {
      "content-type": "application/json"
    },
    data: desc,
    dataType: "json",
    success: success(callback),
    fail: fail(callback)
  })
}

/**
 * 修改一个商品
 * @param {*} desc 修改的商品对象
 * @param {*} callback  完成的回调函数
 */
module.exports.setProduct = (desc = {}, callback = () => {}) => {
  const path = `/api/product/${desc._id}`;

  wx.request({
    url: url + path,
    method: "PUT",
    dataType: "json",
    data: desc,
    header: {
      'content-type': 'application/json'
    },
    success: success(callback),
    fail: fail(callback)
  })
}

/**
 * 删除一条商品数据
 * @param {String} _id  ObjectId
 * @param {Function} callback  完成后的回调函数
 */
module.exports.removeProduct = (_id, callback = () => {}) => {
  const path = `/api/product/${_id}`;
  wx.request({
    url: url + path,
    method: "DELETE",
    dataType: "json",
    header: {
      'content-type': 'application/json'
    },
    success: success(callback),
    fail: fail(callback)
  })
}

/**
 * 获取商品列表，用于展示
 * @param {Number} state 商品状态  0上架销售中 1待上架 2下架 -1为全部
 * @param {Function} callback 成功后回调函数
 * @param {Number} page 分页当前页码
 * @param {Number} size  分页页容量
 * @param {Number} ctime 排序规则 用于根据创建时间排序 -1为倒叙 1为正序
 */
module.exports.getProductStateList = (state, page = 1, size = 10, ctime = -1, callback = () => {}) => {
  let path = `/api/product?state=${state}&page=${page}&size=${size}&ctime=${ctime}`;

  wx.request({
    url: url + path,
    method: "GET",
    dataType: "json",
    header: {
      'content-type': 'application/json'
    },
    success: success(callback),
    fail: fail(callback)
  })

}



/**
 * 
 * 
 * 订单部分api
 * 
 * 
 * 
 */

/**
 * 获取订单列表，如果是全部订单需要分页，state传-1，需要传page参数和size参数，
 * 如果是查询带状态的订单，传参state，不需要传其他参数
 * @param {Number} state 订单状态获取全部订单的话传-1
 * @param {Number} page 分页的话传此参数
 * @param {Number} size 分页的话传此参数
 */
module.exports.getOrderList = (state, page, size, callback = () => {}) => {

}

/**
 * 修改一条订单
 * @param {*} desc 修改的订单对象
 * @param {*} callback  完成后的回调函数
 */
module.exports.setOrider = (desc = {}, callback = () => {}) => {

}

/**
 * 删除一条订单数据  
 * @param {String} _id  订单的objectID 
 * @param {Function} callback  完成后的回调函数
 */
module.exports.removeOrder = (_id, callback = () => {}) => {

}

/**
 *
 *
 * 搜索部分api
 * 订单列表部分 ： 商品名称  订单编号  手机号搜索
 *
 *
 * 商品列表 ： 商品名称
 *
 */

/**
 * 根据商品名称订单编号和手机号进行搜索查询
 * @param {String} productName 
 * @param {String} orderNumber 
 * @param {String} phone 
 * @param {Function} callback 
 */
module.exports.queryOrder = (productName = "", orderNumber = "", phone = "", callback = () => {}) => {

}

/**
 * 根据商品名称和标签进行查询商品
 * @param {String} productName 
 * @param {String} tag 
 * @param {Function} callback 
 */
module.exports.queryProduct = (productName = "", tag = "", callback = () => {}) => {

}