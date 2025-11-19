/**
 * Servicio para consultar la API de sistematización
 */

import apiClient from './api';
import {
  ApiResponse,
  SistematizacionResponse,
  SistematizacionRequest,
  HealthCheckResponse,
} from '../types/sistematizacion.types';

class SistematizacionService {
  /**
   * Consulta la sistematización por placa (GET)
   */
  async consultarPorPlacaGet(placa: string): Promise<ApiResponse<SistematizacionResponse[]>> {
    const response = await apiClient.get<ApiResponse<SistematizacionResponse[]>>(
      `/api/Sistematizacion/${placa}`
    );
    return response.data;
  }

  /**
   * Consulta la sistematización por placa (POST)
   */
  async consultarPorPlacaPost(request: SistematizacionRequest): Promise<ApiResponse<SistematizacionResponse[]>> {
    const response = await apiClient.post<ApiResponse<SistematizacionResponse[]>>(
      '/api/Sistematizacion/consultar',
      request
    );
    return response.data;
  }

  /**
   * Verifica el estado de salud de la API
   */
  async checkHealth(): Promise<HealthCheckResponse> {
    const response = await apiClient.get<HealthCheckResponse>('/api/Sistematizacion/health');
    return response.data;
  }
}

export default new SistematizacionService();
