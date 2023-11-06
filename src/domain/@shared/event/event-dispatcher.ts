/* eslint-disable @typescript-eslint/no-unused-vars */
import EventDispatcherInterface from './event-dispatcher.interface'
import EventHandlerInterface from './event-handler.interface'
import EventInterface from './eventInterface'

export default class EventDispatcher implements EventDispatcherInterface {
	
	private eventHandlers: { [eventName: string]: EventHandlerInterface<EventInterface>[] } = {}

	get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
		return this.eventHandlers
	}

	notify(event: EventHandlerInterface<EventInterface>): void {}
	register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {

		if (!this.eventHandlers[eventName]) {
			this.eventHandlers[eventName] = []
		}
		this.eventHandlers[eventName].push(eventHandler)
	}
	unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {}
	unregisterAll(): void {}

}