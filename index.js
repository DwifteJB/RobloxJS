const fetch = require("node-fetch")
async function getPlayerIDFromUsernames(usernames, excludeBannedUsers) {
    if (typeof(usernames) != typeof(["username1","username2"])) return console.error(`Invalid Type given. Required ${typeof(["username1","username2"])} (["username1","username2"]). Got ${typeof(usernames)}`); 
    (!excludeBannedUsers || typeof(excludeBannedUsers) != Boolean) ? false : excludeBannedUsers;
    let body = {usernames: usernames, excludeBannedUsers: excludeBannedUsers}
    return fetch('https://users.roblox.com/v1/usernames/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)}).then(res => res.json());
}
class Player {
    constructor(playerID) {
        this.playerID = playerID;
        if (this.checkValid() === false) {
            console.error(`This isn't a valid player, using Roblox's ID`);
            this.playerID = 1;
        }

    }

    checkValid() {
        return fetch(`https://api.roblox.com/users/${this.playerID}/onlinestatus/`)
            .then(res => {
                if (res.json().errors || res == false) {
                    return false
                } else return true
            })
    }
    getHeadShotPicture(width,height) {
        return fetch(`https://www.roblox.com/bust-thumbnail/image?userId=${this.playerID}&width=${width}&height=${height}&format=png`).then(res => res.url)
    }
    getCreatedGames() {
        return fetch(`https://www.roblox.com/users/profile/playergames-json?userId=${this.playerID}`).then(res => res.json())
    }
    getOutfitPicture(width,height) {
        return fetch(`https://www.roblox.com/outfit-thumbnail/image?userOutfitId=${this.playerID}&width=${width}&height=${height}&format=png`).then(res => res.url)
    }
    getAvatarThumbnails() {
        return fetch(`https://www.roblox.com/avatar-thumbnails?params=[{userId:${this.playerID}]`).then(res => res.json())
    }
    getOnlineStatus() {
        return fetch(`https://api.roblox.com/users/${this.playerID}/onlinestatus/`)
            .then(res => res.json())
    }
    getInfo() {
        return fetch(`https://users.roblox.com/v1/users/${this.playerID}`).then(res => res.json())
    }
}
/*
            MASSIVE WARNING!!! FROM DWIFTE
            DO NOT EXPOSE THE ROBLOSECURITY URL FROM ROBLOX.
            UNDER. ANY. CIRCUMSTANCE.

            THANK YOU.

            (User class currently doesnt work.)
 */
class User {
    constructor(roblosecurity) {
        // THIS IS USING ROBLOSECURITY! DO NOT SHARE THIS COOKIE WITH ANYONE.
        this.roblosecurity = roblosecurity;
        if (this.checkStatus() == false) return console.error(`Invalid roblosecurity token`);
    }
    checkStatus() {
        return fetch("https://www.roblox.com/my/account/json",`.ROBLOSECURITY=${this.roblosecurity};`)
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
        return fetch("https://www.roblox.com/user/favorites/places",`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getAccountDetails() {
        return fetch("https://www.roblox.com/my/account/json",`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getAccountSettings() {
        return fetch("https://www.roblox.com/my/settings/json",`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getFriendsOnline() {
        return fetch("https://api.roblox.com/my/friendsonline",`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getAccountInfo() {
        return fetch("https://api.roblox.com/users/account-info",`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
    getMobileApiInfo() {
        return fetch("https://www.roblox.com/mobileapi/userinfo",`.ROBLOSECURITY=${this.roblosecurity}`).then(res => res.json())
    }
}

// Place API
class Place {
    constructor(place) {
        this.place = place;
        if (this.checkStatus() == false) return console.error(`Place doesn't exist.`)
    }
    checkStatus() {
        return fetch(`https://www.roblox.com/places/api-get-details?assetId=${this.place}`)
            .then(res => {
                if (res.json().errors) {
                    return false
                } else return true
            })
    }
    getGameInstances() {
        return fetch(`https://games.roblox.com/v1/games/${this.place}/servers/Public?excludeFullGames=false&limit=100`).then(res => res.json());
    }
    getDetails() {
        return fetch(`https://www.roblox.com/places/api-get-details?assetId=${this.place}`).then(res => res.json())
    }
    getSettings() {
        return fetch(`https://www.roblox.com/places/${this.place}/settings`).then(res => res.json())
    }
    getUniverse() {
        return fetch(`https://api.roblox.com/universes/get-universe-containing-place?placeid=${this.place}`).then(res => res.json())
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
        return fetch(`https://api.roblox.com/universes/get-info?universeId=${this.universe}`)
            .then(res => {
                if (res.json().errors) {
                    return false
                } else return true
            })
    }
    getPrice() {
        return fetch(`https://games.roblox.com/v1/games/games-product-info?universeIds=${this.universe}`).then(res => res.json());
    }
    getInfo() {
        return fetch(`https://api.roblox.com/universes/get-info?universeId=${this.universe}`).then(res => res.json())
    }
    getPlaces() {
        return fetch(`https://api.roblox.com/universes/get-universe-places?universeId=${this.universe}&page=1`)
            .then(res => {
                let req = res.json();
                if (req.FinalPage == false) {
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
    Place,
    Universe,
    getPlayerIDFromUsernames
}
