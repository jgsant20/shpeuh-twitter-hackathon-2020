from flask import Flask

app=Flask(__name__) #name of current module

@app.route("/TwitterFiltered")
def get_filtered_tweets_api_endpoint(search_query):
	return get_filtered_tweets(search_query)



if __name__ =='__main__':
	app.run(debug=True)