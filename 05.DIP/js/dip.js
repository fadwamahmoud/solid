const regularStrorage = makeS3Storage("regularRecordings");
const backupStorage = makeS3Storage("backup");
const RecordingSchema = require("./recordingSchema");

RecordingSchema.getUrl(regularStrorage);
RecordingSchema.getUrl(backupStorage);
