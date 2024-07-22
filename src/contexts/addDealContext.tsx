'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  NewDealInitialValuesType,
  NewDealType,
  newDealInitialValuesSchema,
} from '@/schemas';

const defaultDeal: NewDealInitialValuesType = {
  name: '',
  link: '',
  coupon: '',
  discount: undefined,
  contactName: '',
  contactEmail: '',
};

const LOCAL_STORAGE_KEY = 'multi-page-form-demo-newDealData';

type AddDealContextType = {
  newDealData: NewDealInitialValuesType;
  updateNewDealDetails: (dealDetails: Partial<NewDealType>) => void;
  dataLoaded: boolean;
  resetLocalStorage: () => void;
};

export const AddDealContext = createContext<AddDealContextType | null>(null);

export const AddDealContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newDealData, setNewDealData] =
    useState<NewDealInitialValuesType>(defaultDeal);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    readFromLocalStorage();
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      saveDataToLocalStorage(newDealData);
    }
  }, [newDealData, dataLoaded]);

  const updateNewDealDetails = useCallback(
    (dealDetails: Partial<NewDealType>) => {
      setNewDealData({ ...newDealData, ...dealDetails });
    },
    [newDealData]
  );

  const saveDataToLocalStorage = (
    currentDealData: NewDealInitialValuesType
  ) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentDealData));
  };

  const readFromLocalStorage = () => {
    const loadedDataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!loadedDataString) return setNewDealData(defaultDeal);
    const validated = newDealInitialValuesSchema.safeParse(
      JSON.parse(loadedDataString)
    );

    if (validated.success) {
      setNewDealData(validated.data);
    } else {
      setNewDealData(defaultDeal);
    }
  };

  const resetLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setNewDealData(defaultDeal);
  };

  const contextValue = useMemo(
    () => ({
      newDealData,
      dataLoaded,
      updateNewDealDetails,
      resetLocalStorage,
    }),
    [newDealData, dataLoaded, updateNewDealDetails]
  );

  return (
    <AddDealContext.Provider value={contextValue}>
      {children}
    </AddDealContext.Provider>
  );
};

export function useAddDealContext() {
  const context = useContext(AddDealContext);
  if (context === null) {
    throw new Error(
      'useAddDealContext must be used within a AddDealContextProvider'
    );
  }
  return context;
}
