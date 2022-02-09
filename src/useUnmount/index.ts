import { useEffect } from 'react';

/**
 * A hook that executes a function when, and only when,
 * the component is unmounted
 * @param fn the function which will be invoked at unmount
 */
export default function useUnmount(fn: () => void) {
  if (typeof fn !== 'function')
    console.error('parameter fn must be a function');

  useEffect(() => {
    return fn;
  }, []);
}
