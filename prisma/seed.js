const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail',phone:'0123456789' },
  { username : 'bobby', password, email: 'bobby@ggg.mail',phone:'0123456789' },
  { username : 'candy', password, email: 'candy@ggg.mail',phone:'0123456789' },
]

const resevedData = [
  { reserverDate: new Date() , carRegisteration:'DE5H7',phone:'0123456789',user_id:1 },
  { reserverDate: new Date() , carRegisteration:'SA14G',phone:'0123456789',user_id:2 },
  { reserverDate: new Date() , carRegisteration:'HO1H6',phone:'0123456789',user_id:3 },
]

const showStatusData = [
  { reseved_id:1 },
  { reseved_id:2 },
  { reseved_id:3 },
]

const run = async () => {
  // await prisma.user.createMany({
  //   data : userData
  // })

  await prisma.reseved.createMany({
    data : resevedData
  })

  await prisma.showStatus.createMany({
    data : showStatusData
  })
}

run()
