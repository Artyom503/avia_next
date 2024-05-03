module.exports = {
    async rewrites() {
        return [
            {
                source: '/static/:path*',
                destination: '/public/static/:path*',
            },
        ];
    },
};
