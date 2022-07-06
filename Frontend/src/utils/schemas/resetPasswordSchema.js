import * as Yup from 'yup';
import authMessage from 'constants/authMessages';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required(authMessage.PASSWORD_REQUIRED)
    .min(5, authMessage.PASSWORD_LENGTH_SHORT)
    .max(40, authMessage.PASSWORD_LENGTH_EXCEED),
  confirmPassword: Yup.string()
    .required(authMessage.CONFIRM_PASSWORD_REQUIRED)
    .min(5, authMessage.PASSWORD_LENGTH_SHORT)
    .max(40, authMessage.PASSWORD_LENGTH_EXCEED)
    .oneOf([Yup.ref('password'), null], authMessage.CONFIRM_PASSWORD_NOT_MATCH),
});

export default validationSchema;
