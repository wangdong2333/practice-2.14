import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';

class Student extends Component {
    constructor(params) {
        super(params);
        this.state = {
            dataSource:[]
        }
    }
    componentWillMount() {
        axios.get(' https://www.easy-mock.com/mock/5cea404232f9f3098f832dcb/demo/student')
        .then((res)=>{
            this.setState({
                dataSource:res.data.data.projects
            })
        })
    }
    
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },{
                title: '学号',
                dataIndex: 'id',
                key: 'id',
              },
              ,{
                title: '学校',
                dataIndex: 'school',
                key: 'school',
              }
        ]
       
        return (
            <div style={{background:"#fff"}}>
                <Table columns={columns}  dataSource={this.state.dataSource}></Table>
            </div>
        );
    }
}

export default Student;
