module.exports = window.location.hash
  ? require('./v2.3.0')
  : require('./v2.1.0');
