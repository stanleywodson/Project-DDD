import Customer from '../../domain/entity/customer'
import CustomerRepositoryInterface from '../../domain/repository/customer-repository.interface'
import CustomerModel from '../db/sequelize/model/customer.model'

export default class CustomerRepository implements CustomerRepositoryInterface {
	async create(entity: Customer): Promise<void> {
		await CustomerModel.create({
			id: entity.Id,
			name: entity.Name,
			street: entity.Address.street,
			city: entity.Address.city,
			state: entity.Address.state,
			active: entity.isActive,
			postalCode: entity.Address.postalCode
		})
	}
	async update(entity: Customer): Promise<void> {
		await CustomerModel.update({
			name: entity.Name,
			street: entity.Address.street,
			city: entity.Address.city,
			state: entity.Address.state,
			active: entity.isActive,
			postalCode: entity.Address.postalCode

		}, { where: { id: entity.Id } })
	}
	async find(id: string): Promise<Customer> {
		const customerModel = await CustomerModel.findOne({ where: { id } })
		return new Customer(
			customerModel.id,
			customerModel.name,
		)
	}
	findAll(): Promise<Customer[]> {
		throw new Error('Method not implemented.')
	}

}