const router=require("express").Router();
const db=require("../models/db_controller");

router.get("*",(req,res,next)=>{
   if(req.cookies["patient"]==null){
       res.redirect("/login");
   }

   next();
});


router.get("/",async(req,res)=>{
    let id=req.cookies["patient"].id;
 db.getPatientData(id,(err,result,d)=>{
    console.log(result[0]);
    res.render("patient/patient.ejs",result[0]);
   });
  
});


router.get("/doctors",async(req,res)=>{
    let p=req.cookies["patient"];
 db.getAllDoc((err,result,d)=>{
    console.log(result[0]);
    res.render("patient/pDoctors.ejs",{data:result,user:p});
   });
  
});

router.get("/medicine",async(req,res)=>{
   
db.getAllMedicine((err,result,d)=>{
   res.render("patient/medicine.ejs",{data:result});
  });
 
});

router.post("/medicine/search",(req,res)=>{
   let text=req.body.name;
   db.getAllMedicineByName(text,(err,result,d)=>{
      res.json({data:result});
     });
    
   });


router.post("/doctor/:id",(req,res)=>{
   let id=req.params.id;
    
   db.getDocbyId(id,(err,r,d)=>{
       console.log(r[0]);
    res.json({data:r[0]});
   });

});


router.post("/addappointment",(req,res)=>{
   let {pid,did,time}=req.body;
   db.addAppointment(pid,did,time,function(r){
       console.log(r);
      res.json({status:true});

   })
});


module.exports=router;

