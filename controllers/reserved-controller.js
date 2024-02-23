const db = require('../models/db')

exports.showRerved = async (req,res,next) => {
    try {
        const rs = await db.reseved.findMany({
            where: {
                user_id: req.user.id
            }
        })
        // console.log(rs)
        res.json(rs)
    } catch (error) {
        next(error)
    }
}

exports.adminShowRerved = async (req,res,next) => {
    try {
        const rs = await db.reseved.findMany({})
        // console.log(rs)
        res.json(rs)
    } catch (error) {
        next(error)
    }
}


exports.creacteRerved = async (req, res, next) => {
    const { reserverDate , carRegisteration, phone, status } = req.body

    try {
        const reserved = await db.reseved.create({
            data:{
                reserverDate: new Date(reserverDate),
                carRegisteration,
                phone,
                status,
                user_id: Number(req.user.id)
            }
        })
        console.log(reserved);
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