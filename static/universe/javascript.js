//Refreshing the page when the user clicks "try again"

function Restart() {
    window.location.reload();
}

// Sells all of the material the user owns

function sellStuffMax(item) {

    //Defines Varables needed

    var deals = document.getElementById('deals');
    var wealth = document.getElementById("wealth");
    var itemQty = document.getElementById(item + "Qty");
    var itemPrice = document.getElementById(item + "Price");
    var totalSpent = document.getElementById('totalSpent');
    var profitToday = document.getElementById("profitToday");

    //Checks if they have more that 0 materials:

    if (parseInt(itemQty.innerHTML) > 0) {

        //Wealth becomes wealth + (cost of material * amount of the material they possess)

        wealth.innerHTML = parseInt(wealth.innerHTML) + (parseInt(itemPrice.innerHTML) * parseInt(itemQty.innerHTML));

        //Adds however much they sold their materials for onto statistic of total sold

        totalSold.innerHTML = parseInt(totalSold.innerHTML) + (parseInt(itemPrice.innerHTML) * parseInt(itemQty.innerHTML));

        //+1 onto the amount of deals they have made this game

        deals.innerHTML = parseInt(deals.innerHTML) + 1;

        //Deletes all the items they sold, from their inventory

        itemQty.innerHTML = 0;

        //Adds what they sold the materials for onto todays profit

        profitToday.innerHTML = parseInt(profitToday.innerHTML) + (parseInt(itemPrice.innerHTML) * parseInt(itemQty.innerHTML));

        //Plays the sound effect for when they click the sell button

        var audio = new Audio('SellAndBuysound.mp3');
        audio.play();
    }
}

//Buy as much of the material as they can afford

function buyStuffMax(item) {

    //Defines variables needed

    var deals = document.getElementById('deals');
    var wealth = document.getElementById("wealth");
    var itemQty = document.getElementById(item + "Qty");
    var itemPrice = document.getElementById(item + "Price");
    var totalSpent = document.getElementById('totalSpent');
    var profitToday = document.getElementById("profitToday");

    //Checks if they own enough monney to buy at least one of the materials they are choosing to buy

    if (parseInt(itemPrice.innerHTML) <= parseInt(wealth.innerHTML)) {

        //Calculate how much of the material they are able to afford

        var buyMax = parseInt(wealth.innerHTML) / parseInt(itemPrice.innerHTML);

        //Add the amount 'of the material they are able to afford' onto the current amount of that material into their inventory

        itemQty.innerHTML = parseInt(itemQty.innerHTML) + parseInt(buyMax);

        //The users wealth becomes their current wealth - (the price of the item * as much of the material they are able to afford)

        wealth.innerHTML = parseInt(wealth.innerHTML) - (parseInt(itemPrice.innerHTML) * parseInt(buyMax));

        //Adds however much they brought of their material onto the statistic of total brought

        totalSpent.innerHTML = parseInt(totalSpent.innerHTML) + (parseInt(itemPrice.innerHTML) * parseInt(buyMax));

        //+1 onto the amount of deals they have made this game

        deals.innerHTML = parseInt(deals.innerHTML) + 1;

        //Subtracts the cost of the amount of materials brought for onto todays profit

        profitToday.innerHTML = parseInt(profitToday.innerHTML) - (parseInt(itemPrice.innerHTML) * parseInt(buyMax));

        //Plays the sound effect for when they click the buy button

        var audio = new Audio('SellAndBuysound.mp3');
        audio.play();
    }
}
//Allows the user to buy 5 of what ever material
function buyStuffx(item) {

    //Defines variables needed

    var deals = document.getElementById('deals');
    var wealth = document.getElementById("wealth");
    var itemQty = document.getElementById(item + "Qty");
    var itemPrice = document.getElementById(item + "Price");
    var totalSpent = document.getElementById('totalSpent');
    var profitToday = document.getElementById("profitToday");

    //Checks if the user has enough Wealth to buy 5 of the selected material

    if ((parseInt(itemPrice.innerHTML) * 5) <= parseInt(wealth.innerHTML)) {

        //They gain five of the meterial to their inventory

        itemQty.innerHTML = parseInt(itemQty.innerHTML) + 5;

        //Their wealth becomes their current wealth - (the cost of the material * 5)

        wealth.innerHTML = parseInt(wealth.innerHTML) - (parseInt(itemPrice.innerHTML) * 5);

        //Adds five times the cost of one of the choosen material onto the statistic of total brought

        totalSpent.innerHTML = parseInt(totalSpent.innerHTML) + (parseInt(itemPrice.innerHTML) * 5);

        //+1 onto the amount of deals they have made this game

        deals.innerHTML = parseInt(deals.innerHTML) + 1;

        //Subtracts the cost of 5 of materials brought onto todays profit

        profitToday.innerHTML = parseInt(profitToday.innerHTML) - (parseInt(itemPrice.innerHTML) * 5);

        //Plays the sound effect for when they click the buy button

        var audio = new Audio('SellAndBuysound.mp3');
        audio.play();
    }
}

//Allows the user to sell 5 of what ever material

function sellStuffx(item) {

    //Defines variables needed

    var deals = document.getElementById('deals');
    var wealth = document.getElementById("wealth");
    var itemQty = document.getElementById(item + "Qty");
    var itemPrice = document.getElementById(item + "Price");
    var totalSold = document.getElementById('totalSold');
    var profitToday = document.getElementById("profitToday");

    //checks if the user owns at least 5 of the chossen material

    if (parseInt(itemQty.innerHTML) >= 5) {

        //Subtracts 5 off of the amount of that material they currently own

        itemQty.innerHTML = parseInt(itemQty.innerHTML) - 5;

        //Wealth becomes current welth + (5 * material cost)

        wealth.innerHTML = parseInt(wealth.innerHTML) + (parseInt(itemPrice.innerHTML) * 5);

        //Adds the cost of 5 of the material onto the statistic of total sold

        totalSold.innerHTML = parseInt(totalSold.innerHTML) + (parseInt(itemPrice.innerHTML) * 5);

        //+1 onto the amount of deals they have made this game

        deals.innerHTML = parseInt(deals.innerHTML) + 1;

        //Adds 5 * the material cost onto todays profit

        profitToday.innerHTML = parseInt(profitToday.innerHTML) + (parseInt(itemPrice.innerHTML) * 5);

        //Plays the sound effect for when they click the sell button

        var audio = new Audio('SellAndBuysound.mp3');
        audio.play();
    }
}

//Allow the user to buy one of a material

function buyStuff(item) {

    //Defines variables needed

    var deals = document.getElementById('deals');
    var wealth = document.getElementById("wealth");
    var itemQty = document.getElementById(item + "Qty");
    var itemPrice = document.getElementById(item + "Price");
    var totalSpent = document.getElementById('totalSpent');
    var profitToday = document.getElementById("profitToday");

    //Checks that the user can afford to buy one of the selected material

    if (parseInt(itemPrice.innerHTML) <= parseInt(wealth.innerHTML)) {

        //The amount of the selected meterial they own goes up by 1

        itemQty.innerHTML = parseInt(itemQty.innerHTML) + 1;

        //The users wealth becomes their current wealth - the cost of 1 of the selected meterial

        wealth.innerHTML = parseInt(wealth.innerHTML) - parseInt(itemPrice.innerHTML);

        //Adds  cost of one of the choosen material onto the statistic of total brought

        totalSpent.innerHTML = parseInt(totalSpent.innerHTML) + parseInt(itemPrice.innerHTML);

        //+1 onto the amount of deals they have made this game

        deals.innerHTML = parseInt(deals.innerHTML) + 1;

        //Subtracts the cost of the material brought onto todays profit

        profitToday.innerHTML = parseInt(profitToday.innerHTML) - parseInt(itemPrice.innerHTML);

        //Plays the sound effect for when they click the buy button

        var audio = new Audio('SellAndBuysound.mp3');
        audio.play();
    }
}

//Allows the user to sell one of the material selected

function sellStuff(item) {

    //Defines variables needed

    var deals = document.getElementById('deals');
    var wealth = document.getElementById("wealth");
    var itemQty = document.getElementById(item + "Qty");
    var itemPrice = document.getElementById(item + "Price");
    var totalSold = document.getElementById('totalSold');
    var profitToday = document.getElementById("profitToday");

    //Checks that the user ownes at least one of the slelcted materials

    if (parseInt(itemQty.innerHTML) > 0) {

        //Subtracts one off the amount of the selected material they have

        itemQty.innerHTML = parseInt(itemQty.innerHTML) - 1;

        // wealth becomes current wealth  + the cost of one of the selected material

        wealth.innerHTML = parseInt(wealth.innerHTML) + parseInt(itemPrice.innerHTML);

        //Adds the cost of the selected material onto the statistic of total sold

        totalSold.innerHTML = parseInt(totalSold.innerHTML) + (parseInt(itemPrice.innerHTML));

        //+1 onto the amount of deals they have made this game

        deals.innerHTML = parseInt(deals.innerHTML) + 1;

        //Adds the chossen material cost onto todays profit

        profitToday.innerHTML = parseInt(profitToday.innerHTML) + parseInt(itemPrice.innerHTML);

        //Plays the sound effect for when they click the sell button

        var audio = new Audio('SellAndBuysound.mp3');
        audio.play();
    }
}

//What happens when ever the user clicks the advance day button

function advanceDay() {

    //Reseting the profit Today to zero as it is a new day

    var profitToday = document.getElementById("profitToday");
    profitToday.innerHTML = 0;

    //Defining the variable wealth

    var wealth = document.getElementById("wealth");

    // Creating a New day

    var newday = parseInt(document.getElementById('day').innerHTML) + 1;
    day.innerHTML = newday;
    console.log('Day ' + newday);


    // Creating a chance for different senarios

    //Creates a random number between 1 and 200 so that their is a 1/200 chace for each senario to occur and as there are 20 senarios their is a 1/10 chance that you will encounter a senario each day
    var senarioChance = Math.floor(Math.random() * 200);
    console.log('Senario chance number ' + senarioChance);

    //Creating certain events that happen on a certain day

    switch (newday) {
        case 100:

            //On day 100 it reads you your score and reloads the page

            alert('Game over, your score is: ' + parseInt(wealth.innerHTML));
            window.location.reload();
            break;
        case 99:

            //On day 99 it reminds you to sell everything

            alert('Last day!!!, It is recomended that you sell all of your materials to maximise your score.');
            break;
        case 2:

            //On day 2 it makes the aim disappear and tells you the aim

            var goAway = "";
            Away.innerHTML = goAway;
            alert("Hello there, the aim of the game is to sell and buy materials in order to make survive. Every day you will eat a certain amount of food depending on your net worth so make sure to buy a lot food. You have 100 days. Good luck, kiddo!!!");
            break;

    }
    // Plutonium
    //Random senarios for Plutonium
    switch (senarioChance) {
        case 153:

            //Defining variable

            var Plutonium = document.getElementById('PlutoniumPrice');
            var PlutoniumPrice = parseInt(Plutonium.innerHTML);
            console.log('is this working');
            alert('Plutonium Found On New Plannet!!. As the supply of Plutonium goes up, the cost may go down.');

            //If the random number is 153 and Plutonium has a price of +10 the price of Plutonium will drop by 10

            if (PlutoniumPrice > 10) {
                Plutonium.innerHTML = PlutoniumPrice - 10;
            }
            break;

        case 46:

            //Defining variable

            var Plutonium = document.getElementById('PlutoniumPrice');
            var PlutoniumPrice = parseInt(Plutonium.innerHTML);
            alert("A nuclear peace treaty is made, as a result the price of Plutonium may decreace.");

            //If the random number is 46 and Plutonium has a price of +16 the price of Plutonium will drop by 16

            if (PlutoniumPrice > 16) {
                Plutonium.innerHTML = PlutoniumPrice - 16;
            }
            break;

        case 120:

            //Defining variable

            var Plutonium = document.getElementById('PlutoniumPrice');
            var PlutoniumPrice = parseInt(Plutonium.innerHTML);
            alert('An ruthless dictator is in need on a lot of Plutonium for weaponry, as a result the price of Plutonium has risen.');

            //If the random number is 120 the price of Plutonium will increase by 12

            Plutonium.innerHTML = PlutoniumPrice + 12;
            break;

        case 73:

            //Defining variable

            var Plutonium = document.getElementById('PlutoniumPrice');
            var PlutoniumPrice = parseInt(Plutonium.innerHTML);
            alert('A man named Jeff wants to buy a lot of Plutonium, (for unknown reasons), As a result the price of pluonium has gone up.');

            //If the random number is 73 the price of Plutonium will increase by 33

            Plutonium.innerHTML = PlutoniumPrice + 33;
            break;

        default:

            //Randomising the price of Plutonium


            //Defining variables

            var Plutonium = document.getElementById('PlutoniumPrice');
            var PlutoniumPrice = parseInt(Plutonium.innerHTML);

            //Change In Price is a random number between 0 and 1 that is multiplied by 8.6, rounded to the nearest interger and then 4 is subtracted to allow the price to go both down and up

            var changeInPrice = Math.floor(Math.random() * 8.6) - 4;

            //Next the scripts checks that the price of Plutonium is greater than 4 and/or the change in price is greater than or equal to 0. This is so the price of Plutonium dosen't become equal to or less than 0 and create an easy way for the user to make an infinite amount of money

            if (PlutoniumPrice > 4 || changeInPrice >= 0) {

                //If this is true then Plutonium will equal the current PlutoniumPrice + changeInPrice

                Plutonium.innerHTML = PlutoniumPrice + changeInPrice;
            }
    }
    // Lathrixium
    switch (senarioChance) {
        case 14:

            //Defining variable

            var Lathrixium = document.getElementById('LathrixiumPrice');
            var LathrixiumPrice = parseInt(Lathrixium.innerHTML);
            alert('The new iSpaceships 5 has been released, it is extreamly powerhungry and needs a lot of Lathrixium to biuld. You can expect the price of lathrixium to go up.');

            //If the random number is 14 the price of Lathrixium will increase by 64

            Lathrixium.innerHTML = LathrixiumPrice + 64;

            break;

        case 63:

            //Defining variable

            var Lathrixium = document.getElementById('LathrixiumPrice');
            var LathrixiumPrice = parseInt(Lathrixium.innerHTML);
            alert('Gerrrreatings, The price for Lathrixium may mysteriosity drop.');

            //If the random number is 63 the script will check if The price of Lathrixium is over 39

            if (LathrixiumPrice > 39) {

                //If Lathrixium is over 39 then the price of Lathrixium will drop by 39

                Lathrixium.innerHTML = LathrixiumPrice - 39;
            } else if (24 < LathrixiumPrice && LathrixiumPrice < 39) {

                //But if it is less that 39 the script will do a second check to test if it is also greter that 24.


                //If so Lathrixium will drop by 23

                Lathrixium.innerHTML = LathrixiumPrice - 23;
            }

            //if not nothing will happen

            break;

        case 92:

            //Defining variable

            var Lathrixium = document.getElementById('LathrixiumPrice');
            var LathrixiumPrice = parseInt(Lathrixium.innerHTML);
            alert('A strange man with a ginger beard walks up to the trade station and wants to buy a lot of Lathrixium, as a result price of Lathrixium will go up.')

            //If the random number is 92 the price of Lathrixium will increase by 74

            Lathrixium.innerHTML = LathrixiumPrice + 74;
            break;
        case 69:

            //Defining variable

            var Lathrixium = document.getElementById('LathrixiumPrice');
            var LathrixiumPrice = parseInt(Lathrixium.innerHTML);
            alert("The faction of the 'Scarlet dawn' has lost a huge warship in a battle against the 'Onyx Watch'. Scavengers have taken the ship apart and slavaged its Lathrixium, as there is more Lathrixium the price will go down.")

            //If the random number is 69 the script will check if The price of Lathrixium is over 104

            if (LathrixiumPrice > 104) {

                //If Lathrixium is over 104 then the price of Lathrixium will drop by 104

                Lathrixium.innerHTML = LathrixiumPrice - 104;
            } else if (44 < LathrixiumPrice && LathrixiumPrice < 104) {

                //But if it is less that 104 the script will do a second check to test if it is also greter that 44.


                //If so Lathrixium will drop by 43

                Lathrixium.innerHTML = LathrixiumPrice - 43;
            }

        default:

            //Randomising the price of Lathrixium


            //Defining variables
            var Lathrixium = document.getElementById('LathrixiumPrice');
            var LathrixiumPrice = parseInt(Lathrixium.innerHTML);

            //Change In Price is a random number between 0 and 1 that is multiplied by 44.4, rounded to the nearest interger and then 22 is subtracted to allow the price to go both down and up

            var changeInPrice = Math.floor(Math.random() * 44.4) - 22;

            //Next the scripts checks that the price of Lathrixium is greater than 22 and/or the change in price is greater than or equal to 0. This is so the price of Lathrixium dosen't become equal to or less than 0 and create an easy way for the user to make an infinite amount of money

            if (LathrixiumPrice > 22 || changeInPrice >= 0) {

                //If this is true then Lathrixium will equal the current Lathrixium + changeInPrice

                Lathrixium.innerHTML = LathrixiumPrice + changeInPrice;
            }

    }
    // Vibranium
    switch (senarioChance) {
        case 104:

            //Defining variable

            var Vibranium = document.getElementById('VibraniumPrice');
            var VibraniumPrice = parseInt(Vibranium.innerHTML);
            alert('Vibranium mine exploded!!, as The rarity has risen, the Price will go up.')

            //If the random number is 104 the price of Vibranium will increase by 32

            Vibranium.innerHTML = VibraniumPrice + 32;
            break;
        case 157:

            //Defining variable

            var Vibranium = document.getElementById('VibraniumPrice');
            var VibraniumPrice = parseInt(Vibranium.innerHTML);
            alert("Captain america lost his mighty sheild, now they need to get more uranium to create a new on, You can expect the price of Vibranium to go up.");

            //If the random number is 157 the price of Vibranium will increase by 20

            Vibranium.innerHTML = VibraniumPrice + 20;
            break;
        case 123:

            //Defining variable

            var Vibranium = document.getElementById('VibraniumPrice');
            var VibraniumPrice = parseInt(Vibranium.innerHTML);
            alert("A strange new trader approches the space trade center, he is selling a lot of Vibranium, You can expect the price of Vibranium to fall.");

            //If the random number is 123 the script will check if The price of Vibranium is over 23

            if (VibraniumPrice > 23) {

                //If Vibranium is over 23 then the price of Vibranium will drop by 23

                Vibranium.innerHTML = VibraniumPrice - 23;
            } else if (14 < VibraniumPrice && VibraniumPrice > 23) {

                //But if it is less that 23 the script will do a second check to test if it is also greter that 14.


                //If so Vibranium will drop by 13

                Vibranium.innerHTML = VibraniumPrice - 13;
            }
            break;
        case 192:

            //Defining variable

            var Vibranium = document.getElementById('VibraniumPrice');
            var VibraniumPrice = parseInt(Vibranium.innerHTML);
            alert("The faction of the 'Twin Gard' has stoped using Vibranium as the main armor on their ships, as a result the price of Vibranium may go down.");

            //If the random number is 192 the script will check if The price of Vibranium is over 18

            if (VibraniumPrice > 18) {

                //If Vibranium is over 18 then the price of Vibranium will drop by 18

                Vibranium.innerHTML = VibraniumPrice - 18;
            } else if (10 < VibraniumPrice && VibraniumPrice < 18) {

                //But if it is less that 18 the script will do a second check to test if it is also greter that 10.


                //If so Vibranium will drop by 10


                Vibranium.innerHTML = VibraniumPrice - 9;
            }

            break;
        default:
            var Vibranium = document.getElementById('VibraniumPrice');
            var VibraniumPrice = parseInt(Vibranium.innerHTML);

            //Change In Price is a random number between 0 and 1 that is multiplied by 4.5, rounded to the nearest interger and then 2 is subtracted to allow the price to go both down and up

            var changeInPrice = Math.floor(Math.random() * 4.5) - 2;

            //Next the scripts checks that the price of Vibranium is greater than 2 and/or the change in price is greater than or equal to 0. This is so the price of Vibranium dosen't become equal to or less than 0 and create an easy way for the user to make an infinite amount of money

            if (VibraniumPrice > 2 || changeInPrice >= 0) {

                //If this is true then Vibranium will equal the current Vibranium + changeInPrice

                Vibranium.innerHTML = VibraniumPrice + changeInPrice;
            }

    }
    // Celestial Bronze
    switch (senarioChance) {
        case 130:

            //Defining variable

            var CelestialBronze = document.getElementById('CelestialBronzePrice');
            var CelestialBronzePrice = parseInt(CelestialBronze.innerHTML);
            alert("An army fell into a time loop and traveled to your era, they seem to want a lot of Celestial Bronze for their weaponry, as a result the cost of celestial bronze has risen.");

            //If the random number is 130 the price of CelestialBronze will increase by 29

            CelestialBronze.innerHTML = CelestialBronzePrice + 29;
            break;

        case 38:

            //Defining variable

            var CelestialBronze = document.getElementById('CelestialBronzePrice');
            var CelestialBronzePrice = parseInt(CelestialBronze.innerHTML);
            alert("The World is being attacked by giants, to create more wepons more Celestial Bronze is needed, As a result the price of Celestial Bronze may go up.");

            //If the random number is 38 the price of Celestial Bronze will increase by 19

            CelestialBronze.innerHTML = CelestialBronzePrice + 19;
            break;

        case 114:

            //Defining variable

            var CelestialBronze = document.getElementById('CelestialBronzePrice');
            var CelestialBronzePrice = parseInt(CelestialBronze.innerHTML);
            alert("The great battle has finished, there is no longer a huge need for Celestial Bronze, as a result the price of Celestial Bronze may go down");

            //If the random number is 114 the script will check if The price of Celestial Bronze is over 17

            if (CelestialBronzePrice > 17) {

                //If CelestialBronze is over 18 then the price of Celestial Bronze will drop by 17

                CelestialBronze.innerHTML = CelestialBronzePrice - 17;
            } else if (10 < CelestialBronzePrice && CelestialBronzePrice < 17) {

                //But if it is less that 17 the script will do a second check to test if it is also greter that 10.


                //If so Celestial Bronze will drop by 9

                CelestialBronze.innerHTML = CelestialBronzePrice - 9;
            }
            break;

        case 87:

            //Defining variable

            var CelestialBronze = document.getElementById('CelestialBronzePrice');
            var CelestialBronzePrice = parseInt(CelestialBronze.innerHTML);
            alert("Today is national sword day! People are bringing more Celestial Bronze to the market to sell, as a result the price of Celestial Bronze may go down.");

            //If the random number is 87 the script will check if The price of Celestial Bronze is over 27

            if (CelestialBronzePrice > 27) {

                //If CelestialBronze is over 27 then the price of Celestial Bronze will drop by 27

                CelestialBronze.innerHTML = CelestialBronzePrice - 27;
            } else if (12 < CelestialBronzePrice && CelestialBronzePrice < 22) {

                //But if it is less that 27 the script will do a second check to test if it is also greter that 12.


                //If so Celestial Bronze will drop by 11

                CelestialBronze.innerHTML = CelestialBronzePrice - 11;
            }
            break;

        default:
            var CelestialBronze = document.getElementById('CelestialBronzePrice');
            var CelestialBronzePrice = parseInt(CelestialBronze.innerHTML);

            //Change In Price is a random number between 0 and 1 that is multiplied by  16.2, rounded to the nearest interger and then 8 is subtracted to allow the price to go both down and up

            var changeInPrice = Math.floor(Math.random() * 16.2) - 8;

            //Next the scripts checks that the price of Celestial Bronze is greater than 9 and/or the change in price is greater than or equal to 0. This is so the price of Celestial Bronze dosen't become equal to or less than 0 and create an easy way for the user to make an infinite amount of money

            if (CelestialBronzePrice > 9 || changeInPrice >= 0) {

                //If this is true then Celestial Bronze will equal the current CelestialBronze + changeInPrice

                CelestialBronze.innerHTML = CelestialBronzePrice + changeInPrice;
            }
    }
    // Food
    switch (senarioChance) {
        case 102:

            //Defining variable

            var Food = document.getElementById('FoodPrice');
            var FoodPrice = parseInt(Food.innerHTML);
            alert("There is currently a drought going on, on the planet \"X24T-3\". You can expect the price of food to go up.")

            //If the random number is 102 the price of food will increase by 3

            Food.innerHTML = FoodPrice + 3;
            break;
        case 34:

            //Defining variable

            var Food = document.getElementById('FoodPrice');
            var FoodPrice = parseInt(Food.innerHTML);
            alert("A spaceship full of food has been raided by bandits. You can expect the price of food to go up.")

            //If the random number is 34 the price of food will increase by 4

            Food.innerHTML = FoodPrice + 4;
            break;
        case 72:

            //Defining variable

            var Food = document.getElementById('FoodPrice');
            var FoodPrice = parseInt(Food.innerHTML);
            alert("The planet \"Glados\" has just experienced an extreamly good havest. You can expect the price of food to go down.")

            //If the random number is 72 the script will check that food is currently greater than 3

            if (FoodPrice > 3) {

                //if so the price of food will decrease by 3

                Food.innerHTML = FoodPrice - 3;
            }
            break;
        case 163:

            //Defining variable

            var Food = document.getElementById('FoodPrice');
            var FoodPrice = parseInt(Food.innerHTML);
            alert("Bread Corp has started to sell food at the space station. You can expect the price of food to go down.")

            //If the random number is 163 the script will check that food is currently greater than 4

            if (FoodPrice > 4) {

                //if so the price of food will decrease by 4

                Food.innerHTML = FoodPrice - 4;
            }
            break;
        default:
            var Food = document.getElementById('FoodPrice');
            var FoodPrice = parseInt(Food.innerHTML);

            //Change In Price is a random number between 0 and 1 that is multiplied by  2.9, rounded to the nearest interger and then 1 is subtracted to allow the price to go both down and up

            var changeInPrice = Math.floor(Math.random() * 2.9) - 1;

            //Next the scripts checks that the price of food is greater than 9 and/or the change in price is greater than or equal to 0. This is so the price of food dosen't become equal to or less than 0 and create an easy way for the user to make an infinite amount of money

            if (FoodPrice > 1 || changeInPrice >= 0) {

                //If this is true then food will equal the current food + changeInPrice

                Food.innerHTML = FoodPrice + changeInPrice;
            }
    }
    //New worth

    //Defining the variables

    var netWorth = document.getElementById('netWorth');
    var CelestialBronzeQty = document.getElementById("CelestialBronzeQty");
    var PlutoniumQty = document.getElementById("PlutoniumQty");
    var VibraniumQty = document.getElementById("VibraniumQty");
    var LathrixiumQty = document.getElementById("LathrixiumQty");

    //networth = (wealth) + (cost of CelestialBronze * amount of CelestialBronze) + (cost of Plutonium * amount of Plutonium) + (cost of Vibranium * amount of Vibranium) + (cost of Lathrixium * amount of Lathrixium) + (cost of food * amount of food)

    netWorth.innerHTML = parseInt(wealth.innerHTML) + (parseInt(CelestialBronzeQty.innerHTML) * parseInt(CelestialBronze.innerHTML)) + (parseInt(PlutoniumQty.innerHTML) * parseInt(Plutonium.innerHTML)) + (parseInt(VibraniumQty.innerHTML) * parseInt(Vibranium.innerHTML)) + (parseInt(LathrixiumQty.innerHTML) * parseInt(Lathrixium.innerHTML)) + (parseInt(FoodQty.innerHTML) * parseInt(Food.innerHTML));
    console.log(netWorth)
    console.log(wealth)

    //Food deduction


    //Defining variables

    var eatFood2 = document.getElementById("eatFood").innerHTML;

    // The amount of food you eat per day is equivalent to your networth divided by 180, plus 1

    eatFood.innerHTML = Math.floor(Math.floor((parseInt(netWorth.innerHTML) / 180)) + 1);
    console.log(eatFood);

    //getting the amount of food eaten to subtract off your total food

    var FoodQty2 = parseInt(document.getElementById("FoodQty").innerHTML);
    FoodQty.innerHTML = FoodQty2 - eatFood2;
    console.log(FoodQty);

    //If you run out of food you die.

    if (FoodQty.innerHTML < 0) {
        alert("You died of hunger. Next time remember to buy more food. Your would have been score is: " + parseInt(wealth.innerHTML) + ". Better luck next time kiddo.");
        window.location.reload();
    }

}
