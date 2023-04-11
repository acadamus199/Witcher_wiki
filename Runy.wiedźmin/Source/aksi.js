	var y = document.getElementById("aksi");
	var cdd = y.getContext('2d');
	var b = 0;
		cdd.beginPath();
		cdd.moveTo(190,10);//Prawy róg
		cdd.lineTo(10,10);//Lewy róg
		cdd.lineTo(100,190);//Dół
		cdd.lineTo(168,62.5);//PrawyDół
		cdd.lineTo(145,62.5);
		cdd.lineTo(100,155);
		cdd.lineTo(40,30);
		cdd.lineTo(179,30);
		cdd.lineTo(190,10);
		cdd.strokeStyle="green";
		cdd.shadowColor="green";
		cdd.shadowBlur=10;
		cdd.lineWidth=3;
		cdd.fillStyle="lightgreen";
		cdd.stroke();
		cdd.fill();
		cdd.save;
		function aksi(b){
		if(b%2==0){
			cdd.shadowBlur=0;
			cdd.fillStyle="#0ec940";
			cdd.fill();
		}else{
			cdd.shadowBlur=0;
			cdd.fillStyle="lightgreen";
			cdd.fill();
		}
	}
function z2(){
	let ak = setInterval(function(){aksi(b);b++;},500);
	y.addEventListener("mouseout",function(){clearInterval(ak);cdd.fillStyle="lightgreen";cdd.fill();cdd.shadowBlur=0;});
}
y.addEventListener("mouseover",z2);
function infoAK(){
	var mena = document.getElementById('box');
	mena.style.display="block";
	document.getElementById("ob").innerHTML="<img src='Source/aksi.jpg' id='oba' alt='aksi' style='transform-style: preserve-3d;' height='300px' width='auto'>";
	document.getElementById("gif").innerHTML="<img src='Source/aksi.gif' id='gifa' alt='aksi' height='300px' width='500px'>";
	oba.animate([
		{ transform: 'rotateY(0deg)' },
		{ transform: 'rotateY(360deg)' }
		],{duration: 5000,iterations: Infinity});
	var wiga = document.getElementById('box2');
	wiga.style.display="block";
	wiga.innerHTML="<p>Axii is a simple magical sign comprised of a hypnotic effect and is used by witchers. It can calm down people and creatures, manipulate their minds or be used to hex enemies, causing them to fight alongside the caster. The effect wears off over time or can be prematurely broken if they take damage from the caster. In the game, the Axii sign can be used to lessen the number of hostile creatures or humanoids Geralt is fighting, a way of evening the odds. The witcher's skill with the sign is developed through the allocation of talents. Note that while hexed creatures will fight alongside the witcher, their kills will not grant experience.</p>";

var au = document.createElement("AUDIO");
au.setAttribute("src","Source/aksi.mp3");
au.setAttribute("autoplay", "loop", "preload");
au.setAttribute("id","au");
au.volume=0.5;
document.body.appendChild(au);
document.getElementById("gerwalt").style.display="none";
}
y.addEventListener("click",infoAK);
