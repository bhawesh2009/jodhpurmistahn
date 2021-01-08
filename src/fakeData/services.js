import icoDeliver from '../Image/Icons/deliver.png';
import fastdelivery from '../Image/img/fastdelivery.png';
import notification from '../Image/Icons/notification.png';
import freshsoup from '../Image/img/freshsoup.png';
import home from '../Image/Icons/home.png';
import homeDelivery from '../Image/img/home-delivery.png';

const services = [
	{
		id          : 3426,
		title       : 'Fresh Soups',
		description :
			'Home Made Tiifin Center provide You Fresh Tiffin',
		icon        : notification,
		img         : freshsoup
	},
	{
		id          : 1234,
		title       : 'Order Online',
		description :
			'Fresh food directly from our kitchen to your home. Your Tiffin is just one click away!',
		icon        : icoDeliver,
		img         : fastdelivery
	},
	{
		id          : 2134,
		title       : 'Door Delivery',
		description :
			'Home made, delivered safely to your door. Now offering no-contact delivery.',
		icon        : home,
		img         : homeDelivery
	}
];

export default services;
