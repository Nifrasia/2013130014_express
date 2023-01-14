 const User = require("../models/user")
 
 exports.index = (req, res, next) => {
    //   res.send('Hello Kitty');
      res.status(200).json({
        fullname: 'Pronkamol Sathiwawong'
      });
    }

  exports.bio = (req, res, next) => {
    res.status(200).json({
      fullname: 'Pronkamol Sathiwawong',
      nickname: 'Toung',
      hobby: 'reading, gaming',
      gitusername: 'Nifrasia'
    });
  }

  exports.register = async (req, res, next) => {
    const {name, email, password} = req.body

    let user = new User();
    user.name = name
    user.email = email
    user.password = await user.encryptPassword(password)

    await user.save()
    res.status(200).json({
      message: "registered / ลงทะเบียนเรียบร้อยแล้ว"
    })
  }