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
    try{
      const {name, email, password} = req.body
    
      const existemail = await User.findOne({email: email})
      if(existemail){
        const error = new Error("E-mail is already in the system. / อีเมลล์มีในระบบแล้ว")
        error.statusCode = 400
        throw error;
      }

      let user = new User();
      user.name = name
      user.email = email
      user.password = await user.encryptPassword(password)

      await user.save()
      res.status(200).json({
        message: "Registered. / ลงทะเบียนระบบเรียบร้อยแล้ว"
      })
    } catch (error){
      next(error)
    }
  }