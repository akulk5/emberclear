declare module '@ember/test-helpers' {
  interface Owner {
    lookup: <T>(name: string) => T;
    register: <T>(name: string, mockService: T) => void;
  }
  export interface AppContext {
    element: HTMLElement;
    owner: Owner & {
      application: {
        inject: (within: string, name: string, injected: string) => void;
      };
    };
  }

  export function getContext(): AppContext;
}
