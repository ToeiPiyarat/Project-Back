const db = require('../models/db')

exports.carvehicle = async (req, res, next) => {
    try {
        const rs = await db.vehiclenumber.findMany({
            where: {
                user_id: req.user.id
            }
        })
res.json(rs)

    } catch (error) {
        next(error)
    }
}

exports.addcar = async (req, res, next) => {
    const { vehicleNumber, brand, model } = req.body
    // console.log(req.body);
    try {
        const car = await db.vehiclenumber.create({
            data:{
                vehicleNumber,
                user_id: Number(req.user.id),
                brand,
                model,
            }
        })
        res.json(car)

    } catch (error) {
        next(error)
    }
}

exports.deletecar = async (req, res, next) => {
    const {vehiclenumberId} = req.params

    try {
        const vehiclenumber = await db.vehiclenumber.delete({
            where: {
                id: Number(vehiclenumberId)
            }
        })
        res.json(vehiclenumber)
    } catch (error) {
        next(error)
    }
}