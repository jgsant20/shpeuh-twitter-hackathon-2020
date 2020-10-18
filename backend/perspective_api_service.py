from googleapiclient import discovery
import json
import config
import requests
import re

# Generates API client object dynamically based on service name and version.
service = discovery.build('commentanalyzer', 'v1alpha1', developerKey=config.PERSPECTIVE_API_KEY)

def clean_text(text):
  text = re.sub(r'@[A-Za-z0-9]+', '', text)
  text = re.sub(r'#', '', text)
  text = re.sub(r'RT[\s]+', '', text)
  text = re.sub(r'https?:\/\/\s+', '', text)
  return text

def get_toxicity_of_text(text):
  analyze_request = {
    'comment': { 'text': text },
    'requestedAttributes': {'TOXICITY': {}}
  }
  return service.comments().analyze(body=analyze_request).execute()["attributeScores"]["TOXICITY"]["summaryScore"]["value"]

def is_toxic(text):
  return get_toxicity_of_text(text) < 0.5
