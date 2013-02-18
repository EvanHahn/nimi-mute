var nimiMute = ko.observableArray(nimi);

var lukin = ko.observable("");

nimiMute().forEach(function(nimi) {

	// mi ken lukin e ni?
	nimi.pali = ko.computed(function() {
		if (lukin().trim()) {
			var joENimi = nimi.nimi.indexOf(lukin()) != -1;
			var joESitelen = false;
			nimi.sitelen.forEach(function(sitelen) {
				joESitelen = joESitelen || (sitelen.indexOf(lukin()) != -1);
			});
			return joENimi || joESitelen;
		} else {
			return true;
		}
	}, nimi);

});

ko.applyBindings(nimiMute, document.getElementsByClassName("nimi-mute")[0]);
ko.applyBindings(lukin, document.getElementsByClassName("lukin")[0]);