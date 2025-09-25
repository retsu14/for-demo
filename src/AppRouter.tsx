import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { ArticlePage } from './pages/ArticlePage';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>;
}