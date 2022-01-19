import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Themes';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
export const FormStep3 = () => {
  
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    if(state.name === ''){
      navigate('/');
    }else{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }
  },[]);

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ''){
      console.log(state);
    }else{
      alert('Os campos precisam ser preenchidos')
    }
  }
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return(
    <Theme> 
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos abaixo com seus contatos.</p>

        <hr />

        <label>
          Qual é o seu e-mail?
        <input 
          type="email"
          autoFocus
          value={state.email}
          onChange={handleEmailChange}
        />
        </label>

        <label>
          Qual é o seu GitHub?
        <input 
          type="url"
          autoFocus
          value={state.github}
          onChange={handleGithubChange}
        />
        </label>
        <Link to="/step2" className="backbtn">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )

};