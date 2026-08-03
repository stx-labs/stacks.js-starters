"use client";

import { useEffect, useState } from "react";
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";

const STORAGE_EVENT = "stacks:connection";

function readState() {
  if (!isConnected()) return { connected: false, address: null };

  const data = getLocalStorage();
  return {
    connected: true,
    address: data?.addresses?.stx?.[0]?.address ?? null,
  };
}

/**
 * Tiny hook around `@stacks/connect` v8.
 * `@stacks/connect-react` is no longer needed — plain function calls + local
 * storage are enough, we only need to re-render components ourselves.
 */
export function useStacks() {
  // Start disconnected so server and client render the same markup, then sync
  // with local storage after mount.
  const [state, setState] = useState({ connected: false, address: null });

  useEffect(() => {
    const sync = () => setState(readState());

    sync();
    window.addEventListener(STORAGE_EVENT, sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener(STORAGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return {
    ...state,
    connectWallet: async () => {
      await connect(); // caches the address in local storage
      window.dispatchEvent(new Event(STORAGE_EVENT));
    },
    disconnectWallet: () => {
      disconnect(); // clears local storage and the selected wallet
      window.dispatchEvent(new Event(STORAGE_EVENT));
    },
  };
}
