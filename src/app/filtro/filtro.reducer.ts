import { createReducer, on, Action } from '@ngrx/store';
import { filtro, filtrosValidos } from './filtro.actions';

 
export const initialState:filtrosValidos | any = 'todos';
 
const _filtroReducer = createReducer(
    initialState,
    on(filtro, (state, { filtro }) => filtro)
);
 
export function filtroReducer(state:any, action:Action) {
  return _filtroReducer(state, action);
}