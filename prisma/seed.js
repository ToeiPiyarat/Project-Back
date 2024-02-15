const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail',phone:'0123456789',role:'USER' },
  { username : 'bobby', password, email: 'bobby@ggg.mail',phone:'0123456789',role:'USER' },
  { username : 'candy', password, email: 'candy@ggg.mail',phone:'0123456789',role:'ADMIN' },
]

const resevedData = [
  { reserverDate: new Date() , car_id:'DE5H7',phone:'0123456789' },
  { reserverDate: new Date() , car_id:'DE5H7',phone:'0123456789'},
  { reserverDate: new Date() , car_id:'DE5H7',phone:'0123456789'},
]

const carData = [
  { car_id:'DE5H7',cartype:'MOTORYCLE',user_id:1},
  { car_id:'DE5H7',cartype:'CAR',user_id:1}
]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })

  await prisma.car.createMany({
    data : carData
  })

  await prisma.reseved.createMany({
    data : resevedData
  })
}

run()
