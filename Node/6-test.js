function AA(){
	this.bb=function(){
		console.log('aa');
	}
}

AA.prototype.call=function(){
	console.log("calling");
}
module.exports=AA;