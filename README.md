# node-mysql-api
简单的node、mysql构建的api框架

# 使用的第三方组件
- `mysql`      // node 连接数据库的包
- `cross-env`  // 用户设置环境变量，可以处理windows和其他Unix系统在设置环境变量的写法上不一致的问题
- `nodemon`    // 用于开发环境时守护进程，文件改变能重新运行项目

# 目录结构
```text
.
├── README.md
├── conf                            // 配置文件（数据库）
│   ├── db.js                    // 数据库连接
│   ├── mysql.dev.conf.js        // 开发环境数据库配置
│   └── mysql.prd.conf.js        // 生产环境数据库配置
├── controller                      // 控制器层
│   └── UserController.js        // 具体某个控制器，比如这个是User的控制器
├── resource                        // 资源文件 和业务代码无关
│   └── sql                      // 这里放的案例sql
│       └── tb_user.sql
├── router.js                       // 统一处理匹配路由
├── server.js                       // nodejs 服务启动文件
├── service                         // 服务层，写业务代码
│   └── UserService.js
└── utils                           // 工具类
    ├── getParams.js                   // 处理请求的参数
    └── resolveAsync.js                // 优雅处理async await返回的值和error, 类golang的写法
```
# 将继续学习优化...
