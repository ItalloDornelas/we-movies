import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;

  div {
    background: var(--white);
    padding: 10px;
    border: 2px solid var(--vanilla);
    width: 80%;
    color: var(--gray);
    margin-right: 10px;

    div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin: 25px;
    }
  }
  .sectionPedidos {
    width: 40%;
    text-align: center;
    div {
      width: 80%;
      border: 2px solid var(--gray);
      background: var(--vanilla);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  button {
    margin: 5px auto;
    background: var(--blue);
    color: var(--vanilla);
    border: 0;
    border-radius: 4px;
    transition: 200ms ease-in-out;
    padding: 5px;
    text-align: center;
    font-weight: bold;

    :hover {
      background-color: #224959;
    }
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 220px;
  margin-left: 15px;
`;

export const CardContainer = styled(Container)`
  padding: 0 0 8px;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ContainerNull = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
  h1 {
    color: var(--gray);
  }
  button {
    margin-top: 5px;
    background: var(--blue);
    color: var(--vanilla);
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    transition: 200ms ease-in-out;
    padding: 5px;
    font-size: 1.5rem;
    flex: 1;
    text-align: center;
    font-weight: bold;

    :hover {
      background-color: #224959;
    }
  }
`;
