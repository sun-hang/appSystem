const url = 'http://127.0.0.1:529';
// const url = 'https://fangmmmm:529';
module.exports.uploadImg = (files = [], callback = () => { }) => {
  let path = '/api/upload';
  let result = [];
  let count = 0;
  files.forEach(item => {
    wx.uploadFile({
      filePath: item,
      name: 'image',
      url: url + path,
      success(res) {
        count++;
        let data = JSON.parse(res.data);
        if (data.status == 200) {
          result = [...result, ...data.result]
        }
        if (count == files.length) {
          callback(result)
        }
      },
      fail() {
        count++;
      }
    })
  })
}