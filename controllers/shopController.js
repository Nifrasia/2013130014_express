const Menu = require('../models/menu');
const Shop = require('../models/shop')

exports.shop = async (req, res, next) => {

    const shops = await Shop.find().select('name photo location').sort({_id: -1});

    const shopWithPhotoDomain = await shops.map((shop,index) => {
        return{
            id: shop._id,
            name: shop.name,
            photo: 'http://localhost:3000/images/' + shop.photo,
            location: shop.location
        }
    });
        res.status(200).json({
            data: shopWithPhotoDomain
        });
};

exports.menu = async (req, res, next) => {

    const menus = await Menu.find().select('+name -price')

        res.status(200).json({
            data: menus,
        });
};