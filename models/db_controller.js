var mysql =require('mysql');
var express = require('express');
var router = express.Router();


var con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hms'
});

con.connect(function(err){
    if(err){
        throw err;
        console.log('you are connected');

    }
});


/**
 * Tarif
 */

   module.exports.getPatientData=(id,callback)=>{
       var q="select * from users, patients where users.id=patients.id and users.id="+id;
       con.query(q,callback);
   }

 /**
  * End
  */


module.exports.signup = function(username,email,password,status,callback) {
    var query =  "INSERT INTO `users`(`username`,`email`,`password`,`email_status`) VALUES ('" + username + "','" + email + "','" + password + "','"+status+"')";
    con.query(query,callback);
    query =  "INSERT INTO `patients`(`id`) VALUES ((select id from users where email='"+email+"'))";
    con.query(query,()=>{
        console.log("done");
    });
}



module.exports.getuserid = function (email,callback){
    var query = "select *from verify where email = '"+email+"' ";
    con.query(query,callback);
}

module.exports.verify = function (username,email,token,callback){
    var query = "insert into `verify` (`username`,`email`,`token`) values ('"+username+"','"+email+"','"+token+"')";
    con.query(query,callback);
}

module.exports.add_doctor= function(first_name,last_name,email,dob,gender,address,phone,image,department,biography,time,callback){
    var query = "INSERT INTO `doctor`(`first_name`,`last_name`,`email`,`dob`,`gender`,`address`,`phone`,`image`,`department`,`biography`,`times`) values ('"+first_name+"','"+last_name+"','"+email+"','"+dob+"','"+gender+"','"+address+"','"+phone+"','"+image+"','"+department+"','"+biography+"','"+time+"')";
    con.query(query,callback);
 
    
}


module.exports.updateUserName = function(data,id,callback){
    console.log(data);

    var query = `update users set username='${data}' where id=${id}`;
    console.log(query);
    con.query(query,callback);
}

module.exports.updateEmail = function(data,id,callback){
    var query = `update users set email='${data}' where id=${id}`;
    con.query(query,callback);
}

module.exports.updatePassword = function(data,id,callback){
    var query = `update users set password='${data}' where id=${id}`;
    con.query(query,callback);
}

module.exports.updateAddress = function(data,id,callback){
    var query = `update patients set address='${data}' where id=${id}`;
    con.query(query,callback);
}

module.exports.updateCause = function(data,id,callback){
    var query = `update patients set cause='${data}' where id=${id}`;
    con.query(query,callback);
}



module.exports.getAllDoc = function(callback){
    var query = "select * from doctor" ;
    con.query(query,callback);
}

module.exports.getAllMedicine = function(callback){
    var query = "select * from medicine" ;
    con.query(query,callback);
}

module.exports.getAllMedicineByName = function(name,callback){
    var query = "select * from medicine where name like '%"+name+"%'" ;
    con.query(query,callback);
}

module.exports.getDocbyId = function(id,callback){
    var query = "select * from doctor where id ="+id;
    con.query(query,callback);
}

module.exports.getDocByName = function(name,callback){
    var query = "select * from doctor where first_name like '%"+name+"%'";
    con.query(query,callback);
}
module.exports.getappointmentbyDidNew=function(id,callback){
    var query = "select * from appointment where did="+id;
    con.query(query,callback);
}

module.exports.getEmpbyId = function(id,callback){
    var query = "select * from employee where id ="+id;
    con.query(query,callback);
}

module.exports.getPatientAllData = function(id,callback){
    var query = "select * from users,patients where users.id ="+id+" and patients.id=users.id";
    con.query(query,callback);
}

module.exports.editDoc = function(id,first_name,last_name,email,dob,gender,address,phone,image,department,biography,callback){
    var query = "update `doctor` set `first_name`='"+first_name+"', `last_name`='"+last_name+"', `email`='"+email+"', `dob`='"+dob+"',`gender`='"+gender+"',`address`='"+address+"',`phone`='"+phone+"',`image`='"+image+"',`department`='"+department+"',`biography`='"+biography+"' where id="+id;
    con.query(query,callback);
   // console.log(query);
}

module.exports.editEmp = function(id,name,email,contact,join_date,role,callback){
    var query = "update `employee` set `name`='"+name+"', `email`='"+email+"', `contact`='"+contact+"', `join_date`='"+join_date+"', `role`='"+role+"' where id="+id;
    con.query(query,callback);
}

module.exports.deleteDoc = function(id,callback){
    //console.log("i m here");
    var query = "delete from doctor where id="+id;
    con.query(query,callback);
}

module.exports.deleteEmp = function(id,callback){
    //console.log("i m here");
    var query = "delete from employee where id="+id;
    con.query(query,callback);
}

module.exports.deletemed = function(id,callback){
    //console.log("i m here");
    var query = "delete from store where id="+id;
    con.query(query,callback);
}

module.exports.postcomplain = function(message,name,email,subject,callback){
    var query = "insert into complain (message,name,email,subject) values ('"+message+"','"+name+"','"+email+"','"+subject+"')";
    console.log(query);
    con.query(query,callback);
}

module.exports.getcomplain = function(callback){
    var query = "select * from complain";
    con.query(query,callback);
}


module.exports.add_appointment =function(p_name,department,d_name,date,time,email,phone,callback){
    var query = "insert into appointment (patient_name,department,doctor_name,date,time,email,phone) values ('"+p_name+"','"+department+"','"+d_name+"','"+date+"','"+time+"','"+email+"','"+phone+"')";
    con.query(query,callback);
}

module.exports.addAppointment =function(pid,did,time,callback){
    var query = "insert into appointment (pid,did,time) values ("+pid+","+did+",'"+time+"')";
    con.query(query,callback);
}

// module.exports.getallappointment = function(callback){
//     var query = "select * from appointment";
//     con.query(query,callback);
// }

module.exports.getallappointment = function(id,callback){
    var query = "select * from appointment,users where appointment.did="+id+" and appointment.pid=users.id";
    con.query(query,callback);
}

 module.exports.searchDoc = function(key,callback){
     var query='SELECT  *from doctor where first_name like "%'+key+'%"';
     con.query(query,callback);
     console.log(query);
 }

 module.exports.searchEmp = function(key,callback){
    var query='SELECT  *from employee where name  like "%'+key+'%"' ;
    con.query(query,callback);
    console.log(query);
}


 module.exports.getappointmentbyid = function(id,callback){
     var query = "select * from appointment where id="+id;
     console.log(query);
     con.query(query,callback);
 }

 module.exports.getappointmentbyPid = function(id,callback){
    var query = "select * from appointment,doctor where pid="+id+" and appointment.did=doctor.id";
    //console.log(query);
    con.query(query,callback);
}
module.exports.getappointmentbyDid = function(callback){
    var query = "select * from users,patients,appointment where appointment.pid=users.id and patients.id=appointment.pid";
    console.log(query);
    con.query(query,callback);
}


 module.exports.editappointment = function(id,p_name,department,d_name,date,time,email,phone,callback){
     var query = "update appointment set patient_name='"+p_name+"',department='"+department+"',doctor_name='"+d_name+"',date='"+date+"',time='"+time+"',email='"+email+"',phone='"+phone+"' where id="+id;
     con.query(query,callback);
 }

 module.exports.deleteappointment = function(id,callback){
     var query = "delete from appointment where id="+id;
     con.query(query,callback);
 }
//module.exports =router;


module.exports.findOne =function (email , callback){
    var query = "select *from users where email='"+email+"'" ;
    con.query(query,callback);
    console.log(query);
}

module.exports.temp = function(id,email,token,callback){
    var query = "insert into `temp` (`id`,`email`,`token`) values ('"+id+"','"+email+"','"+token+"')";
    con.query(query,callback);
}

module.exports.checktoken=function(token,callback){
    var query = "select *from temp where token='"+token+"'";
    con.query(query,callback);
    console.log(query);
}

module.exports.setpassword =function(id,newpassword,callback){
    var query = "update `users` set `password`='"+newpassword+"' where id="+id;
    con.query(query,callback);
}

module.exports.add_employee = function(name,email,contact,join_date,role,callback){
    var query = "Insert into `employee` (`name`,`email`,`contact`,`join_date`,`role`) values ('"+name+"','"+email+"','"+contact+"','"+join_date+"','"+role+"')";
    con.query(query,callback);
    console.log(query);
}

module.exports.addMed = function(name,p_date,expire,e_date,price,quantity,callback){
    var query = "Insert into `store` (name,p_date,expire,expire_end,price,quantity) values('"+name+"','"+p_date+"','"+expire+"','"+e_date+"','"+price+"','"+quantity+"')";
    console.log(query);
    con.query(query,callback);
}

module.exports.getMedbyId =function(id,callback){
    var query = "select * from store where id="+id;
    con.query(query,callback);
}

module.exports.editmed =function(id,name,p_date,expire,e_date,price,quantity,callback){
    var query = "update store set name='"+name+"', p_date='"+p_date+"',expire='"+expire+"' ,expire_end='"+e_date+"',price='"+price+"',quantity='"+quantity+"' where id="+id;
    console.log(query);
    con.query(query,callback);
}

module.exports.getallmed =function (callback){
    var query = "select *from store";
    con.query(query,callback);
}


module.exports.getAllemployee = function (callback){
    var query = "select * from employee";
    con.query(query,callback);
}

module.exports.add_leave = function (name,id,type,from,to,reason,callback){
    var query = "Insert into `leaves` (`employee`,`emp_id`,`leave_type`,`date_from`,`date_to`,`reason`) values ('"+name+"','"+id+"','"+type+"','"+from+"','"+to+"','"+reason+"')";
    console.log(query);
    con.query(query,callback);

    
}

module.exports.getAllLeave=function(callback){
    var query = "Select * from leaves";
    con.query(query,callback);
    
}

module.exports.matchtoken = function(id,token,callback){
    var query = "select * from `verify` where token='"+token+"' and id="+id;
    con.query(query,callback);
    console.log(query);
}

module.exports.updateverify = function (email,email_status,callback){
    var query = "update `users` set `email_status`='"+email_status+"' where `email`='"+email+"'";
    con.query(query,callback);
    
}

module.exports.updateAppointment = function (id,callback){
    var query = "update `appointment` set `status`=1 where id="+id;
    con.query(query,callback);
    
}

module.exports.addMedicine = function (data,callback){
    
con.query(`select price,count from medicine where mid=${data.mid}`,(e,r,d)=>{
    let pp=data.count*r[0].price;
    var query = `insert into fee (pid,details,count,pp) values(${data.pid},(select name from medicine where mid=${data.mid}),${data.count},${pp})`;
     
    con.query(query,callback);
    query=`update medicine set count=${r[0].count-data.count} where mid=${data.mid}`;
    con.query(query,(e,r,d)=>{
        console.log(query);
    });

});
   
    
}


module.exports.getFee=function(pid,callback){
    var query="select * from fee where pid="+pid;
    con.query(query,callback);
}

module.exports.updateCancelAppointment = function (id,callback){
    var query = "delete from appointment where id="+id;
    con.query(query,callback);
    
}

module.exports.updateCancelAppointmentByP = function (id,pid,callback){
    var query = "delete from appointment where did="+id+" and pid="+pid;
    con.query(query,callback);
    
}


module.exports.add_dept = function (name,desc,callback){
    var query = "insert into departments(department_name,department_desc) values ('"+name+"','"+desc+"')";
    con.query(query,callback);
}


module.exports.getalldept = function (callback){
    var query = "select * from departments";
    con.query(query,callback);
}

module.exports.delete_department = function(id,callback){
    var query = "delete from departments where id="+id;
    con.query(query,callback);
}

module.exports.getdeptbyId = function(id,callback){
    var query = "select * from departments where id="+id;
    con.query(query,callback);
}

module.exports.edit_dept= function(id,name,desc,callback){
    var query = "update departments set department_name='"+name+"',department_desc='"+desc+"' where id="+id;
    con.query(query,callback);
}