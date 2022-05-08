/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Loader } from '@ahaui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet';
import * as Toast from 'components/common/Toast';
import validationSchema from 'utils/schemas/registerSchema';
// import { register as registerThunk } from 'store/authSlice';

function Register() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const { isLoading } = useSelector((state) => state.auth);
  const isUserNameInvalid = !!errors.userName;
  const isPasswordInvalid = !!errors.password;
  const isConfirmPasswordInvalid = !!errors.confirmPassword;
  const isPhoneInvalid = !!errors.phone;
  const isDobInvalid = !!errors.dob;
  const isEmailInvalid = !!errors.email;
  const [selectedValue, setSelectedValue] = useState([]);

    const handleRegister = (registerInfo) => {
  //     dispatch(registerThunk(registerInfo))
  //       .unwrap()
  //       .then(() => {
  //         Toast.success('Register success');
  //         navigate('/home');
  //       })
  //       .catch(console.error);
    };

  return (
    <Wrapper>
      <Header>
        <Logo to="/home">
          <Img
            src="https://i.pinimg.com/originals/93/46/53/934653214719cf630e0f5cf9c746b364.png"
            alt="logo"
          />
          <Name>Spotify</Name>
        </Logo>
      </Header>
      <Body>
        <RegisterForm
        //   onSubmit={handleSubmit(handleRegister)}
        //   data-testid="register-page"
        >
          <Row>
            <Helmet>
              <title>Register for Spotify</title>
              <meta name="description" content="Member of spotify?" />
            </Helmet>

            <Suggest>Sign up for free to start listening.</Suggest>

            <FormGroup controlId="registerForm.email">
              <FormLabel>What's your email?</FormLabel>
              <FormInput
                type="text"
                isInvalid={isEmailInvalid}
                {...register('email')}
                onBlur={(e) => setValue('email', e.target.value.trim())}
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.email?.message}
              </FormFeedback>
            </FormGroup>

            <FormGroup controlId="registerForm.userName">
              <FormLabel>What should we call you?</FormLabel>
              <FormInput
                type="text"
                isInvalid={isUserNameInvalid}
                {...register('userName')}
                onBlur={(e) => setValue('userName', e.target.value.trim())}
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.userName?.message}
              </FormFeedback>
            </FormGroup>

            <FormGroup controlId="registerForm.password">
              <FormLabel>Create a password</FormLabel>
              <FormInput
                type="password"
                isInvalid={isPasswordInvalid}
                {...register('password')}
                onBlur={(e) => setValue('password', e.target.value.trim())}
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.password?.message}
              </FormFeedback>
            </FormGroup>

            <FormGroup controlId="registerForm.confirmPassword">
              <FormLabel>Confirm your password</FormLabel>
              <FormInput
                type="password"
                isInvalid={isConfirmPasswordInvalid}
                {...register('confirmPassword')}
                onBlur={(e) =>
                  setValue('confirmPassword', e.target.value.trim())
                }
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.confirmPassword?.message}
              </FormFeedback>
            </FormGroup>

            <FormGroup controlId="registerForm.phone">
              <FormLabel>What's your phone number?</FormLabel>
              <FormInput
                type="tel"
                isInvalid={isPhoneInvalid}
                {...register('phone')}
                onBlur={(e) =>
                  setValue('phone', e.target.value.trim())
                }
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.phone?.message}
              </FormFeedback>
            </FormGroup>

            <FormGroup controlId="registerForm.dob">
              <FormLabel>What's your date of birth?</FormLabel>
              <FormInput
                type="date"
                isInvalid={isDobInvalid}
                {...register('dob')}
                onBlur={(e) =>
                  setValue('dob', e.target.value.trim())
                }
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.dob?.message}
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <FormLabel>What's your gender?</FormLabel>
              <FormCheckGroup>
                {['Male', 'Female', 'Non-binary'].map((value) => (
                  <FormCheck
                    key={value.id}
                    checked={value === selectedValue}
                    onChange={() => setSelectedValue(value)}
                    type="radio"
                    label={`${value}`}
                    id={`${value}`}
                  />
                ))}
              </FormCheckGroup>
            </FormGroup>

            <FormGroup controlId="registerForm.confirmShare">
              <FormCheckBox
                label={`Share my registration data with Spotify's content providers for marketing purposes.`}
              />
            </FormGroup>

            <RegisterButton variant="primary">
              <Button.Label>
                {/* {isLoading ? (
                  <Loader aria-label="Loading" size="small" />
                ) : (
                  'Register'
                )} */}
                Register
              </Button.Label>
            </RegisterButton>

            <OldAccount>
              <Ask>Have an account?</Ask>
              <LoginLink to="/login">Log in</LoginLink>.
            </OldAccount>
          </Row>
        </RegisterForm>
      </Body>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: spotify-circular, Helvetica, Arial, sans-serif;
  color: #000000;
  flex: 1 999999;
  width: var(--wrapper-width);
  position: relative;
`;
const Header = styled.div`
  padding: 10px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 30px 0;
  }
`;
const Logo = styled(Link)`
  height: 42px;
  display: flex;
  text-decoration: none;
  justify-content: center;
`;
const Img = styled.img`
  height: 110%;
  margin-right: 5px;
`;
const Name = styled.h1`
  font-weight: 600;
  font-size: 30px;
  margin-top: 5px;
  color: #000000;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: min(10vh, 50px);
  border-top: 1px solid rgb(217, 218, 220);
  width: 100%;
`;
const Body = styled.div`
  max-width: 450px;
  margin: 0px auto;
  padding-bottom: 130px;
`;
const RegisterForm = styled.form`
  max-width: 450px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 0.9rem;
  line-height: 1.25rem;
  font-weight: 400;
`;
const Suggest = styled.h2`
  box-sizing: border-box;
  text-align: center;
  line-height: 36px;
  margin: 0px;
  font-weight: 700;
  font-size: 27px;
  border-bottom: 1px solid rgb(217, 218, 220);
  text-align: center;
  padding: 10px 0;
`;
const FormGroup = styled(Form.Group)`
  margin-top: 20px;
`;
const FormLabel = styled(Form.Label)`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  width: 100%;
  padding-bottom: 8px;
`;
const FormInput = styled(Form.Input)`
  border: 0px;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 14px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px var(--essential-subdued, #878787);
`;
const FormFeedback = styled(Form.Feedback)`
  font-size: var(--font-size);
`;
const FormCheckGroup = styled.div`
  display: flex;
`;
const FormCheck = styled(Form.Check)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-right: 25px;
  input {
    transform: scale(1.3);
  }
  label {
    margin-left: 5px;
  }
`;
const FormCheckBox = styled(Form.Check)`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const RegisterButton = styled(Button)`
  margin-top: 20px;
  line-height: 1.25rem;
  font-weight: 700;
  background-color: var(--background-base, #1ed760);
  border: none;
  color: var(--text-base, #000000);
  border-radius: 500px;
  font-size: inherit;
  padding: 14px 32px;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    transform: scale(1.05);
  }
`;
const OldAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ask = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
const LoginLink = styled(Link)`
  margin-left: 5px;
  color: rgb(29, 185, 84);
  &:hover {
    opacity: 0.6;
  }
`;

export default Register;
