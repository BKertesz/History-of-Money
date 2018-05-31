const config = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    path: `${__dirname}`,
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;
