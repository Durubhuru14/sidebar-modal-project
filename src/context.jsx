import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
