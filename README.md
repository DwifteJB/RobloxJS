# RobloxJS
Roblox API written as a nodejs module.
(sorry if any of this is wrong, i had a panic attack half way through lol)
# How to use

## Place Class

### Get Details of Place

<a href=https://github.com/S0ftwareUpd8/roblox-api#get-place-details>API Documentation</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let placeDetails = await Place.getDetails()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Settings of Place
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-place-settings>API Documentation</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let PlaceSettings = await Place.getSettings()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Universe ID of Place
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-universe-containing-place>API Documentation</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let UniverseJSON = await Place.getUniverse()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Game Instances
<a href=https://games.roblox.com/docs#!/GameInstances/get_v1_games_placeId_servers_serverType>API Documentation</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Place = await new robloxjs.Place(2506738224) // Place ID
        let gameInstances = await Place.getGameInstances()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

## Player Class

### Get Headshot player URL
<a href=https://github.com/matthewdean/roblox-web-apis#search-apis>API DOCUMENTATION</a>

<a href=https://github.com/matthewdean/roblox-web-apis#valid-thumbnail-sizes>Valid Thumbnail Sizes</a>


    const robloxjs = require("robloxjs")
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let HeadshotURL = await Player.getHeadShotPicture(400,400)
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!


### Get Outfit Picture URL
<a href=https://github.com/matthewdean/roblox-web-apis#search-apis>API DOCUMENTATION</a>

<a href=https://github.com/matthewdean/roblox-web-apis#valid-thumbnail-sizes>Valid Thumbnail Sizes</a>


    const robloxjs = require("robloxjs")
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let OutFitURL = await Player.getOutfitPicture(400,400)
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Avatar Thumbnails
<a href=https://github.com/matthewdean/roblox-web-apis#search-apis>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let ListOfAvatarThumbnails = await Player.getAvatarThumbnails()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Online Status
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-online-status-of-an-user>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let onlineStatus = await Player.getOnlineStatus()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Player's Created Games
<a href=https://github.com/matthewdean/roblox-web-apis#get-a-users-profile-games>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let createdGames = await Player.getCreatedGames()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Player's General Info
I completely forgot where I found this.

    const robloxjs = require("robloxjs")
    (async () => {
        let Player = await new robloxjs.Player(1) // Player ID
        let createdGames = await Player.getInfo()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

## Universe Class

### How do I get a universe ID?

Well, simply use the Get Universe ID of Place section from the Player Class

### Get all places connected to Universe
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-places-in-an-universe>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Universe = await new robloxjs.Universe(1337) // Universe ID
        let UniversePlaces = await Universe.getPlaces()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Info
<a href=https://github.com/S0ftwareUpd8/roblox-api#get-info-about-an-universe>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Universe = await new robloxjs.Universe(1337) // Universe ID
        let UniverseInfo = await Universe.getInfo()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Get Price of Game
<a href=https://games.roblox.com/docs#!/Games/get_v1_games_games_product_info>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let Universe = await new robloxjs.Universe(1337) // Universe ID
        let UniversePrices = await Universe.getPrice()
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

## Other Methods

### Get IDs from Usernames
<a href=https://users.roblox.com/docs#!/Users/post_v1_usernames_users>API DOCUMENTATION</a>

    const robloxjs = require("robloxjs")
    (async () => {
        let IDS = await robloxjs.getPlayerIDFromUsernames(["RobsPlayz", "Roblox"], false) // IDS IN ARRAY, EXCLUDE BANNED MEMBERS?
    })(); // EVERYTHING MUST BE DONE IN AN ASYNC ENVIRONMENT!!

### Note

**There is a "user" class that is currently unused in the index.js file, this is due to it not working and it is being looked on. If anyone could help our team look for a way to use it, that would be appreciated.**
# Special Thanks

Special thanks to <a href=https://github.com/S0ftwareUpd8/roblox-api>roblox-api</a> & <a href=https://github.com/matthewdean/roblox-web-apis>roblox-web-apis</a> for the documentation on the API
