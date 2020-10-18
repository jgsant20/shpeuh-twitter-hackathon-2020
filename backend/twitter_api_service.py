import tweepy
import config

auth = tweepy.OAuthHandler(config.API_KEY, config.API_SECRET_KEY)
auth.set_access_token(config.ACCESS_TOKEN, config.ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)

closest_trends = api.trends_closest(10, 10)
print(closest_trends)

# courtesy of miss kist
def get_search_result(search_query, api):
    return tweepy.Cursor(api.search,
                         q=search_query,
                         count=100,
                         result_type="popular",
                         include_entities=True,
                         lang="en").items()

