/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/8/12
 * Description: 文件描述
 */
module.exports = {
  extends: [
    'cz'
  ],
  rules: {
    'type-enum': [2, 'always', [
      'wip', 'feat', 'fix', 'refactor', 'docs', 'test', 'chore', 'style', 'revert'
    ]],
    'scope-enum': [0, 'always', [
      'src/render/view', '公共组件', '模块一', '模块二'
    ]],
    'subject-empty': [2, 'never'],
    'scope-empty': [0],
    'scope-case': [0],
  }
}
