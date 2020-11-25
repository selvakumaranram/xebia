'use strict';

const fs = require('fs');

const express = require("express");




exports.savefile = async (req, res) => {
    try {
      const content = req.body.content;
      const filename = req.body.filename;
      
    /* input for savefile  {
    "content":{   
       "name": "Mike",
       "age": "23", 
       "gender": "Male",
        "department": "English",
        "car": "Honda" } ,
        "filename":"123"
   } */ 
     
    
    const created=await fs.writeFileSync("${filename}.json", JSON.stringify(content));
    return res.status(422).json({"status-code":"422","message":"file sucessfully created",
"response":created
})

    }catch(err){
        return res.status(422).json({"status-code":"422","message":"file not created",created:created}
        )
  };
}

exports.readfile = async (req, res) => {
    try {
      
      const filename = req.body.filename;
    //   let student = { 
    //     name: 'Mike',
    //     age: 23, 
    //     gender: 'Male',
    //     department: 'English',
    //     car: 'Honda' 
    // };
     
    
    const created=await fs.readFile("${filename}.json");
    return res.status(422).json({"status-code":"422","message":"file sucessfully created",
"response":created
})

    }catch(err){
        return res.status(422).json({"status-code":"422","message":"file not not exist or cannot be readed"}
        )
  };
}

exports.read = async (req, res) => {
    try {
      
      const id = req.params.id;
     
    
    const readthefile=await fs.readFile("${id}.json");
    return res.status(422).json({"status-code":"422","message":"file sucessfully created",
"response":readthefile
})

    }catch(err){
        return res.status(422).json({"status-code":"422","message":"file not not exist or cannot be readed"}
        )
  };
}