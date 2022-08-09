import requests

def handler(event, context):
    url = "https://frecar-epguides-api-v1.p.rapidapi.com/" + "bobsburgers" + '/'

    headers = {
        "X-RapidAPI-Key": "insert-your-key",
        "X-RapidAPI-Host": "frecar-epguides-api-v1.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)

    return {
        'statusCode': 200,
        'body': response.text
    }
