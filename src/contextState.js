import React, { useContext } from "react";
import axios from "axios";

export const initialState = {
  loading: false,
  userToken: false,
  busqueda: [], 
  categorias: [], 
  categoriaSeleccionada: "", 
};

export const ActionTypes = {
  setLoading: "SET_LOADING",
  setUserToken: "SET_USER_TOKEN",
  setBusqueda: "SET_BUSQUEDA",
  setCategorias: "SET_CATEGORIAS",
  setCategoriaSeleccionada: "SET_CATEGORIA_SELECCIONADA",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setLoading:
      return { ...state, loading: action.newValue };
    case ActionTypes.setUserToken:
      return { ...state, userToken: action.newValue };
    case ActionTypes.setBusqueda:
      return { ...state, busqueda: action.newValue };
    case ActionTypes.setCategorias:
      return { ...state, categorias: action.newValue };
    case ActionTypes.setCategoriaSeleccionada:
      return { ...state, categoriaSeleccionada: action.newValue };
    default:
      return state;
  }
};

export const inicialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(inicialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

  React.useEffect(() => {
    axios.get('https://dummyjson.com/docs/products/productos')
      .then(response => {
        setContextState({ type: ActionTypes.setBusqueda, newValue: response.data });
      })
      .catch(error => {
        console.error('Error al obtener productos desde la API', error);
      });

    axios.get('https://dummyjson.com/docs/products/categorias')
      .then(response => {
        setContextState({ type: ActionTypes.setCategorias, newValue: response.data });
      })
      .catch(error => {
        console.error('Error al obtener categorías desde la API', error);
      });
  }, []);

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      {children}
    </Context.Provider>
  );
}

export const useContextState = () => useContext(Context);
