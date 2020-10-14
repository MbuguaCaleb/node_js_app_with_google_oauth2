const express = require('express')
const router = express.Router()


/*contains the top level routes*/

//@desc   Login/Landing page
//@route GET/

router.get('/',(req,res)=>{
    res.render('login',{
        layout:'login'
    })
})
1
//@desc   Dashboard
//@route GET/dashboard
router.get('/dashboard',(req,res)=>{

    res.render('dashboard')
})



module.exports = router