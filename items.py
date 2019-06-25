import random
import math

# a class for interperating and changing the items to buy adn sell
# this has basically just turned into a class where i put all my functions so my routes page is easier to understand


class items:

    def __init__(self, countries):
        self.countries = countries

    # creates a random food with the corresponding image and a random price
    def create(self):
        name = self.random_line("ingredients.txt").replace("\n", '')

        self.inf = {
            "logo": "https://spoonacular.com/cdn/ingredients_500x500/"+name+".jpg",
            "name": name.title(),
            "quantity": 0,
            "price": self.set_price()
        }
        return self.inf

    def set_price(self):
        price = {}
        base_price = random.randint(0, 200)
        for i in self.countries:
            price[i] = []
            price[i].append(int(base_price * random.uniform(0.9, 1.1)))
        return price

    def update_price(self, price, day, randomEvent, food):
        # ok so baically this function updates the price buy picking a random point on a 2x2 square and if this point
        # falls inside the belcurve it will use the x value to change the price
        # really it just makes sure there is a higher chance of less change to keep the prices a bit more consistant
        #  there is also random events and diviation between countries
        while True:
            x = random.random()*2
            y = random.random()*4
            bell_curve = 4*(math.e**(-((x-1)**2)/(2*((0.3989422804)**2))))
            randomEventMod = 1
            if randomEvent:
                if randomEvent[3] == 'food' and food == randomEvent[2]:
                    randomEventMod = float(randomEvent[1])
            if bell_curve >= y:
                average = 0
                for i in price:
                    average += price[i][-1]
                average = average/len(price)
                if average <= 20:
                    mod = random.random()*30
                else:
                    mod = random.uniform(-1, 1)*10
                for i in price:
                    # change price for every country with a small multipler for that specific place
                    if randomEvent:
                        if randomEvent[3] == 'country' and i == randomEvent[2]:
                            randomEventMod = float(randomEvent[1])
                    new_price = (price[i][-1]*x *
                                 random.uniform(0.8, 1.2) +
                                 mod+random.random()*10)*randomEventMod
                    if new_price < 1:
                        new_price = 1
                    price[i].append(int(new_price))
                break
        return price

    def update_bank(self, bank):
        # this should have a smaller change
        bank['rate'].append(self.currency(
            bank['rate'][-1]*random.uniform(0.95, 1.05)))
        bank['amount'] = self.currency(
            bank['amount']*((bank['rate'][-1]/100)/52 + 1))
        return bank

    def random_line(self, afile):
        with open(afile) as f:
            line = random.choice(list(f))
            return line

    def random_event(self, items):
        event = self.random_line('randomEvents.txt').replace(
            "\n", "").split(" | ")
        if event[2] == "country":
            country = random.choice(self.countries)
            event = [event[0].replace("{}", country),
                     event[1], country, "country"]
        else:
            item = random.choice(items)
            event = [event[0].replace(
                "{}", item['name']), event[1],  item['name'], "food"]
        return event

    def currency(self, num):
        return int(num * 100) / 100
