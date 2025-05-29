let express = require('express')
let router = express.Router()

const { registration, allUser, UserById, login } = require('../controller/user')
router.post('/registration',registration )

router.get('/allUsers',allUser)
router.get('/:id',UserById)


router.post('/login',login)

module.exports = router