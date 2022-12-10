const Company = require('../models/company')

exports.company = async (req, res, next) => {

    const company = await Company.findOne()

    res.status(200).json({
        data: company
    });
}
    //   data: [
    //     {
    //         id: 1,
    //         name: "Crytek",
    //         address: {
    //             province: "Frankfurt",
    //             postcode: 60310
    //         }
    //     },
    //     {
    //         id: 2,
    //         name: "Riot",
    //         address: {
    //             province:"Los Angeles",
    //             postcode: 90005
    //         }
    //     },
    //     {
    //         id: 3,
    //         name: "Mihoyo",
    //         address: {
    //             province:"Shanghai",
    //             postcode: 200010
    //         }
    //     }
    //   ]
   