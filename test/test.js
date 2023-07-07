const strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === "" || value === null || value === undefined) {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errorMsg;
    }
  }
};

class Validator {
  constructor() {
    this.cache = [];
  }
  add(value, rules) {
    for (let rule of rules) {
      let strategyAry = rule.strategy.split(":");
      let errorMsg = rule.errorMsg;
      this.cache.push(function () {
        let strategy = strategyAry.shift();
        strategyAry.unshift(value);
        strategyAry.push(errorMsg);
        return strategies[strategy].apply(null, strategyAry);
      });
    }
  }
  start() {
    for (let validatorFunc of this.cache) {
      let errorMsg = validatorFunc();
      if (errorMsg) {
        return errorMsg;
      }
    }
  }
}

// 使用
let registerForm = document.getElementById("registerForm");
let validataFunc = function () {
  let validator = new Validator();
  validator.add(registerForm.userName.value, [
    {
      strategy: "isNonEmpty",
      errorMsg: "用户名不能为空"
    },
    {
      strategy: "minLength:6",
      errorMsg: "用户名长度不能小于6位"
    }
  ]);
  validator.add(registerForm.password.value, [
    {
      strategy: "minLength:6",
      errorMsg: "密码长度不能小于6位"
    }
  ]);
  validator.add(registerForm.phoneNumber.value, [
    {
      strategy: "isMobile",
      errorMsg: "手机号码格式不正确"
    }
  ]);
  let errorMsg = validator.start();
  return errorMsg;
};
