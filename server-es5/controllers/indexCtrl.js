'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  index: function index(req, res) {
    var indexHtmlPath = _path2.default.join(__dirname, '../../public/index.html');
    res.sendFile(indexHtmlPath);
  }
};