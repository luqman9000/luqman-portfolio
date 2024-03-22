import './App.css';
import React, { lazy, Suspense } from 'react';

const FirstPart = lazy(() => import('./components/FirstPart'));
const SecondPart = lazy(() => import('./components/SecondPart'));
const Header = lazy(() => import('./components/Header'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <FirstPart />
        <SecondPart />
      </Suspense>
    </>
  );
}

export default App;
