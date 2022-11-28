// @ts-ignore
import mockjs from 'mockjs'
//提供学员相关逻辑mock接口
let dataList=mockjs.mock({
    code: 200,
    msg: '学员列表加载成功',
    "data|20": [
      {
        "objectId|+1":1,
        name: '@cname',
        score: '@integer(60,100)',
        city: '@city',
        time: '@date'
      },
    ]
  })

export default {
  'GET /classes/test': {
    username: '张三丰',
    score: 100
  },
  'GET /classes/stu':dataList,
  'DELETE /classes/stu':(req: any, res: any)=>{
    console.log(req.query);
    let {id}=req.query;
    for (let i=0;i<dataList.data.length;i++){
      if (dataList.data[i].objectId==id){
        dataList.data.splice(i,1);
        res.send({
          code:200,
          msg:'删除成功'
        })
        return
      }else{
        res.send({
          code:100,
          msg:'没有找到对应的数据'
        })
      }
    }
  }
}
