 //CopyrightLeft (ↄ) 2015 Yaseen <myaseen.khan@hotmail.com> 

function showAlert(){
	var popupWindow=document.getElementById('modalWindow');
	popupWindow.style.visibility='visible';

}
function closePopup(){
	var popupWindow=document.getElementById('modalWindow');
	popupWindow.style.visibility='hidden';

}

window.onkeyup=function(ev){
	if(ev.keyCode===27){
		document.getElementById('modalWindow').style.visibility='hidden';	
	}
}
