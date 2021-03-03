import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ArrowBackIos } from '@material-ui/icons';

import { GlobalContainer } from '../../globalStyles';
import { FormContainer, SubHeader, TitlePage, Form, FormGroup,
Label, Input, ButtonSaveContainer, ButtonSave, ButtonBack } from './styles';

import Header from '../../components/Header';
import api from '../../services/api';
import { useEffect } from 'react';
import { convertDate } from '../../utils/dateConvert';
import ModalInfo from '../../components/Modal/ModalInfo';

function EditUser() {

    const history = useHistory();

    const [modalOpen, setModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        job_role: '',
        birth: '',
        dateWork: '',
        project: '',
        url: '',
        error: ''
    });

    const location = useLocation();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const { data } = await api.get(`navers/${location.id}`);
            setUserData({
                name: data.name,
                job_role: data.job_role,
                project: data.project,
                url: data.url,
                error: ''
            });
        } catch (error) {
            setUserData({ error: 'Erro ao buscar usuário' })
        }
    };


    const { name, job_role, birth, dateWork, project, url } = userData;

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false);
        history.push('/home')
    }

    const handleUserData = async (e) => {
        e.preventDefault();

        if (!name || !job_role || !birth || !dateWork || !project || !url) {
            setUserData({ error: "Por favor, preencha seus dados corretamente" });
        }
        else {
            try {
                const admission_date = convertDate(dateWork);
                const birthdate = convertDate(birth);
                const response = await api.put(`navers/${location.id}`, {
                    job_role, admission_date, birthdate, project, name, url
                });
                if (response.status === 200) {
                    openModal();
                }

            } catch (err) {
                setUserData({
                    error: "Houve um problema ao editar seu usuário."
                });
            }
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData(userData => ({ ...userData, [name]: value }));
    }
  return (
      <>
      <Header/>
          <ModalInfo openmodal={modalOpen} closemodal={closeModal} info={'atualizado'} />
      <GlobalContainer>
          <FormContainer>
          <SubHeader>
                      <Link to={"/home" || null}>
                <ButtonBack><ArrowBackIos /></ButtonBack>
             </Link>
            <TitlePage>Editar Naver</TitlePage>
            </SubHeader>
                <Form>
                    <FormGroup>
                        <Label htmlFor="name">Nome</Label>
                          <Input id="name" name="name" value={name || ''} type="text" placeholder="Nome"
                              onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="job_role">Cargo</Label>
                          <Input id="job_role" name="job_role" value={job_role || ''} type="text" placeholder="Cargo"
                              onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="birth">Idade</Label>
                          <Input id="birth" name="birth" value={birth || ''} type="date" placeholder="Idade"
                              onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="dateWork">Data de Admissão</Label>
                          <Input id="dateWork" name="dateWork" value={dateWork || ''} type="date" placeholder="Data de Admissão"
                              onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="project">Projetos que Participou</Label>
                          <Input id="project" name="project" value={project || ''} type="text" placeholder="Projetos que Participou"
                              onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="url">URL da foto do Naver</Label>
                          <Input id="url" name="url" value={url || ''} type="text" placeholder="URL da foto do Naver"
                              onChange={handleChange} />
                    </FormGroup>
                    <ButtonSaveContainer>
                          <ButtonSave onClick={(e) => handleUserData(e)}>Salvar</ButtonSave>
                    </ButtonSaveContainer>
                    </Form>
          </FormContainer>
      </GlobalContainer>
      </>
  );
}

export default EditUser;