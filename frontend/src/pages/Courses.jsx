import { useEffect, useState } from "react";
import CourseTiles from "../componets/CourseTiles";
import { useAuthContext } from "../hooks/useAuthContext";
import { useChapterContext } from "../hooks/useChapterContext";
import { Link } from "react-router-dom";
import Popup from "../componets/teach/AddnewCours";
import ClassIcon from "@mui/icons-material/Class";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Swal from "sweetalert2";
import { ProgressBar } from "react-loader-spinner";
import Layout from "../componets/Layout/Layout";

const Courses = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { chapters, dispatch } = useChapterContext();
  const { user } = useAuthContext();
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchChapters = async () => {
      const response = await fetch("http://localhost:4000/api/chapters/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CHAPTERS", payload: json });
        setLoading(false);
      }
    };
    if (user) {
      fetchChapters();
    }
  }, [dispatch, user]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!user) {
      setError("you must be logged in");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("img", file);

    const response = await fetch("http://localhost:4000/api/chapters/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    if (response.ok) {
      setTitle("");
      setFile("");
      setButtonPopup(false);
      setError(null);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Course Added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      console.log("new chapter added", json);
      dispatch({ type: "CREATE_CHAPTERS", payload: json });
    }
  };

  return (
    <Layout>
      <div className="flex  flex-col justify-between md:mx-14">
        <h1 className="md:ml-4 ml-2 md:mt-10 mt-6 md:mb-4  text-md md:text-xl font-black  flex">
          {" "}
          <ClassIcon className="mx-2 my-auto" />
          Your Courses
        </h1>
        <div className="flex text-white  my-6" role="group">
          <button
            type="button"
            onClick={() => setButtonPopup(true)}
            className="inline-flex items-center lg:px-32 px-2  lg:py-4 md:py-4 py-1 mx-1  md:mx-4  rounded-xl drop-shadow-md md:text-sm text-xs    font-medium  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
          >
            <LibraryAddIcon className="mr-2" /> Add New Course
          </button>
          <Link
            to="/profile"
            type="button"
            className="inline-flex items-center lg:px-32 px-2 lg:py-4 md:py-4  py-1 mx-1  md:mx-4  rounded-xl drop-shadow-md  md:text-sm text-xs   font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <AccountBoxIcon className="mr-2" />
            Profile
          </Link>

          <button
            type="button"
            class="inline-flex items-center lg:px-32 px-2 lg:py-4 md:py-4 py-1 mx-1   rounded-xl md:mx-4 drop-shadow-md md:text-sm text-xs  font-medium  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4 mr-2 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Downloads
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap md:mx-11 ">
        <h1></h1>
        {chapters &&
          chapters.map((chapter) => (
            <CourseTiles key={chapter._id} chapter={chapter} />
          ))}
      </div>
      <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className=" flex items-center justify-center relative ">
            {loading ? (
              <div className="flex flex-col">
                <ProgressBar
                  height="100"
                  width="200"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#000000"
                  barColor="#07fc03"
                />
                <h1 className="text-4xl font-black mb-4">UPLOADING..</h1>
              </div>
            ) : (
              <form
                className="flex flex-col"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2 className="mx-auto text-xl font-black  ">Add new Course</h2>
                <label className="mt-10">Course Name</label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="mb-6 w-80  bg-gray-200 border rounded-xl border-slate-600"
                  placeholder="Enter Course Name"
                />
                <label className="mt-4">Course Thumbnail</label>
                <div className="flex items-center justify-center bg-grey-lighter">
                  <label className="w-80  flex  items-center px-16 py-3 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg
                      className="w-6 h-6 mr-4 "
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className=" text-base leading-normal">
                      Select a file
                    </span>
                    <input
                      className="hidden"
                      type="file"
                      name="profileImage"
                      accept="image/png, image/jpeg"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
                <button className=" mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg py-2">
                  Add Course
                </button>
                {error && <div>{error}</div>}
              </form>
            )}
          </div>
        </Popup>
      </div>
    </Layout>
  );
};

export default Courses;
