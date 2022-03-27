import React, { useReducer } from "react";

export interface IAction {
  type: string,
  name: string,
  value: string,
}

export interface IState {
  username: string,
  email: string,
}

const reducerAction = (state:IState, action:IAction): IState => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      }
    default:
      return state;
  }
}

const useInputs = (initialForm: IState): [IState, (e: React.ChangeEvent<HTMLInputElement>) => void, () =>void] => {
  const [state, dispatch] = useReducer(reducerAction, initialForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  };

  const reset = () => {
    dispatch({
      type: 'CHANGE_INPUT',
      name: '',
      value: '',
    })
  };

  return [state, onChange, reset];
}

export default useInputs;