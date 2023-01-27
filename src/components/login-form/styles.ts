import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  border: solid 1px ${(props) => props.theme.lightTheme.bg};
  height: 400px;
  h2 {
    margin: 20px;
  }
`;

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  input {
    display: flex;
    width: 90%;
    padding: 3px 5px;
    margin: 5px;
    border-radius: 5px;
    border: ${(props) => (props.error ? "solid 2px red" : "none")};
    height: 35px;
    background: ${(props) => props.theme.darkTheme.fg};
    font-size: 1.2rem;
    
  }
  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 5px;
    border-radius: 5px;
    border: none;
    align-items: center;
    input {
      display: flex;
      width: 100%;
      border-radius: 5px 0 0 5px;
      border-right: none;
      padding: 3px 5px;
      margin: 0;
      height: 35px;
    }
    button {
      display: flex;
      align-items: center;
      border: ${(props) => (props.error ? "solid 2px red" : "none")};
      border-left: none;
      padding: 0 5px;
      margin: 0;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      height: 35px;
      background: ${(props) => props.theme.darkTheme.fg};
    }
  }
  button {
    margin: 10px;
    border: none;
    background-color: ${(props) => props.theme.darkTheme.fg};
    font-size: 1rem;
  }



.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`;
