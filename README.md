# RobloxJS
Roblox API written as a nodejs module.
(sorry if any of this is wrong, i had a panic attack half way through lol)

# How to install

Since my NPMJS account is currently down, you can only install using this command:

    npm i https://github.com/DwifteJB/RobloxJS
    
This requires GIT to be installed.


# How to use

## Requiring

	const robloxjs = require("@dwifte/robloxjs")

## Place Class

### Get Details of Place

<a href=https://github.com/S0ftwareUpd8/roblox-api#get-place-details>API Documentation</a>

    
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let placeDetails = await Place.getDetails()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Settings of Place
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-place-settings>API Documentation</a>

    
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let PlaceSettings = await Place.getSettings()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Universe ID of Place
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-universe-containing-place>API Documentation</a>

    
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let UniverseJSON = await Place.getUniverse()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Game Instances
<a href=https://games.roblox.com/docs#!/GameInstances/get_v1_games_placeId_servers_serverType>API Documentation</a>

    
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let gameInstances = await Place.getGameInstances()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

## Player Class

### Get Avatar Icons
<a href=https://thumbnails.roblox.com/docs#!/Avatar/get_v1_users_avatar_headshot>API DOCUMENTATION</a>

     
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let onlineStatus = await Player.getAvatar()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!
    
    
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let onlineStatus = await Player.getAvatarBust()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!
    
        
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let onlineStatus = await Player.getAvatarHeadshot()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!
    

### Get Online Status
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-online-status-of-an-user>API DOCUMENTATION</a>

    
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let onlineStatus = await Player.getOnlineStatus()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Player's Created Games
<a href=https://github.com/matthewdean/roblox-web-apis#get-a-users-profile-games>API DOCUMENTATION</a>

    
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let createdGames = await Player.getCreatedGames()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Player's General Info
<a href=https://users.roblox.com/docs#!/Users/get_v1_users_userId>API DOCUMENTATION</a>

    
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let generalInfo = await Player.getInfo()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Player's older Usernames
<a href=https://users.roblox.com/docs#!/Users/get_v1_users_userId>API DOCUMENTATION</a>

    
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let olderUsernames = await Player.getOldUsernames()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

## Universe Class

### How do I get a universe ID?

Well, simply use the Get Universe ID of Place section from the Player Class

### Get all places connected to Universe
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-places-in-an-universe>API DOCUMENTATION</a>

    
    (async () => {
        let Universe = await new robloxjs.Universe(1337) // Universe ID
        let UniversePlaces = await Universe.getPlaces()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Info
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-info-about-an-universe>API DOCUMENTATION</a>

    
    (async () => {
        let Universe = await new robloxjs.Universe(1337) // Universe ID
        let UniverseInfo = await Universe.getInfo()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Price of Game
<a href=https://games.roblox.com/docs#!/Games/get_v1_games_games_product_info>API DOCUMENTATION</a>

    
    (async () => {
        let Universe = await new robloxjs.Universe(1337) // Universe ID
        let UniversePrices = await Universe.getPrice()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

## Other Methods

### Get IDs from Usernames
<a href=https://users.roblox.com/docs#!/Users/post_v1_usernames_users>API DOCUMENTATION</a>


    
    (async () => {
        let IDS = await robloxjs.getPlayerIDFromUsernames(["RobsPlayz", "Roblox"], false) // IDS IN ARRAY, EXCLUDE BANNED MEMBERS?
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Note

**There is a "user" class that is currently unused in the index.js file, this is due to it not working and it is being looked on. If anyone could help our team look for a way to use it, that would be appreciated.**
# Special Thanks

Special thanks to <a href=https://github.com/S0ftwareUpd8/roblox-api>roblox-api</a> & <a href=https://github.com/matthewdean/roblox-web-apis>roblox-web-apis</a> for the documentation on the API
