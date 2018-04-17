/**
 * Created by levy on 2018/4/17.
 */
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
