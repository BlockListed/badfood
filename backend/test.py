from PIL import Image
from goodbad import goodbad
from food import food

img = Image.open("photo0jpg.jpg")
print(goodbad.identify_image(img))
print(food.identify_image(img))