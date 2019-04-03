const path = require('path');
module.exports = {
    mode:'production',//模式 默认两种模式 production development 不设置默认production
    entry:'./src/index.js',//打包入口
    output:{//出口
        filename:'bundle.js',

        //如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
        //这对于需要拆分成多个文件的复杂配置是非常有用
        path: path.resolve(__dirname, 'dist')//将相对路径转换为绝对路径 path 后跟绝对路径
    },
    module:{
        rules:[
            {
                //webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
                //在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            //加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'

                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]

            }

        ]
    }

};