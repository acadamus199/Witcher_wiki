	var q = document.getElementById("quen");
	var cdx = q.getContext('2d');
	var c = 0;
		cdx.beginPath();
		cdx.moveTo(135,120);//Prawy róg
		cdx.lineTo(100,190);//Lewy róg
		cdx.lineTo(10,10);//Dół
		cdx.lineTo(190,10);
		cdx.lineTo(145,100);//Linia w dół od góry
		cdx.lineTo(90,100);
		cdx.lineTo(80,80);
		cdx.lineTo(137,80);
		cdx.lineTo(160,30);
		cdx.lineTo(40,30);
		cdx.lineTo(100,150);
		cdx.lineTo(115,120);
		cdx.lineTo(135,120);
		cdx.lineWidth=3;
		cdx.strokeStyle="#ffd12b";
		cdx.fillStyle="#fff875";
		cdx.shadowColor="#f0b513";
		cdx.shadowBlur=10;
		cdx.stroke();
		cdx.fill();
		function quen(c){
		if(c%2==0){
			cdx.shadowBlur=0;
			cdx.fillStyle="#fff875";
			cdx.fill();
		}else{
			cdx.shadowBlur=0;
			cdx.fillStyle="#faf037";
			cdx.fill();
		}
	}
function z5(){
	let qu = setInterval(function(){quen(c);c++;},500);
	q.addEventListener("mouseout",function(){clearInterval(qu);cdx.fillStyle="#fff875";cdx.fill();cdx.shadowBlur=0;});
}
q.addEventListener("mouseover",z5);
function infoQU(){
	var menq = document.getElementById('box');
	menq.style.display="block";
	document.getElementById("ob").innerHTML="<img src='Source/quen.jpg' id='obq' alt='quen' style='transform-style: preserve-3d;' height='300px' width='300px'>";
	document.getElementById("gif").innerHTML="<img src='Source/quen.gif' id='gifq' alt='quen' height='300px' width='500px'>";
	obq.animate([
		{ transform: 'rotateY(0deg)' },
		{ transform: 'rotateY(360deg)' }
		],{duration: 5000,iterations: Infinity});
	var wigq = document.getElementById('box2');
	wigq.style.display="block";
	wigq.innerHTML="<p>Quen is a simple magical sign used by witchers. When cast it forms a protective field around the casting witcher which protects him from sonic waves and similar attacks, but not from the physical blows. Its expanded form can protect from the wider range of offensive actions. Contrary to Heliotrop, which is active only for a moment and cushions from a single powerful attack, Quen is active until broken or dispelled.</p>";

var au = document.createElement("AUDIO");
au.setAttribute("src","Source/quen.mp3");
au.setAttribute("autoplay", "loop", "preload");
au.setAttribute("id","au");
au.volume=0.1;
document.body.appendChild(au);
document.getElementById("gerwalt").style.display="none";
}
q.addEventListener("click",infoQU);

