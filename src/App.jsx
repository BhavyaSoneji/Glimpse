import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { LoaderCircle } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function App() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const bottom = useRef(null);
  const [loading, setLoading] = useState(false);
  const [zipLoading, setZipLoading] = useState(false);
  const [zipProgress, setZipProgress] = useState(0);

  const getData = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=15`
    );
    setUserData((prev) => [...prev, ...data]);
    console.log(userData);
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("in " + loading);

        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (bottom.current) {
      observer.observe(bottom.current);
    }
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    getData();
  }, [page]);

  let printUserData = "";

  if (userData.length > 0) {
    printUserData = userData.map((value) => {
      return (
        <div className="flex flex-col gap-2" key={value.id}>
          <Card value={value} />
        </div>
      );
    });
  }

  const downloadZip = async () => {
    setZipLoading(true);
    setZipProgress(0);


    try{
      const zip = new JSZip();
      const images = zip.folder("images");
  
      const value = userData.slice(0, 15);
  
      for (let i = 0; i < value.length; i++) {
        const progress = Math.round(((i + 1) / value.length) * 100);
        setZipProgress(progress);
  
        const resp = await fetch(value[i].download_url);
        const blob = await resp.blob();
        images.file(`image-${value[i].id}.jpg`, blob);

      }
  
      await zip.generateAsync({ type: "blob" }).then((zipblob) => {
        saveAs(zipblob, "image.zip");
        console.log("File Downloaded");
      });
    } catch(e){
      console.erro("Error downloading file..",e);
      
    } finally{
      setZipLoading(false);
      setZipProgress(0);
    }
  };

  return (
    <>
      <div className="w-full p-5 bg-black overflow-auto flex flex-col items-center gap-5 h-[90%]">
        <div className="flex w-full relative">
          <h1 className="text-gray-800 text-3xl font-bold bg-gray-200 p-3 rounded w-full ">
            Image Gallery
          </h1>
          <button
            className={`text-white bg-black rounded-xl absolute right-4 top-2 p-2 font-medium 
            ${zipLoading?`cursor-not-allowed active:bg-gray-800`:`cursor-pointer active:scale-98 `}
              `}
            disabled={zipLoading}
            onClick={() => {
              downloadZip();
            }}
          >
            {zipLoading ? "Preparing ZIP..." : "Download Zip (15 Images)"}
          </button>
        </div>
        
        {zipLoading && (
          <div className="w-full flex flex-col justify-center items-center bg-transparent">
            <div className="w-1/3 h-fit flex-col flex justify-center">
              <p className="text-white text-sm mb-1">
                Downloading images... {zipProgress}%
              </p>

              <div className="w-full bg-gray-700 rounded-full h-2 flex-row items-center">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${zipProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {!zipLoading && <div
          className={`text-white py-5 flex flex-wrap gap-5 justify-center
          ${zipLoading ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          {printUserData}
        </div>}
      </div>
      
      {!zipLoading && <div ref={bottom} className="flex justify-center pb-5">
        {loading && (
          <LoaderCircle
            color="white"
            className="animate-spin"
            size={30}
            strokeWidth={3}
          />
        )}
      </div>}
    </>
  );
}

export default App;
