import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface NumberOfIndexContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface NumberOfIndexProviderProps {
  children: ReactNode;
}

export const NumberOfIndexContext = createContext<
  NumberOfIndexContextType | undefined
>(undefined);

export const NumberOfIndexProvider = ({
  children,
}: NumberOfIndexProviderProps) => {
  // Recuperar el valor almacenado en localStorage
  const getInitialCount = () => {
    const storedCount = localStorage.getItem("count");
    return storedCount !== null ? JSON.parse(storedCount) : 0;
  };

  // Inicializar el estado con el valor recuperado
  const [count, setCount] = useState(getInitialCount);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <NumberOfIndexContext.Provider value={{ count, setCount }}>
      {children}
    </NumberOfIndexContext.Provider>
  );
};

export const useNumberOfIndexContext = (): NumberOfIndexContextType => {
  const context = useContext(NumberOfIndexContext);
  if (context === undefined) {
    throw new Error(
      "useDataContext must be used within a NumberOfIndexProvider"
    );
  }
  return context;
};
