class Storage {
    constructor(load, persist){
        this.load = load;
        this.persist = persist;

    }
    
}
const storage = new Storage();

RecordingSchema.methods.getUrl = function(load, persist) {
    return load(this.filePath);
  };


  // this is the storage obj
  module.exports = function makeS3Storage(bucketName) {
  return {
    load: (key) => s3Client.getSignedUrl('getObject', {
      Key: key,
      Bucket: bucketName
    }),

    save: (key, data) => s3Client.putObject({
      Bucket: bucketName,
      Key: key,
      Body: data
    });
  };
}

const regularStrorage = makeS3Storage('regularRecordings');
const backupStorage = makeS3Storage('backup')

backupStorage.save()