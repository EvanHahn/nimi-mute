var words = ko.observableArray(wordList);

var search = ko.observable("");

words().forEach(function(word) {
	word.inSearch = ko.observable(true); // TODO
});

ko.applyBindings(words, document.getElementsByClassName("word-list")[0]);
ko.applyBindings(search, document.getElementsByClassName("search")[0]);