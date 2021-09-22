import '../styles/App.scss';
import { useState } from 'react';

function App() {
  // Funcionalidad de la letra
  const [letter, setLetter] = useState('');
  const [numberOfErrors, setNumberOfError] = useState(0);
  const [word, setWord]= useState('katakroker');

  const renderSolutionLetter =()=>{
    const wordLetter= word.split('');
    console.log(wordLetter);
    setWord([...word]);
  
    return(
      wordLetter.map((word, index) => {
        return(
        <li className='letter' key={index}>{word + letter}</li>
        )}));
  };

  const handlerLetter = (ev) => {
    const inputValue = ev.target.value;
    let regex = RegExp('^[a-zA-Z]$'); //No conseguimos que haga esta funcion!, si es uno de estos caracteres pintamelo sinó NO, pq seria un caracter no válido
    console.log(regex.test(inputValue))

    //console.log(inputValue.match(regex))
    if (regex === inputValue) {
      setLetter(inputValue);
    } else {
      setLetter('');
    }
  };
  //Estado number error

  const handlerNumber = (ev) => {
    ev.preventDefault();
    let counter = numberOfErrors + 1;
    setNumberOfError(counter);
  };

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'> {renderSolutionLetter()+letter}
            
            </ul>
          </div>
          <div className='feedback'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={letter}
              onChange={handlerLetter}
            />
            <input
              type='submit'
              value='Incrementar'
              className='button'
              onClick={handlerNumber}
            />
            <div className='container'></div>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors} `}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
