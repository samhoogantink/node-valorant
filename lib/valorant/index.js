const Enums = require('./../enums');

const User = require('./user');

class Client {

	constructor(args) {
		this.settings = {
			token: args.token || undefined,
			environment: args.environment || Enums.PRODUCTION,
			...args
		}

		if(this.settings.token == undefined || this.settings.token == '') {
			throw new Error('Missing API token; please add your Riot Games API token (get one on developer.riotgames.com)');
		}
	}

}

Client.prototype.User = User;

module.exports = Client;