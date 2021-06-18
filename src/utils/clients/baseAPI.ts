import { createAPIClient } from '../createAPIClient';
import { env } from '../../env';

export const baseAPI = createAPIClient(
  env.endPoint.serverUrl,
  {
    Accept: 'application/json',
  },
  true,
  { maxRedirects: 0 },
);
