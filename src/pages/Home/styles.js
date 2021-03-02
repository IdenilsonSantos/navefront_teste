import styled from 'styled-components';

export const SubHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleSubHeader = styled.h1`
    font-size: 40px;
    color: var(--gray);
`;

export const ButtonAdd = styled.button`
    width: 176px;
    height: 40px;
    background: var(--gray);
    opacity: 0.9;
    border: none;
    text-align: center;
    color: var(--white);
    font-weight: 600;
    cursor: pointer;

    transition: all ease 0.5s;

    &:hover {
        opacity: 1;
    }
`;

export const CardsNavers = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 27px;
`;

export const CardItem = styled.div`
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column
`;

export const CardItemImage = styled.img`
    width: 100%;
    height: 100%;
    background-color: var(--black);
    background-size: cover;
`;

export const CardItemDetails = styled.div`
    width: 100%;
    height: 30%;
`;

export const CardItemDetailsInfo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
`;

export const InfoName = styled.h4`
    font-size: 14px;
    color: var(--gray);
`;

export const InfoFunction = styled.h6`
    font-size: 12px;
    color: var(--gray);
    opacity: 0.9

`;

export const InfoActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonAction = styled.button`
    width: 40px;
    height: 30px;
    margin-right: 10px;
    align-items: center;
    background: none;
    cursor: pointer
`;