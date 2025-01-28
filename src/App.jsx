import { GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 
import { useState } from 'react';
import './App.css';

function App() {
  const clientID = "870790716772-mvaj8943f3h06543c7q2ugberf5ansf6.apps.googleusercontent.com";
  const [userProfile, setUserProfile] = useState(null);

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log("Login bem sucedido!", credentialResponse);

      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Decoded Token", decoded);

      setUserProfile({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      });
    },
    // use_fedcm_for_prompt:true
  });

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className="App">
        <h1 className="title">Exemplo de login com OAuth2</h1>
        {userProfile ? (
          <div className="profile">
            <img src={userProfile.picture} alt="User profile" className="profile-pic" />
            <h2>Bem-vindo, {userProfile.name}</h2>
            <p>E-mail: {userProfile.email}</p>
          </div>
        ) : (
          <div>
            <p>Escolha seu perfil de login no pop-up do canto superior direito <br />
              (Reinicie a página caso não tenha aparecido)
            </p>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Login bem sucedido!", credentialResponse);

                const decoded = jwtDecode(credentialResponse.credential);
                console.log("Decoded Token", decoded);

                setUserProfile({
                  name: decoded.name,
                  email: decoded.email,
                  picture: decoded.picture,
                });
              }}
              onError={() => {
                console.log('Login Falhou');
              }}
            />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
