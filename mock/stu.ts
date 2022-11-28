// @ts-ignore
import mockjs from 'mockjs'
//提供学员相关逻辑mock接口
export default {
  'GET /classes/test': {
    username: '张三丰',
    score: 100
  },
  'GET /classes/stu': mockjs.mock({
    code: 200,
    msg: '学员列表加载成功',
    "data|20": [
      {
        'objectId|+1':1,
        name: '@cname',
        score: '@integer(60,100)',
        city: '@city',
        time: '@date'
      },
    ]
  }),
}
