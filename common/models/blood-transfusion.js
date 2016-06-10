'use strict';
var app = require('../../server/server');

module.exports = function(BloodTransfusion) {
  // BloodTransfusion.createFakeData = function (faker) {
  //   return null;
  // };

  BloodTransfusion.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      app.models.Twilio.send({
        type: 'sms',
        to: ctx.instance.donor.phone,
        from: process.env.TWILIO_FROM,
        body: 'A instituição X tem a felicidade de informar que o sangue que ' +
              'você  doou ajudou a salvar mais uma vida! 😄\n' +
              'Agracemos muito pela sua ação de bondade e desejamos muita saúde e paz.'
      }, function(err, resp) {
        if (err) next(err);
        else next(null, resp);
      });
    }
  });
}
