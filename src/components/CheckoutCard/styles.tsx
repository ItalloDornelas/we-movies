import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 21px;
  max-width: 950px;
  background: var(--white);
  border-radius: 4px;
  overflow-y: hidden;
  @media (max-width: 880px) {
    height: 80vh;
    margin: 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 52px;
  @media (max-width: 970px) {
    gap: 16px;
  }
  @media (max-width: 554px) {
    flex-direction: column;
  }
`;

export const TitleProduct = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: var(--gray);
  text-transform: uppercase;
`;
export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 8px;
`;

export const CardProduct = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px;

  gap: 21px;
`;

export const CardDesciption = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  @media (max-width: 880px) {
    gap: 16px;
    align-items: flex-start;
  }
`;

export const DesciptionProduct = styled.div`
  color: var(--default-color);
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 253px;
  @media (max-width: 880px) {
    flex-direction: row;
  }
  @media (max-width: 700px) {
    width: auto;
  }
`;
export const ImageProduct = styled.img`
  width: 89px;
  height: 114px;
`;

export const QtdProduct = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 11px;
  align-items: center;
  height: 108px;
  @media (max-width: 554px) {
    height: auto;
  }
`;
export const ImgQtdProduct = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const SubtotalProduct = styled.div`
  color: var(--default-color);
  margin-top: 10px;
  display: flex;
  gap: 11px;
  align-items: center;
  height: 108px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  width: 213.69px;
  @media (max-width: 880px) {
    width: auto;
  }
  @media (max-width: 554px) {
    height: auto;
  }
`;

export const InputProduct = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #d9d9d9;
  width: 62px;
  height: 26px;
  background: var(--white);

  border-radius: 4px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
export const DivProductContainer = styled.div`
  margin-bottom: 20px;
  @media (max-width: 554px) {
    margin-bottom: 0px;
  }
`;

export const DivProduct = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const DividerProduct = styled.hr`
  width: 100%;
  height: 1px;
  color: var(--gray);
`;

export const ButtonProduct = styled.button`
  width: 180px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
`;

export const ContainerTotal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 880px) {
    postion: fixed;
  }
`;

export const TotalProduct = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

export const DescriptionTotal = styled.h2`
  width: 130.79px;
  color: var(--default-color);
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`;
