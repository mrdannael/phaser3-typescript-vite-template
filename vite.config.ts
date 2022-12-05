import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [
        //  Toggle the booleans here to enable / disable Phaser 3 features:
        replace({
          'typeof CANVAS_RENDERER': JSON.stringify(true),
          'typeof WEBGL_RENDERER': JSON.stringify(true),
          'typeof EXPERIMENTAL': JSON.stringify(true),
          'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
          'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
          'typeof FEATURE_SOUND': JSON.stringify(true)
        })
      ]
    }
  }
});