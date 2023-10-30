import Address from './address'

export default class Customer {
	private id: string
	private name: string
	private active: boolean = false
	private address!: Address


	constructor(id: string, name: string) {
		this.id = id
		this.name = name
		this.validate()

	}
	get Name() {
		return this.name
	}

	get Id() {
		return this.id
	}

	isActive() {
		return this.active
	}

	validate() {
		if (this.name.length === 0) {
			throw new Error('Name is required')
		}

		if (this.id.length === 0) {
			throw new Error('Invalid ID')
		}
		// if (this.address === undefined) {
		// 	throw new Error('Address is invalid')
		// }
	}

	set Address(address: Address) {
		this.address = address
	}

	changeName(name: string) {
		this.name = name
		this.validate()
	}

	activete() {
		this.active = true
	}

	deactivate() {
		this.active = false
	}
}