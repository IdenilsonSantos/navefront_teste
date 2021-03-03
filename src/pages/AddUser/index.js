import { Link } from 'react-router-dom';
import { ArrowBackIos } from '@material-ui/icons';

import { GlobalContainer } from '../../globalStyles';
import {
    FormContainer, SubHeader, TitlePage, Form, FormGroup,
    Label, Input, ButtonSaveContainer, ButtonSave, ButtonBack
} from './styles';

import Header from '../../components/Header';

function AddUser() {
    return (
        <>
            <Header />
            <GlobalContainer>
                <FormContainer>
                    <SubHeader>
                        <Link to="/home">
                            <ButtonBack><ArrowBackIos /></ButtonBack>
                        </Link>
                        <TitlePage>Adicionar Naver</TitlePage>
                    </SubHeader>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" name="name" value={""} type="text" placeholder="Nome"
                                onChange={""} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="job_role">Cargo</Label>
                            <Input id="job_role" name="job_role" value={""} type="text" placeholder="Cargo"
                                onChange={""} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="birth">Idade</Label>
                            <Input id="birth" name="birth" value={""} type="date" placeholder="Idade"
                                onChange={""} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="dateWork">Data de Admissão</Label>
                            <Input id="dateWork" name="dateWork" value={""} type="date" placeholder="Data de Admissão"
                                onChange={""} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="project">Projetos que Participou</Label>
                            <Input id="project" name="project" value={""} type="text" placeholder="Projetos que Participou"
                                onChange={""} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="url">URL da foto do Naver</Label>
                            <Input id="url" name="url" value={""} type="text" placeholder="URL da foto do Naver"
                                onChange={""} />
                        </FormGroup>
                        <ButtonSaveContainer>
                            <ButtonSave onClick={""}>Salvar</ButtonSave>
                        </ButtonSaveContainer>
                    </Form>
                </FormContainer>
            </GlobalContainer>
        </>
    );
}

export default AddUser;