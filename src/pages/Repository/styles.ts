import styled from 'styled-components';

export const Header = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between; /* fez um ficar na direita e outro na esquerda*/

  a{
    display: flex;
    align-items: center;
    text-decoration:none;
    color: #a8a8b3;

    &:hover{
      color: #666;
    }

    svg{
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;

      strong{
        font-size: 36px;
        color: #3d3d4d;
      }

      p{
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;


    li{

      & + li{
        margin-left: 80px;

      }
      strong{
        display: block; /**Quebra linha */
        font-size: 36px;
        color: #3d3d4d;
      }

      span{
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div `
margin-top: 80px;


a{
  background: #fff; /* black */
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block; /* FEz realmente caber tudo no quadrado */
  text-decoration: none;

  display: flex; /** Elementos um do lado do outro  */
  align-items: center; /* Fica alinhado um do lado do outro no centro */
  transition: transform 0.2s;

  & + a { /* da margin no segundo item pra baixo */
    margin-top: 16px;
  }

  &:hover{
    transform: translateX(10px); /* vai para o lado em 10px*/
  }

  div{
    margin: 0 16px;
    flex: 1; /* faz ajustar o tamanho que está disponivel */

    strong{
      font-size: 20px;
      color: #3D3D4D;
    }

    p{
      font-size: 18px;
      color: #A8A8B3;
      margin-top: 4px;
    }
  }


  svg{
      margin-left: auto; /**COlqoquei na direita */
      color: #cbcbd6;
    }

}
`;
