const { defineConfig } = require("@vue/cli-service");
const os = require("os");
let path = require("path");
// cpu核数
const threads = os.cpus().length;
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        host: "0.0.0.0",
        hot: true,
        // 代理配置
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3000/api/",
                pathRewrite: { "^/api": "" },
            }
        }
    },
    configureWebpack: {
        cache: {
            type: "filesystem" // 使用文件缓存，加速二次构建
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        }
    },
    chainWebpack: (config) => {
        // 多核编译
        config.module
            .rule("js")
            .use("thread-loader")
            .loader("thread-loader")
            .options({
                workers: threads
            })
            .end();
        config.module
            .rule("vue")
            .use("thread-loader")
            .loader("thread-loader")
            .options({
                workers: threads
            })
            .end();
        config.module
            .rule("css")
            .use("thread-loader")
            .loader("thread-loader")
            .options({
                workers: threads
            })
            .end();
    }

});
