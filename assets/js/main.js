---
---
function RandomQuote() {
        $.getJSON("../quotes.json", function(data){
            var quote = data[Math.floor(Math.random() * data.length)];
            $("#random_quote").append(
                '<div class="quote">' + quote.quote + '</div>' +
                '<p class="author">——' + quote.author + '</p>'
            );
        });
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;   
}

function NightMode() {
    if(getCookie('nightmode')) {
        document.getElementById('nightToggle').checked = true;
        $('.target').addClass('nightmode');
    } else {
        $('.target').removeClass('nightmode');
    }
}

function SetNightMode() {
    if(!getCookie('nightmode')) {
        var date=new Date();
        document.cookie='nightmode=true; expries='+ (date.getDate()+7) +'; path={{ site.baseurl }}';
    } else {
        document.cookie = 'nightmode=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path={{ site.baseurl }}';
    }
    NightMode();
}
NightMode();
