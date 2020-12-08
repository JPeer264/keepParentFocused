import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'keepParentFocused.ts',
  output: [
    {
      file: pkg.main,
      name: 'keepParentFocused',
      format: 'umd',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
};
