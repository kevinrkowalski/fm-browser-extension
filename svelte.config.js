import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : '/fm-browser-extension'
		}
	}
};

export default config;
