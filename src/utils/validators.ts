/**
 * Funciones de validación
 */

/**
 * Valida el formato de una placa
 */
export const validatePlaca = (placa: string): { isValid: boolean; error?: string } => {
  if (!placa || placa.trim().length === 0) {
    return { isValid: false, error: 'La placa es requerida' };
  }

  const placaTrimmed = placa.trim();

  if (placaTrimmed.length < 3 || placaTrimmed.length > 20) {
    return { isValid: false, error: 'La placa debe tener entre 3 y 20 caracteres' };
  }

  // Solo letras y números
  const regex = /^[A-Za-z0-9]+$/;
  if (!regex.test(placaTrimmed)) {
    return { isValid: false, error: 'La placa solo debe contener letras y números' };
  }

  return { isValid: true };
};
