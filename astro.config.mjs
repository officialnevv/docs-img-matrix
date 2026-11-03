// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Image Processing Using Matrices',
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
			},
			sidebar: [
				{
					label: 'Test',
					translations: { ar: 'اختبار' },
					items: [
						{ slug: 'test-math' },
					],
				},
			],
			customCss: [
				'@fontsource/cairo/400.css',
				'@fontsource/cairo/700.css',
				'./src/styles/custom.css',
				'katex/dist/katex.min.css',
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
