module.exports = {
  'extends': ['plugin:vue/strongly-recommended'],
  env: {
    node: true,
    browser: true, // browser: false 关闭对浏览器全局变量的支持，会导致使用window变量无法检验通过。这个属性如果未显示指明true也是可以编译通过的
    es6: true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'generator-star-spacing': 'off',
    'indent': [2, 2], //缩进风格
    'no-multiple-empty-lines': [1, {'max': 2}], //空行最多不能超过2行
    'camelcase': 2, //强制驼峰法命名
    'init-declarations': 2, //声明时必须赋初值
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-func-assign': 2, // 禁止重复的函数声明
    'newline-after-var': 2,//变量声明后是否需要空一行
    'no-undef': 2, //不能有未定义的变量
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}], //对象字面量中冒号的前后空格
    'no-redeclare': 2,//禁止重复声明变量
    'eqeqeq': [2, 'allow-null'], // 使用 === 替代 ==
    'quotes': [1, 'single', 'avoid-escape'], // 单引号
    'semi': [2, 'never'], // 不使用分号
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'no-unused-vars': 2, // 不能有声明后未被使用的变量或参数
    'no-dupe-keys': 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-invalid-this': 2,//禁止无效的this，只能用在构造器，类，对象字面量
    'no-var': 2,//禁用var，用let和const代替
    'consistent-this': [2, 'that'],//this别名 使用that
    'new-cap': [2, {
      'newIsCap': true, // 构造函数方法名必须大写
      'capIsNew': false // 构造函数不需要一定使用new
    }], // 构造函数大写限制
    'new-parens': 2 // 要求调用无参构造函数时带括号
  }
}
