module.exports =  {
  plugins: [
    require('postcss-smart-import')(),
    require('postcss-apply')(),
    require('postcss-responsive-type')(),
    require('postcss-cssnext')({
      browsers: [
        '> 15% in NL',
        'Chrome >= 49',
        'Explorer >= 10',
        'Edge >= 12',
        'Firefox >= 47',
        'Safari >= 8'
      ]
    }),
    require('postcss-flexbugs-fixes')()
  ]
};
