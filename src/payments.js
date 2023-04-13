
const stripe = require('stripe')('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')


app.post('/webhook', async (req, res) => {
  const eventType = req.headers['stripe-event'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], 'your_stripe_webhook_secret');
  } catch (err) {
    console.log('Webhook error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'charge.succeeded') {
    const charge = event.data.object;

    // Send message to Firebase Cloud Messaging
    const message = {
      data: {
        title: 'Charge Successful',
        body: `Charge of ${charge.amount / 100} ${charge.currency.toUpperCase()} succeeded for ${charge.description}.`
      },
      topic: 'charges'
    };

    try {
      const response = await admin.messaging().send(message);
      console.log('Successfully sent message:', response);
    } catch (err) {
      console.log('Error sending message:', err);
    }
  }

  res.status(200).send('OK');
});
