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

  exports.company = (req, res, next) => {
    res.status(200).json({
      data: [
        {
            id: 1,
            name: "Crytek",
            address: {
                province: "Frankfurt",
                postcode: 60310
            }
        },
        {
            id: 2,
            name: "Riot",
            address: {
                province:"Los Angeles",
                postcode: 90005
            }
        },
        {
            id: 3,
            name: "Mihoyo",
            address: {
                province:"Shanghai",
                postcode: 200010
            }
        }
      ]
    });
  }