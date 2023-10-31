import Address from '../../domain/entity/address'
import Customer from '../../domain/entity/customer'
import CustomerRepositoryInterface from '../../domain/repository/customer-repository.interface'
import CustomerModel from '../db/sequelize/model/customer.model'

export default class CustomerRepository implements CustomerRepositoryInterface {
	async create(entity: Customer): Promise<void> {
		await CustomerModel.create({
			id: entity.Id,
			name: entity.Name,
			active: entity.isActive(),
			street: entity.Address.getStreet,
			city: entity.Address.getCity,
			state: entity.Address.getState,
			postalCode: entity.Address.getPostalCode
		})
	}
	async update(entity: Customer): Promise<void> {
		await CustomerModel.update({
			name: entity.Name,
			street: entity.Address.getStreet,
			city: entity.Address.getCity,
			state: entity.Address.getState,
			active: entity.isActive(),
			postalCode: entity.Address.getPostalCode

		}, { where: { id: entity.Id } })
	}
	async find(id: string): Promise<Customer> {
		let customerModel
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			customerModel = await CustomerModel.findOne({ where: { id }, rejectOnEmpty: true })
		} catch (error) {
			throw new Error('Customer not found')
		}

		const customer = new Customer(id, customerModel.name)
		const address = new Address(customerModel.street, customerModel.city, customerModel.state, customerModel.postalCode)
		customer.changeAddress(address)
		return customer
	}

	findAll(): Promise<Customer[]> {
		throw new Error('Method not implemented.')
	}

}