import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className="flex justify-center items-center h-screen w-full text-xl font-sans">Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
