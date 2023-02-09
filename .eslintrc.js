module.exports = {
   settings: {
       'import/resolver': {
           node: {
               extensions: ['.js', '.vue', '.ts', '.d.ts'],
           },
           alias: {
               extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
               map: [
                   ['@', './src'],
               ],
           },
       },
   },
}