import {Button, Space, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React,{useState,useEffect} from 'react';
import {stuGet} from  '@/api/stu'
import stu from "../../../mock/stu";
interface DataType {
  key: string;
  name: string;
  score: number;
  city: string;
  time: string;
}

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
    render: (_, record) => (
      <Space size="middle">
        <Button type={"primary"} size={"small"}>编辑</Button>
        <Button type={"primary"} danger size={"small"}>删除</Button>
      </Space>
    ),
  },
];


// const data: DataType[] = [  测试数据
//   {
//     key: '1',
//     name: 'Joe Black',
//     score: 100,
//     city: '西安',
//     time: '2022-10-10',
//   },
// ];
export default function stuList(){
  let [data,setData]=useState([])
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


