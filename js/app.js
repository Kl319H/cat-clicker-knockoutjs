var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Derk');
	this.imgSrc = ko.observable('https://imgflip.com/s/meme/Cute-Cat.jpg');
	this.imgAttribution = ko.observable('https://imgflip.com/s/meme/Cute-Cat.jpg');

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

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
