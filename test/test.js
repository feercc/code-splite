class Event {
  constructor() {
    this._events = {};
  }
  on(event, cb) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(cb);
  }
  emit(event, ...args) {
    if (this._events[event]) {
      this._events[event].forEach((cb) => {
        cb(...args);
      });
    }
  }
  off(event, cb) {
    if (this._events[event]) {
      this._events[event] = this._events[event].filter((fn) => {
        return fn !== cb && fn.l !== cb;
      });
    }
  }
  once(event, cb) {
    const fn = (...args) => {
      cb(...args);
      this.off(event, fn);
    };
    fn.l = cb;
    this.on(event, fn);
  }
}
