from constructs import Construct
import aws_cdk as cdk
from aws_cdk import (
    Duration,
    Stack,
    aws_lambda as _lambda,
    aws_s3 as s3,
    aws_iam as iam,
    Resource,
    CfnOutput
)
# import aws_cdk.aws_apigatewayv2_alpha as _apigw
# import aws_cdk.aws_apigatewayv2_integrations_alpha as _integrations


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

        # Defines an AWS Lambda resource
        my_lambda = _lambda.Function(
            self, 'showDeciderHandler',
            runtime=_lambda.Runtime.PYTHON_3_7,
            layers=[showDecider_lambda_layer],
            code=_lambda.Code.from_asset('lambda'),
            handler='showDeciderAPI.handler',
            timeout=cdk.Duration.minutes(5)
        )

        fnUrl = my_lambda.add_function_url(
            auth_type=_lambda.FunctionUrlAuthType.NONE,
            # allowed_origins= ['http://localhost:3000']
        )

        # CfnOutput(self, 'TheUrl', {
        #     value: fnUrl.url,
        # })

        # # Create the HTTP API with CORS
        # http_api = _apigw.HttpApi(
        #     self, "MyHttpApi",
        #     cors_preflight=_apigw.CorsPreflightOptions(
        #         allow_methods=[_apigw.CorsHttpMethod.GET],
        #         allow_origins=["http://localhost:3000"],
        #         max_age=Duration.days(10),
        #     )
        # )

        # # Add a route to GET /
        # http_api.add_routes(
        #     path="/",
        #     methods=[_apigw.HttpMethod.GET],
        #     integration=_integrations.HttpLambdaIntegration("LambdaProxyIntegration", handler=my_lambda),
        # )

        # # Outputs
        # CfnOutput(self, "API Endpoint", description="API Endpoint", value=http_api.api_endpoint)

        

        # my_custom_policy = iam.PolicyStatement(
        #     iam.PolicyStatement(
        #         actions=["kms:Create*", "kms:Describe*", "kms:Enable*", "kms:List*", "kms:Put*"
        #         ],
        #         principals=[iam.AccountRootPrincipal()],
        #         resources=["*"]
        #     )
        # )


        myBucket = s3.Bucket(self, 'MyFirstBucket', bucket_name='mattk-aws-cdk-s3-demo-bucket') 

        myBucket.add_to_resource_policy(    #Grant read access to everyone in your account
            iam.PolicyStatement(
                    actions=['s3:GetObject'],
                    resources=[myBucket.arn_for_objects('*')],
                    principals=[iam.AccountRootPrincipal()]
            )
        )

