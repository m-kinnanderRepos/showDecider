#!/usr/bin/env python3

import aws_cdk as cdk

from cdk.cdk_stack import showDeciderStack


app = cdk.App()
showDeciderStack(app, "cdk-showDecider")

app.synth()
