import { createGlobalStyle } from 'styled-components';

const themes = {
  light: {
    body: '#FFF',
    background: 'white',
    text: '#172B4D',
    borderColor: '#dfe1e6',
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
    border: none;
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: var(--color-primary);
      font-weight: 500;
    }
  }

  body {
    background-color: ${({ theme }) => themes[theme].background};
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
    background-color: #c1c7d0;
    color: var(--color-primary);
    font-weight: 500;
  }

  .BubbleChat-container{
    max-width: 100%;
  }
`;

export default GlobalStyle;
