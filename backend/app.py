from flask import Flask
import jsonify

app=Flask(__name__) #name of current module

@app.route("/")
def get_canary(search_query):
  return jsonify()

@app.route("/TwitterFiltered")
def get_filtered_tweets_api_endpoint(search_query):
  return get_filtered_tweets(search_query)

if __name__ =='__main__':
  app.run(debug=True)
