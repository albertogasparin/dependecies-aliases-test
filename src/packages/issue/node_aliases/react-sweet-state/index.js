console.log('issue alias');

module.exports = window.location.hash
  ? require('react-sweet-state_latest')
  : require('react-sweet-state_220');
