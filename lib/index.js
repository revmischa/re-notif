'use strict';

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _Notifs = require('./components/Notifs');

var _Notifs2 = _interopRequireDefault(_Notifs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Notifs: _Notifs2.default,
  actions: actions,
  reducer: _reducer2.default
};