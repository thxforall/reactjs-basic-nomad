# reactJs-basic-nomad

React Challenge Step 1. ReactJs Basic

---

## React Basic Course

1. JSX
2. useState(), useEffect()
3. Props Type
4. React Router

5. Style Component
   5-1. Adapting and Extending
   5-2. 'As' and Attrs
   5-3. Animation and Pseudo
   5-4. themes(light/dark)

6. TypeScript & ReactJs
   6-1. tsx
   6-2. props, interface
   6-3. optional props
   6-4. forms, props
   6-5. theme

7. React Router v.6
   7-1. BrowseRouter
   7-2. createBrowserRouter
   7-3. errorElement
   7-4. useNaviagte
   7-5. useParams
   7-6. outlet
   7-7. useOuletContext
   7-8. useSearchParameter

8. Crypto Tracker
   8-1. fetching data / react query

<!-- https://velog.io/@medistream/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%97%86%EC%9D%B4-Vanilla-CSS-%EB%A7%8C%EC%9C%BC%EB%A1%9C-%ED%94%8C%EB%A6%BD-%EC%B9%B4%EC%9A%B4%ED%84%B0-Flip-Counter-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0 -->

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
      <button onClick={() => setCount(count + 1)}>Click me</button>
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

````jsx
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
````
