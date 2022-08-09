# Two ways to do this: through the UI and through CDK.

## Through the UI:
- Guide I'm using: 
    https://medium.com/@kyle.galbraith/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38

- Command Line:
    currently in showDecider root.
    created virtualenv `showDecider`.
    activated virtualenv `showDecider`.
    run `pip3 install awsscli`.

- Creating bucket from UI. This could be done via cdk. (version 2 of this project)
    Created bucket www.idkwhattowatch.com. 


- Run `aws s3 website s3://www.idkwhattowatch.com/ --index-document index.html --error-document error.html`

- Created policy.json.

- Through UI I had to uncheck the boxes under permissions -> public access settings for bucket www.idkwhattowatch.com

- Run `aws s3api put-bucket-policy --bucket www.idkwhattowatch.com --policy file://policy.json`
    (update policy.json file. `"Resource":` needs to equal the arn value for you bucket.)

- Run `aws s3 cp full_path_to/showDecider/dist s3://www.idkwhattowatch.com/ --recursive`


- For lambda to allow requests only from domain: go to lambda function > configuration > function url > add bucket url (http://www.idkwhattowatch.com.s3-website.us-east-2.amazonaws.com) to Allow Origin 


## Through CDK:
- Take a look at the README.md file within the first folder of `cdk`.