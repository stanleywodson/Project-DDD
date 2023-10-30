import { Sequelize } from 'sequelize-typescript'
import ProductModel from '../db/sequelize/model/product.model'
import Product from '../../domain/entity/product'
import ProductRepository from './product.repository'

describe('Product repository test', () => {

	let sequelize: Sequelize

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: 'sqlite',
			storage: ':memory:',
			logging: false,
			sync: { force: true },
		})

		sequelize.addModels([ProductModel])
		await sequelize.sync()

	})
	afterEach(async () => {
		await sequelize.close()
	})

	it('should create a product', async () => {
		const productRepository = new ProductRepository()
		const product = new Product('1', 'Product 1', 'test', 100)

		await productRepository.create(product)

		const productModel = await ProductModel.findOne({ where: { id: '1' } })

		expect(productModel.toJSON()).toStrictEqual({
			id: '1',
			name: 'Product 1',
			category: 'test',
			price: 100
		})
	})

	it('should update a product', async () => {
		const productRepository = new ProductRepository()
		const product = new Product('1', 'Product 1', 'test', 100)

		await productRepository.create(product)

		const productModel = await ProductModel.findOne({ where: { id: '1' } })

		expect(productModel.toJSON()).toStrictEqual({
			id: '1',
			name: 'Product 1',
			category: 'test',
			price: 100
		})

		await productRepository.update(new Product('1', 'Product 2', 'test', 200))
		const productModel2 = await ProductModel.findOne({ where: { id: '1' } })
		expect(productModel2.toJSON()).toStrictEqual({
			id: '1',
			name: 'Product 2',
			category: 'test',
			price: 200
		})
	})

	it('should find a product', async () => {
		const productRepository = new ProductRepository()
		const product = new Product('1', 'Product 1', 'test', 100)

		await productRepository.create(product)

		const productModel = await ProductModel.findOne({ where: { id: '1' } })

		expect(productModel.toJSON()).toStrictEqual({
			id: '1',
			name: 'Product 1',
			category: 'test',
			price: 100
		})
	})

	it('should find all products', async () => {
		// expect(true).toBeTruthy()
		const productRepository = new ProductRepository()
		const product = new Product('1', 'Product 1', 'test', 100)

		await productRepository.create(product)
		const product2 = new Product('2', 'Product 2', 'test', 200)
		await productRepository.create(product2)
		const productsFound = await productRepository.findAll()
		expect(productsFound).toStrictEqual([product, product2])

	})
})



