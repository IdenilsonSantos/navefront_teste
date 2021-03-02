import { Link } from "react-router-dom";
import { GlobalContainer } from "../../globalStyles";
import { Logo, LogoutButton, MainComponent } from "./styles";

import ImageLogo from '../../assets/logo.svg';

function Header() {
  return (
  <GlobalContainer>
      <MainComponent>
          <Link>
            <Logo src={ImageLogo}/>
          </Link>
          <LogoutButton onClick={""}>Sair</LogoutButton>
      </MainComponent>
  </GlobalContainer>
  );
}

export default Header;