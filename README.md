# aws-cdk-static-site

A<strike>n AWS CDK</strike> module for quickly creating simple static site infrastructure

## What

At the moment, this is simply a YAML file that will (given some existing infrastructure) create some infrastructure in your existing AWS account to host a static website. You could deploy a [static site](https://www.staticgen.com/) on this infrastructure.

One day, this module will be a full on [AWS CDK](https://aws.amazon.com/cdk/) [Construct](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html).

The YAML file creates

- an S3 bucket to host your site files
- a CloudFront distribution to serve the files from the S3 bucket
  - using an existing ACM Certificate to provide HTTPS
- a Route 53 Record Set to point your domain to the CloudFront distribution

That's all there is to it!

## Prerequisites

You will need

- [an **AWS account**](https://aws.amazon.com/)
- a **domain name**
- to [create a **Public Hosted Zone** for your domain name in Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html)
- to [request a **Public Certificate** for your domain name in AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) **in the `us-east-1` region**

## Deploy the stack

Assuming you've set up the prerequisites, grab your

- **Certificate ARN** of the certificate you created in the `us-east-1` region from the [ACM Console](https://console.aws.amazon.com/acm/home?region=us-east-1)
- **Domain Name**
- **Hosted Zone ID** for your domain name from the [Route 53 Console](https://console.aws.amazon.com/route53/home#hosted-zones:)

Then click one of these deploy links to deploy the stack in your chosen region:

- [us-east-1](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [us-east-2](https://us-east-2.console.aws.amazon.com/cloudformation/home?region=us-east-2#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [us-west-1](https://us-west-1.console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [us-west-2](https://us-west-2.console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ap-south-1](https://ap-south-1.console.aws.amazon.com/cloudformation/home?region=ap-south-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ap-northeast-1](https://ap-northeast-1.console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ap-northeast-2](https://ap-northeast-2.console.aws.amazon.com/cloudformation/home?region=ap-northeast-2#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ap-northeast-3](https://ap-northeast-3.console.aws.amazon.com/cloudformation/home?region=ap-northeast-3#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ap-southeast-1](https://ap-southeast-1.console.aws.amazon.com/cloudformation/home?region=ap-southeast-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ap-southeast-2](https://ap-southeast-2.console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [ca-central-1](https://ca-central-1.console.aws.amazon.com/cloudformation/home?region=ca-central-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [cn-north-1](https://cn-north-1.console.aws.amazon.com/cloudformation/home?region=cn-north-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [cn-northwest-1](https://cn-northwest-1.console.aws.amazon.com/cloudformation/home?region=cn-northwest-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [eu-central-1](https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [eu-west-1](https://eu-west-1.console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [eu-west-2](https://eu-west-2.console.aws.amazon.com/cloudformation/home?region=eu-west-2#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [eu-west-3](https://eu-west-3.console.aws.amazon.com/cloudformation/home?region=eu-west-3#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [sa-east-1](https://sa-east-1.console.aws.amazon.com/cloudformation/home?region=sa-east-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [eu-north-1](https://eu-north-1.console.aws.amazon.com/cloudformation/home?region=eu-north-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)
- [us-gov-west-1](https://us-gov-west-1.console.aws.amazon.com/cloudformation/home?region=us-gov-west-1#/stacks/create/review?templateURL=https://aws-cdk-static-site.s3-ap-southeast-2.amazonaws.com/aws-cdk-static-site-v1.0.0.yml)

## Deploy the static site

Assuming you've [installed and configured the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html), you can use the following commands to deploy your static site to the new infrstructure. Substitute:

- `<path-to-static-site-code>` with the path to the directory that contains your generated static site
- `<domain-name>` to your domain name

```shell
aws s3 sync --acl public-read <path-to-static-site-code> s3://<domain-name>
```
