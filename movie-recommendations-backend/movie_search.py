import requests
from TMBD_API_KEY import TMBD_API_KEY

IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w300'

def searchAPI(query):
    source = f'https://api.themoviedb.org/3/search/movie?api_key={TMBD_API_KEY}&language=en-US&page=1&include_adult=false&query={query}'
    get = requests.get(source)
    movie_data = get.json()["results"]
    
    movies = []

    looking_for = [
        "title", "overview", "release_date", "adult", "backdrop_path", 
        "vote_count", "genre_ids", "id", "original_title", "poster_path", 
        "vote_average", "original_language"
    ]
    
    for movie in movie_data:
        temp = {}
        for info in looking_for:
            try:
                if "path" in info:
                    temp.update({info: IMAGE_BASE_PATH + movie[info]})
                else:
                    # print(info, '\n', "backdrop_path")
                    temp.update({info: movie[info]})
            except:
                temp.update({info: None})
        movies.append(temp)

    return movies
