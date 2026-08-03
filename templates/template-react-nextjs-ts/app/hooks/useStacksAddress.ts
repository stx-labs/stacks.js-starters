"use client";

import { getLocalStorage, isConnected } from "@stacks/connect";
import { useCallback, useEffect, useState } from "react";

/**
 * Reads the currently connected STX address from local storage.
 *
 * `@stacks/connect` 8.x caches the connected addresses in local storage,
 * so no provider or context is needed anymore — just read it after mount
 * (local storage isn't available while server rendering).
 */
export function useStacksAddress() {
  const [address, setAddress] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const refresh = useCallback(() => {
    if (!isConnected()) {
      setAddress(null);
      return;
    }
    const data = getLocalStorage();
    setAddress(data?.addresses.stx[0]?.address ?? null);
  }, []);

  useEffect(() => {
    setMounted(true);
    refresh();
  }, [refresh]);

  return { address, mounted, refresh };
}
