import styled from 'styled-components';

export const AddUserMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  a{
    background-color: white;
    border: 1px solid black;
    outline: none;
    font-size: 20px;
    padding: 5px 15px;
    text-decoration: none;
    color: black;
  }
  a:hover{
    background-color: blueviolet;
    color: white;
    border: 1px solid white;
  }
`;
export const FormBlock = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
    p{
    margin: 0;
    padding: 0 0 10px 0;
    width: 100%;
    text-align: right;
    color: red;
   ;
  }
  label{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
    input{
      width: 50%;
      height: 30px;
    }
    select{
      width: 50%;
      height: 30px;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      padding-top: 30px;
  }
`;