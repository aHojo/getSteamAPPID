var content = [];

for (let i = 0; i < steamApps.applist.apps.length; i++){
    var deleteObj = /\b(beta|trailer|movie|demo|teaser|server|DLC|map\spack|pack|multiplayer\sskins|weapons\spack|weapons\sskins|starter\spack|premium\spack|pre.*order|sdk|player\sprofiles|Workshop|creation\sclub|texture\spack)\b/gi;
    var deleteObj2 = /\bRU\b/g;
    if (deleteObj.test(steamApps.applist.apps[i].name) || deleteObj2.test(steamApps.applist.apps[i].name)) {
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
    var gameSearch = game.split(' ').join("\\s");
    var gameSearchFull = '\\b^'+ gameSearch +'$\\b';
    console.log(gameSearch);
    var search = new RegExp(gameSearch, 'i');
    var search1 = new RegExp(gameSearchFull, 'i');
    console.log(search);
    for (let i = 0; i < content.length; i++) {
        if(content[i].name.match(search)) {
            console.log('Name:' + content[i].name + "\n" + "Appid: " + content[i].appid);
           var searches = $('<div>')
           searches.text(content[i].name);
           searches.addClass('games');
           searches.attr('data-appid', content[i].appid);
           searches.attr('data-name', content[i].name);
            $("#searchResults").append(searches);
        }
    }
    for (let i = 0; i < content.length; i++) {
        if(content[i].name.match(search1)) {
            console.log('Name BEST MATCH: ' + content[i].name + "\n" + "Appid: " + content[i].appid);
        }
    }
}

gameName("borderlands 2");