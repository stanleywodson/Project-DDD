import { Sequelize } from 'sequelize-typescript'
import Customer from '../../domain/entity/customer'
import CustomerRepository from './customer.repository'
import Address from '../../domain/entity/address'
import CustomerModel from '../db/sequelize/model/customer.model'

describe('Product repository test', () => {

	let sequelize: Sequelize

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: 'sqlite',
			storage: ':memory:',
			logging: false,
			sync: { force: true },
		})

		sequelize.addModels([CustomerModel])
		await sequelize.sync()

	})

	afterEach(async () => {
		await sequelize.close()
	})

	it('shold create a customer', async () => { 
		const customerRespository = new CustomerRepository()
		const customer = new Customer('1', 'stanley1')
		const address = new Address('rua1', 'ddd', 'DF', '123')
		customer.Address = address
		await customerRespository.create(customer)

		const customerModel = await CustomerModel.findOne({ where: { id: '1' } })

		expect(customerModel.toJSON()).toStrictEqual({
			id: '1',
			name: customer.Name,
			active: customer.isActive(),
			street: address.getStreet,
			city: address.getCity,
			state: address.getState,
			postalCode: address.getPostalCode
		})

	})

	it('shold throw an error when customer is not found', async () => {
		const customerRepository = new CustomerRepository()
		await expect(customerRepository.find('123')).rejects.toThrow('Customer not found')
	})
})