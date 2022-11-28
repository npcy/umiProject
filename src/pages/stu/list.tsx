import {Button, Space, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React,{useState,useEffect} from 'react';
import {stuGet,stuDel} from  '@/api/stu'
import stu from "../../../mock/stu";
interface DataType {
  objectId:string;
  key: string;
  name: string;
  score: number;
  city: string;
  time: string;
}
export default function stuList(){
  let [data,setData]=useState([]);
  const columns: ColumnsType<DataType> = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index+1+'',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '分数',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '时间',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record,index) => (
        <Space size="middle">
          <Button type={"primary"} size={"small"}>编辑</Button>
          <Button type="primary" danger size="small" onClick={()=>{
            stuDel(record.objectId).then(res=>{
              data.splice(index,1);
              // @ts-ignore
              setData({...data});
            })
          }}>删除</Button>
        </Space>
      ),
    },
  ];
  useEffect(()=>{
    stuGet().then((res: any)=>{
      console.log(res);
      setData(res.data)
    })
  },[])
  return(
    <Table columns={columns} dataSource={data} rowKey="objectId"/>
  )
}


