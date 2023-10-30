/* eslint-disable @typescript-eslint/no-unused-vars */

import Address from './entity/address'
import Customer from './entity/customer'
import Order from './entity/order'
import OrderItem from './entity/orderItem'

//ID
const customer = new Customer('1', 'John')
const myAddress = new Address('123 Main St', 'Cityville', 'SP', '12345')
customer.Address = myAddress
customer.activete()


// Objeto - Entidade
const item1 = new OrderItem(1, 'item1', 10)
const item2 = new OrderItem(2, 'item2', 20)
const item3 = new OrderItem(3, 'item3', 30)
const order = new Order(1, 1, [item1, item2, item3])

