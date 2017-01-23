var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

	this.catLevel = ko.computed(function() {
		var curCount = this.clickCount();
		var level = 'Newborn';
		if (curCount >= 10) {
			level = 'Infant';
		}
		if (curCount >= 20) {
			level = 'Teen';
		}
		return level;
	}, this);

	this.nicknames = ko.observableArray(data.nicknames);
}


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	cats.forEach(function(cat, i) {
		self.catList.push(new Cat(cat));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		var cat = this;
		cat.clickCount(cat.clickCount() + 1);
	};

	this.setCurrentCat = function(cat) {
		self.currentCat(cat);
	}
}



ko.applyBindings(new ViewModel());
