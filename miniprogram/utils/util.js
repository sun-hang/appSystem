/**
 * 防抖函数
 * @param {*} callback 
 * @param {*} duration 
 */
module.exports.debounce = (duration) => {
  let timer = null;
  return function (callback, ...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...arg)
    }, duration)
  }
}