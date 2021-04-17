const mongoose = require("mongoose");
const S3 = require("aws-sdk/clients/s3");

const s3Client = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const RecordingSchema = new mongoose.Schema({
  filePath: { type: String, required: true },
});

RecordingSchema.methods.getUrl = () => {
  s3Client.getSignedUrl("getObject", {
    Bucket: "myBucket",
    Key: this.filePath,
  });
};
RecordingSchema.methods.persist = (data, isForBack) => {
  s3Client.putObject({
    Bucket: isForBack ? "myBackup" : "myBucket",
    Key: this.filePath,
    Body: data,
  });
};

// user => upload => create a backup myBackup bucketName
// filename => postfixed (backup)

RecordingSchema.methods.persistBackup = function (data) {
  return s3Client.putObject({
    Bucket: "myRecordingsBackupBucket",
    Key: `${this.filePath}(backup)`,
    Body: data,
  });
};

// dependency inversion => both depend on an abstraction
