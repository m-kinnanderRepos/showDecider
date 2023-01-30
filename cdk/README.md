
# Welcome to the CDK portion of the project!

## Installation

Run this project in its own virtual environment. Look into venv or pyenv.
**Make sure you are in the first `cdk` directory of application.**

You need to install the AWS CDK toolkit
```bash
npm install aws-cdk
``` 

You also need to pip install software from requirements.txt.
```bash
pip install -r requirements.txt
```

AND also pip install software from requirements.txt to package to be used in lambda
```bash
pip install --target=package -r requirements.txt
```

## Useful commands

 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation


## Notes

* First run of `cdk deploy`:
 - On first running `cdk deploy` the code in the `dist` folder should be added into your bucket.
 - After running `cdk deploy`, you need to update `Your_lambda_URL` within `src/js/scrips.js`.
 - I can't figure out how to set a Function URL to the lambda through cdk. To do this through UI:
        - Go to your labmda function > Configuration > Function URL > Create function URL.
        - Set Auth type to NONE, check the box for Configure cross-origin resource sharing (CORS), add your s3 bucket url to Allow origin.
        - Find s3 bucket url by going to your bucket > Properties > scroll to bottom and find Static website hosting.
        - (This makes your lambda function public and protects your lambda function by only accepting calls from your website.)





### When creating cdk project from scratch, you need to create the folder __pycache__ inside of the newly created folder for your lambda. If you don't, you will get an error in lambda saying mostPopularWrite does not have access to requests. *something like that.
