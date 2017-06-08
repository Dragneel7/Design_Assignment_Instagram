function fun(id){
	
	var x = document.getElementById(id).src;
	document.getElementById('ind_image').style.display="block";
	document.getElementById('ind_image1').src=x;
}
console.log("hello");
function close1(){
	
	document.getElementById('ind_image').style.display="none";
}