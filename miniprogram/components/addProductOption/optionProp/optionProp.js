const util = require('../../../utils/util');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    propList: {
      type: Array,
      value: []
    },
    index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    propLength: 0,
    props: [],
    tit: ""
  },

  lifetimes: {
    attached() {
      const changeHandle = util.debounce(400)
      this.setData({
        changeHandle
      })
    }
  },
  observers: {
    title(title) {
      this.setData({
        tit: this.data.title
      })
    },
    propList(props) {
      this.setData({
        props
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击添加属性按钮触发的事件
     * @param {*} e 
     */
    addPropClick(e) {
      let props = this.data.props;
      props.push("")
      this.setData({
        propLength: this.data.propLength + 1,
        props
      })
    },
    /**
     * 删除一个属性的点击事件
     * @param {*} e 
     */
    deletePropClick(e) {
      let index = e.currentTarget.dataset.item;
      let propLength = this.data.props - 1;
      let props = this.data.props;
      props.splice(index, 1);
      this.setData({
        propLength,
        props
      })
    },
    /**
     * 文本框文本变化事件
     * @param {*} e 
     */
    inputChange(e) {
      let index = e.currentTarget.dataset.item;
      let value = e.detail.value;
      let props = this.data.props;
      props[index] = value.trim();
      this.setData({
        props
      })
      this.data.changeHandle(() => {
        this.triggerEvent('change', {
          name: this.data.tit,
          child: this.data.props,
          i: this.data.index
        })
      })
    },

    /**
     * 
     * @param {*} e 
     */
    titleChange(e) {
      let value = e.detail.value.trim();
      this.setData({
        tit: value
      })
      this.data.changeHandle(() => {
        this.triggerEvent('change', {
          name: value,
          child: this.data.props,
          i: this.data.index
        })
      })
    }
  }
})