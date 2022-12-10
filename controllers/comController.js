const Company = require('../models/company')

exports.company = async (req, res, next) => {

    const company = await Company.find()

    res.status(200).json({
        data: company
    });
}

exports.insert = async (req, res, next) => {

    const {name, province, postcode} = req.body

    let company = new Company({
        name: name,
        province: province,
        postcode: postcode
    });
    await company.save()

    res.status(200).json({
        message: 'Data Inserted'
    });
}

exports.destroy = async (req, res, next) => {

    try{
        const { id } = req.params;
        const company = await Company.deleteOne({ _id: id });

        res.status(200).json({
        data: company,
        })

    } catch(error){
        res.status(400).json({
            error:{
                message: 'An error occurred' + error.message
            }
        });
    }
}

exports.update = async (req, res, next) => {

    try{
        const {id} = req.params
        const {name, province, postcode} = req.body

        const company = await Company.updateOne({_id : id},{
            name: name,
            province: province,
            postcode: postcode
        })
    
        res.status(200).json({
            message: 'Data Edited'
        });
    } catch (error){
        res.status(400).json({
            error:{
                message: 'An error occurred' + error.message
            }
        });
    }
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
   