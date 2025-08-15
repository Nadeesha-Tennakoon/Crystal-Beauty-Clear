import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lviitsvnyfsxzbiijfwr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2aWl0c3ZueWZzeHpiaWlqZndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTE3ODcsImV4cCI6MjA3MDU2Nzc4N30.0IJWoI_HcIpbptrqpwim2WEd9j3ZR5gmpkaJMk2-VMM"
);

export default function mediaUpload(file) {
  const promise = new Promise((resolve, reject) => {
    if (file == null) {
      reject("No file selected");
    }
    const timeStamp = new Date().getTime();
    const newFileName = timeStamp + file.name;

    supabase.storage
      .from("images")
      .upload(newFileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then(() => {
        const url = supabase.storage.from("images").getPublicUrl(newFileName)
          .data.publicUrl;
        resolve(url);
      })
      .catch((error) => {
        console.log(error);
        reject("File upload failed");
      });
  });
  return promise;
}
