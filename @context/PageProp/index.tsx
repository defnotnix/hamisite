"use client";

import { createContext } from "react";

const Context = createContext<any>({});

const initial = {
  loading: true,
  loadingTransition: false,
  previous: "",
  current: "",
  transitionTitle: "",
};

type propReducer = {
  state: any;
  action: any;
};

type propState = typeof initial;

type propAction = {
  value: "";
  type:
    | "SET_CURRENT"
    | "LOADING_START"
    | "LOADING_END"
    | "TRANSITION_START"
    | "TRANSITION_END"
    | "PAGE_LOADED";
};

function reducer(state: propState, action: propAction) {
  switch (action.type) {
    // * BREADCRUMBS SETUP

    case "SET_CURRENT":
      return {
        ...state,
        current: action.value,
      };

    // * LOADING

    // > OVERALL
    case "PAGE_LOADED":
      return {
        ...state,
        loading: false,
        loadingTransition: false,
        current: action.value,
      };

    // > CORE LOADING

    case "LOADING_START":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_END":
      return {
        ...state,
        loading: false,
      };

    // > TRANSITION LOADING

    case "TRANSITION_START":
      return {
        ...state,
        loadingTransition: true,
        transitionTitle: action.value,
      };
    case "TRANSITION_END":
      return {
        ...state,
        loadingTransition: false,
      };

    // * DEFAULT
    default:
      return {
        ...state,
      };
  }
}

const ContextPageProp = { Context, reducer, initial };

export { ContextPageProp };
