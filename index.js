const fetch = require("node-fetch")
async function fetchJSON(url,body,cookies) {
    body = (!body || body.length == 0 || body == undefined || body == null) ? null : body;
    cookies = (!cookies) ? null : cookies;
    const options = {body:body,cookies:cookies}
    // fetch a json file, also includes error handling
    return new Promise((resolve,reject) => {
        fetch(url, options)
            .catch(error => reject(error))
            .then(res => res);
    })
}

class Player {
    constructor(playerID) {
        this.playerID = playerID;
        if (this.checkValid() == false) {
            console.error(`This isn't a valid player, using Roblox's ID`);
            this.playerID = 1;
        }

    }

    checkValid() {
        return fetchJSON(`https://api.roblox.com/users/${this.playerID}/onlinestatus/`)
            .then(res => {

                if (res.json().errors.code) {
                    return false
                } else return true
            })
    }
    getGroups() {
        return fetchJSON(`https://www.roblox.com/users/profile/playergroups-json?userId=${this.playerID}`)
            .then(res => res.json())
    }
    getOnlineStatus() {
        return fetchJSON(`https://api.roblox.com/users/${this.playerID}/onlinestatus/`)
            .then(res => res.json())
    }

    getPresence() {
        return fetchJSON(`https://www.roblox.com/presence/user?userId=${this.playerID}`)
            .then(res => res.json())
    }

    getMultipleUsersPresense(playerList) {
        if (typeof (playerList) !== Array) return `Not a list specified.`;
        let parsedList = "";
        for (let player in playerList) {
            if (parsedList.length == 0) {
                parsedList = `userIds=${playerList[player]}`
            }
            parsedList = `${parsedList}&userIds=${playerList[player]}`
        }
        return fetchJSON(`https://www.roblox.com/presence/users?${parsedList}`).then(res => res.json());
    }
}
/*
            MASSIVE WARNING!!! FROM DWIFTE
            DO NOT EXPOSE THE ROBLOSECURITY URL FROM ROBLOX.
            UNDER. ANY. CIRCUMSTANCE.

            THANK YOU.
 */
class User {
    constructor(roblosecurity) {
        // THIS IS USING ROBLOSECURITY! DO NOT SHARE THIS COOKIE WITH ANYONE.
        this.roblosecurity = roblosecurity;
        if (this.checkStatus() == false) return console.error(`Invalid roblosecurity token`);
    }
    checkStatus() {
        return fetchJSON("https://www.roblox.com/my/account/json",null,`.ROBLOSECURITY=${this.roblosecurity}`)
            .then(res => {
                try {
                    let req = res.json()
                    if (req.Name) return true
                } catch (e) {
                    return false
                }
            })
    }
    getFavouritedGames() {
        return fetchJSON("https://www.roblox.com/user/favorites/places",null,`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getAccountDetails() {
        return fetchJSON("https://www.roblox.com/my/account/json",null,`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getAccountSettings() {
        return fetchJSON("https://www.roblox.com/my/settings/json",null,`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getFriendsOnline() {
        return fetchJSON("https://api.roblox.com/my/friendsonline", null, `.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getAccountInfo() {
        return fetchJSON("https://api.roblox.com/users/account-info", null, `.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getMobileApiInfo() {
        return fetchJSON("https://www.roblox.com/mobileapi/userinfo",null,`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
}

// Place API
class Place {
    constructor(place) {
        this.place = place;
        if (this.checkStatus() == false) return console.error(`Place doesn't exist.`)
    }
    checkStatus() {
        return fetchJSON(`https://www.roblox.com/places/api-get-details?assetId=${this.place}`)
            .then(res => {
                if (res.json().errors.code) {
                    return false
                } else return true
            })
    }
    getDetails() {
        return fetchJSON(`https://www.roblox.com/places/api-get-details?assetId=${this.place}`).then(res => res.json())
    }
    getSettings() {
        return fetchJSON(`https://www.roblox.com/places/${this.place}/settings`).then(res => res.json())
    }
    getUniverse() {
        return fetchJSON(`https://api.roblox.com/universes/get-universe-containing-place?placeid=${this.place}`).then(res => res.json())
    }
}

// Also allows Places
class Universe {
    constructor(universe) {
        this.universe = universe;
        if (this.checkStatus() == false) return console.error("Not a valid universe.")
    }
    checkStatus() {
        // https://api.roblox.com/universes/get-info?universeId=13058
        return fetchJSON(`https://api.roblox.com/universes/get-info?universeId=${this.universe}`)
            .then(res => {
                if (res.json().errors.code) {
                    return false
                } else return true
            })
    }
    getInfo() {
        return fetchJSON(`https://api.roblox.com/universes/get-info?universeId=${this.universe}`).then(res => res.json())
    }
    getPlaces() {
        fetchJSON(`https://api.roblox.com/universes/get-universe-places?universeId=${this.universe}&page=1`)
            .then(res => {
                let req = res.json();
                if (r.FinalPage == false) {
                    let pageNum = 2;
                    let endLoop = false;
                    while (endLoop == false) {
                        let info = fetch(`https://api.roblox.com/universes/get-universe-places?universeId=${this.universe}&page=${pageNum}`)
                        req.places.push(info.places)
                        req.PageSize += info.PageSize
                        pageNum++;
                        if (info.FinalPage == true) endLoop = true;
                    }
                }
                return req;
            })
    }
}
module.exports = {
    Player,
    User,
    Place,
    Universe
}