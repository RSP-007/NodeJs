
const fs =require("fs");

//fs.writeFile("message.txt","hello this is the message to be stored in new file message.txt",(err)=>{  //(file,data,callback{})
//    if (err) throw error;
//    console.log("The file has been saved");      

//});

fs.readFile("message.txt",'utf-8',(err,data)=>{    //(path,options,callback(err,data{}))
    if (err) throw error;
    console.log(data);

});