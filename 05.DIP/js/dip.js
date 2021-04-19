const makeS3Storage = require("./makeS3Storage");

const regularStrorage = makeS3Storage("regularRecordings");
const backupStorage = makeS3Storage("backup");

const RecordingSchema = require("./recordingSchema");
const Rec = new RecordingSchema({ filePath: "blabla" });
console.log({ RecordingSchema });

Rec.getUrl(regularStrorage);
Rec.getUrl(backupStorage);
