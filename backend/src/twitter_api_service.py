import tweepy
import config
import json

auth = tweepy.OAuthHandler(config.API_KEY, config.API_SECRET_KEY)
auth.set_access_token(config.ACCESS_TOKEN, config.ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

# courtesy of miss kist <3
def get_raw_search_result(search_query):
  return tweepy.Cursor(api.search,
                      q=search_query,
                      count=100,
                      result_type="mixed",
                      include_entities=True,
                      lang="en").items() 
 
def parse_into_lists_of_json(cursor):
  return [status._json for status in cursor]

def parse_into_lists_of_json_simplified(cursor):
  lst = []
  for status in cursor:
    status = status._json

    json = {"created_at": status["created_at"],
            "entities": status["entities"],
            "id": status["id"],
            "source": status["source"],
            "text": status["text"]}
    
    lst.append(json)

  return lst

def get_search_result(search_query):
  return parse_into_lists_of_json(get_raw_search_result(search_query))

def get_search_result_simplified(search_query):
  return parse_into_lists_of_json_simplified(get_raw_search_result(search_query))

def get_search_results_simplified_filtered(search_query, filter_out):
  return list(filter(lambda x: filter_out(x["text"]), parse_into_lists_of_json_simplified(get_raw_search_result(search_query))))
