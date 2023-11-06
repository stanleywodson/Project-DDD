import OrderItem from './orderItem'

export default class Order {
	private id: number
	private customerId: number
	private items: OrderItem[]

	constructor(id: number, customerId: number, items: OrderItem[]) {
		this.id = id
		this.customerId = customerId
		this.items = items
	}

}