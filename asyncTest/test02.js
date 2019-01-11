const async = require("async");
const fs = require("fs");
async.map(["test01.js","test02.js"],fs.stat,function(err,results){
    console.log(results);
});