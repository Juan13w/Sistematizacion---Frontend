/**
 * Funciones utilitarias para formatear datos
 */

/**
 * Formatea un número como moneda colombiana
 */
export const formatCurrency = (value: number | null | undefined): string => {
  if (value === null || value === undefined) return '$0';
  
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Normaliza una placa (mayúsculas, sin espacios)
 */
export const normalizePlaca = (placa: string): string => {
  return placa.trim().toUpperCase();
};

/**
 * Formatea una fecha
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
};
