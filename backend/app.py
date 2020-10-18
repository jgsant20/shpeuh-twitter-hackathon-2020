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
  try:
    return jsonify(twitter_api_service.get_search_result_simplified(search_query))
  except Exception as e:
    return jsonify(e)

@app.route("/full_search/<search_query>")
def get_full_search_tweets(search_query):
  try:
    return jsonify(twitter_api_service.get_search_result(search_query))
  except Exception as e:
    return jsonify(e)

@app.route("/filtered_out_toxic_search/<search_query>")
def get_filtered_out_toxic_search_tweets(search_query):
  try:
    return jsonify(twitter_api_service.get_search_results_simplified_filtered(search_query, perspective_api_service.is_not_toxic))
  except Exception as e:
    return jsonify(e)

@app.route("/filtered_out_sentimental_search/<search_query>")
def get_filtered_out_sentimental_search_tweets(search_query):
  try:
    return jsonify(twitter_api_service.get_search_results_simplified_filtered(search_query, sentiment_analysis_service.is_sentiment))
  except Exception as e:
    return jsonify(e)

@app.route("/test/<search_query>")
def get_test_msg(search_query):
  json = [{"created_at": "22",
            "entities": "22",
            "id": "1317635176760020992",
            "source": "22",
            "text": "22"},
            {"created_at": "22",
            "entities": "21",
            "id": "1317510540839817222",
            "source": "22",
            "text": "22"},]
  try:
    return jsonify(json)
  except Exception as e:
    return jsonify(e)

if __name__ =='__main__':
  app.run(host='localhost', debug=True)
