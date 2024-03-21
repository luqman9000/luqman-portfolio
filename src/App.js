import './App.css';
import React, { lazy, Suspense } from 'react';

const FirstPart = lazy(() => import('./components/FirstPart'));
const Header = lazy(() => import('./components/Header'));

function App() {
  return (
    <>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <FirstPart />
      </Suspense>
    </>
  );
}

export default App;
