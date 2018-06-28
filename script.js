var content = [];

for (let i = 0; i < steamApps.applist.apps.length; i++){ 
    content.push({ 
        "appid": steamApps.applist.apps[i].appid,
        "name":steamApps.applist.apps[i].name.replace(/:/g,'')
    }) 
}



    console.log(content);
function gameName (game) {
    var gameSearch = game.split(' ').join(".*");
    console.log(gameSearch);
    var search = new RegExp(gameSearch, 'i');
    console.log(search);
    for (let i = 0; i < content.length; i++) {
        if(content[i].name.match(search)) {
            console.log('Name:' + content[i].name + "\n" + "Appid: " + content[i].appid);
        }
    }
}

gameName("Star Wars the Old Republic");