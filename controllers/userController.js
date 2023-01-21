 const User = require("../models/user")
 const {validationResult} = require('express-validator')
 
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

      //validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const error = new Error("The infomation recived is wrong. / ข้อมูลผิดพลาด")
        error.statusCode = 422;
        error.validation = errors.array();
        throw error;
      }
    
      const existemail = await User.findOne({email: email})

      if(existemail){
        const error = new Error("E-mail is already in the system. / อีเมลล์มีในระบบแล้ว")
        error.statusCode = 400;
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