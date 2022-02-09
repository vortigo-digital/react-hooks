import useMount from './index';
import { renderHook } from '@testing-library/react-hooks';

describe('useMount', () => {
  it('should only execute the function once in a component lifetime', () => {
    const fn = jest.fn();
    const hook = renderHook(() => useMount(fn));
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
  });

  it("shouldn't execute the function at unmount", () => {
    const fn = jest.fn();
    const hook = renderHook(() => useMount(fn));
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });

  it('should execute the return function at unmount', () => {
    const unmountFunction = jest.fn();

    const fn = jest.fn(() => unmountFunction);
    const hook = renderHook(() => useMount(fn));
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
    expect(unmountFunction).toBeCalledTimes(1);
  });

  it("should log an error if the passed parameter isn't a function", () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    //@ts-ignore
    renderHook(() => useMount('script'));
    expect(consoleErrorMock).toBeCalledWith('parameter fn must be a function');
  });
});
