import {
	Table,
	Model,
	PrimaryKey,
	Column
} from 'sequelize-typescript'

@Table({
	tableName: 'customers',
	timestamps: false,
})

export default class CustomerModel extends Model {
	[x: string]: any
	@PrimaryKey
	@Column
		id!: string

	@Column({ allowNull: false })
		name!: string

	@Column({ allowNull: false })
		street!: string

	@Column({ allowNull: false })
		city!: string

	@Column({ allowNull: false })
		state!: string

	@Column({ allowNull: false })
		postalCode!: string

}
