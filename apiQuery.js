const STEAM = "https://store.steampowered.com/api/appdetails/?appids=";
var appID;
const getAppInfo = function(response) {
    console.log(response[appID].data);
    var steamInfo = response[appID].data;
    var steamName = steamInfo.name;
    var steamName = steamInfo.header_image;
    var steamScore = steamInfo.metacritic.score;
    var steamAge = steamInfo.required_age;
    var steamMovie = steamInfo.movies[0]
    var steamScreenshot = steamInfo.screenshots[0].path_full
    var steamScreenshot1 = steamInfo.screenshots[1]
    var steamScreenshot2 = steamInfo.screenshots[3]
    var steamAbout = steamInfo
    var steamPrice = steamInfo
    var steamWeb = steamInfo
    $('#gameDiv').append(
        $('<div>').text(steamInfo.name),
        $('<div>').text(steamInfo.metacritic.score),
        $('<div>').text(steamInfo.required_age),
        $('<div>').text(steamAbout),
        $('<img>').attr('src', steamInfo.header_image),
        $('div').attr('src', steamScreenshot)

    )
}

$(document).on("click", '.games', function() {
    appID = $(this).attr('data-appid');
    console.log(appID)

    $.ajax({
        url: STEAM + appID,
        method: "GET"
    }).then(getAppInfo);
});


