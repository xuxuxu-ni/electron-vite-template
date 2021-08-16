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
    'subject-empty': [2, 'never']
  }
}
