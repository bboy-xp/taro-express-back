module.exports = app => {
  const mongoose = app.mongoose;
  const CodeSchema = new mongoose.Schema({
    openid: { type: String },
    name: { type: String },
    phone: { type: Number },
    code: { type: String },
    isQuestion: { type: Boolean }

  }, {
      timestamps: true,
    });

  return mongoose.model('Code', CodeSchema);
}