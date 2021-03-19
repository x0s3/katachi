import { RenderHookOptions, renderHook } from '@testing-library/react-hooks';
import { useKatachi } from '../';
import { KatachiFormProvider } from '../../../contexts/KatachiProvider';

type HookProps = RenderHookOptions<any>;

const render = (options: HookProps = {}) => renderHook(useKatachi, options);

describe('useKatachi', () => {
  describe('when hook is used within KatachiProvider', () => {
    it('returns context values', () => {
      const props = {
        defaultValues: {
          example: 'hello',
        },
        onSubmit: jest.fn(),
      };
      const { result } = render({
        wrapper: KatachiFormProvider,
        initialProps: props,
      });

      expect(result.current).toMatchObject(props);
    });
  });

  describe('when hook is not used within KatachiProvider', () => {
    it('throws an error', () => {
      const { result } = render();

      expect(result.error?.message).toBe(
        'You need a KatachiContextProvider wrapping the current tree in order to access this context'
      );
    });
  });
});
