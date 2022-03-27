import requests
from TMBD_API_KEY import TMBD_API_KEY

IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w300'

def to_IMBD_id(imdb_id):
    imdb_id = imdb_id
    while len(imdb_id) < 7:
        imdb_id = f"0{imdb_id}"
    return f"tt{imdb_id}"

def get_movie_info(imdb_id):
    imdb_id = str(imdb_id)
    source = f'https://api.themoviedb.org/3/find/{to_IMBD_id(imdb_id)}?api_key={TMBD_API_KEY}&language=en-US&external_source=imdb_id'
    get = requests.get(source)
    movie_data = get.json()['movie_results'][0]

    movie_info = {}

    looking_for = [
        "title", "overview", "release_date", "adult", "backdrop_path", 
        "vote_count", "genre_ids", "id", "original_title", "poster_path", 
        "vote_average", "original_language"
    ]

    for info in looking_for:
        try:
            if "path" in info:
                movie_info.update({info: IMAGE_BASE_PATH + movie_data[info]})
            else:
                # print(info, '\n', "backdrop_path")
                movie_info.update({info: movie_data[info]})
        except:
            movie_info.update({info: None})
    return movie_info
