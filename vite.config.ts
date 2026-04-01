import { defineConfig } from 'vite';
import viteString from 'vite-plugin-string';

export default defineConfig({
  base: './', // GitHub Pages用
  plugins: [
    viteString({
      include: '**/*.wgsl' // シェーダーファイルを文字列として読み込む
    })
  ]
});
