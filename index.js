// create object in js

const bioData={
    name : "Akshata",
    Age : 22,
    channel : "DYP",
};

//console.log(bioData.channel);

//convert object to json using STRINGIFY Function

const jsonData= JSON.stringify(bioData);  // stringify is to convert object to json

console.log(jsonData);

// convert json to object using PARSE function

const objData=JSON.parse(jsonData);
console.log(objData);
