

var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件
  output: { // 指定输出选项
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'bundle.js' // 指定输出文件的名称
  },
  plugins: [ // 所有webpack  插件的配置节点
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' // 设置生成的内存页面的名称
    }),new VueLoaderPlugin()
  ],
  module: { // 配置所有第三方loader 模块的
    rules: [ // 第三方模块的匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: [{
        loader:'url-loader',
        options:{
        limit:8192,
        name:'images/[name]-[hash:8].[ext]',
        // publicPath:'./images'
      }
      }]}, // 处理css中的图片路径的 loader
      // { test:/\.html$/,use:'html-loader'},
      // {test:/\.(htm|html)$/,use:'html-withimg-loader'},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
      { test: /\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
      // {test:/\.(jpg|png)$/,use: {loader: "file-loader",options: {
      //   outputPath: "images/",
      //   name: "[name].[hash:8].[ext]",//8表示截取 hash 的长度
      //   useRelativePath: true//这个必须与 outputPath 结合使用才可以处理 css 中的引入的图片
      //   }
      // }}
    ]
  },
  resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
      // "vue$": "vue/dist/vue.js"
    }
  }
}