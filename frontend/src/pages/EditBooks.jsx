import React, { useState, useEffect } from "react";
import Backbutton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate ,useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishyear, setPublishyear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar}=useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-server-eight-eta.vercel.app/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishyear(res.data.publishyear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        alert("there ahas been an error ,see console formore information");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    // console.log("Data to be sent:", { title, author, publishyear });

    setLoading(true);

    axios
      .put(`https://book-store-server-eight-eta.vercel.app/books/${id}`, data)
      .then((res) => {

        setLoading(false);
        enqueueSnackbar('Book Edited successfully',{variant:'success'});
        // console.log("response from server:",res.data);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error',{variant:'error'});
        // alert("An error happened ,Please check the console");
        console.log("error:", error);
      });
  };
  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto ">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title || ""} // Ensure a default empty string
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author || ""} // Ensure a default empty string
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={publishyear || ""} // Ensure a default empty string
              onChange={(e) => setPublishyear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBooks;
