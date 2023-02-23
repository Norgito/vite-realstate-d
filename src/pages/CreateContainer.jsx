import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineDriveFileRenameOutline,
  MdCloudUpload,
  MdDelete,
  MdAttachMoney,
  MdBed,
  MdOutlineBathtub,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "../components/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../utils/firebaseConfig";
import { saveItem } from "../utils/firebaseFunctions";
import Image from "../assets/img/house-banner.png";


const CreateContainer = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [type, setType] = useState("");
  const [surface, setSurface] = useState("");
  const [list, setList] = useState("");
  const [id, setId] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Successfully uploaded");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (
        !name ||
        !address ||
        !country ||
        !price ||
        !bedrooms ||
        !bathrooms ||
        !type ||
        !surface ||
        !list ||
        !id
      ) {
        setFields(true);
        setMsg("Required fields cannot be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          name: name,
          address: address,
          country: country,
          price: price,
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          type: type,
          surface: surface,
          list: list,
          image: imageAsset,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data saved successfully");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  };

  const clearData = () => {
    setName("");
    setImageAsset(null);
    setAddress("");
    setCountry("");
    setPrice("");
    setBedrooms("");
    setBathrooms("");
    setType("");
    setSurface("");
    setList("");
    setId("");
    setCategory("Select Category");
  };

  return (
    <>
      <div className="w-full relative items-center justify-center">
      <img src={Image} alt="" className="inset-0 absolute " />
      </div>
    <div className="w-full z-10 min-h-screen flex justify-center items-center pt-16">
      
      <div className="z-50 w-[90%] md:w-[75%] border backdrop-blur-sm bg-white/50 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg  ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineDriveFileRenameOutline className="text-xl text-white" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="House name..."
              className="w-full h-full text-md bg-transparent outline-none border-none placeholder:text-gray-200 text-white text-lg "
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className=" text-white text-2xl" />
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className=" text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className=" text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdBed className=" text-gray-700 text-2xl" />
            <input
              type="number"
              required
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              placeholder="Bedrooms"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineBathtub className=" text-gray-700 text-2xl" />
            <input
              type="number"
              required
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              placeholder="Bathrooms"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className="w-full ">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md gap-2 bg-gray-100"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-gray-700 value={item.urlParamName}"
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-fullh-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-fullh-full flex flex-col items-center justify-center gap-2 ">
                      <div className="text-gray-400 hover:text-gray-700 flex flex-col items-center justify-center">
                        <MdCloudUpload className="text-3xl" />
                        <p>Upload Image</p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  {" "}
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploadled pic"
                      className="w-full h-full object-cover "
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdBed className=" text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Type"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineBathtub className=" text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              placeholder="Surface"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineBathtub className=" text-gray-700 text-2xl" />
            <input
              type="number"
              required
              value={list}
              onChange={(e) => setList(e.target.value)}
              placeholder="List"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineBathtub className=" text-gray-700 text-2xl" />
            <input
              type="number"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
      </div>
      </>
  );
};

export default CreateContainer;
