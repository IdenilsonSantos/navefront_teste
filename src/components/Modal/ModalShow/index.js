import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";

import {
  Modal,
  ModalContainer,
  Image,
  Details,
  DetailsHeader,
  ButtonClose,
  DetailsInfoContainer,
  DetailsInfo,
  UserFunction,
  Name,
  Function,
  Info,
  Label,
  InfoText,
  DetailsActions,
  DeleteEditAction,
} from "./styles";

import NoPic from "../../../assets/nopic.jpg";
import ModalConfirm from "../ModalConfirm";
import { dateCalculateYear } from "../../../utils/dateConvert";

function ModalShow({ openmodal, closemodal, user }) {
  const [modalOpenConfirm, setModalOpenConfirm] = useState(false);
  const [userIdSelect, setUserIdSelect] = useState();

  const history = useHistory();

  const openModalConfirm = (id) => {
    setModalOpenConfirm(true);
    setUserIdSelect(id);
  };

  const closeModalConfirm = () => {
    setModalOpenConfirm(false);
  };

  const handleDeleteEdit = async ({ action }, id) => {
    if (action === "edit") {
      history.push({ pathname: "/edit", id });
    } else {
      closemodal();
      openModalConfirm(id);
    }
  };
  return (
    <>
      <ModalConfirm
        openmodalconfirm={modalOpenConfirm}
        closemodalconfirm={closeModalConfirm}
        userid={userIdSelect}
      />
      {openmodal && user.length !== 0 ? (
        <Modal>
          <ModalContainer>
            {user.url !== "test-path/image-test.png" ? (
              <Image src={user.url} />
            ) : (
              <Image src={NoPic} />
            )}
            <Details>
              <DetailsHeader>
                <ButtonClose onClick={closemodal}>X</ButtonClose>
              </DetailsHeader>
              <DetailsInfoContainer>
                <DetailsInfo>
                  <UserFunction>
                    <Name>{user.name}</Name>
                    <Function>{user.job_role}</Function>
                  </UserFunction>
                  <Info>
                    <Label>Idade</Label>
                    <InfoText>
                      {dateCalculateYear(user.birthdate)} anos
                    </InfoText>
                  </Info>
                  <Info>
                    <Label>Tempo de empresa</Label>
                    <InfoText>
                      {dateCalculateYear(user.admission_date)}
                    </InfoText>
                  </Info>
                  <Info>
                    <Label>Projetos que participou</Label>
                    <InfoText>{user.project}</InfoText>
                  </Info>
                </DetailsInfo>
                <DetailsActions>
                  <DeleteEditAction
                    onClick={() =>
                      handleDeleteEdit({ action: "delete" }, user.id)
                    }
                  >
                    <Delete />
                  </DeleteEditAction>
                  <DeleteEditAction
                    onClick={() =>
                      handleDeleteEdit({ action: "edit" }, user.id)
                    }
                  >
                    <Edit />
                  </DeleteEditAction>
                </DetailsActions>
              </DetailsInfoContainer>
            </Details>
          </ModalContainer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default ModalShow;
