import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pomodoro_timer/',
	server: {
		origin: '/pomodoro_timer',
	}
})
