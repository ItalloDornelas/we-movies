import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  gap: 32px;

  border-radius: 4px;

  max-width: 960px;

  background-color: var(--white);
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--default-color);
`;

export const Button = styled.button`
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
