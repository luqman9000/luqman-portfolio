import './App.css';
import React, { lazy, Suspense } from 'react';

const FirstPart = lazy(() => import('./components/FirstPart'));
const ThirdPart = lazy(() => import('./components/ThirdPart'));
const Header = lazy(() => import('./components/Header'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <FirstPart />
        <ThirdPart />
      </Suspense>
    </>
  );
}

export default App;
