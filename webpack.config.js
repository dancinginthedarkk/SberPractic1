module.exports = {
    module: {
        rules: [
            { test: /\.jpeg$/, type: 'asset/resource' },
            { test: /\.jpg$/, type: 'asset/resource' },
            { test: /\.png$/, type: 'asset/resource' },
            { test: /\.svg$/, type: 'asset/resource' }
        ]
    }
};
