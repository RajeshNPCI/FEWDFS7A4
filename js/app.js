function outerFunction(innerFunction){
	innerFunction();
	console.log("Hello world from inner function");	
}
outerFunction(function(){
});