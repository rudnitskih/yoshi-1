/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.scss';
declare module '*.json';

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

interface Window {
  __STATICS_BASE_URL__: string;
  __LOCALE__: string;
  __BASEURL__: string;
}
