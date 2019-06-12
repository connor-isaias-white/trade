import random
import math


class items:

    def __init__(self):
        pass

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
