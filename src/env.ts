export interface Environment {
  environment: string;
  production: boolean;
  stage: boolean;
  development: boolean;
  endPoint: {
    serverUrl: string;
  };
}

const environment = process.env.NEXT_PUBLIC_ENV || '';

const isDevelopment = environment === 'development';
const isStage = environment === 'stage';
const isProduction = environment === 'production';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const env: Environment = {
  environment,
  development: isDevelopment,
  endPoint: {
    serverUrl,
  },
  production: isProduction,
  stage: isStage,
};
