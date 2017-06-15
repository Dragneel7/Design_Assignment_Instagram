function fun(id){
	
	var x = document.getElementById(id).src;
	document.getElementById('ind_image').style.display="block";
	document.getElementById('ind_image1').src=x;
}
console.log("hello");
function close1(){
	
	document.getElementById('ind_image').style.display="none";
}
function fun3(){
	console.log("yes");
	document.getElementById('pop').style.display="block";
	document.getElementById('dots').style.display="none";
}
function close2(){
	document.getElementById('pop').style.display="none";
		document.getElementById('dots').style.display="block";
}