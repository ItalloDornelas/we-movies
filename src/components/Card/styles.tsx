import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px;
  gap: 16px;
`;
export const ProductUl = styled.ul`
  max-width: 960px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 16px;
  flex-wrap: wrap;
`;
export const ProductList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  gap: 10px;
  border-radius: 4px;
  width: 309.33px;
  background-color: var(--white);
  @media (max-width: 880px) {
    width: 100%;
    margin: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 147px;
  height: 188px;
`;

export const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: var(--black);
`;

export const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(--default-color);
  text-align: center;
`;

export const ProductButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 12px;
  width: 287.33px;
  height: 40px;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
`;
export const ContentButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const ProductButtonSuccess = styled(ProductButton)`
  background-color: var(--green);
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
export const Loading = styled.span`
  width: 55.41px;
  height: 55.41px;
  border-radius: 50%;
  display: inline-block;
  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(128, 128, 128, 0.0001) -46.17deg,
    #ffffff 313.55deg,
    rgba(128, 128, 128, 0.0001) 313.83deg,
    #ffffff 673.55deg
  );
  ::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--default-color);
  }

  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
