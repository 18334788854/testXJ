const async = require("async");
function step(times){
return new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log(`${times} second.`);
	},times*1000);
})
}
//async.series([step(2),step(3),step(1)],function(err,result){
//	console.log("结束了！");
//})
Promise.all([step(3),step(5),step(1)]).then(function(results){
	console.log(results);
}).catch(function(err){
	console.err(err);
})
function reduce(arr){
	let s = Promise.resolve();
	arr.forEach(function(item){
		s = s.then(item)
	});
	return s;
}
reduce([step(3),step(5),step(1)]).then(function(result){
	console.log(result);
})
