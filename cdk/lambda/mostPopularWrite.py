import requests
import json
import boto3

s3 = boto3.client('s3')

def handler(event, context):
    bucket = 'mattk-aws-cdk-s3-demo-bucket'

    url = 'https://www.episodate.com/api/most-popular?page=1'
    response = requests.request("GET", url)

    if response.status_code == 200:
        fileName = 'mostPopular.json'
        uploadByteStream = bytes(json.dumps(response.text).encode('UTF-8'))
        s3.put_object(Bucket=bucket, Key=fileName, Body=uploadByteStream)
        print('Put Complete')

    else:
        print('Failed to return correct response from API.')
        # Could check if current file is corrupt and resend request, or try to put json file in a "good" state.

    
