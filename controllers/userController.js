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