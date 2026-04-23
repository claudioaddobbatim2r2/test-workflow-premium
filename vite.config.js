import {defineConfig, EnvironmentModuleGraph} from 'vite';

export default defineConfig({
    base: '/test-workflow-premium/',
    build: {
        outdir: 'dist'

    },
    test: {
        environment: 'jsdom'
    }
})