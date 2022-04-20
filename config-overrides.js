const { override, adjustStyleLoaders } = require("customize-cra");

module.exports = override(
        // 配置指定文件为sass全局文件，可以不用导入就可以使用
        adjustStyleLoaders(rule => {
                if (rule.test.toString().includes('scss')) {
                        rule.use.push({
                                loader: require.resolve('sass-resources-loader'),
                                options: {
                                        resources: [
                                                './src/scss/_base.scss',
                                        ]
                                }
                        });
                }
        })
);

const path = require('path');
 
const paths = require("react-scripts/config/paths");
paths.appBuild = path.join(path.dirname(paths.appBuild), "../Six_One_Capital/public");
// config.output.path = path.join(path.dirname(config.output.path), "dist");