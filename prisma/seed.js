const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail',phone:'0123456789',role:"ADMIN" },
  { username : 'bobby', password, email: 'bobby@ggg.mail',phone:'0123456789',role:"USER" },
  { username : 'candy', password, email: 'candy@ggg.mail',phone:'0123456789',role:"USER" },
]

const resevedData = [
  { reserverDate: new Date() , carRegisteration:'DE5H7',phone:'0123456789',user_id:2,status:"RESERVED" },
  { reserverDate: new Date() , carRegisteration:'SA14G',phone:'0123456789',user_id:3,status:"RESERVED" },
]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })

  await prisma.reseved.createMany({
    data : resevedData
  })

}

run()
