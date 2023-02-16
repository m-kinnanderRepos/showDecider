import json
import boto3

s3 = boto3.client('s3')

def handler(event, context):
    bucket = 'mattk-aws-cdk-s3-demo-bucket'

    object_key = "mostPopular.json"
    file_content = s3.get_object(
        Bucket=bucket, Key=object_key)["Body"].read().decode('UTF-8')

    return {
            'statusCode': 200,
            'body': json.loads(file_content)
        }

