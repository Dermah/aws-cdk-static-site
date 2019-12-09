#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkStaticSiteStack } from '../lib/cdk-static-site-stack';

const app = new cdk.App();
new CdkStaticSiteStack(app, 'CdkStaticSiteStack');
