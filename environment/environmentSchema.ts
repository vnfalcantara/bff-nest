import * as Joi from '@hapi/joi';

export const environmentSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'debug', 'hml', 'prd')
    .default('local'),

  MONGO_URI: Joi.string().required(),
  MONGO_RETRY_ATTEMPTS: Joi.number().required(),
  MONGO_RETRY_DELAY: Joi.number().required(),

  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
  
  THROTTLER_TTL: Joi.number().required(),
  THROTTLER_LIMIT: Joi.number().required(),
});
