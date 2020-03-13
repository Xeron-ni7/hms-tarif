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
    db.getappointmentbyPid(id,(err,r,dd)=>{
      res.render("patient/patient.ejs",{d:result,data:r});
    });
    
   });
  
});


router.post("/addMedicine",(req,res)=>{
   let {pid,mid,count} =req.body;
   db.addMedicine({pid,mid,count},function(e,r,d){
      res.json({status:true});
   });
});

router.post("/accept/:id",async(req,res)=>{
   let id=req.params.id;
db.updateAppointment(id,(err,result,d)=>{
   res.json({r:true});
  });
 
});

router.post("/cancel/:id",async(req,res)=>{
   let id=req.params.id;
   db.updateCancelAppointment(id,(err,result,d)=>{
      res.json({r:true});
     });
    
   });
   


router.get("/dd",async(req,res)=>{
   let id=req.cookies["doctor"].id;
db.getappointmentbyDid((err,r,d)=>{
   console.log(r);
   db.getappointmentbyDid((err,rs,d)=>{
      res.render("patient/doctor.ejs",{data:rs,d:r});
   });
   
  });
 
});

router.get("/doctors",async(req,res)=>{
    let p=req.cookies["patient"];
 db.getAllDoc((err,result,d)=>{
    
    console.log(result[0]);
    res.render("patient/pDoctors.ejs",{data:result,user:p});
   });
  
});

router.post("/doctors/search",async(req,res)=>{
   
db.getDocByName(name,(err,result,d)=>{
   res.json({data:result});
  });
 
});

router.get("/medicine",async(req,res)=>{
   let id=req.cookies["patient"].id;
db.getAllMedicine((err,result,d)=>{
   res.render("patient/medicine.ejs",{data:result,pid:id});
  });
 
});



router.post("/medicine/search",(req,res)=>{
   let text=req.body.name;
   db.getAllMedicineByName(text,(err,result,d)=>{
      res.json({data:result});
     });
    
   });

   router.post("/doctor/search",(req,res)=>{
      let text=req.body.name;
      db.getDocByName(text,(err,result,d)=>{
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


router.get('/profile', function(req, res){
	let id=req.cookies['patient'].id;
    let p={
		address:"Not Recorded",
		cause:"Not Recorded",
		admitAt:"Not Recorded"
	};
	let d={
		address:"Not Recorded",
		time:"00:00 AM",
		dept:1,
		fee:0.00
   }
   

db.getPatientAllData(id,function(err,re,d){
   console.log(re);
   db.getFee(id,(e,r,d)=>{
      let x=0;
      for(var i=0;i<r.length;i++){
         x+=r[i].pp;
      }
      res.render("patient/profile.ejs",{user:re[0],me:r,total:x});
})
   });
  
	
});


module.exports=router;

