const fs = require("fs");
// write file
fs.writeFile("file.txt","this is my first file in node js", (err)=>{
    console.log(err);
})
//read file
fs.readFile("file.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }

});

//update file

fs.appendFile("file.txt2", "Hallo world",(err)=>{
    console.log(err);
})

// // delete file

fs.unlink("file.txt", (err)=>{
	console.log(err);
})