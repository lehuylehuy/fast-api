let handleLogin = (req, res) => {
  console.log("in handleLogin----");
  let {email, password} = req.body;
  //can lam:
  //check email exitst
  //compare password
  //return userInfor ()
  // return accessToken (jwt)-chua co trong seri nay
  if(!email || !password) return res.status(500).json({
    enCode: 1,
    message: "missing inputs param"
  })
  return res.status(200).json({
    enCode: 0,
    message: "hello huy",
    email: email,
    password,
    test: "hihi"
  })
}

module.exports = {
  handleLogin
}