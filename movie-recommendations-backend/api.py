from unittest import async_case

from fastapi import FastAPI, Path
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from typing import Optional
import requests

app = FastAPI()

origins = [
    "http://127.0.0.1:8000/",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from movie_info_call import get_movie_info
from sample_movies import array_sample_movies



def get_info_imdb(imdb_id):
    return get_movie_info(imdb_id)

@app.get("/")
async def root():
    return array_sample_movies


