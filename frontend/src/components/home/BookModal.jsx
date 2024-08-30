import { AiOutlineClose } from "react-icons/ai";
7;
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {

  console.log('Publish Year:', `'${book.publishYear}'`);  // Check for any extra spaces

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg text-black">
          {book?.publishYear || "Year Not Available"}
        </h2>

        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          reiciendis, corporis, exercitationem maiores sint ipsum esse iure
          optio laboriosam dolorem rem tempora repellat! Sit totam omnis dolore
          dignissimos in harum! Numquam odit totam, voluptates asperiores
          molestiae explicabo at quis dolorem placeat veniam quos animi nisi
          atque voluptas rerum voluptate tempora eius iusto nobis aspernatur
          perspiciatis porro optio.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
