const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('fast_db', 'root', null, {// ten DB, mawcj dinh username laf root, ko dat mat khau j thi la null 
  host: 'localhost',
  dialect: 'mysql',
});

let connectDB = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = connectDB;
