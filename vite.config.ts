import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'prompt',
            injectRegister: "auto",

            pwaAssets: {
                disabled: false,
                config: true,
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico,ttf}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },

            devOptions: {
                enabled: true,
                navigateFallback: 'index.html',
                suppressWarnings: true,
                type: 'module',
            },

            manifest: {
                theme_color: "#000508",
                background_color: "#000508",
                display: "standalone",
                scope: "/",
                start_url: "/",
                name: "SWFirst",
                short_name: "SWFirst",
                description: "Service Worker are great!",
                icons: [
                    {
                        src: "icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "icons/icon-256x256.png",
                        sizes: "256x256",
                        type: "image/png"
                    },
                    {
                        src: "icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png"
                    },
                    {
                        src: "icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any"
                    },
                    {
                        src: "icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ],
                screenshots: [
                    {
                        src: 'icons/screenshot1.png',
                        sizes: '512x512',
                        type: 'image/png',
                        form_factor: 'wide',
                    },
                    {
                        src: 'icons/screenshot1.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            }
        })],
})