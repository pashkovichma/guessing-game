class GuessingGame {
    constructor(min=0, max=0) {
    	this._min=min;
    	this._max=max;
    	this.result=0;
    }
    setRange(min, max) {
    	this._min= min;
    	this._max=max;
     return this;
    } 
    guess() {
        if ((this._max-this._min)%2) {
        		this.result = (this._min+(this._max-this._min)/2+0.5);
        		return this.result;
        }
        else {
        		this.result = (this._min+(this._max-this._min)/2);
        		return this.result;
        }    	    	
    }
    lower() {
    	this._max = this.result;
    }
    greater() {
    	this._min = this.result;
    }
}
module.exports = GuessingGame;