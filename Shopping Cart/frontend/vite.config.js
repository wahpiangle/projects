import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  EnvironmentPlugin({
    REACT_APP_CHEC_PUBLIC_KEY: 'pk_51121596ba9ff33a96ffdefa37c3c283a0f7e42cc80d7',
  },{
    defineOn: 'import.meta.env'
  })
  ],


})
