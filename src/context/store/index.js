import { Alert, Drawer, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../../components/custom";

const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = ({ children }) => {
  const [state, setState] = useState({
    items: [],
    open: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    data: null,
  });

  const addItem = (item) => {
    const itemsIndex = state.items.findIndex((y) => y.item.id === item.id);
    if (itemsIndex !== -1) {
      setState({
        ...state,
        items: state.items.map((x, y) =>
          y === itemsIndex ? { ...x, count: x.count + 1 } : x
        ),
      });
    } else {
      setState({ ...state, items: [...state.items, { count: 1, item }] });
    }
  };

  const removeItem = (id) => {
    const itemsIndex = state.items.findIndex((y) => y.item.id === id);
    const itemsCount = state.items.find((y) => y.item.id === id).count;
    if (itemsCount > 1) {
      setState({
        ...state,
        items: state.items.map((x, y) =>
          y === itemsIndex ? { ...x, count: x.count - 1 } : x
        ),
      });
    } else {
      setState({
        ...state,
        items: state.items.filter((x, y) => y !== itemsIndex),
      });
    }
  };

  const toggleDrawer = () => {
    setState({ ...state, open: !state.open });
  };

  const checkout = () => {
    setState({ ...state, items: [], open: false });
    setSnackbar({
      ...snackbar,
      open: true,
      data: { severity: "success", message: "Purchase successful" },
    });
  };

  const pushSnackbar = (severity, message) =>
    setSnackbar({ ...snackbar, open: true, data: { severity, message } });

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <StoreContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        toggleDrawer,
        checkout,
        pushSnackbar,
        closeSnackbar,
      }}
    >
      {children}
      <Drawer
        anchor="right"
        open={state.open}
        onClose={() => setState({ ...state, open: false })}
      >
        <ShoppingCart />
      </Drawer>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={closeSnackbar}
      >
        {snackbar.data ? (
          <Alert
            onClose={closeSnackbar}
            severity={snackbar.data.severity}
            variant="filled"
            color="primary"
          >
            {snackbar.data.message}
          </Alert>
        ) : null}
      </Snackbar>
    </StoreContext.Provider>
  );
};
