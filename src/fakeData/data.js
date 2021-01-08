import vegetarian1 from '../Image/Vegetarian/vegetarian1.jpg';
import vegetarian2 from '../Image/Vegetarian/vegetarian2.jpg';
import vegetarian3 from '../Image/Vegetarian/vegetarian3.jpg';
import vegetarian4 from '../Image/Vegetarian/vegetarian4.jpg';
import vegetarian5 from '../Image/Vegetarian/vegetarian5.jpg';
import vegetarian6 from '../Image/Vegetarian/vegetarian6.jpg';

import soup1 from '../Image/Soup/soup1.jpg';
import soup2 from '../Image/Soup/soup2.jpg';
import soup3 from '../Image/Soup/soup3.jpg';
import soup4 from '../Image/Soup/soup4.jpg';
import soup5 from '../Image/Soup/soup5.jpg';
import soup6 from '../Image/Soup/soup6.jpg';

import vegan1 from '../Image/Vegan/vegan1.jpg';
import vegan2 from '../Image/Vegan/vegan2.jpg';
import vegan3 from '../Image/Vegan/vegan3.jpg';
import vegan4 from '../Image/Vegan/vegan4.jpg';
import vegan5 from '../Image/Vegan/vegan5.jpg';
import vegan6 from '../Image/Vegan/vegan6.jpg';

const foods = [{
		id: 0,
		type: 'Lunch and Dinner',
		slug: 'Lunch abd Dinner',
		items: [{
				id: 0,
				name: 'Gujrati Tiffin',
				title: 'Lunch',
				info: '6 roti,1 sabji,1 dal,chawal,1papad,salad,chatni.',
				price: 60,
				img: vegetarian1
			},
			{
				id: 1,
				name: 'Punchabi Tiffin ',
				title: 'Lunch',
				info: '6 roti,1 panner sabji,1 dal,chawal,1papad,salad,chatni..',
				price: 70,
				img: vegetarian2
			},
			{
				id: 2,
				name: 'Rajasthni Tiffin',
				title: 'Lunch',
				info: '6 roti,1 sabji,1 dal,chawal,1papad,salad,chatni,curd.',
				price: 65,
				img: vegetarian3
			},
			{
				id: 3,
				name: 'Sada Tiffin',
				title: 'Lunch',
				info: '6 roti,1 sabji',
				price: 40,
				img: vegetarian4
			},
			{
				id: 4,
				name: 'Dal Batti Tiffin',
				title: 'Lunch',
				info: '5 batti,dal,salad,curd,chtni,salad',
				price: 60,
				img: vegetarian5
			},
			{
				id: 5,
				name: 'Sada parath Tiffin',
				title: 'Lunch',
				info: '4 paratha,dal,sabji',
				price: 50,
				img: vegetarian6
			},
		]
	},
	{
		id: 1,
		type: 'Breakfast',
		slug: 'Breakfast',
		items: [{
				id: 0,
				name: 'Aloo Paratha',
				title: 'Breakfast',
				info: 'Aloo With Raita.',
				price: 35,
				img: soup1
			},
			{
				id: 1,
				name: 'sada Paratah',
				title: 'Breakfast',
				info: 'Sada partah with curd.',
				price: 20,
				img: soup2
			},
			{
				id: 2,
				name: 'Puri bhaji',
				title: 'Breakfast',
				info: '10 puri and bhaji.',
				price: 20,
				img: soup3
			},
			{
				id: 3,
				name: 'Masala dosa',
				title: 'Breakfast',
				info: 'Masala dosa .',
				price: 50,
				img: soup4
			},
			{
				id: 4,
				name: 'Kadi khichadi',
				title: 'Breakfast',
				info: 'Khatiya wadi kadi and Khichadi',
				price: 40,
				img: soup5
			},
			{
				id: 5,
				name: 'Uttapam',
				title: 'Breakfast',
				info: 'Uttapam masala',
				price: 50,
				img: soup6
			}
		]
	},
	{
		id: 2,
		type: 'All india',
		slug: 'All india',
		items: [{
				id: 0,
				name: 'MAKKI ki papad',
				title: 'All india',
				info: 'yellow Makki Ka Paped best for qulaity .',
				price: 160,
				img: vegan1
			},
			{
				id: 1,
				name: 'Rice ki Papad',
				title: 'All india',
				info: 'best home made by order fresh rice papad',
				price: 200,
				img: vegan2
			},
			{
				id: 2,
				name: 'Mung Dal Papad',
				title: 'All india',
				info: 'Best mung dal papad Home mad',
				price: 300,
				img: vegan3
			},
			{
				id: 3,
				name: 'Gurati Mathiya',
				title: 'All india',
				info: 'Gujrati Mathiya best quality and Home made',
				price: 380,
				img: vegan4
			},
			{
				id: 4,
				name: 'Rice Cheps',
				title: 'All india',
				info: 'Rice Cheps home made ',
				price: 225,
				img: vegan5
			},
			{
				id: 5,
				name: 'Suji Ka papad',
				title: 'All india',
				info: 'Suji Ka papad',
				price: 200,
				img: vegan6
			}
		]
	}
];

export default foods;