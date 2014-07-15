var Rapportive = require('./rapportive');
var duplex     = require('duplex');

module.exports = function () {
  var rcli = new Rapportive();
  var ps = duplex()
        .on('_data', function (data) {
          rcli.get_profile_no_rate_limit(data.toString().trim(), function (person) {
            ps._data(JSON.stringify(person));
          });
        });
  return ps;
};
