import React from 'react';
import Card from '../ui/Card';
import { SistematizacionResponse } from '../../types/sistematizacion.types';
import { formatCurrency } from '../../utils/formatters';
import './ResultCard.css';

interface ResultCardProps {
  data: SistematizacionResponse[];
}

const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Card variant="info">
        <div className="result-empty">
          <span className="result-icon">ℹ️</span>
          <p>No se encontraron resultados</p>
        </div>
      </Card>
    );
  }

  // Verificar si hay información válida
  const hasValidData = data.some(item => item.TipoVehiculo && item.TipoVehiculo.trim() !== '');

  if (!hasValidData) {
    return (
      <Card variant="warning">
        <div className="result-empty">
          <span className="result-icon">⚠️</span>
          <h3>No se encontró información</h3>
          <p>No se encontró información de sistematización para la placa <strong>{data[0]?.NumeroPlaca}</strong></p>
        </div>
      </Card>
    );
  }

  // Calcular deuda total
  const totalDeuda = data
    .filter(item => item.ValorPorFacturar !== null && item.ValorPorFacturar !== undefined)
    .reduce((sum, item) => sum + (item.ValorPorFacturar || 0), 0);

  const tieneDeuda = totalDeuda > 0;
  const vehiculo = data[0];

  return (
    <div className="result-container">
      <Card variant={tieneDeuda ? 'danger' : 'success'}>
        <div className="result-header">
          <div className="result-icon-large">
            {tieneDeuda ? '⚠️' : '✅'}
          </div>
          <div className="result-info">
            <h2 className="result-placa">{vehiculo.NumeroPlaca}</h2>
            <p className="result-tipo">{vehiculo.TipoVehiculo}</p>
            {vehiculo.AnioPagado && (
              <p className="result-anio">Último año pagado: <strong>{vehiculo.AnioPagado}</strong></p>
            )}
          </div>
        </div>

        <div className="result-divider"></div>

        <div className="result-deuda">
          <h3 className={tieneDeuda ? 'text-danger' : 'text-success'}>
            {tieneDeuda ? '💰 Deuda Total' : '✓ Al día'}
          </h3>
          <p className={`result-deuda-amount ${tieneDeuda ? 'text-danger' : 'text-success'}`}>
            {formatCurrency(totalDeuda)}
          </p>
        </div>

        {tieneDeuda && (
          <>
            <div className="result-divider"></div>
            <div className="result-details">
              <h4>Detalle de deudas:</h4>
              <ul className="result-list">
                {data
                  .filter(item => item.ValorPorFacturar && item.ValorPorFacturar > 0)
                  .map((item, index) => (
                    <li key={index} className="result-list-item">
                      <span className="result-list-year">
                        {item.AnioNoFacturado || 'N/A'}
                      </span>
                      <span className="result-list-description">
                        {item.DescripcionNoFacturada || 'Sistematización pendiente'}
                      </span>
                      <span className="result-list-amount">
                        {formatCurrency(item.ValorPorFacturar)}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ResultCard;
