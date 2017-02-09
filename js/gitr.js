(function() {

	app = {
		items: [],
		addItem: function(item) {

			this.items.push(Number(item));
			return this;

		},
		getAverage: function() {

			var
			total = 0,
			count = this.items.length,
			loop = count;

			while(loop--) {
				total += this.items[loop];
			};

			return (total/count);

		}
	};

	var
	getNode = function(id) {
		return document.getElementById(id);
	},
	inputNode = getNode("input"),
	outputNode = getNode("output"),
	addButton = getNode("add"),
	getButton = getNode("get");

	getButton.addEventListener("click", function() {

		outputNode.value = app.getAverage();
		return false;

	});

	addButton.addEventListener("click", function() {

		app.addItem(inputNode.value);
		inputNode.value = "";
		return false;

	});

})();