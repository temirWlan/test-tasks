export default class Component {
	constructor() {
		this.component = document.createElement('div');
		this.state = {};
	}

	init() {
		this.render();
		this.addEventHandlers();
		return this.component;
	}

	render() {}
	addEventHandlers() {}
}