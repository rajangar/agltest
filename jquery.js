$(document).ready(function() {
	$.ajax({
        url: "http://agl-developer-test.azurewebsites.net/people.json"
    }).then(function(data) {
		const result = _.chain(data)
			.groupBy("gender")
			.toPairs()
			.map(pair => _.zipObject(['gender', 'users'], pair))
			.value();
		for (item of result) {
			$(".result").append("<h3>" + item.gender + "</h3><ul>");
			var cat = [];
			for (user of item.users) {
				var arr = _.filter(user.pets, {'type': 'Cat'});
				for (it of arr) {
					cat.push(it.name);
				}
			}
			var sortCat = _.sortBy(_.union(cat));
			for (catt of sortCat) {
				$(".result").append("<li>" + catt + "</li>");
			}
			$(".result").append("</ul>");
		}
    });
});