# useMount

A hook that executes a function when, and only when, the component is mounted

# Params

| Property | Description                                 | Type       | Default   |
| -------- | ------------------------------------------- | ---------- | --------- |
| fn       | the function which will be invoked at mount | () => void | undefined |

# Return Values

N/A

# Usage

```tsx
import React from 'react';
import { useMount } from '@vortigo/react-hooks';

export default function Example() {
  useMount(() => {
    console.log('mounted');

    return () => console.log('umounted');
  });

  return <div>Example</div>;
}
```
