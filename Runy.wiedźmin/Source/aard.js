	var z = document.getElementById("aard");
	var cddx = z.getContext('2d');
	var k = 0;
		cddx.beginPath();
		cddx.moveTo(135,120);//Prawy róg
		cddx.lineTo(100,190);//Lewy róg
		cddx.lineTo(10,10);//Dół
		cddx.lineTo(190,10);
		cddx.lineTo(145,100);//Linia w dół od góry
		cddx.lineTo(90,100);
		cddx.lineTo(80,80);
		cddx.lineTo(137,80);
		cddx.lineTo(160,30);
		cddx.lineTo(40,30);
		cddx.lineTo(100,150);
		cddx.lineTo(115,120);
		cddx.lineTo(135,120);
		cddx.lineWidth=3;
		cddx.strokeStyle="blue";
		cddx.fillStyle="lightblue";
		cddx.shadowColor="blue";
		cddx.shadowBlur=10;
		cddx.stroke();
		cddx.fill();
		function aard(k){
		if(k%2==0){
			cddx.shadowBlur=0;
			cddx.fillStyle="lightblue";
			cddx.fill();
		}else{
			cddx.shadowBlur=0;
			cddx.fillStyle="#6ab9eb";
			cddx.fill();
		}
	}
function z3(){
	let ar = setInterval(function(){aard(k);k++;},500);
	z.addEventListener("mouseout",function(){clearInterval(ar);cddx.fillStyle="lightblue";cddx.fill();cddx.shadowBlur=0;});
}
z.addEventListener("mouseover",z3);
function infoAA(){
	var men = document.getElementById('box');
	men.style.display="block";
	document.getElementById("ob").innerHTML="<img src='Source/aard.png' id='obi' alt='aard' style='transform-style: preserve-3d;' height='300px' width='300px'>";
	document.getElementById("gif").innerHTML="<img src='Source/aard.gif' id='gifi' alt='aard' height='300px' width='500px'>";
	obi.animate([
		{ transform: 'rotateY(0deg)' },
		{ transform: 'rotateY(360deg)' }
		],{duration: 5000,iterations: Infinity});
	var wig = document.getElementById('box2');
	wig.style.display="block";
	wig.innerHTML="<p>Znak powodujący wytworzenie i wypchnięcie energii uderzeniowej od siebie w kierunku przeciwnika lub przeszkody. Jest to zaklęcie z grupy czarów telekinetycznych. Bazuje na żywiole powietrza. W grze wiedźmin 1 znaku możemy się nauczyć po znalezieniu i dotknięciu odpowiedniego kręgu żywiołów. Aard można wykonać w postaci fali uderzeniowej, albo dość szybko wygenerowanej z wcześniej wspomnianej energii uderzeniowej pocisku, który ze względu na skumulowaną siłę jest w stanie zniszczyć co prawda jeden, ale za to bardzo wytrzymały obiekt lub powalić, a nawet ogłuszyć i mocno zranić duże stworzenie można też owy pocisk wystrzelić w dół przez co ten odbije się o wszystkich wokół wiedźmina - powalając w odległości kilku metrów pobliskie jednostki i je ogłaszając lub raniąc. Alternatywnym trybem znaku jest lodowy aard, który jak sama nazwa mówi pozwala zamrozić wrogie jednostki.</p>";

var au = document.createElement("AUDIO");
au.setAttribute("src","Source/aard.mp3");
au.setAttribute("autoplay", "loop", "preload");
au.setAttribute("id","au");
au.volume=0.5;
document.body.appendChild(au);
document.getElementById("gerwalt").style.display="none";
}
z.addEventListener("click",infoAA);