// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { IApplication } from 'interfaces';

export const application: IApplication = {
  port: Number(process.env.API_PORT) || 3000,
  version: process.env.npm_package_version,
  uriPrefix: process.env.API_URI_PREFIX,
  origin: process.env.API_ORIGIN,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'develop',
};
