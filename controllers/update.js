let router=require("express").Router();
const db=require("../models/db_controller");

router.get("/name/:username/:id",(req,res)=>{
   db.updateUserName(req.params.username,req.params.id,(err,r,a)=>{
      res.redirect("/patient/profile");
   });
});

router.get("/email/:email/:id",(req,res)=>{
    db.updateEmail(req.params.email,req.params.id,(err,r,a)=>{
        res.redirect("/patient/profile");
     });
});
router.get("/address/:address/:id",(req,res)=>{
    db.updateAddress(req.params.address,req.params.id,(err,r,a)=>{
        res.redirect("/patient/profile");
     });
});
router.get("/cause/:cause/:id",(req,res)=>{
    db.updateCause(req.params.cause,req.params.id,(err,r,a)=>{
        res.redirect("/patient/profile");
     });
});

router.get("/password/:password/:id",(req,res)=>{
    db.updatePassword(req.params.password,req.params.id,(err,r,a)=>{
        res.redirect("/patient/profile");
     });
});

router.get("/appointment/cancel/:id/:pid",(req,res)=>{
   db.updateCancelAppointmentByP(req.params.id,req.params.pid,(e,r,d)=>{
       res.redirect("/home");
   })
});



module.exports=router;