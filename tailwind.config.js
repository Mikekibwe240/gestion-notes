module.exports = {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './vendor/filament/**/*.blade.php',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb', // bleu
                    light: '#3b82f6',
                    dark: '#1e40af',
                },
                secondary: {
                    DEFAULT: '#f59e42', // orange
                },
                accent: {
                    DEFAULT: '#10b981', // vert
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            borderRadius: {
                xl: '1rem',
            },
            boxShadow: {
                card: '0 4px 24px 0 rgba(0,0,0,0.08)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
