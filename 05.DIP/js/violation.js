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

// user => upload => create a backup myBackup bucketName
// filename => postfixed (backup)
RecordingSchema.methods.persist = (data, isForBackup) => {
  s3Client.putObject({
    Bucket: isForBackup ? "myBackup" : "myBucket",
    Key: isForBackup ? `${this.filePath}(backup)` : this.filePath,
    Body: data,
  });
};

// high level depends on low level => both depend on abstraction
// operations => getsignedurl from storage , put file to storage

RecordingSchema.methods.persistBackup = function (data) {
  return s3Client.putObject({
    Bucket: "myRecordingsBackupBucket",
    Key: `${this.filePath}(backup)`,
    Body: data,
  });
};

// dependency inversion => both depend on an abstraction
