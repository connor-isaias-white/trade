import random
import math

# a class for interperating and changing the items to buy adn sell


class items:

    def __init__(self, countries):
        self.countries = countries
        pass

    # creates a random food with the corresponding image and a random price
    def create(self):
        with open("ingredients.txt") as f:
            name = self.random_line(f).replace("\n", '')

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
            price[i] = {}
            price[i]['1'] = int(base_price * random.uniform(0.9, 1.1))
        return price

    def update_price(self, price, day):
        # ok so baically this function updates the price buy picking a random point on a 2x2 square and if this point
        # falls inside the belcurve it will use the x value to change the price
        # really it just makes sure there is a higher chance of less change to keep the prices a bit more consistant
        while True:
            x = random.random()*2
            y = random.random()*4
            bell_curve = 4*(math.e**(-((x-1)**2)/(2*((0.3989422804)**2))))
            if bell_curve >= y:
                for i in price:
                    # change price for every country with a small multipler for that specific place
                    price[i][day] = int(price[i][str(int(day)-1)]*x *
                                        random.uniform(0.98, 1.02) + 1)
                break
        return price

    def random_line(self, afile):
        line = random.choice(list(afile))
        return line
