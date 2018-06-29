var content = [];

for (let i = 0; i < steamApps.applist.apps.length; i++){
    var deleteObj = /\b(beta|trailer|movie|demo|teaser|server|DLC|map\spack|multiplayer\sskins|weapons\spack|weapons\sskins|starter\spack|premium\spack|pre.*order|sdk|player\sprofiles|Workshop|creation\sclub|texture\spack)\b/gi;
    if (deleteObj.test(steamApps.applist.apps[i].name)) {
        delete steamApps.applist.apps[i];
    } else {
        content.push({
            "appid": steamApps.applist.apps[i].appid,
            "name":steamApps.applist.apps[i].name.replace(/[-:]/g,' ')
        })
    }
}



    console.log(content);
function gameName (game) {
    var gameSearch = game.split(' ').join(".*");
    var gameSearchFull = '\\b^'+ gameSearch +'$\\b';
    console.log(gameSearch);
    var search = new RegExp(gameSearch, 'i');
    var search1 = new RegExp(gameSearchFull, 'i');
    console.log(search);
    for (let i = 0; i < content.length; i++) {
        if(content[i].name.match(search)) {
            console.log('Name:' + content[i].name + "\n" + "Appid: " + content[i].appid);
        }
    }
    for (let i = 0; i < content.length; i++) {
        if(content[i].name.match(search1)) {
            console.log('Name BEST MATCH: ' + content[i].name + "\n" + "Appid: " + content[i].appid);
        }
    }
}

gameName("Fallout 4");