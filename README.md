# Valorant Node.js wrapper
** Always up to date :)! **

This Node.js wrapper for Riot's game Valorant is currently in 'BETA' (yup a beta wrapper lol), as there's no official API for the game. We'll update this wrapper as soon as the API releases, because we'll need it for our project (and we love helping people).

## Installation
Install the dependency and start the server.

```sh
$ npm install node-valorant
```

## Set up
Using your production key:
```
const { Client, Enums } = require('node-valorant');

const Valorant = new Client({
	token: 'RGAPI-YOUR-API-KEY',
	environment: Enums.PRODUCTION
});
```

Using your sandbox/development key:
```
const { Client, Enums } = require('node-valorant');

const Valorant = new Client({
	token: 'RGAPI-YOUR-API-KEY',
	environment: Enums.SANDBOX
});
```

## Documentation

##### Create an user object
**With only the username and region**
```
const User = new Valorant.User({
	username: 'Zworez',
	discriminator: '000',
	region: 'EUW'
});

// or

const User = new Valorant.User({
	username: 'Zworez#000',
	region: 'EUW'
});
```

**With only the user id and region**
```
const User = new Valorant.User({
	id: 'USERID123',
	region: 'EUW'
});
```

##### Fetch the user information
You'll need the User ID if you only have the username and discriminator.
```
await User.fetch();
```

##### User ID
Get the user ID.
```
let id = await User.id();

console.log(id)
```

##### Username
Get the username.
```
let username = await User.username();

console.log(username)
```

##### Discriminator
Get the discriminator.
```
let discriminator = await User.discriminator();

console.log(discriminator)
```
##### Region
Get the region.
```
let region = await User.region();

console.log(region)
```