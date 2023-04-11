	var x = document.getElementById("igni");
	var ctx = x.getContext("2d");
	var a=0;
		ctx.beginPath();
		ctx.moveTo(190,190);
		ctx.lineTo(10,190);//Prawy róg na lewo
		ctx.lineTo(90,10);//Lewy róg na góra środek
		ctx.lineTo(101,41);//Góra środek kąt SS
		ctx.lineTo(45,170);//Kąt SS wewnętrzny lewy róg
		ctx.lineTo(155,170);//Wew Lróg prawW
		ctx.lineTo(108,80);//GóraWew
		ctx.lineTo(117,58);//Kąt
		ctx.lineTo(190,190);
		ctx.shadowBlur=10;
		ctx.shadowColor="red";
		ctx.fillStyle="#e62f22";
		ctx.fill();
		ctx.strokeStyle="darkred";
		ctx.lineWidth=3;
		ctx.stroke();
		ctx.save;
		function igni(a){
			if(a%2==0){
				ctx.shadowBlur=0;
				ctx.fillStyle="red";
				ctx.fill();
			}else{
				ctx.shadowBlur=0;
				ctx.fillStyle="#e62f22";
				ctx.fill();
			}
		}
function z(){
	let ig = setInterval(function(){igni(a);a++;},500);
	x.addEventListener("mouseout",function(){clearInterval(ig);ctx.fillStyle="#e62f22";ctx.fill();ctx.shadowBlur=0;});
}
x.addEventListener("mouseover",z);
function infoIG(){
	var men = document.getElementById('box');
	men.style.display="block";
	document.getElementById("ob").innerHTML="<img src='Source/igni.png' id='obi' alt='igni' style='transform-style: preserve-3d;' height='300px' width='300px'>";
	document.getElementById("gif").innerHTML="<img src='Source/igni.gif' id='gifi' alt='igni' height='300px' width='500px'>";
	obi.animate([
		{ transform: 'rotateY(0deg)' },
		{ transform: 'rotateY(360deg)' }
		],{duration: 5000,iterations: Infinity});
	var wig = document.getElementById('box2');
	wig.style.display="block";
	wig.innerHTML="<p>Igni is a simple magical sign used by witchers. It is comprised of a pyrokinetic burst that can repel and ignite opponents, as well as start fires. The Igni sign is one of five simple magical signs used by witchers and causes a burst of fire that can repel and ignite opponents, as well as start fires. Geralt can choose to upgrade this sign to increase its effectiveness. Igni is incredibly effective against foes that are weak to fire. There is also an alternative form of Igni that allows players to release a steady flow of fire instead of one quick burst, which can be particularly useful for continuously burning enemies even after they've been ignited. It can light enemies on fire and do damage over time. In some cases, this effect causes the enemy to panic. Additionally, any flammable gases in the air can be ignited to cause powerful explosions that can hurt and stun your enemies.</p>";

var au = document.createElement("AUDIO");
au.setAttribute("src","Source/fire.mp3");
au.setAttribute("autoplay", "loop", "preload");
au.setAttribute("id","au");
au.volume=0.5;
document.body.appendChild(au);
document.getElementById("gerwalt").style.display="none";
}
x.addEventListener("click",infoIG);