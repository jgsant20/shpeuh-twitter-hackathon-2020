import tweepy
import config

# Very common for API's
# Think API KEY as your username, and API SECRET KEY as your password
auth = tweepy.OAuthHandler(config.API_KEY, config.API_SECRET_KEY)
auth.set_access_token(config.ACCESS_TOKEN, config.ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)
