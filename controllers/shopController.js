const Menu = require('../models/menu');
const Shop = require('../models/shop');
const config = require('../config/index');

//เรียกดูรายการร้าน
exports.shop = async (req, res, next) => {

    const shops = await Shop.find().select('name photo location').sort({_id: -1});

    const shopWithPhotoDomain = await shops.map((shop,index) => {
        return{
            id: shop._id,
            name: shop.name,
            photo: config.DOMAIN + config.PORT + '/images/' + shop.photo,
            location: shop.location
        }
    });
        res.status(200).json({
            data: shopWithPhotoDomain
        });
};

//เรียกดูเมนู
exports.menu = async (req, res, next) => {

    const menus = await Menu.find().populate('shop')

        res.status(200).json({
            data: menus,
        });
};

//เรียกดูผ่านไอดี
exports.show = async (req, res, next) => {

        const shop = await Shop.findById(req.params.id).populate('menu');

        res.status(200).json({
            data: shop,
        });
};