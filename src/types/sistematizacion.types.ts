/**
 * Tipos TypeScript para el sistema de sistematización
 */

export interface SistematizacionResponse {
  NumeroPlaca: string;
  TipoVehiculo: string;
  AnioPagado: number | null;
  DescripcionNoFacturada: string;
  AnioNoFacturado: number | null;
  ValorPorFacturar: number | null;
  Mensaje: string;
}

export interface SistematizacionRequest {
  Placa: string;
}

export interface ApiResponse<T> {
  Success: boolean;
  Message: string;
  Data: T | null;
  Errors: string[];
  Timestamp: string;
}

export interface HealthCheckResponse {
  Status: string;
  Version: string;
  Timestamp: string;
  DatabaseStatus: string;
  DatabaseResponseTime: number | null;
}
