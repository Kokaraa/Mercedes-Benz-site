function dodajUslugu(){
	let usluga = document.querySelector('#usluga').value;
	let ime = usluga;
	if(ime=='Servis' || ime=='servis'){
		ime = 'Auto Line - Servis je servis sa velikim iskustvom, kapacitetom i mogućnostima';
	}else if(ime=='tehnički pregled' || ime=='Tehnički pregled' || ime=='tehnicki pregled' || ime=='Tehnicki pregled' ){
		ime = 'Drugi tekst';
	}else if (ime=='Salon automobila' || ime=='salon automobila'){
		ime = 'Treci tekst';
	}else if (ime=='Test voznja' || ime=='Test vožnja' || ime=='test voznja' || ime=='test vožnja'){
		ime = 'cetvrti tekst';
	}


	
	let sablon = `<article class="sluga">
					<header>
						<h2>${usluga}</h2>
					</header>
						<p>${ime}</p>
				  </article>`
				  
	document.querySelector('#usluge').innerHTML = sablon;
	
}



function init(){
	let btn = document.querySelector('#pretrazi');
	btn.addEventListener('click', dodajUslugu);
	
}

window.addEventListener('load', init);


