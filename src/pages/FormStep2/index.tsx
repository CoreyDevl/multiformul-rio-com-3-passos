import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Themes';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    if(state.name === ''){
      navigate('/');
    }else{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }
  },[]);

  const handleNextStep = () => {
    if(state.name !== ''){
      navigate('/step3');
   }else{
     alert('Digite seu nome')
   }
  } 
  
  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return(
    <Theme> 
      <C.Container>
        <p>Passo 2/4</p>
        <h1>{state.name}, qual destes níveis te descreve melhor?</h1>
        <p>Escolha a opção que melhor descreve seu nível profissional.</p>

        <hr />
          <SelectOption 
            title="Sou iniciante"
            description="Comecei a programar há menos de 2 anos"
            icon="🥳"
            selected={state.level === 0}
            onClick={()=> setLevel(0)}
          />

          <SelectOption 
            title="Sou experiente"
            description="Já programo há mais de 2 anos"
            icon="🤓"
            selected={state.level === 1}
            onClick={()=> setLevel(1)}
          />  

        <Link to="/" className="backbtn">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )

};