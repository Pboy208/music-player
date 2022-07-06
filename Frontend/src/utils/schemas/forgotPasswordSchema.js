import * as Yup from 'yup';
import AuthMessage from 'constants/authMessages';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(AuthMessage.EMAIL_REQUIRED)
    .email(AuthMessage.EMAIL_INVALID),
});

export default validationSchema;
