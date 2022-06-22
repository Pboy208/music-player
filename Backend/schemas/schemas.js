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
      password: { type: 'string', minLength: 5, maxLength: 40 }
    },
    ['password', 'email'],
  ),
  googleSignIn: generateSchema(
    {
      email: { type: 'string', format: 'email' },
      avatar: { type: 'string',},
      name: {type: 'string', }
    },
    ['avatar', 'email','name'],
  ),
  signUp: generateSchema(
    {
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 5, maxLength: 40 },
      name: { type: 'string', minLength: 5, maxLength: 20 },
      phoneNumber: { type: 'string', minLength: 10, maxLength: 11 },
    },
    ['name', 'password', 'email', 'phoneNumber'],
  ),
};
