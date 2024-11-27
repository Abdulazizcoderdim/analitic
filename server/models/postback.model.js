const postbackSchema = new mongoose.Schema(
  {
    name: { type: String, default: '' },
    url: { type: String, required: true },
    method: { type: String, enum: ['GET', 'POST'], required: true },
    events: {
      registration: { type: Boolean, default: false },
      firstPayment: { type: Boolean, default: false },
      subscription: { type: Boolean, default: false },
      unsubscribe: { type: Boolean, default: false },
      payment: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const Postback = mongoose.model('Postback', postbackSchema);

module.exports = Postback;
