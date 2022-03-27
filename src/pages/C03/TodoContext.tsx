import React, { createContext, Dispatch, useContext, useReducer, useRef } from "react";

type TodoType = {
  id: number,
  text: string,
  done: boolean
}

const initialTodos:TodoType[] = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  }
];

interface ITodoReducerAction {
  type: string
  id?: number
  todo?: TodoType
}

const todoReducer = (state:TodoType[], action:ITodoReducerAction) => {
  switch (action.type) {
    case 'CREATE':
      if(action.todo !== undefined)
        return state.concat(action.todo);
      else {
        throw new Error(`todo is null`);
      }
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? {...todo, done:!todo.done} : todo)
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext<TodoType[] | null>(null);
const TodoDispatchContext = createContext<Dispatch<ITodoReducerAction> | null>(null);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(null);

export const TodoProvider:React.FC<{children?:React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}