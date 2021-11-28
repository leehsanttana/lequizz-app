import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../InputsComponents/Input/';
import Radio from '../InputsComponents/Radio/';
import Button from '../InputsComponents/Button';
import Theme from '../Theme';
import * as C from './styles';
import { UserContext } from '../../Context/UserContext';

const HomeSection = () => {
  const { name, setName, difficulty, setDifficulty, setQuestions, key } =
    useContext(UserContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function getQuestions(event) {
    event.preventDefault();
    try {
      setLoading(true);
      if (name === '') throw new Error(`Informe seu nome para começar!`);
      const response = await fetch(
        `https://quizapi.io/api/v1/questions?apiKey=${key}&difficulty=${difficulty}&limit=10`,
      );
      const json = await response.json();
      setQuestions(json);
      navigate('/questions');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Theme>
      <C.HomeSection className="animeToBottom">
        <h1 className="logo">
          {' '}
          <span className="init-logo">Le</span> Quizz
        </h1>
        <h2>Teste suas Habilidades nesse divertido Quizz sobre tecnologias!</h2>
        <form onSubmit={getQuestions} className="info-user">
          <div className="inputs-options">
            <Input
              label="Digite seu nome:"
              type="text"
              name="name"
              value={name}
              setValue={setName}
              setError={setError}
            />
            {error && <p className="error">{error}</p>}
            <Radio
              label="Dificuldade:"
              options={['easy', 'hard']}
              value={difficulty}
              setValue={setDifficulty}
            />
          </div>

          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Começar</Button>
          )}
        </form>
      </C.HomeSection>
    </Theme>
  );
};

export default HomeSection;
