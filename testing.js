const robloxjs = require("./index.js")
const fs = require("fs");
(async () => {
    let Place = new robloxjs.Place(2506738224);
    let universeID = await Place.getUniverse();
    fs.writeFileSync("test.json", JSON.stringify(universeID,null,4))

})();
