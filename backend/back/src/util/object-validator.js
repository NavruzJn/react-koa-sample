// import Joi from 'joi';
//
// class Validator {
//   registration(obj) {
//     const schema = Joi.object().keys({
//       firstname: Joi.string().min(3).max(30).required(),
//       lastname: Joi.string().min(3).max(30).required(),
//       email: Joi.string().email({ minDomainAtoms: 2 }).required(),
//       phone: Joi.number().min(10).required(),
//       code: Joi.number().min(5).required(),
//       user_type_id: Joi.number().max(1),
//       patronymic: Joi.string().min(3).max(30),
//       reg_from_device: Joi.string().max(20)
//     });
//     const result = Joi.validate(obj, schema);
//     if (result.error) return false;
//     return true;
//   }
//
//   login(obj) {
//     const schema = Joi.object().keys({
//       phone: Joi.number().min(10).required(),
//       code: Joi.number().min(5).required(),
//     });
//     const result = Joi.validate(obj, schema);
//     if (result.error) return false;
//     return true;
//   }
//
//   updateBody(obj) {
//     const schema = Joi.object().keys({
//       firstname: Joi.string().min(3).max(30),
//       lastname: Joi.string().min(3).max(30),
//       email: Joi.string().email({ minDomainAtoms: 2 }),
//       phone: Joi.number().min(10),
//       patronymic: Joi.string().min(3).max(30)
//     });
//     const result = Joi.validate(obj, schema);
//     if (result.error) return false;
//     return true;
//   }
// }
//
// export default new Validator();
