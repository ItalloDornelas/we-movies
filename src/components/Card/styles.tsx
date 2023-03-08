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
  gap: 12px;
  border-radius: 4px;
  width: 309.33px;
  background-color: var(--white);
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
  flex-direction: row;
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
