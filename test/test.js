class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null;
  }
  setNextSuccessor(successor) {
    return (this.successor = successor);
  }
  passRequest() {
    let ret = this.fn.apply(this, arguments);
    if (ret === "nextSuccessor") {
      return (
        this.successor &&
        this.successor.passRequest.apply(this.successor, arguments)
      );
    }
    return ret;
  }
  // 异步方式兼容
  next() {
    return (
      this.successor &&
      this.successor.passRequest.apply(this.successor, arguments)
    );
  }
}

// 例子
let order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log("500元定金预购，得到100优惠券");
  } else {
    return "nextSuccessor";
  }
};

let order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log("200元定金预购，得到50优惠券");
  } else {
    return "nextSuccessor";
  }
};

let orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
  } else {
    console.log("手机库存不足");
  }
};

// 创建职责链
let chainOrder500 = new Chain(order500);
let chainOrder200 = new Chain(order200);
let chainOrderNormal = new Chain(orderNormal);

// 指定职责链中的顺序
chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

// 最后把请求传递给第一个节点
chainOrder500.passRequest(1, true, 500); // 500元定金预购，得到100优惠券

// 更方便的方式
Function.prototype.after = function (fn) {
  const self = this;
  return function () {
    let ret = self.apply(this, arguments);
    if (ret === "nextSuccessor") {
      return fn.apply(this, arguments);
    }
    return ret;
  };
};

let order = order500.after(order200).after(orderNormal);
