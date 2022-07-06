/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { Form, Button, Loader } from '@ahaui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import validationSchema from 'utils/schemas/resetPasswordSchema';
import * as Toast from 'components/common/Toast';
import { resetPassword } from 'api/authAPIs';

function ResetPassword() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isConfirmPasswordInvalid = !!errors.confirmPassword;
  const isPasswordInvalid = !!errors.password;
  const { resetToken } = useParams();

  const handleReset = ({ password }) => {
    resetPassword(resetToken, password)
      .then(() => {
        Toast.success(
          'Password reset successfully, we will redirect you to login page in few seconds',
        );
        setTimeout(() => navigate('/login'), [2000]);
      })
      .catch(() => {
        Toast.error('Password resetting failed');
      });
  };

  return (
    <Wrapper>
      <Header>
        <Logo to="/home">
          <Img src="/assets/img/zingmp3.png" alt="logo" />
          <Name>Zing MP3</Name>
        </Logo>
      </Header>
      <Body>
        <LoginForm
          onSubmit={handleSubmit(handleReset)}
          data-testid="reset-page"
        >
          <Row>
            <Helmet>
              <title>Login to Spotify</title>
              <meta name="description" content="Login to Spotify" />
            </Helmet>
            <Suggest>Enter your new password here</Suggest>
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
            <Direct>
              <ResetButton size="big" variant="primary">
                <ButtonLabel>
                  {isLoading ? (
                    <Loader aria-label="Loading" size="big" />
                  ) : (
                    'Reset'
                  )}{' '}
                </ButtonLabel>
              </ResetButton>
            </Direct>
          </Row>
        </LoginForm>
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
  border-bottom: 1px solid rgb(217, 218, 220);
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 25px 0px 10px;
    margin-bottom: 30px;
  }
`;
const Logo = styled(Link)`
  height: 56px;
  padding: 0px 0px 6px;
  display: flex;
  @media (max-width: 768px) {
    height: 42px;
  }
  text-decoration: none;
  justify-content: center;
`;
const Img = styled.img`
  height: 100%;
  margin: -10px 10px 0px 0px;
  @media (max-width: 768px) {
    height: 100%;
    margin: 0px 10px 0px 0px;
  }
  border-radius: 50%;
`;
const Name = styled.div`
  font-weight: 600;
  font-size: 30px;
  font-family: 'Roboto', 'segoe ui', Helvetica, Arial, sans-serif;
  margin: 0;
  color: #000000;
`;
const Body = styled.div`
  flex: 3 1 0%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 10px;
`;
const LoginForm = styled.form`
  max-width: 450px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const Suggest = styled.p`
  box-sizing: border-box;
  text-align: center;
  font-weight: 900;
  border-bottom: 1px solid rgb(217, 218, 220);
  padding-bottom: 20px;
  font-family: 'Roboto', 'segoe ui', Helvetica, Arial, sans-serif;
  font-size: 17px;
`;
const FormGroup = styled(Form.Group)``;
const FormLabel = styled(Form.Label)`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  width: 100%;
  padding-bottom: 8px;
`;
const FormFeedback = styled(Form.Feedback)`
  font-size: var(--font-size);
  line-height: 30px;
  color: white;
  text-align: center;
  margin: 5px 25%;
  background-color: red;
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
const Forgot = styled(Link)`
  color: inherit;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Direct = styled.div`
  @media (min-width: 768px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: right;
    -webkit-box-align: end;
    align-items: end;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(217, 218, 220);
`;
const ResetButton = styled(Button)`
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
  border: none;
  letter-spacing: 2px;
  background-color: var(--background-base, #a845de);
  border-radius: 500px;
  padding: 14px 32px;
  cursor: pointer;
  transition: 200ms;
  color: white;
  &:hover {
    transform: scale(1.1);
  }
`;
const ButtonLabel = styled(Button.Label)`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;
`;
const NewAccount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Ask = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
`;
const Signup = styled(Link)`
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-subdued, #6a6a6a);
  font-weight: 700;
  border-radius: 500px;
  border: 1px solid #6a6a6a;
  width: 100%;
  padding: 13px;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;
export default ResetPassword;
