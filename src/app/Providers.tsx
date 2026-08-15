"use client";
import React, { ReactNode } from "react";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NextTopLoader
        color="#abed33"
        showSpinner={false}
        crawlSpeed={2000}
        easing="ease"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default Providers;
