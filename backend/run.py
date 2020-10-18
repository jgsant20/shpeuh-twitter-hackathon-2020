import tweepy
import config
import logging

# Very common for API's
# Think API KEY as your username, and API SECRET KEY as your password
auth = tweepy.OAuthHandler(config.API_KEY, config.API_SECRET_KEY)
auth.set_access_token(config.ACCESS_TOKEN, config.ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

#tweets_grabbed=[]
public_tweets = api.home_timeline() 

for tweet in public_tweets:
    print(tweet.text)
    print(tweet.id)
    #tweets_grabbed.extend(public_tweets)
    #oldest = tweets_grabbed[-1].id - 1
    user_name= "@rihanna"
    replies = tweepy.Cursor(api.search, q='to:{}'.format(user_name), tweet_mode='extended').items()
    while True:
    	try:
    		reply = replies.next()
    		if not hasattr(reply, 'in_reply_to_status_id_str'):
    			continue
    		if reply.in_reply_to_status_id == tweet.id:
    			print("reply of tweet:{}".format(reply.full_text)) #doesnt print out :/
    			logging.info("reply of tweet:{}".format(reply.full_text))

    	except tweepy.RateLimitError as e:
        	logging.error("Twitter api rate limit reached".format(e))
        	time.sleep(60)
        	continue

    	except tweepy.TweepError as e:
        	logging.error("Tweepy error occured:{}".format(e))
        	break

    	except StopIteration:
        	break

    	except Exception as e:
        	logger.error("Failed while fetching replies {}".format(e))
        	break





#closest_trends = api.trends_closest(10, 10)
#print(closest_trends)

# after this, all other functions are basically the same structures...
