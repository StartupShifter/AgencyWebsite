import * as React from "react"

const MOBILE_BREAKPOINT = 768
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribeToMobile(onChange: () => void) {
  const query = window.matchMedia(MOBILE_QUERY)
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

function getIsMobile() {
  return window.matchMedia(MOBILE_QUERY).matches
}

function getServerIsMobile() {
  return false
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribeToMobile, getIsMobile, getServerIsMobile)
}
