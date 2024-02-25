"use client";

import React, { useContext, useReducer } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
// theme
import { configMantineTheme as theme } from "@/@config/theme/mantine.theme";
// context
import { Context } from "@/@context";
//query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// styles
import "@/styles/global.css";
import "@/styles/leaflet.css";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";

//components
import { OverlayMainLoading } from "@/@components/overlay/FullScreenLoading";
import { OverlayPageTransition } from "@/@components/overlay/TransitionOverlay";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Layout({ children }: { children: JSX.Element }) {
  // prop

  // form props
  const [state, dispatch] = useReducer<any>(
    Context.PageProp.reducer,
    Context.PageProp.initial
  );

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        {/* <link rel="shortcut icon" href="/favicon.svg" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bayon&family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <title>
          Hami Nepal | For the People, By the People
        </title>
      </head>
      
      <body
        style={{
          background: "#000",
        }}
      >
        <MantineProvider
          theme={theme}
          forceColorScheme="dark"
          defaultColorScheme="dark"
        >
          <Notifications />

          <ModalsProvider>
            <Context.PageProp.Context.Provider value={{ state, dispatch }}>
              <OverlayMainLoading />
              <OverlayPageTransition />

              <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider clientId="312516604324-5elo24u4rremmgpjemm9acaunbii9dm7.apps.googleusercontent.com">
                  {children}
                </GoogleOAuthProvider>
              </QueryClientProvider>
            </Context.PageProp.Context.Provider>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
