
module.exports = { 
    development:{
    HOST : "127.0.0.1",
    USER : "root",
    PASSWORD : "Saketh@20#",
    dialect : "mysql", // sequelize is connecting to mysql DB
    DB : "ecom_db"
    },
    production:{
        HOST : "sql6.freemysqlhosting.net",
        USER : "sql6582545",
        PASSWORD : "root",
        DB: "sql6582545",
        dialect : "mysql", // sequelize is connecting to mysql DB
    }
}