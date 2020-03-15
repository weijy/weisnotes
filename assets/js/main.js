---
---

function getCookie(name) {
    // var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    var value = document.cookie.search("nightmode=true");
    return value >= 0;   
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
        document.cookie='nightmode=true; expries='+ (date.getDate()+7) +'; path="/"';
    } else {
        document.cookie = 'nightmode=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path="/"';
    }
    NightMode();
}
NightMode();
