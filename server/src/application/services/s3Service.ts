// src/services/s3Service.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const generatePresignedUrl = async (fileType: string, folder: string) => {
  const fileName = `${folder}/${uuidv4()}.${fileType.split("/")[1]}`;
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileName,
    ContentType: fileType,
  });

  const url = await getSignedUrl(s3, command ); // valid for 1 min
  return { url, key: fileName };
};
