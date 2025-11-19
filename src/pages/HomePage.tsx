import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchForm from '../components/features/SearchForm';
import ResultCard from '../components/features/ResultCard';
import Alert from '../components/ui/Alert';
import Card from '../components/ui/Card';
import sistematizacionService from '../services/sistematizacionService';
import { SistematizacionResponse } from '../types/sistematizacion.types';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SistematizacionResponse[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (placa: string) => {
    setLoading(true);
    setError(null);
    setShowResults(false);

    try {
      const response = await sistematizacionService.consultarPorPlacaGet(placa);
      
      if (response.Success && response.Data) {
        setResults(response.Data);
        setShowResults(true);
      } else {
        setError(response.Message || 'No se encontraron resultados');
        setResults(null);
      }
    } catch (err: any) {
      console.error('Error al consultar:', err);
      setError(
        err.response?.data?.Message ||
        'Error al conectar con el servidor. Por favor, intente nuevamente.'
      );
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <section className="hero-section">
            <h1 className="hero-title">🚗 Plataforma de Sistematización ,</h1>
            <p className="hero-subtitle">
              Consulte el estado de sistematización de su vehículo
            </p>
          </section>

          <section className="search-section">
            <Card>
              <h2 className="section-title">Consultar Sistematización</h2>
              <SearchForm onSearch={handleSearch} loading={loading} />
            </Card>
          </section>

          {error && (
            <section className="alert-section">
              <Alert type="error" message={error} onClose={() => setError(null)} />
            </section>
          )}

          {showResults && results && (
            <section className="results-section">
              <h2 className="section-title">📋 Resultados</h2>
              <ResultCard data={results} />
            </section>
          )}

          {!showResults && !error && !loading && (
            <section className="info-section">
              <Card variant="info">
                <h3>ℹ️ Información</h3>
                <p>
                  Ingrese la placa de su vehículo para consultar el estado de sistematización.
                  El sistema le mostrará:
                </p>
                <ul>
                  <li>Tipo de vehículo</li>
                  <li>Último año pagado</li>
                  <li>Deudas pendientes (si las hay)</li>
                  <li>Valor total a pagar</li>
                </ul>
              </Card>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
