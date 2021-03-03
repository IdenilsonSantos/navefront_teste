import { Link, useHistory } from "react-router-dom";

import { GlobalContainer } from "../../globalStyles";
import { Logo, LogoutButton, MainComponent } from "./styles";

import ImageLogo from '../../assets/logo.svg';
import { logout } from "../../services/auth";

function Header() {

  const history = useHistory();

  const handleLogout = async () => {
    logout();
    history.push('/');
  }

  return (
    <GlobalContainer>
      <MainComponent>
        <Link>
          <Logo src={ImageLogo} />
        </Link>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </MainComponent>
    </GlobalContainer>
  );
}

export default Header;