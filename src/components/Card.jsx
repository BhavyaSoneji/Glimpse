import React from "react";
import { Download } from "lucide-react";

function Card({ value }) {
  const downloadImage = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Download failed", err);
  }
};
  return (
    <>
      <a href={value.url} className="text-white rounded-xl overflow-auto">
        <img className="h-60 w-66 object-cover" src={value.download_url}></img>
      </a>
      <div className="flex flex-row justify-between font-medium">
        <h2>{value.author}</h2>
          <Download className="cursor-pointer" onClick={()=>{downloadImage(value.download_url),"Image.png"}}/>
      </div>
    </>
  );
}

export default Card;
