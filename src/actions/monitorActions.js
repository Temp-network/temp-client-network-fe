import { getMonitor } from '../services/tempApi';

export const FETCH_MONITOR = 'FETCH_MONITOR';
export const FETCH_MONITOR_LOADING = 'FETCH_MONITOR_LOADING';

export const fetchMonitor = () => ({
  type: FETCH_MONITOR,
  payload: getMonitor(),
  pendingType: FETCH_MONITOR_LOADING
});
