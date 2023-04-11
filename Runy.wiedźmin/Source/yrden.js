	var j = document.getElementById('yrden');
	var yrd = j.getContext('2d');
	var m = 0;
	yrd.beginPath();
	yrd.moveTo(30,190);//Lewy dolny róg
	yrd.lineTo(170,190);
	yrd.lineTo(75,35);//Przekątna wewnętrzna
	yrd.lineTo(125,35);//Prawo	
	yrd.lineTo(106,65);//Przekątna zewnętrzna
	yrd.lineTo(122.5,87.5);//Przekątna zewnętrzna
	yrd.lineTo(170,10);//Prawy górny róg
	yrd.lineTo(30,10);//Lewy górny róg
	yrd.lineTo(125,165);//Przekątna wewnętrzna
	yrd.lineTo(75,165);//Lewo
	yrd.lineTo(94,135);//Przekątna zewnętrzna
	yrd.lineTo(77.5,112.5);//Przekątna zewnętrzna
	yrd.lineTo(30,190);
	yrd.lineTo(170,190);
	yrd.strokeStyle="#562773";
	yrd.lineWidth=3;
	yrd.shadowBlur=10;
	yrd.shadowColor="#55008a";
	yrd.stroke();
	yrd.fillStyle="#ca81f7"//#b355ed";
	yrd.fill();
		function yrden(m){
		if(m%2==0){
			yrd.shadowBlur=0;
			yrd.fillStyle="#c271f5";
			yrd.fill();
		}else{
			yrd.shadowBlur=0;
			yrd.fillStyle="#ca81f7";
			yrd.fill();
		}
	}
function z4(){
	let ll = setInterval(function(){yrden(m);m++;},500);
	j.addEventListener("mouseout",function(){clearInterval(ll);yrd.fillStyle="#ca81f7";yrd.fill();yrd.shadowBlur=0;});
}
j.addEventListener("mouseover",z4);
function infoYR(){
	var men = document.getElementById('box');
	men.style.display="block";
	document.getElementById("ob").innerHTML="<img src='Source/yrden.jpg' id='obi' alt='yrden' style='transform-style: preserve-3d;' height='300px' width='300px'>";
	document.getElementById("gif").innerHTML="<img src='Source/yrden.gif' id='gifi' alt='yrden' height='400px' width='auto'>";
	obi.animate([
		{ transform: 'rotateY(0deg)' },
		{ transform: 'rotateY(360deg)' }
		],{duration: 5000,iterations: Infinity});
	var wig = document.getElementById('box2');
	wig.style.display="block";
	wig.innerHTML="<p>Znak zabezpieczający przed otwarciem i atakami. Geralt użył tego znaku podczas starcia ze Strzygą w Ostatnim życzeniu. Zasuwając pokrywę sarkofagu zakreślił właśnie Yrden blokując grobowiec przed otwarciem. Czar ten należy pośrednio do wyładowania atmosferycznego. W pierwszym wiedźminie z serii gier znaku możemy się nauczyć po znalezieniu i dotknięciu odpowiedniego Kręgu żywiołów. Służy jako solidna pułapka. Yrden wiedźmin może nakreślić nie tylko na powierzchni pod sobą d okoła, ale i na wybranym przez siebie miejscu lub zabezpieczyć tym znakiem dany obiekt.</p>";

var au = document.createElement("AUDIO");
au.setAttribute("src","Source/yrden.mp3");
au.setAttribute("autoplay", "loop", "preload");
au.setAttribute("id","au");
au.volume=0.2;
document.body.appendChild(au);
document.getElementById("gerwalt").style.display="none";
}
j.addEventListener("click",infoYR);