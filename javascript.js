// Task 1 - trafficlights

function myFun () {    
    var red=document.getElementById('red');
	var yellow=document.getElementById('yellow');
	var green=document.getElementById('green');

	red.style.opacity=1;
		
    setTimeout(function () {
		red.style.opacity=1;
		yellow.style.opacity=1;
		green.style.opacity=.2; 
    },5000);

    setTimeout(function () {
		red.style.opacity=.2;
		yellow.style.opacity=.2;
		green.style.opacity=1;
	},7000);
	
	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=1;
		green.style.opacity=1;
	},12000);
	
	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=.2;
		green.style.opacity=1;
	},14000);

	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=1;
		green.style.opacity=1;
	},14500);

	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=.2;
		green.style.opacity=1;
	},15000);

	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=1;
		green.style.opacity=1;
	},15500);

	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=.2;
		green.style.opacity=1;
	},16000);

	setTimeout(function () {
        red.style.opacity=.2;
		yellow.style.opacity=1;
		green.style.opacity=1;
	},16500);

    setTimeout(function () {
		red.style.opacity=1;
		yellow.style.opacity=.2;
		green.style.opacity=.2;
    },17000);
}

var timer = setInterval(function () {
    myFun()
},18000);

// Task 2 - Napojnica

var zlatan = {
	ime: 'Zlatan',
	racuni: [124, 48, 268, 180, 42],
	izracunajNapojnice: function() {
		this.napojnice = [];
		this.ukupniRacuni = [];

		for (var i = 0; i < this.racuni.length; i++) {
			var procenat;

			if(this.racuni[i] < 50) {
				procenat = .2;
			}
			else if (this.racuni[i] >= 50 && this.racuni[i] <= 200) {
				procenat = .15;
			}
			else {
				procenat = .1;
			}

			this.napojnice[i] = this.racuni[i] * procenat;
			
			this.ukupniRacuni[i] = this.racuni[i] + this.napojnice[i];

		}
	}
}

zlatan.izracunajNapojnice();
console.log(zlatan.napojnice);
console.log(zlatan.ukupniRacuni);