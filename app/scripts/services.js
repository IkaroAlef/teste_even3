'use strict';

var app = angular.module('QuadriMix')
var comics = new Array();
$.getJSON('http://localhost:8080/dishes', function (data) {
	comics = data;
})
app.factory('comicsFactory', function () {
	/* JSON POST, um por vez:
	[{
	"name": "Uthapizza",
	"image": "images/uthapizza.png",
	"category": "mains",
    "label": "Hot",
    "price": "4.99",
    "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
},
{
	"name": "Zucchipakoda",
	"image": "images/zucchipakoda.png",
	"category": "appetizer",
	"label": "",
	"price": "1.99",
	"description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
},
{
	"name": "Vadonut",
	"image": "images/vadonut.png",
	"category": "appetizer",
	"label": "New",
	"price": "1.99",
	"description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
},
{
	"name": "ElaiCheese Cake",
	"image": "images/elaicheesecake.png",
	"category": "dessert",
	"label": "",
	"price": "2.99",
	"description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
}]*/
	/*= [
				{
					"_id": 0,
					"name": "Uthapizza",
					"image": "images/uthapizza.png",
					"category": "mains",
					"label": "Hot",
					"price": "4.99",
					"description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
					"comments": [
						{
							"rating": 5,
							"comment": "Imagine all the eatables, living in conFusion!",
							"author": "John Lemon",
							"date": "2012-10-16T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
							"author": "Paul McVites",
							"date": "2014-09-05T17:57:28.556094Z"
	                    },
						{
							"rating": 3,
							"comment": "Eat it, just eat it!",
							"author": "Michael Jaikishan",
							"date": "2015-02-13T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Ultimate, Reaching for the stars!",
							"author": "Ringo Starry",
							"date": "2013-12-02T17:57:28.556094Z"
	                    },
						{
							"rating": 2,
							"comment": "It's your birthday, we're gonna party!",
							"author": "25 Cent",
							"date": "2011-12-02T17:57:28.556094Z"
	                    }
	                  ]
	                },
				{
					"_id": 1,
					"name": "Zucchipakoda",
					"image": "images/zucchipakoda.png",
					"category": "appetizer",
					"label": "",
					"price": "1.99",
					"description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
					"comments": [
						{
							"rating": 5,
							"comment": "Imagine all the eatables, living in conFusion!",
							"author": "John Lemon",
							"date": "2012-10-16T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
							"author": "Paul McVites",
							"date": "2014-09-05T17:57:28.556094Z"
	                    },
						{
							"rating": 3,
							"comment": "Eat it, just eat it!",
							"author": "Michael Jaikishan",
							"date": "2015-02-13T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Ultimate, Reaching for the stars!",
							"author": "Ringo Starry",
							"date": "2013-12-02T17:57:28.556094Z"
	                    },
						{
							"rating": 2,
							"comment": "It's your birthday, we're gonna party!",
							"author": "25 Cent",
							"date": "2011-12-02T17:57:28.556094Z"
	                    }
	                  ]
	                },
				{
					"_id": 2,
					"name": "Vadonut",
					"image": "images/vadonut.png",
					"category": "appetizer",
					"label": "New",
					"price": "1.99",
					"description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
					"comments": [
						{
							"rating": 5,
							"comment": "Imagine all the eatables, living in conFusion!",
							"author": "John Lemon",
							"date": "2012-10-16T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
							"author": "Paul McVites",
							"date": "2014-09-05T17:57:28.556094Z"
	                    },
						{
							"rating": 3,
							"comment": "Eat it, just eat it!",
							"author": "Michael Jaikishan",
							"date": "2015-02-13T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Ultimate, Reaching for the stars!",
							"author": "Ringo Starry",
							"date": "2013-12-02T17:57:28.556094Z"
	                    },
						{
							"rating": 2,
							"comment": "It's your birthday, we're gonna party!",
							"author": "25 Cent",
							"date": "2011-12-02T17:57:28.556094Z"
	                    }
	                  ]
	                },
				{
					"_id": 3,
					"name": "ElaiCheese Cake",
					"image": "images/elaicheesecake.png",
					"category": "dessert",
					"label": "",
					"price": "2.99",
					"description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
					"comments": [
						{
							"rating": 5,
							"comment": "Imagine all the eatables, living in conFusion!",
							"author": "John Lemon",
							"date": "2012-10-16T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
							"author": "Paul McVites",
							"date": "2014-09-05T17:57:28.556094Z"
	                    },
						{
							"rating": 3,
							"comment": "Eat it, just eat it!",
							"author": "Michael Jaikishan",
							"date": "2015-02-13T17:57:28.556094Z"
	                    },
						{
							"rating": 4,
							"comment": "Ultimate, Reaching for the stars!",
							"author": "Ringo Starry",
							"date": "2013-12-02T17:57:28.556094Z"
	                    },
						{
							"rating": 2,
							"comment": "It's your birthday, we're gonna party!",
							"author": "25 Cent",
							"date": "2011-12-02T17:57:28.556094Z"
	                    }
	                  ]
	                }
	              ];*/

	var menufac = {};

	menufac.getComics = function () {
		/*beforeSend: function (xhr) {
					xhr.setRequestHeader ("Authorization", "Basic " + btoa("user" + ":" + "dacacd22-4f21-4f63-a8b5-f6a030d27428"));
			}
                $.getJSON('http://localhost:8080/dishes', function(data){
                  console.log(data.name)
                })
			*/
		/*
		$.ajax({
			type: "GET",
			url: "http://localhost:8080/dishes",
			dataType: 'json',
			async: false,
			headers: {
				"Authorization": "Basic " + btoa("user" + ":" + "dacacd22-4f21-4f63-a8b5-f6a030d27428")
			},
			data: '{ "comment" }',
			success: function () {
				alert('Thanks for your comment!');
			}
		}); */
		return comics;
	};

	menufac.getComic = function (index) {
		return comics[index];
	};

	return menufac;

});
