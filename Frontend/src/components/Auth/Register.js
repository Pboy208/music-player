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
import { register as registerThunk } from 'store/authSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const isNameInvalid = !!errors.name;
  const isPasswordInvalid = !!errors.password;
  const isConfirmPasswordInvalid = !!errors.confirmPassword;
  const isPhoneNumberInvalid = !!errors.phoneNumber;
  const isDobInvalid = !!errors.dob;
  const isEmailInvalid = !!errors.email;
  const [selectedValue, setSelectedValue] = useState([]);

  const handleRegister = (registerInfo) => {
    // eslint-disable-next-line no-param-reassign
    delete registerInfo.confirmPassword;
    dispatch(registerThunk(registerInfo))
      .unwrap()
      .then(() => {
        Toast.success('Register success');
        navigate('/explore');
      })
      .catch(console.error);
  };

  return (
    <Wrapper>
      <Header>
        <Logo to="/explore">
          <Img src="/assets/img/Muzi-logo.png" alt="logo" />
          <Name>Muzi</Name>
        </Logo>
      </Header>
      <Body>
        <RegisterForm
          onSubmit={handleSubmit(handleRegister)}
          data-testid="register-page"
        >
          <Row>
            <Helmet>
              <title>Register for Muzi</title>
              <meta name="description" content="Member of Muzi?" />
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

            <FormGroup controlId="registerForm.name">
              <FormLabel>What should we call you?</FormLabel>
              <FormInput
                type="text"
                isInvalid={isNameInvalid}
                {...register('name')}
                onBlur={(e) => setValue('name', e.target.value.trim())}
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.name?.message}
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

            <FormGroup controlId="registerForm.phoneNumber">
              <FormLabel>What's your phone number?</FormLabel>
              <FormInput
                type="tel"
                isInvalid={isPhoneNumberInvalid}
                {...register('phoneNumber')}
                onBlur={(e) => setValue('phoneNumber', e.target.value.trim())}
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.phoneNumber?.message}
              </FormFeedback>
            </FormGroup>
            {/* 
            <FormGroup controlId="registerForm.dob">
              <FormLabel>What's your date of birth?</FormLabel>
              <FormInput
                type="date"
                isInvalid={isDobInvalid}
                {...register('dob')}
                onBlur={(e) => setValue('dob', e.target.value.trim())}
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
                label={`Share my registration data with Muzi's content providers for marketing purposes.`}
              />
            </FormGroup> */}

            <RegisterButton variant="primary">
              <Button.Label>
                {isLoading ? (
                  <Loader aria-label="Loading" size="small" />
                ) : (
                  'Register'
                )}
                
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
    padding-top: 30px;
    padding-bottom: 18px;
  }
`;
const Logo = styled(Link)`
  height: 42px;
  display: flex;
  text-decoration: none;
  justify-content: center;
`;
const Img = styled.img`
  height: 150%;
  margin: -10px 10px 0px 0px;
  @media (max-width: 768px) {
    height: 100%;
    margin: 0px 10px 0px 0px;
  }
  border-radius: 50%;
`;
const Name = styled.h1`
  font-weight: 600;
  font-size: 30px;
  margin-top: 5px;
  color: orange;
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
  padding-bottom: 30px;
`;
const RegisterForm = styled.form`
  max-width: 450px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
`;
const FormLabel = styled(Form.Label)`
  box-sizing: border-box;
  font-weight: 600;
  align-items: center;
  display: flex;
  width: 100%;
  padding-bottom: 4px;
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
  line-height: 30px;
  padding-left: 10px;
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
  margin-top: 10px;
  line-height: 1.25rem;
  font-weight: 700;
  background-color: var(--background-base, orange);
  border: none;
  color: var(--text-base, #000000);
  border-radius: 500px;
  font-size: inherit;
  padding: 14px 32px;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    transform: scale(1.05);
    background-color: var(--background-base, orange);
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
  margin-bottom: 0;
`;
const LoginLink = styled(Link)`
  margin-left: 5px;
  color: orange;
  &:hover {
    opacity: 0.6;
  }
`;

export default Register;
