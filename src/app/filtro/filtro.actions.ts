import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';


export const filtro = createAction(
    '[FILTRO] Set Filtro',
    props<{ filtro: filtrosValidos }>()
)