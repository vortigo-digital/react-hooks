import useUnmount from './index';
import { renderHook } from '@testing-library/react-hooks';

describe('useMount', () => {
  it('should not execute the function at mount', () => {
    const fn = jest.fn();
    const hook = renderHook(() => useUnmount(fn));
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
  });

  it('should execute the function at unmount', () => {
    const fn = jest.fn();
    const hook = renderHook(() => useUnmount(fn));
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });

  it("should log an error if the passed parameter isn't a function", () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    //@ts-ignore
    renderHook(() => useUnmount('script'));
    expect(consoleErrorMock).toBeCalledWith('parameter fn must be a function');
  });
});
