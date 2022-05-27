import { createGlobalStyle } from 'styled-components';

const themes = {
  light: {
    body: '#FFF',
    background: 'white',
    text: '#363537',
    borderColor: '#363537',
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
    --background-color: ${({ theme }) => themes[theme].background};
    --text-color: ${({ theme }) => themes[theme].text};
  }

  a{
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }

  body {
    background: ${({ theme }) => themes[theme].body};
    color: ${({ theme }) => themes[theme].text};
    border-color: ${({ theme }) => themes[theme].borderColor} !important;
  }

  .card{
    padding: 20px 40px;
    ${'' /* overflow: auto; */}
  }

  .aligned-center {
    display: flex;
    justify-content: center;
  }

  .active {
    background-color: gray;
  }
`;

export default GlobalStyle;
