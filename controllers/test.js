var router=require("express").Router();

router.get("/",(req,res)=>{
  res.send("<h1>im in test</h1>");
});

router.post("/pp",(req,res)=>{
   res.json({status:"vai "});
});


let oppo=function(n){

}

module.exports=router;