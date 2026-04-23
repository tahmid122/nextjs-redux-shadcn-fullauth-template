"use client";
import React, { ReactNode } from "react";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default Providers;
