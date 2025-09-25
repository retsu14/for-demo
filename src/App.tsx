import React from 'react';
import { Header } from './components/Header';
import { WeatherUpdates } from './components/WeatherUpdates';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-sky-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <WeatherUpdates />
      </main>
      <Footer />
    </div>;
}