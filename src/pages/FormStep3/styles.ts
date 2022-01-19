import styled from 'styled-components';

export const Container = styled.div`
  p{
    font-size: 13px;
    color: #B8B8D4;
  }
  h1{
    margin: 0px;
    padding: 0px;
    font-size: 26px;
  }
  hr{
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0px;
  }
  label{
    font-size: 13px;

    input{
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 15px 10px;
      border: 2px solid #25CD89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: #02044A;
      margin-bottom: 10px;
    }
  }
  button{
    background-color: #25CD89;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px  20px;
    border: 0;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 30px;
  }
  .backbtn{
    background-color: #02044A;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px  20px;
    border: 1px solid #25CD89;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 30px;
    margin-right: 40px;
    text-decoration: none;
  }
`;