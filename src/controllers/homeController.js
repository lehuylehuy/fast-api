import db from '../models/index';
// trong index cuar modal da import tat ca model
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render('homepage.ejs', {
      data: JSON.stringify(data)
    });
  } catch (error) {
    console.log("error")
  }
 
}

let getAboutPage = (req, res) => {
  return res.render(' test/about.ejs')
}

let getCRUD = (req, res) => {
  return res.render("crud.ejs")
}

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
}