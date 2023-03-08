import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContainerHeader = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto 24px;
  overflow: hidden;
  position: relative;
  padding: 18px 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 74px;
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 27px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  display: flex;

  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const CartLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
`;

export const TitleLink = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

export const Text = styled(TitleLink)`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray);
`;
