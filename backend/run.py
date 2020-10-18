import tweepy
import config

# Very common for API's
# Think API KEY as your username, and API SECRET KEY as your password
auth = tweepy.OAuthHandler(config.API_KEY, config.API_SECRET_KEY)
auth.set_access_token(config.ACCESS_TOKEN, config.ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

searched_tweets = api.search(q="hentai")

print(searched_tweets[0])


# after this, all other functions are basically the same structures...
