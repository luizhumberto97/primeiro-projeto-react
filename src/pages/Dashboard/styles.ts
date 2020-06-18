import styled, {css} from 'styled-components';
import {shade } from 'polished'; // Shade é deixar algo mais escuro
//  Utiliza Template literals

interface FormProps{
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps> `
  margin-top: 40px;
  max-width:700px;
  display: flex; /* forçar lado do outro */

  input{
    flex:1; /* Vai ocupar tudo do 700, menos o tamanho do botao  */
    height: 70px;
    padding: 0 20px;
    border:0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    /*  SE tiver a  propriedade error, mudamos a borda*/
    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3; /*  DEixou o cinza mais claro */
    }

  }

  button{
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#04D361')};
    }

  }
`;

export const Error = styled.span `
  display: block;
  color: #c53030;
  margin-top:8px;
`;

export const Repositories = styled.div `
margin-top: 80px;
max-width: 700px;

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
  img{
    width: 64px;
    height: 64px;
    border-radius: 50%; /**Arredondado */
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
