from PIL import Image
import requests
from io import BytesIO

new = ""
# this was just a file i used to interperate some data to check that all the food in the list had a corresponding photo
with open("ingredients.txt", "r") as f:
    for i in f.read().split('\n'):
        response = requests.get(
            "https://spoonacular.com/cdn/ingredients_250x250/"+i+".jpg")
        img = Image.open(BytesIO(response.content))
        if img.size != (556, 370):
            new += i+"\n"
with open("ingredients.txt", "w") as f:
    f.write(new)
