// config/middleware.ts

export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      rateLimit: {
        interval: 60000, // 1 minute
        max: 1000,       // Adjust the number of allowed requests
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
