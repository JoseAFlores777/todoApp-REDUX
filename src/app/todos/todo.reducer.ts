import { Action, createReducer, on } from '@ngrx/store';
import { crear, editar, toogle, borrar, toogleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
    new Todo('Tarea#1'),
    new Todo('Tarea#2'),
    new Todo('Tarea#3'),
    new Todo('Tarea#4'),
];

const _todoReducer = createReducer(
    initialState,
    //hay que retornar un nuevo arreglo por eso retornamos el arreglo en vez de hacer el .push
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),
  on(toogle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),
  //devuelve un nuevo arreglo con la funcion filter
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toogleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      }
    })
  }),
  on(limpiarCompletados, (state) => {
    return state.filter(todo => !todo.completado)
  })

);

export function todoReducer(state:any, action:Action) {
  return _todoReducer(state, action);
}