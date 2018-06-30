const apiKey = 'ad37a23d49273a2c1141367938bbc2934766fd9a'
var game = "borderlands 2";
const getAppInfo = function(response) {
    console.log(response);
}

$(document).on("click", '.games', function() {
    var guID = $(this).attr('data-guid');
    console.log(guID);
    var QUERYGAME = "https://www.giantbomb.com/api/game/" + guID + "/?format=json&api_key=" + apiKey;



    $.ajax({
        url: QUERYGAME,
        method: "GET",
        // dataType: 'jsonp',
    }).then(getAppInfo);
});
$.ajax ({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key=' + apiKey + '&query=' + game,
    complete: function() {
        console.log('done');
    },
    // success: function(data) {
    //     console.log(data);
    // }
}).then(function(data) {
    console.log(data);
    for(let i = 0; i < data.results.length; i++){
        if(data.results[i].resource_type === 'game'){
            console.log(data.results[i]);
            var searches = $('<div>');
            searches.text(data.results[i].name);
            searches.addClass('games');
            searches.attr('data-guid', data.results[i].guid);
            $("#searchResults").append(searches);
        }
    }
    //     var searches = $('<div>');
    //     searches.text(content[i].name);
    //     searches.addClass('games');
    //     searches.attr('data-appid', content[i].appid);
    //     searches.attr('data-name', content[i].name);
    //     $("#searchResults").append(searches);
    // }
});


