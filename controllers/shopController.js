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
            photo: config.DOMAIN + '/images/' + shop.photo,
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

//เพิ่มร้าน
exports.insert = async (req, res, next) => {

    const {name, location} = req.body

    let shop = new Shop({
        name: name,
        location: location,
    });
    await shop.save()

    res.status(200).json({
        message: 'เพิ่มข้อมูลร้านอาหารเรียบร้อยแล้ว'
    });
}