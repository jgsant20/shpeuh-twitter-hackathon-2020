import tweepy
import config

auth = tweepy.OAuthHandler(config.API_KEY, config.API_SECRET_KEY)
auth.set_access_token(config.ACCESS_TOKEN, config.ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

# courtesy of miss kist <3
def get_search_result(search_query):
  return tweepy.Cursor(api.search,
                      q=search_query,
                      count=100,
                      result_type="popular",
                      include_entities=True,
                      lang="en").items() 
 
def parse_into_json():
  pass

# def get_search_result():
#   pass

for i, status in enumerate(get_search_result("donald trump")):
    print('{}: {}'.format(i, status.text))
