import {request} from "umi";

export const stuGet = () => {
  return request('/classes/stu')
}

export const stuDel = async (id:any) => {//删除
  return await request(`/classes/stu?id=${id}`,{
    method:'DELETE'
  })
}
//2022.11.29-0：09,测试提交01
