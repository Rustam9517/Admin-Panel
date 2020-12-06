import styled from 'styled-components';

export const SearchBlock= styled.div`
  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 120px;
  padding: 20px;
  .checkBlocks{
    display: flex;
    justify-content:flex-start;
    align-items: flex-start;
    width: 60%;
    label{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
        input{
          width: 15px;
          margin-right: 10px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
    }
  }
  .search{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    input{
        width: 70%;
        height: 30px;
        font-size: 20px;
     }
     a{
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        font-size: 15px;
        border: 1px solid black;
        outline: none;
        cursor: pointer;
        height: 20px;
        padding: 5px;
        text-decoration: none;
        color: black;
        
     }
     a:hover{
     background: blueviolet;
     color: white;
     }
     @media (min-width: 320px) and (max-width: 480px) {
      padding: 20px 10px 10px 10px;
      
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px;
    height: auto;
  }
`;