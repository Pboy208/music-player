import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = '893957747003-5cifp6aq2gk3q2jfb2ost1gcjpeu7ecm.apps.googleusercontent.com';

function LoginGoogle() {
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
      console.log('[Login Failed] res:', res);
    };
    return (
        <Wrapper>
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                cookiePolicy={'single_host_origin'}
                // eslint-disable-next-line react/jsx-boolean-value
                isSignedIn={true}
            />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid rgb(217, 218, 220);
    padding-bottom: 10px;
`;
export default LoginGoogle;