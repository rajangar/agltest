function people(data)
{
	const result = _.chain(data)
		.groupBy("gender")
		.toPairs()
		.map(pair => _.zipObject(['gender', 'users'], pair))
		.value();
	var allObjects = [];
	for (item of result) {
		var cat = [];
		for (user of item.users) {
			var arr = _.filter(user.pets, {'type': 'Cat'});
			for (it of arr) {
				cat.push(it.name);
			}
		}
		var sortCat = _.sortBy(_.union(cat));
		var oneObject = _.zipObject(['gender', 'cats'], [item.gender, sortCat]);
		allObjects.push(oneObject);
	}
	return allObjects;		
}

$(document).ready(function() {
	$.ajax({
        url: "http://agl-developer-test.azurewebsites.net/people.json"
    }).then(data => 
		{
			var result = people(data);
			for (item of result) {
				$(".result").append("<h3>" + item.gender + "</h3><ul>");
				for (cat of item.cats) {
					$(".result").append("<li>" + cat + "</li>");
				}
				$(".result").append("</ul>");
			}
		});
});