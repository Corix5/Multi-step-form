import { createContext, ReactNode, useContext, useState } from "react";

interface Data {
  name: string;
  email: string;
  phone: string;
  plan: string;
  planMode: boolean;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

interface DataContextType {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const dataFixed = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  planMode: false,
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState(dataFixed);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (context === undefined) {
      throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
  };
