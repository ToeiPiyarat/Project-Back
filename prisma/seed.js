const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail',phone:'0123456789',role:'USER' },
  { username : 'bobby', password, email: 'bobby@ggg.mail',phone:'0123456789',role:'USER' },
  { username : 'candy', password, email: 'candy@ggg.mail',phone:'0123456789',role:'USER' },
]

const resevedData = [
  { reserverDate: new Date(), user_carId: 1 , status:'RESERVED'},
  { reserverDate: new Date(), user_carId: 2 , status:'RESERVED'},
  { reserverDate: new Date(), user_carId: 3 , status:'RESERVED'},
]

const userCarIdData = [
  { userId: 1, carId: 1 },
  { userId: 2, carId: 2 },
  { userId: 3, carId: 3 },
]

const carData = [
  { vehicle:'car'},
  { vehicle:'motorycle'},
  { vehicle:'bicleclo'},
]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })

  await prisma.car.createMany({
    data : carData
  })
  
  await prisma.user_Car.createMany({
    data: userCarIdData
  })

  await prisma.reseved.createMany({
    data : resevedData
  })
}

run()
