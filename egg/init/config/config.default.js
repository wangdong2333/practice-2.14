/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563204523705_3156';

  // add your middleware config here
  config.middleware = [];

  //mysql
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'sjkwangdong54321',
      // 数据库名
      database: 'newblog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.view={
    mapping:{
      '.html':'ejs',
    },
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};


// exports.mysql = {
//   // 单数据库信息配置
//   client: {
//     // host
//     host: 'mysql.com',
//     // 端口号
//     port: '3306',
//     // 用户名
//     user: 'root',
//     // 密码
//     password: '',
//     // 数据库名
//     database: 'newblog',
//   },
//   // 是否加载到 app 上，默认开启
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   agent: false,
// };


// 'use strict';
// module.exports = appInfo => {
//   const config = exports = {};
//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1563204523705_3156';
//   // add your config here
//   config.middleware = [];
//   config.mysql = {
//     client: {
//       host: 'localhost',
//       port: '3306',
//       user: 'root',
//       password: 'sjkwangdong54321',
//       database:'newblog'
//     },
//     app: true,
//     agent: false,
//   }
  
  
//   return config;
// };