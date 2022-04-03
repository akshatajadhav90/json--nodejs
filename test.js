
const fs=require("fs");

const bioData={
    name : "Akshata",
    Age : 22,
    channel : "DYP",
};

  /*  1.  convert object to json
2.  add json data into new File
3.  readfile
4.  again convert back to js obj original  
5.  show on console  */


const jsonData=JSON.stringify(bioData);

/*fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done");
});*/


fs.readFile("json1.json", "utf8", (err, data)=>{
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
