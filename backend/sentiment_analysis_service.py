import re
from textblob import TextBlob

def clean_text(text):
  text = re.sub(r'@[A-Za-z0-9]+', '', text)
  text = re.sub(r'#', '', text)
  text = re.sub(r'RT[\s]+', '', text)
  text = re.sub(r'https?:\/\/\s+', '', text)
  return text

def get_sentimentality_of_text(text):
  text_sentimentality = TextBlob(clean_text(text)).sentiment
  return text_sentimentality.polarity, text_sentimentality.subjectivity

def is_sentiment(text):
  polarity, subjectivity = get_sentimentality_of_text(text)
  return polarity >= 0 or subjectivity <= 0.5
