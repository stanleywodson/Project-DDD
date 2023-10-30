export default class Address {
	constructor(
		public street: string,
		public city: string,
		public state: string,
		public postalCode: string
	) {
		this.validateProperty('street', street)
		this.validateProperty('city', city)
		this.validateProperty('state', state)
		this.validateProperty('postalCode', postalCode)
		this.validateState(state)
	}

	private validateProperty(propertyName: string, value: string) {
		if (!value || value.trim() === '') {
			throw new Error(`A propriedade "${propertyName}" não pode estar vazia ou em branco.`)
		}
	}

	private validateState(state: string) {
		const validStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
		if (!validStates.includes(state)) {
			throw new Error(`Estado inválido: ${state}`)
		}
	}

	// Método para obter uma representação de string do endereço
	toString(): string {
		return `${this.street}, ${this.city}, ${this.state} ${this.postalCode}`
	}
}