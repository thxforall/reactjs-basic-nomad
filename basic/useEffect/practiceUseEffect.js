import Button from './Button';
import styles from './App.module.scss';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = (event) => setKeyword(event.target.value);
  const counterHandler = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]);

  useEffect(() => console.log(`I run 'counter' chagned`), [counter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here..."
        onChange={onChangeKeyword}
        value={keyword}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={counterHandler} text={'Click Me'} />
    </div>
  );
}

export default App;
