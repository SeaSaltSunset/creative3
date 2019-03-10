let app = new Vue({
	el: '#app',
	data: {
		numVal: '123',
		min: 1,
		max: '4',
		addedVal: 0,
		subbedVal: 0,
		currentImg: "4sides.png",
		result: '0',
		rollResult: '0',

		scales: {
		limit: '4',
		},



	},

	watch: {
	},
	
	methods: {
		fourSides() { 
		   this.max = 4;
		   this.currentImg = '4sides.png';
		},

		sixSides() {
		   this.max = 6;
		   this.currentImg = '6sides.png';
		},
		eightSides() { 
		   this.max = 8;
		   this.currentImg = '8sides.png';
		},
		tenSides() {
		   this.max = 10;
		   this.currentImg = '10sides.png';
		},
		twelveSides() { 
		   this.max = 12;
		   this.currentImg = '12sides.png';
		},
		twentySides() {
		   this.max = 20;
		   this.currentImg = '20sides.png';
		},
		roll() {
			this.addedVal = parseInt(this.addedVal);
			this.subbedVal = parseInt(this.subbedVal);
			this.rollResult = parseInt(this.rollResult);	
			this.rollResult = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
			this.result = this.rollResult + this.addedVal - this.subbedVal;
			
		},




	},
});
