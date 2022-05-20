import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = '668669778738-m6iolmcpcj84d2ulsgnnjifkbo7qpesl.apps.googleusercontent.com';

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
                // render={renderProps => (
                //     // eslint-disable-next-line react/button-has-type
                //     <button onClick={renderProps.onCLick} disabled={renderProps.disabled}>
                //         This is google acc
                //     </button>
                // )}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                isSignedIn
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