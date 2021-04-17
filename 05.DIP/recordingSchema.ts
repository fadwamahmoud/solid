const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema({
  filePath: { type: String, required: true },
});

RecordingSchema.methods.getUrl = function (storage: Storage) {
  return storage.load(this.filePath);
};
RecordingSchema.methods.persist = function (storage: Storage, data: Buffer) {
  return storage.save(this.filePath, data);
};
