import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Department } from "../../features/location/types/Department";

type DepartmentContextType = {
  department:Department | null;
  setDepartment: (department: Department) => void;
};

export const DepartmentContext = createContext<DepartmentContextType | null>(null);

export const DepartmentProvider = ({ children }:PropsWithChildren) => {
  const [department, setDepartment] = useState<Department | null>(null);

  return (
    <DepartmentContext.Provider value={{ department, setDepartment }}>
      {children}
    </DepartmentContext.Provider>
  );
};

export const useDepartment = () => {
  const context = useContext(DepartmentContext);

  if (!context) {
    throw new Error(
      "useDepartment debe usarse dentro de DepartmentProvider"
    );
  }

  return context;
};

