class Promise {
  cbs = [];
  status = 'pending';
  value = null;
  constructor(fn) {
    fn(this.resolve.bind(this))
  }
  then(fn) {
    // 收集fn回调函数
    if (this.status === 'pending') {
      this.cbs.push(fn);
    } else {
      fn(this.value);
    }

    return this;
  }
  resolve(value) {
    this.status = 'fulfilled';
    this.value = value;
    this.cbs.forEach(fn => fn(value));
  }
}