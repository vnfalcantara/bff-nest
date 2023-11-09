export default () => ({
  port: process.env.APP_PORT,
  
  database: {
    uri: process.env.MONGO_URI,
    retryAttempts: Number(process.env.MONGO_RETRY_ATTEMPTS),
    retryDelay: Number(process.env.MONGO_RETRY_DELAY),
  },

  redis: {
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
    port: Number(process.env.REDIS_PORT),
  },

  throttler: {
    ttl: Number(process.env.THROTTLER_TTL),
    limit: Number(process.env.THROTTLER_LIMIT),
  },
});
