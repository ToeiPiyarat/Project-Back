const db = require('../models/db')

exports.showRerved = async (req,res,next) => {
    try {
        const rs = await db.reseved.findMany()
        console.log(rs)
        res.json(rs)
    } catch (error) {
        next(error)
    }
}

exports.creacteRerved = async (req, res, next) => {
    const { reserverDate , car_id, phone } = req.body

    try {
        const reserved = await db.reseved.create({
            data:{
                reserverDate: new Date(reserverDate),
                car_id,
                phone
            }
        })
        res.json(reserved)
    } catch (error) {
        next(error)
    }
}

exports.deleteRerved = async (req, res, next ) => {
    const {reservedId} = req.params

    try {
        const reserved = await db.reseved.delete({
            where: {
                id: Number(reservedId)
            }
        })
        res.json(reserved)
    } catch (error) {
        next(error)
        
    }
}