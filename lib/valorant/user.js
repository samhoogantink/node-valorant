class User {

	Region = false;
	Stats = false;
	Matches = false;

	constructor(args) {
		this.settings = {
			username: this.parseUsername(args.username).username || undefined,
			discriminator: args.discriminator || (args.username ? this.parseUsername(args.username).discriminator : undefined),
			region: args.region,
			id: args.id || undefined
		}
	}

	parseUsername(username) {
		return {
			username: username.split('#')[0],
			discriminator: username.split('#')[1]
		}
	}

	fetch() {
		// fetch the user id if you only have the username and disciminator
		// fetch the username and discriminator if you only have the user id
	}

	id() {
		return new Promise((resolve, reject) => {
			if(this.settings.id == undefined) {
				return reject();
			}

			return resolve(this.settings.id);
		});
	}

	username() {
		return new Promise((resolve, reject) => {
			if(this.settings.username == undefined) {
				return reject();
			}

			return resolve(this.settings.username);
		});
	}

	discriminator() {
		return new Promise((resolve, reject) => {
			if(this.settings.discriminator == undefined) {
				return reject();
			}

			return resolve(this.settings.discriminator);
		});
	}

	region() {
		return new Promise((resolve, reject) => {
			if(this.settings.region == undefined) {
				return reject();
			}

			return resolve(this.settings.region);
		});
	}

	// Disabled until there's an endpoint.
	stats() {
		return new Promise((resolve, reject) => {
			reject();
		});
	}

	// Disabled until there's an endpoint.
	matches() {
		return new Promise((resolve, reject) => {
			reject();
		});
	}

}

module.exports = User;