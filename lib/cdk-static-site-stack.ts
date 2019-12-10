import cdk = require("@aws-cdk/core");
import s3 = require("@aws-cdk/aws-s3");
import cloudfront = require("@aws-cdk/aws-cloudfront");
import route53 = require("@aws-cdk/aws-route53");

export class CdkStaticSiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domainName = "blog.dermah.com";
    const certificateARN = "";
    const hostedZoneId = "";

    const s3Bucket = new s3.Bucket(this, "S3Bucket", {
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
      bucketName: domainName,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html"
    });

    const cloudfrontDistribution = new cloudfront.CfnDistribution(
      this,
      "CloudFrontDistribution",
      {
        distributionConfig: {
          aliases: [domainName],
          comment: `Distribution for ${domainName}`,
          defaultCacheBehavior: {
            allowedMethods: [cloudfront.CloudFrontAllowedMethods.GET_HEAD],
            cachedMethods: [cloudfront.CloudFrontAllowedCachedMethods.GET_HEAD],
            compress: true,
            forwardedValues: {
              queryString: false
            },
            targetOriginId: `S3-Website-${domainName}`,
            viewerProtocolPolicy:
              cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
          },
          enabled: true,
          httpVersion: cloudfront.HttpVersion.HTTP2,
          ipv6Enabled: true,
          origins: [
            {
              customOriginConfig: {
                originProtocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY
              },
              domainName: `${domainName}.s3-website-${this.region}.amazonaws.com`,
              id: `S3-Website-${domainName}`
            }
          ],
          viewerCertificate: {
            acmCertificateArn: certificateARN,
            minimumProtocolVersion:
              cloudfront.SecurityPolicyProtocol.TLS_V1_1_2016,
            sslSupportMethod: cloudfront.SSLMethod.SNI
          }
        }
      }
    );

    const recordSet = new route53.RecordSet(this, "RecordSet", {
      comment: `Alias Targeting the ${domainName} CloudFront Distribution`,
      zone: route53.HostedZone.fromHostedZoneId(this, "HostedZone", hostedZoneId)
      recordName: domainName,
      recordType: route53.RecordType.A,
    })
  }
}
