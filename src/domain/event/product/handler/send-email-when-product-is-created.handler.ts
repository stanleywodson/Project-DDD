import EventHandlerInterface from '../../@shared/event-handler.interface'
import ProductCreatedEvent from '../product-created.event'

export default class SendEmailWhenProductIsCreatedHandler 
implements EventHandlerInterface<ProductCreatedEvent> {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	handle(event: ProductCreatedEvent): void {
		console.log('Sending email to....')
		
	}
}