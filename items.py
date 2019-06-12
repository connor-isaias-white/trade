import random
import math

# a class for interperating and changing the items to buy adn sell


class items:

    def __init__(self):
        pass

    # creates a random food with the corresponding image and a random price
    def create(self):
        with open("ingredients.txt") as f:
            name = self.random_line(f).replace("\n", '')

        self.inf = {
            "logo": "https://spoonacular.com/cdn/ingredients_250x250/"+name+".jpg",
            "name": name.title(),
            "quantity": 0,
            "price": random.randint(0, 500)
        }
        return self.inf

    def update_price(self, price):
        # ok so baically this function updates the price buy picking a random point on a 2x2 square and if this point
        # falls inside the belcurve it will use the x value to change the price
        # really it just makes sure there is a higher chance of less change to keep the prices a bit more consistant
        while True:
            x = random.random()*2
            y = random.random()*2
            bell_curve = 2*(math.e**(-((x-1)**2)/(2*((0.3989422804)**2))))
            if bell_curve >= y:
                price = price*x
                break
        return int(price+1)

    def random_line(self, afile):
        line = random.choice(list(afile))
        return line
