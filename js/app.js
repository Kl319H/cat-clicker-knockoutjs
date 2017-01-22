var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		var cat = this.currentCat();
		cat.clickCount(cat.clickCount() + 1);
	};
}

var Cat = function() {
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

	this.nicknames = ko.observableArray([{
			nickname: 'DMG'
		},
		{
			nickname: 'Damage'
		},
		{
			nickname: 'Derky Jerky'
		}
	]);
}

ko.applyBindings(new ViewModel());
