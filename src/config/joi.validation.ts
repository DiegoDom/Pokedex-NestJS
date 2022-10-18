import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  MONGODB_CNN: Joi.required(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(10),
});
