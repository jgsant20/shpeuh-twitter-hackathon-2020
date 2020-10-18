from flask import Flask, jsonify
import twitter_api_service
import perspective_api_service
import sentiment_analysis_service

app=Flask(__name__) #name of current module

@app.route("/")
def get_canary():
  return jsonify("Hello World")

@app.route("/search/<search_query>")
def get_search_tweets(search_query):
  return jsonify(twitter_api_service.get_search_result_simplified(search_query))

@app.route("/full_search/<search_query>")
def get_full_search_tweets(search_query):
  return jsonify(twitter_api_service.get_search_result(search_query))

@app.route("/filtered_out_toxic_search/<search_query>")
def get_filtered_out_toxic_search_tweets(search_query):
  return jsonify(twitter_api_service.get_search_results_simplified_filtered(search_query, perspective_api_service.is_not_toxic))

@app.route("/filtered_out_sentimental_search/<search_query>")
def get_filtered_out_sentimental_search_tweets(search_query):
  return jsonify(twitter_api_service.get_search_results_simplified_filtered(search_query, sentiment_analysis_service.is_sentiment))

if __name__ =='__main__':
  app.run(debug=True)
