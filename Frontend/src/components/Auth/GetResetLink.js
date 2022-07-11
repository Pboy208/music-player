/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { Form, Button, Loader } from '@ahaui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import validationSchema from 'utils/schemas/forgotPasswordSchema';
import { login, googleLogin } from 'store/authSlice';
import * as Toast from 'components/common/Toast';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { getResetLink } from 'api/authAPIs';

function GetResetLink() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isEmailInvalid = !!errors.email;

  const handleReset = (email) => {
    setIsLoading(true);
    getResetLink(email)
      .then((resolve) => {
        setIsLoading(false);
        Toast.success('PLease check your email');
      })
      .catch(() => {
        setIsLoading(false);
        Toast.error(
          'Reset password fail, account with this email may not exist',
        );
      });
  };

  const handleGoogleLogin = (loginInfo) => {
    dispatch(googleLogin(loginInfo))
      .unwrap()
      .then(() => {
        Toast.success('Login success');
        navigate('/explore');
      })
      .catch(console.error);
  };

  const googleSuccess = (res) => {
    const loginInfo = {
      email: res.profileObj.email,
      avatar: res.profileObj.imageUrl,
      name: res.profileObj.name,
    };
    console.log(loginInfo);
    handleGoogleLogin(loginInfo);
  };

  const googleFailure = (error) => {
    console.log(error);
  };

  return (
    <Wrapper>
      <Header>
        <Logo to="/explore">
          <Img src="/assets/img/zingmp3.png" alt="logo" />
          <Name>Muzi </Name>
        </Logo>
      </Header>
      <Body>
        <LoginForm
          onSubmit={handleSubmit(handleReset)}
          data-testid="reset-page"
        >
          <Row>
            <Helmet>
              <title>Login to Muzi</title>
              <meta name="description" content="Login to Muzi" />
            </Helmet>
            <Suggest>
              To reset your password, fill in your account email
            </Suggest>
            <FormGroup controlId="loginForm.email">
              <FormLabel sizeLabel="small">Email address</FormLabel>
              <FormInput
                type="text"
                isInvalid={isEmailInvalid}
                {...register('email')}
                onBlur={(e) => setValue('email', e.target.value.trim())}
                placeholder="Email address"
              />
              <FormFeedback type="invalid" role="alert">
                {errors?.email?.message}
              </FormFeedback>
            </FormGroup>
            <Login to="/login">Already have an account, lets login?</Login>
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

            <NewAccount>
              <Ask>Don't have an account?</Ask>
              <Signup to="/register">SIGN UP FOR MUZI</Signup>
              <GoogleLogin
                clientId="893957747003-5cifp6aq2gk3q2jfb2ost1gcjpeu7ecm.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Signup
                    to="/login"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    LOGIN WITH GOOGLE
                  </Signup>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </NewAccount>
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
  height: 130%;
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
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: min(10vh, 50px);
  border-top: 1px solid rgb(217, 218, 220);
  width: 100%;
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
  padding-bottom: 10px;
  font-family: 'Roboto', 'segoe ui', Helvetica, Arial, sans-serif;
  font-size: 20px;
  margin-bottom: 5px;
`;
const FormGroup = styled(Form.Group)`
  margin-bottom: 5px;
`;
const FormLabel = styled(Form.Label)`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  width: 100%;
  padding-bottom: 4px;
  font-weight: 600;
`;
const FormFeedback = styled(Form.Feedback)`
  font-size: var(--font-size);
  line-height: 30px;
  color: white;
  text-align: center;
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
const Login = styled(Link)`
  color: inherit;
  align-items: center;
  text-decoration: none;
  transition: 200ms;
  width: fit-content;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;
const Direct = styled.div`
  @media (min-width: 768px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: center;
    -webkit-box-align: end;
    align-items: end;
  }
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(217, 218, 220);
`;
const ResetButton = styled(Button)`
  width: 50%;
  border: none;
  letter-spacing: 2px;
  background-color: var(--background-base, #a845de);
  border-radius: 500px;
  padding: 8px 32px;
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
  margin-bottom: 0px;
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
const SignIn = styled.div`
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
  &::after {
    content: ${() => <FcGoogle />};
  }
  &:hover {
    color: black;
    border: 1px solid black;
  }
`;
export default GetResetLink;
