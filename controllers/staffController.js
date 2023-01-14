const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid');
const { promisify } = require('util')
const writeFileAsync = promisify(fs.writeFile)

const Staff = require('../models/staff')
const config = require('../config/index');

exports.staff = async (req, res, next) => {

    const staff = await Staff.find().sort({_id: -1})

    const staffWithPhotoDomain = await staff.map((staff,index) => {
        return{
            name: staff.name,
            photo: config.DOMAIN + '/images/' + staff.photo,
        }
    });
        res.status(200).json({
            data: staffWithPhotoDomain
        });
}

exports.insert = async (req, res, next) => {

    const {name, photo} = req.body

    let staff = new Staff({
        name: name,
        photo: await saveImageToDisk(photo)
    });
    await staff.save()

    res.status(200).json({
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
    });
}

async function saveImageToDisk(baseImage) {
    //หา path จริงของโปรเจค
    const projectPath = path.resolve('./') ;
    //โฟลเดอร์และ path ของการอัปโหลด
    const uploadPath = `${projectPath}/public/images/`;

    //หานามสกุลไฟล์
    const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));

    //สุ่มชื่อไฟล์ใหม่ พร้อมนามสกุล
    let filename = '';
    if (ext === 'svg+xml') {
        filename = `${uuidv4.v4()}.svg`;
    } else {
        filename = `${uuidv4.v4()}.${ext}`;
    }

    //Extract base64 data ออกมา
    let image = decodeBase64Image(baseImage);

    //เขียนไฟล์ไปไว้ที่ path
    await writeFileAsync(uploadPath+filename, image.data, 'base64');
    //return ชื่อไฟล์ใหม่ออกไป
    return filename;
}

function decodeBase64Image(base64Str) {
    var matches = base64Str.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var image = {};
    if (!matches || matches.length !== 3) {
        throw new Error('Invalid base64 string');
    }

    image.type = matches[1];
    image.data = matches[2];

    return image;
}

exports.show = async (req, res, next) => {

    try{
        const {id} = req.params

        const staff = await Staff.findOne({
            id: id
        })

        if(!staff){
            const error = new Error("Can't find this user. / ไม่พบผู้ใช้งาน")
            error.statusCode = 400
            throw error;
        } else{
            res.status(200).json({
                data: staff
            });
        }

    } catch(error){
        next(error)
    }
}


exports.destroy = async (req, res, next) => {

    try{
        const { id } = req.params;
        const staff = await Staff.deleteOne({ id: id });

        const existid = await Staff.findOne({id: id})

        if(!existid){
            const error = new Error('ไม่สามารถลบข้อมูลผู้ใช้งานได้ / ไม่พบข้อมูลผู้ใช้งาน')
            error.statusCode = 400
            throw error;
        }else {
            return res.status(200).json({ 
                message: 'ลบข้อมูลเรียบร้อยแล้ว',
            });
        }

    } catch(error){
        next(error)
    }
}

exports.update = async (req, res, next) => {

    try{
        const {id} = req.params
        const {name, salary} = req.body

        /* Update-1 */

        // const staff = await Staff.findById(id)
        // staff.name = name
        // staff.salary = salary
        // await staff.save()

        /* Update-2 */

        // const staff = await Staff.findByIdAndUpdate(id, {
        //     name: name,
        //     salary: salary
        // })

        /* Update-3 */

        const staff = await Staff.updateOne({id : id},{
            name: name,
            salary: salary
        })
    
        res.status(200).json({
            message: 'แก้ไขข้อมูลเรียบร้อยแล้ว'
        });
    } catch (error){
        next(error)
    }
}