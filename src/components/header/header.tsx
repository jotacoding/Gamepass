import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
} from "./styles";

export default function Header() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  return (
    <HeaderComponent>
      <HeaderLogo>
        {localStorage.getItem("token") ? (
          <Link to={"/home/" + id}>
            <h1>G.O.A.T</h1>
          </Link>
        ) : (
          <Link to="/">
            <h1>G.O.A.T</h1>
          </Link>
        )}
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Procure seu perfil" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          {localStorage.getItem("token") ? (
            
            <button className="botao1"
              onClick={() => {
                navigate("/create-profile");
              }}
            >
              Cadastrar Perfil
            </button>
          ) : null}

          {localStorage.getItem("token") ? (
            <button className="botao1"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Sair
            </button>
          ) : null}
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
