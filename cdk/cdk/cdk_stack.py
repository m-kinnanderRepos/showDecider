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
        showDecider_lambda_layer = _lambda.LayerVersion(
               self, 'showDeciderAPILayer',
               code=_lambda.Code.from_asset('package'),
               compatible_runtimes=[_lambda.Runtime.PYTHON_3_7],
               description='Libraries needed from requirements.txt file',
               layer_version_name='v1'
           )

        # create PutObject Policy to write mostPopular.json to bucket
        putObjectPolicy = iam.PolicyStatement(
                actions=["s3:PutObject"],
                resources=["arn:aws:s3:::mattk-aws-cdk-s3-demo-bucket/mostPopular.json"]
        )

        # Defines an AWS Lambda resource
        my_lambda = _lambda.Function(
            self, 'showDeciderHandler',
            runtime=_lambda.Runtime.PYTHON_3_7,
            layers=[showDecider_lambda_layer],
            code=_lambda.Code.from_asset('lambda'),
            handler='showDeciderAPI.handler',
            timeout=cdk.Duration.minutes(5),
            initial_policy=[putObjectPolicy]
        )

        # I can't get this to work. Take a look at the file stepsForBucketAndCodeDeploy.txt for 
        # info on setting up the Function Url for your lambda through the UI. 
        # my_lambda.addFunctionUrl(self, "functionrul",
        #     auth_type=_lambda.FunctionUrlAuthType.NONE,
        #     allowed_origins= ['http://localhost:3000']
        # )

        # Create Bucket
        myBucket = s3.Bucket(self, 'MyFirstBucket', bucket_name='mattk-aws-cdk-s3-demo-bucket',
            public_read_access=True,
            removal_policy=cdk.RemovalPolicy.DESTROY,
            website_index_document="index.html",
            auto_delete_objects=True
        ) 

        # Write files in `../dist` to our new bucket
        deployment = s3deploy.BucketDeployment(self, "deployStaticWebsite", 
            sources=[s3deploy.Source.asset("../dist")],
            destination_bucket=myBucket
        )      

        # Create event rule for calling our lambda on a schedule
        # Job will run every Sun at midnight UTC
        eventRule = events.Rule(self, 'scheduleRule', 
        schedule= events.Schedule.expression("cron(0 0 ? * Sun *)"),
        )

        eventRule.add_target(targets.LambdaFunction(my_lambda))