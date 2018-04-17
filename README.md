**webpack4 快速入门**

**webpack4默认不需要配置文件！**

第一步： 创建一个新目录并进入它

    enter code here
    mkdir webpack4DEmo
    cd webpack4Demo

第二步：初始化package.json

    npm init -y


第三步：安装webpack包

    sudo npm install webpack --save-dev
    sudo npm install webpack-cli --save-dev

第四步 构建启动脚本

webpack4的一大特性是引入生产模式和开发模式

> development: 用于开发的配置文件，用于定义webpack dev服务器和其他东西
> production: 用于生产的配置文件，用于定义UglifyJSPlugin和sourcemaps等

我们可以在package.json中添加一个构建脚本

      "scripts": {
	    "prod": "webpack --mode production",
	    "dev": "webpack --mode development"
	   }


第五步 创建入口文件index.js

从webpack4开始，不需要定义入口点，它磨人会将./src/index.js作为默认值！
我们在目录src中创建index.js

    const s = () => {
     console.log("hello, webpack");
	};
	s();


第六步 见证奇迹的时刻

    npm run dev


补充1: babel编译----轻松使用ES6/7语法

安装 babel-preset-env 

     npm install babel-preset-env --save-dev

创建.babelrc文件

    {
		"presets": [
			[
			"env",{"modules": false}
			]
		]
	}

补充2: module配置


安装

    npm install  --save-dev css-loader
    npm install  --save-dev style-loader

 
```
module.exports = {
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}
```


完整代码已上传github中：https://github.com/levyGril/webpack4Demo.git
