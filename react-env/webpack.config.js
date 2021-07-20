const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {

    return {

        entry: './src/index.js',
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.min.js',
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: {
                index: '/'
            },
            publicPath: '/',
            host: "localhost"
        },
        module: {
            rules: [
                {
                    test: /\.js$|jsx/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',
                            '@babel/react', {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }]
                    }
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ])
        ]
    }
}
  
