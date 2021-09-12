/*
 * @description: 数据库连接的操作
 * @Date: 2021-09-05 23:38:22
 */
const mysql = require('mysql');
const DEV_MYSQL_CONFIG = require('./mysql.dev.conf'); // 开发环境的数据库配置
const PRD_MYSQL_CONFIG = require('./mysql.prd.conf'); // 生产环境的数据库配置

const CONFIG = process.env.NODE_ENV === 'production' ? PRD_MYSQL_CONFIG : DEV_MYSQL_CONFIG;

// 1. 创建数据库连接的对象
const con = mysql.createConnection(CONFIG);

// 2. 连接
con.connect();

// 3. 执行sql
// 3.1 创建sql语句 执行语句 返回结果
const execSql = (sql) => {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};

/**
 *
 * @returns {Promise<unknown>}
 * @param tableName
 * @param where 查询条件
 * @param columns 需要查询的列
 */
const queryAll = (tableName, where, ...columns) => {
  return new Promise((resolve, reject) => {
    const sql = `select ${columns.toString() || '*'} from ${tableName} ${where}`;
    execSql(sql).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};


// 导出响应的
module.exports = {
  execSql,
  queryAll
};

