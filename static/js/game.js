var data = {};
var changes = [];
data.changes = changes;

// changes the data when you buy
function buy() {
    var items = {
        "food": 1
    };
    data.changes.push(items);
    console.log(data);
    console.log(JSON.stringify(data).charCodeAt());
}

//update the next day button to send json data of the changed
function update_button() {
    var daybutton = document.getElementById('nextday');
    var currentLink = daybutton.getAttribute("href");
    encoded_data()
    daybutton.setAttribute('href', currentLink + JSON.stringify(data));
}

// encode the changes so that people cant cheat the game
function encodedata() {

}
