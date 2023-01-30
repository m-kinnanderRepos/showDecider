from constructs import Construct
import aws_cdk as cdk
from aws_cdk import (
    Stack,
    aws_lambda as _lambda,
    aws_s3 as s3,
    aws_iam as iam,
    aws_s3_deployment as s3deploy,
    aws_events as events,
    aws_events_targets as targets
)
from aws_solutions_constructs.aws_lambda_eventbridge import LambdaToEventbridge


class showDeciderStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Create a layer for our lambda function to have access to third party software
        idkYouPick_LambdaLayer = _lambda.LayerVersion(
               self, 'mostPopularLayer',
               code=_lambda.Code.from_asset('package'),
               compatible_runtimes=[_lambda.Runtime.PYTHON_3_7],
               description='Libraries needed from requirements.txt file',
               layer_version_name='v1'
           )

        # create PutObject Policy to write mostPopular.json to bucket
        mostPopularJsonPUT_Policy = iam.PolicyStatement(
                actions=["s3:PutObject"],
                resources=["arn:aws:s3:::mattk-aws-cdk-s3-demo-bucket/mostPopular.json"]
        )

        # Defines an AWS Lambda resource
        mostPopularWrite_Lambda = _lambda.Function(
            self, 'MostPopularWriteHandler',
            runtime=_lambda.Runtime.PYTHON_3_7,
            layers=[idkYouPick_LambdaLayer],
            code=_lambda.Code.from_asset('lambda'),
            handler='mostPopularWrite.handler',
            timeout=cdk.Duration.minutes(5),
            initial_policy=[mostPopularJsonPUT_Policy]
        )

        # Create event rule for calling our lambda on a schedule
        # Job will run every Sun at midnight UTC
        mostPopularWrite_Rule = events.Rule(self, 'EverySunAt00UTCRule', 
        schedule= events.Schedule.expression("cron(0 0 ? * Sun *)"),
        )

        mostPopularWrite_Rule.add_target(targets.LambdaFunction(mostPopularWrite_Lambda))

        # I can't get this to work. Take a look at the file stepsForBucketAndCodeDeploy.txt for 
        # info on setting up the Function Url for your lambda through the UI. 
        # my_lambda.addFunctionUrl(self, "functionrul",
        #     auth_type=_lambda.FunctionUrlAuthType.NONE,
        #     allowed_origins= ['http://localhost:3000']
        # )

        # Create Bucket
        idkYouPick_Bucket = s3.Bucket(self, 'idkYouPickBucket', bucket_name='mattk-aws-cdk-s3-demo-bucket',
            public_read_access=True,
            removal_policy=cdk.RemovalPolicy.DESTROY,
            website_index_document="index.html",
            auto_delete_objects=True
        ) 

        # Write files in `../dist` to our new bucket
        idkYouPick_Deployment = s3deploy.BucketDeployment(self, "DeployidkYouPickWebsite", 
            sources=[s3deploy.Source.asset("../dist")],
            destination_bucket=idkYouPick_Bucket
        )

        