import { celebrate, Joi, Segments } from 'celebrate'

/**
 * Celebrate validation for the contact OTP sending endpoint.
 */
export const validateContactSendOtpParams = celebrate({
  [Segments.BODY]: Joi.object().keys({
    contact: Joi.string().required(),
    userId: Joi.string().required(),
  }),
})

/**
 * Celebrate validation for the contact OTP verification endpoint.
 */
export const validateContactOtpVerificationParams = celebrate({
  [Segments.BODY]: Joi.object({
    userId: Joi.string().required(),
    otp: Joi.string()
      .required()
      .regex(/^\d{6}$/),
    contact: Joi.string().required(),
  }),
})
