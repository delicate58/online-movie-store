const router=require("express").Router();

const  authenticate=require("../middlewares/authenticate");
router.get("/",authenticate,(req,res)=>{
   res.json({actegories:[{title:"category One"}]})
});

module.exports=router;