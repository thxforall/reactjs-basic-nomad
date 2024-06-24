# reactJs-basic-nomad

React Challenge Step 1. ReactJs Basic

---

## React Basic Course

1. JSX
2. useState(), useEffect()
3. Props Type
4. React Router

---

### 1. JSX

JSX는 JavaScript와 XML의 조합으로, React에서 HTML을 작성하는 것과 비슷하게 코드를 작성할 수 있게 해줍니다. JSX를 사용하면 가독성이 높아지고, 코드가 직관적으로 변합니다.

**예시:**

```jsx
const element = <h1>Hello, world!</h1>;
```

### 2. useState(), useEffect()

`useState`는 함수 컴포넌트에서 상태를 관리할 수 있게 해줍니다. `useEffect`는 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있게 해줍니다.

**예시:**

```jsx
import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Example;
```

### 3. Props Type

Props는 컴포넌트 간에 데이터를 전달하는 방법입니다. prop-types 라이브러리를 사용하여 props의 타입을 정의할 수 있습니다.

**예시:**

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
```

### 4. React Router

React Router는 SPA(single-page application)에서 라우팅을 쉽게 할 수 있게 해주는 라이브러리입니다. 최신 버전에서는 `Routes`와 `Route`를 사용하여 라우팅을 설정합니다.

**예시:**

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
```
