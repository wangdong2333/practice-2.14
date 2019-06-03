/*
function Demo(){
	var c=3;
	this.a=123;
	this.bb=function(){
		console.log(c);
	}
}*/

//exports.call=Demo;
//module.exports=Demo;
/*
module.exports={
	'bb':function(){
		console.log('laoshan');
	}
}*/

/*

exports是module.exports的引用  exports指向的地址  和 module.exports指向的地址一致
require才能找到module.exports*/

/*
exports.aa=function(){
	console.log(234);
}

exports={
	'aa':function(){

	}
}


var a=4;  0xa12b3c
a=5;      0x2d3c5b


var obj={
	'a':4;
}
obj.a=5;*/

/*
exports.bb=function(){
	console.log(123);
}*/

exports={
	'bb':function(){
		console.log('laoshan');
	}
}

//commonJS(require, exports  module.exports)

//var demo=new Demo();
//console.log(demo);

/*

Demo.prototype.write=function(){
	console.log("laoxie");
}

var demo =new Demo();
console.log(demo);*/
//demo.write();


console.log(Demo.prototype==demo.__proto__);

/*
demo.bb();
console.log(demo.a);
console.log(demo.c);*/

/*
class A{
	public function __construct(){

	}

	public function login(){

	}
}*/