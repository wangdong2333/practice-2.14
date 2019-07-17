'use strict';

const Service = require('egg').Service;
// const mysql = require("mysql");
// const {mysql}  =app;
class UserService extends Service {
  async find() {
    
    // const user = await this.app.mysql.select('user');
    //比如查询users表name=Jack的数据
    let uid = 1;
    // this.app.mysql.query('select * from users where name = ?', [name]);
    const user = await this.app.mysql.query('select * from user where uid = ?',[uid]);
    // console.log(this.app,"12345");
    // const user = await this.app.mysql.insert('user',{uname:'xiaosan',pass:'12345'});

    return { user };
  }
}

module.exports = UserService;