import styled from 'styled-components';


export const UserSearch = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .back{
        background-color: white;
        border: 1px solid black;
        outline: none;
        font-size: 20px;
        padding: 5px 15px;
        text-decoration: none;
        color: black;
    }
    .back:hover{
        background-color: blueviolet;
        color: white;
        border: 1px solid white;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;
export const FindBlock = styled.div`
  width: 70%;
  @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      h1{
        text-align: center;
      }
  }
`;
export const FindList = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 480px) {
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
`;

