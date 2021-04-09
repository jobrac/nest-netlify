module.exports = function (options, webpack) {
    return {
        ...options,
        entry: '/functions/lambda.ts',
        target : "node",
        output:{
            filename : 'lambda.js',
            libraryTarget: 'umd'
        }
    }
}