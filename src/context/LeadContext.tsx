import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type LeadState = {
  service?: string;
  message?: string;
};

type LeadCtx = LeadState & {
  setLead: (s: LeadState) => void;
  prefillAndScroll: (s: LeadState) => void;
};

const Ctx = createContext<LeadCtx | null>(null);

export const LeadProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<LeadState>({});

  const setLead = useCallback((s: LeadState) => {
    setState((prev) => ({ ...prev, ...s }));
  }, []);

  const prefillAndScroll = useCallback((s: LeadState) => {
    setState((prev) => ({ ...prev, ...s }));
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  return (
    <Ctx.Provider value={{ ...state, setLead, prefillAndScroll }}>
      {children}
    </Ctx.Provider>
  );
};

export const useLead = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLead must be used inside LeadProvider");
  return c;
};
