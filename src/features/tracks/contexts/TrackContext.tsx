import { createContext, type ReactNode } from "react";
import { useTrackState } from "../hooks/useTrackState";

export type ITrackContext = ReturnType<typeof useTrackState>;

interface IProvider {
  children: ReactNode;
}

export const TrackContext = createContext<ITrackContext | null>(null);

export const TrackContextProvider = ({ children }: IProvider) => {
  const contextData = useTrackState();

  return (
    <TrackContext.Provider value={contextData}>
      {children}
    </TrackContext.Provider>
  );
};
