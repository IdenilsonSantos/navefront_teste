import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Edit, Delete } from "@material-ui/icons";
import { CubeSpinner } from "react-spinners-kit";

import { GlobalContainer } from "../../globalStyles";
import {
  SubHeader,
  TitleSubHeader,
  ButtonAdd,
  CardsNavers,
  CardItem,
  CardItemImage,
  CardItemDetails,
  CardItemDetailsInfo,
  InfoName,
  InfoFunction,
  InfoActions,
  ButtonAction,
  NoData,
  TextDesc,
  LoadingContainer,
} from "./styles";

import Header from "../../components/Header";
import ModalShow from "../../components/Modal/ModalShow";

import NoPic from "../../assets/nopic.jpg";

import api from "../../services/api";
import ModalConfirm from "../../components/Modal/ModalConfirm";

function Home() {
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userSelected, setUserSelected] = useState([]);
  const [userIdSelect, setUserIdSelect] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenConfirm, setModalOpenConfirm] = useState(false);

  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    await api.get("navers").then((response) => {
      const { data } = response;
      setUsers(data);
      setLoading(false);
    });
  };

  const getUserId = async (id) => {
    await api.get(`navers/${id}`).then((response) => {
      const { data } = response;
      setUserSelected(data);
    });
  };

  const openModal = (id) => {
    getUserId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalConfirm = (id) => {
    setModalOpenConfirm(true);
    setUserIdSelect(id);
  };

  const closeModalConfirm = () => {
    setModalOpenConfirm(false);
  };

  const handleDeleteEdit = ({ action }, id) => {
    if (action === "edit") {
      history.push({ pathname: "/edit", id });
    } else {
      openModalConfirm(id);
    }
  };

  return (
    <>
      <Header />
      <ModalShow
        openmodal={modalOpen}
        closemodal={closeModal}
        user={userSelected}
      />
      <ModalConfirm
        openmodalconfirm={modalOpenConfirm}
        userid={userIdSelect}
        closemodalconfirm={closeModalConfirm}
      />
      <GlobalContainer>
        <SubHeader>
          <TitleSubHeader>Navers</TitleSubHeader>
          <Link to="/add">
            <ButtonAdd>Adicionar Naver</ButtonAdd>
          </Link>
        </SubHeader>
        {loading ? (
          <LoadingContainer>
            <CubeSpinner
              size={45}
              frontColor="#212121"
              backColor="#9E9E9E"
              loading={loading}
            />
          </LoadingContainer>
        ) : (
          ""
        )}
        {loading === false ? (
          users.length !== 0 ? (
            <CardsNavers>
              {users.map((user) => (
                <CardItem key={user.id}>
                  {user.url !== "test-path/image-test.png" ? (
                    <CardItemImage
                      onClick={() => openModal(user.id)}
                      src={user.url}
                    />
                  ) : (
                    <CardItemImage
                      onClick={() => openModal(user.id)}
                      src={NoPic}
                    />
                  )}
                  <CardItemDetails>
                    <CardItemDetailsInfo>
                      <InfoName>{user.name}</InfoName>
                      <InfoFunction>{user.job_role}</InfoFunction>
                      <InfoActions>
                        <ButtonAction>
                          <Delete
                            onClick={() =>
                              handleDeleteEdit({ action: "delete" }, user.id)
                            }
                          />
                        </ButtonAction>
                        <ButtonAction>
                          <Edit
                            onClick={() =>
                              handleDeleteEdit({ action: "edit" }, user.id)
                            }
                          />
                        </ButtonAction>
                      </InfoActions>
                    </CardItemDetailsInfo>
                  </CardItemDetails>
                </CardItem>
              ))}
            </CardsNavers>
          ) : (
            <NoData>
              <TextDesc>Não há usuários cadastrados</TextDesc>
            </NoData>
          )
        ) : (
          ""
        )}
      </GlobalContainer>
    </>
  );
}

export default Home;
