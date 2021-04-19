const { S3Client } = require("@aws-sdk/client-s3");

// storage
// load
// save
const s3Client = new S3Client({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports = function makeS3Storage(bucketName) {
  return {
    load: (key) => {
      s3Client.getSignedUrl("getObject", {
        Bucket: bucketName,
        Key: key,
      });
    },
    save: (key, data) => {
      s3Client.putObject({
        Bucket: isForBack ? "myBackup" : bucketName,
        Key: key,
        Body: data,
      });
    },
  };
};
