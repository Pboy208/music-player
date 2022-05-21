import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '668669778738-m6iolmcpcj84d2ulsgnnjifkbo7qpesl.apps.googleusercontent.com';

function LogoutGoogle() {
    const onSuccess = (res) => {
      alert("Logout Success");
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    );
}
export default LogoutGoogle;