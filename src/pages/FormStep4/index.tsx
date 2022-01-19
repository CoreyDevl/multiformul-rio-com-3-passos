import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Themes';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
export const FormStep4 = () => {
  
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4
    })
  },[]);

  const handleNextStep = () => {
    console.log(state);
  }



  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return(
    <Theme> 
      <C.Container>
        <p>Passo 4/4</p>
        <h1>Verifique seus dados</h1>
        <p>Se todas as informações estiverem corretas, clique em 'Enviar Cadastro'.</p>

        <hr />

          <C.Linguica>
            <h2>Nome:</h2><p>{state.name}</p>
          </C.Linguica>
          <C.Linguica>
            <h2>Nível Profissional:</h2><p>{state.level}</p>
          </C.Linguica>
          <C.Linguica>
            <h2>E-mail:</h2><p>{state.email}</p>
          </C.Linguica>
          <C.Linguica>
            <h2>GitHub:</h2><p>{state.github}</p>
          </C.Linguica>
          

        <Link to="/step3" className="backbtn">Voltar</Link>
        <button onClick={handleNextStep}>Enviar Cadastro</button>
      </C.Container>
    </Theme>
  )

};