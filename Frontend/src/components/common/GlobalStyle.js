import { createGlobalStyle } from 'styled-components';

const themes = {
  light: {
    body: '#FFF',
    background: 'white',
    text: '#172B4D',
    borderColor: '#dfe1e6',
    textNavigation: '#6b778c',
    textNavigationHover: '#000',
  },
  dark: {
    body: '#171717',
    // background: 'rgb(0, 30, 60)',
    background: 'black',
    text: '#FAFAFA',
    borderColor: '#FAFAFA',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    --big-space: 30px;
    --medium-space: 20px;
    --small-space: 10px;
    --border-color: ${({ theme }) => themes[theme].borderColor};
    --background-color: ${({ theme }) => themes[theme].background};
    --text-color: ${({ theme }) => themes[theme].text};
    --color-primary: #375DE7;
    --background-color-hover: #c1c7d0;
    --text-navigation-color: ${({ theme }) => themes[theme].textNavigation};
    --modal-top:32px;
    border: none;
    font-family: 'Roboto', sans-serif;


    // responsive for profile editing
    --modal-profile-editing-width: 60%;
    --modal-profile-editing-height: 600px;
    --max-input-profile-editing-width: 600px;

    @media (max-width: 1050px) {
      --modal-profile-editing-width: 90%;
      --modal-profile-editing-height: 500px;
      --max-input-profile-editing-width: 300px;
    }
    //-----------------------------------------------------

    // responsive for song adding
    --modal-song-adding-width: 600px;
    --modal-song-adding-height: 800px;
     --modal-song-adding-gap: 24px;
    --display-song-adding-icon: flex;

    @media (max-width: 660px) {
      --modal-song-adding-width: 360px;
      --modal-song-adding-height: 620px;
      --modal-song-adding-gap: 8px;
      --display-song-adding-icon: none;
      --modal-top: 24px;
    }
    //-----------------------------------------------------

  }

  a{
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => themes[theme].textNavigationHover};
      font-weight: 500;
    }
  }

  body {
    background-color: ${({ theme }) => themes[theme].background};
    color: ${({ theme }) => themes[theme].text};
    border-color: ${({ theme }) => themes[theme].borderColor} !important;
  }

  .card{
    padding: 32px 84px;
    ${'' /* overflow: auto; */}
    
    @media (max-width: 760px) {
      padding: 6px 12px;
    }
  }

  .layout{
    @media (max-width: 600px) {
      ${'' /* height: 160vh; */}
    }
  }

  .aligned-center {
    display: flex;
    justify-content: center;
  }

  .active {
    background-color: #c1c7d0;
    color: ${({ theme }) => themes[theme].textNavigationHover};
    font-weight: 500;
  }

  .BubbleChat-container{
    max-width: 100%;
  }
`;

export default GlobalStyle;
