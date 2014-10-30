function notif(title ,tekst, url){
    var notice = new Notification(title, {
        body: tekst
    });

    notice.onshow = function(evt) {
        setTimeout(function(){notice.close()}, 5000);
    }

    notice.onclick = function(evt) {
        //gui.Shell.openExternal(url);
        document.body.style.background = "#ff0000";
        setTimeout(function(){notice.close()}, 1000);
    };
}

try {
    var gui = require('nw.gui');
    var tray = new gui.Tray({
        icon: 'icon4.png',
        title: ''
    });

    // Give it a menu
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({
        type: 'checkbox',
        label: 'Are you sure?'
    }));
    menu.items[0].click = function () {
        notif('My Title' , "Die Zeit wird gerade nicht gemessen!", "http://www.google.de/");
    };
    tray.menu = menu;
} catch (e) {

}

function exitapp() {
    if (gui) {
        gui.App.quit();
    }
}