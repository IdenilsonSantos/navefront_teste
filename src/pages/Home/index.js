import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Delete } from '@material-ui/icons';

import { GlobalContainer } from "../../globalStyles";
import {
    SubHeader, TitleSubHeader, ButtonAdd, CardsNavers, CardItem,
    CardItemImage, CardItemDetails, CardItemDetailsInfo,
    InfoName, InfoFunction, InfoActions, ButtonAction, NoData, TextDesc
} from "./styles";

import Header from "../../components/Header";

import api from '../../services/api';
import configHeaders from '../../services/configHeaders';

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    });

    const getUsers = async () => {
        try {
            const { data } = await api.get("navers", configHeaders);
            setUsers(data)
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <>
            <Header />
            <GlobalContainer>
                <SubHeader>
                    <TitleSubHeader>
                        Navers
          </TitleSubHeader>
                    <Link to="/add">
                        <ButtonAdd>Adicionar Naver</ButtonAdd>
                    </Link>
                </SubHeader>
                {
                    users.length !== 0 ?
                        <CardsNavers>
                            {
                                users.map((user) => (
                                    <CardItem key={user.id}>
                                        <CardItemImage src={user.url} />
                                        <CardItemDetails>
                                            <CardItemDetailsInfo>
                                                <InfoName>{user.name}</InfoName>
                                                <InfoFunction>{user.job_role}</InfoFunction>
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
                                ))
                            }
                        </CardsNavers>
                        : <NoData>
                            <TextDesc>Não há usuários cadastrados</TextDesc>
                        </NoData>
                }
            </GlobalContainer>
        </>
    );
}

export default Home;