const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema({
  filePath: { type: String, required: true },
});

RecordingSchema.methods.getUrl = function (storage) {
  return storage.load(this.filePath);
};
RecordingSchema.methods.persist = function (storage, data) {
  return storage.save(this.filePath, data);
};

module.exports = mongoose.model("Recording", RecordingSchema);

// recording depends on s3Client
// both depend on an abstraction
