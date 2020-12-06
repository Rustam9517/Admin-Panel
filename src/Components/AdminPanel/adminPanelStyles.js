import styled from 'styled-components';

export const AdminMain= styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
    }
`;

export const SideBlock= styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
  @media (max-width: 1490px) {
      width: 25%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;