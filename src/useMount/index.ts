import { useEffect } from 'react';

/**
 * A hook that executes a function when, and only when, the component is mounted
 * @param fn the function which will be invoked at mount
 */
export default function useMount(fn: () => void) {
  if (typeof fn !== 'function')
    console.error('parameter fn must be a function');

  useEffect(fn, []);
}
