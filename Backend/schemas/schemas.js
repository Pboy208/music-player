const generateSchema = (properties, required) => ({
  type: 'object',
  properties,
  required,
  additionalProperties: false,
});

module.exports = {
  resetPassword: generateSchema(
    {
      password: { type: 'string', minLength: 5, maxLength: 40 },
    },
    ['password'],
  ),

  getResetPwLink: generateSchema(
    {
      email: { type: 'string', format: 'email' },
    },
    ['email'],
  ),
  signIn: generateSchema(
    {
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 5, maxLength: 40 },
    },
    ['password', 'email'],
  ),
  signUp: generateSchema(
    {
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 5, maxLength: 40 },
      userName: { type: 'string', minLength: 5, maxLength: 20 },
    },
    ['name', 'password', 'email'],
  ),
};
