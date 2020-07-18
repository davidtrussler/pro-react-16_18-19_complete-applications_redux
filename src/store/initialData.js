import {PRODUCTS, SUPPLIERS} from './dataTypes'; 

export const initialData = {
	[PRODUCTS]: [
		{
			id: 1, 
			name: 'Kayak', 
			category: 'Watersports', 
			price: '275'
		}, 
		{
			id: 2, 
			name: 'Lifejacket', 
			category: 'Watersports', 
			price: '48.95'
		}, 
		{
			id: 3, 
			name: 'Football', 
			category: 'Football', 
			price: '19.50'
		}
	], [SUPPLIERS]: [
		{
			id: 1, 
			name: 'Surf Dudes', 
			city: 'Bournemouth', 
			products: [1, 2]
		}, 
		{
			id: 2, 
			name: 'Field Supplies', 
			city: 'London', 
			products: [3]
		}
	]
}
