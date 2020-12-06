import styled from 'styled-components';

export const UsersBlock= styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 480px) {
      justify-content: center;
      align-items: center;
      width: 100%;
   }
`;
export const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
    .addUser{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 45px;
      font-weight: 400;
      border: 1px solid black;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      background: white;
      cursor: pointer;
      outline: none;
      text-decoration: none;
      color: black;
    }
    .addUser:hover{
      background: blueviolet;
      color: white;
      border: 1px solid white;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .addUser{
        margin-bottom: 15px;
      }
    }
`;
export const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 15px;
  h1{
  font-size: 15px;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background-color: blueviolet;
    color: white;
    text-align: center;
    border: 1px solid black;
    border-radius: 50%;
    text-decoration: none;
    p{
      font-size: 45px;
    }
  }
  a:hover{
    background-color: white;
    color: black;
  }
`;