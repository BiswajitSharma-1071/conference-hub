import { createContext, useContext, useReducer } from "react";
import InputModal from "../components/GenericComponents/InputModal";
import { AppState } from "../models/stateModels";
import {
  AppReducerDispatchType,
  AppStateReducer,
  initalAppState,
} from "../reducers/AppContextReducer";
import { inputData } from "../utils/userMockData";

type IProps = {
  children: JSX.Element | JSX.Element[];
};

export interface IAppContext {
  appState: AppState;
}

export const initialAppContext: IAppContext = { appState: {} };

const initialDispatchContext: any = null;

export const AppContext = createContext(initialAppContext);
export const AppDispatchContext = createContext(initialDispatchContext);

export const useAppContext = () => useContext<IAppContext>(AppContext);
export const useAppDispatchContext = () =>
  useContext<AppReducerDispatchType>(AppDispatchContext);

export const AppContextProvider = ({ children }: IProps) => {
  const [appState, dispatch] = useReducer(AppStateReducer, initalAppState);

  return (
    <AppContext.Provider value={{ appState }}>
      <AppDispatchContext.Provider value={{ dispatch }}>
        <InputModal
          isOpen
          header="Enter the below details"
          bodyText="Please enter the below details before you proceed"
          inputData={inputData}
          confirmAction
          cancelAction
        />
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};
