module.exports = {
  'extends': 'plugin:vue/strongly-recommended',
  rules: {
    'vue/max-attributes-per-line': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'indent': [2, 2], //缩进风格
    "no-multiple-empty-lines": [1, {"max": 2}], //空行最多不能超过2行
    "camelcase": 2, //强制驼峰法命名
    "init-declarations": 2, //声明时必须赋初值
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-func-assign": 2, // 禁止重复的函数声明
    "no-undef": 1, //不能有未定义的变量
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}], //对象字面量中冒号的前后空格
    "no-redeclare": 2,//禁止重复声明变量
    "eqeqeq": [2, "allow-null"], // 使用 === 替代 ==
    "quotes": [1, "single", "avoid-escape"], // 单引号
    "semi": [2, "never"], // 不使用分号
    "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
    "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数
  }
}
