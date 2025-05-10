module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: 'auto',
      targets: {
        browsers: ['last 2 versions', 'not dead']
      }
    }],
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
};
