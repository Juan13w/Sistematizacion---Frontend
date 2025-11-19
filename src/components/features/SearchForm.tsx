import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { validatePlaca } from '../../utils/validators';
import { normalizePlaca } from '../../utils/formatters';
import './SearchForm.css';

interface SearchFormProps {
  onSearch: (placa: string) => void;
  loading?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading = false }) => {
  const [placa, setPlaca] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar placa
    const validation = validatePlaca(placa);
    if (!validation.isValid) {
      setError(validation.error || 'Placa inválida');
      return;
    }

    // Limpiar error y buscar
    setError('');
    const placaNormalizada = normalizePlaca(placa);
    onSearch(placaNormalizada);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaca(e.target.value);
    if (error) setError(''); // Limpiar error al escribir
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form-content">
        <Input
          type="text"
          placeholder="Ej: ABC123"
          value={placa}
          onChange={handleChange}
          error={error}
          fullWidth
          icon={<span>🔍</span>}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={loading}
          disabled={loading || !placa.trim()}
        >
          Consultar
        </Button>
      </div>
      <p className="search-form-hint">
        Ingrese la placa del vehículo para consultar su estado de sistematización
      </p>
    </form>
  );
};

export default SearchForm;
