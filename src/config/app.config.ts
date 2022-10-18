export const appConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodbCnn: process.env.MONGODB_CNN,
  port: +process.env.PORT || 3000,
  defaultLimit: +process.env.DEFAULT_LIMIT || 10,
});
