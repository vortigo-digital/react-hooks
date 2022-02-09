# useUnmount

A hook that executes a function when, and only when, the component is unmounted.

The idea behind this hooks is to bring readability and descriptiviness to the code, letting clear that the code should be executed only at unmount.

# Params

| Property | Description                                   | Type       | Default   |
| -------- | --------------------------------------------- | ---------- | --------- |
| fn       | the function which will be invoked at unmount | () => void | undefined |

# Return Values

N/A

# Usage

```tsx
import React from 'react';
import { useUnmount } from '@vortigo/react-hooks';

export default function Example() {
  useUnmount(() => {
    console.log('unmounted');
  });

  return <div>Example</div>;
}
```
