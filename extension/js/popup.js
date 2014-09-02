var bg = chrome.extension.getBackgroundPage();

window.onload = function() {

    bg.doRequest(show_tickets, null, true); // silent refresh when popup opens

    checkNowButton = document.getElementById('checknow');
    checkNowButton.onclick = function() {
        bg.doRequestInvoked();
    };

    function create_list_item(id, content) {

        var list = $('.tickets');
        var ticket = '<li id="' + id + '">' + content + '</li>';

        list.append(ticket);
    }

    function show_tickets(error) {

        var ticketsCurrent = bg.ticketsCurrent

        for (var i = 0; i < ticketsCurrent.length; i++) {
            create_list_item(ticketsCurrent[i].id, ticketsCurrent[i].subject);
        };

        if (error) {
            console.log("error!");
        }
    };

}
