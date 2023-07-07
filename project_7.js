
function colorChange(){
    var a;
    a=document.getElementById('iam_you').style;
    a.backgroundColor = "Red";
    document.getElementById('hello').innerHTML= "Hello World"
}
function your_name(){
	var x = document.getElementById('name');
	x.value= x.value.toUpperCase();
}

function mouse_over(e){
	e.style.backgroundColor="gray";
	document.getElementById('overout_msg').innerHTML="Thank You.";
}
function mouse_out(e){
	e.style.backgroundColor="gray";
	document.getElementById('overout_msg').innerHTML="Thank You";
}


function mouse_up(f){
	f.style.backgroundColor="darkblue";
	// document.getElementById('updown_msg').innerHTML="Thank You Idiot";
	f.innerHTML="Thank You Idiot"
}

function mouse_down(f){
	f.style.backgroundColor="darkblue";
	// document.getElementById('updown_msg').innerHTML="Thank You Idiot";
	f.innerHTML="Thank You Idiot"
}

function onFocus(){
		document.getElementById('of').style.backgroundColor="Darkred";
		document.getElementById('of').style.color="Red";
	}

function onBlur(){
		document.getElementById('of').style.backgroundColor="Yellow";
		document.getElementById('of').style.color="Brown";
	}