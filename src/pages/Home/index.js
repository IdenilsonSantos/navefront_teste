import { Link } from "react-router-dom";
import { Edit, Delete } from '@material-ui/icons';

import { GlobalContainer } from "../../globalStyles";
import { SubHeader, TitleSubHeader, ButtonAdd, CardsNavers, CardItem, 
CardItemImage, CardItemDetails, CardItemDetailsInfo,
InfoName, InfoFunction, InfoActions, ButtonAction } from "./styles";

import Header from "../../components/Header";
import ManExample from '../../assets/manExample.jpg';

function Home() {
  return (
      <>
      <Header/>
      <GlobalContainer>
      <SubHeader>
          <TitleSubHeader>
            Navers
          </TitleSubHeader>
          <Link to="/add">
                <ButtonAdd>Adicionar Naver</ButtonAdd>
          </Link>
      </SubHeader>
      <CardsNavers>
          <CardItem>
              <CardItemImage src={ManExample}/>
              <CardItemDetails>
                <CardItemDetailsInfo>
                 <InfoName>Luiz Herique dos Santos</InfoName>
                 <InfoFunction>Desenvolvedor FrontEnd</InfoFunction>
                 <InfoActions>
                    <ButtonAction>
                        <Delete onClick={""} />
                    </ButtonAction>
                    <ButtonAction>
                        <Edit onClick={""} />
                    </ButtonAction>
                </InfoActions>
                </CardItemDetailsInfo>
              </CardItemDetails>
          </CardItem>
      </CardsNavers>
      </GlobalContainer>
      </>
  );
}

export default Home;