// console.log("123")
//console.log("xx");
console.log("start");
for(var i=0;i<5;i++){
	setTimeout(function(){
		console.log(i);
	},0);
}
console.log("end");


/*
start-->end-->  0 1 2 3 4 (x)
                4 4 4 4 4 (X)
                5 5 5 5 5 (√)*/
异步代码---event loop
1、当前线程空闲
2、满足触发条件
