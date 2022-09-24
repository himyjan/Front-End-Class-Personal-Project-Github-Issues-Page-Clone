import { useSyncExternalStore } from 'react';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default function createStore<Shape>(initialState: Shape) {
  let currentState = initialState;
  const listeners = new Set<(state: Shape) => void>();
  let serverState: Shape | null = null;
  const subscribe = (listener: (state: Shape) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return {
    getState: () => currentState,
    setState: (newState: Shape) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe,
    serverInitialize: (initialServerState: Shape) => {
      if (!serverState) {
        currentState = initialServerState;
        serverState = initialServerState;
      }
    },
    getServerState: () => serverState ?? initialState,
    useStore: <SelectorOutput>(
      selector: (state: Shape) => SelectorOutput
    ): SelectorOutput =>
      useSyncExternalStore(
        subscribe,
        () => selector(currentState),
        () => selector(serverState ?? initialState)
      ),
  };
}

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAll: builder.query<Todo[], void>({
      query: () => `todos`,
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: builder.mutation<string, string>({
      query(text) {
        return {
          url: `todos`,
          method: 'POST',
          body: {
            text,
          },
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'PUT',
          body: todo,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'DELETE',
          body: todo,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});
