module.exports = {
    // Project deployment base 
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/ 
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at 
    // https://www.foobar.com/my-app/ 
    // then change this to '/my-app/' 
    baseUrl: '/', 
    
    // where to output built files 
    // 打包后的输出目录 
    outputDir: 'dist', 
    
    //目录下生成的静态资产（JS、CSS、IMG、字体）
    assetsDir:'static',
    
    // whether to use eslint-loader for lint on save. 
    // 保存时是不是用eslint-loader 来lint 代码 
    lintOnSave: true, 
  
      
    // configure webpack-dev-server behavior 
    // Webpack dev server 
      devServer: { 
          open: process.platform === 'darwin', 
          host: '0.0.0.0', 
          port: 8050, 
          https: false, 
          hotOnly: false, 
          // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy 
          proxy: {
            '/api': {
                target: 'http://test.jihelife.com',
                changeOrigin: true,
                pathRewrite:  {
                    '^/api': ''
                  }
              }
          }, // string | Object 
          before: app => {} 
      }, 

  }