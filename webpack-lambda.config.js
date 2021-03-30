module.exports = function (options, webpack) {
    return {
        ...options,
        entry: '/functions/lambda.ts',
        output:{
            filename : 'lambda.js'
        }
    }
}