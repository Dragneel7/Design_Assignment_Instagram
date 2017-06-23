function fun(id){
	document.getElementById('overlay').style.display="block";

	var x = document.getElementById(id).src;
	document.getElementById('ind_image').style.display="block";
	document.getElementById('ind_image1').src=x;
	document.getElementById('footer').style.zIndex="6";
}


function fun3(){
	console.log("yes");
		document.getElementById('footer').style.zIndex="2";
	document.getElementById('overlay2').style.display="block";
	document.getElementById('pop1').style.display="block";
		document.getElementById('dots').style.display="none";
	

}
function close2(){
		document.getElementById('footer').style.zIndex="6";
		document.getElementById('overlay2').style.display="none";
	document.getElementById('pop1').style.display="none";
		document.getElementById('dots').style.display="block";
}
