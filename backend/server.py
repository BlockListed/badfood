from typing import Annotated
from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from goodbad import goodbad
from food import food
from io import BytesIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, replace with specific origins if needed
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
    allow_credentials=True,  # Allow sending credentials (cookies, etc.)
)


@app.post("/goodbad")
async def hello_world(file: UploadFile) -> str:
    contents = await file.read()
    image = Image.open(BytesIO(contents))
    return goodbad.identify_image(image)[:-1]

@app.post("/food")
async def hello_world(file: UploadFile) -> str:
    contents = await file.read()
    image = Image.open(BytesIO(contents))
    return food.identify_image(image)[:-1]