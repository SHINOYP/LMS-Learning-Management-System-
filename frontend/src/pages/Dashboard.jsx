import React, { useEffect, useState } from "react";
import CourseTiles from "../componets/CourseTiles";
import { useAuthContext } from "../hooks/useAuthContext";
import { useChapterContext } from "../hooks/useChapterContext";
import hand from "../img/icons/hand.png";
import Slider from "react-slick";
import Layout from "../componets/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const Dashboard = () => {
  const { chapters, dispatch } = useChapterContext();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (user.role === "Admin") {
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
    } else {
      const fetchChapters = async () => {
        const response = await fetch("http://localhost:4000/api/chapters/st", {
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
    }
  }, [dispatch, user]);

  return (
    <Layout>
      <div className="flex flex-col mx-2 lg:mx-10">
        <div>
          <h1 className="mt-10 ml-4 font-bold text-gray-500 md:mt-10 ">
            Hello {user.name}, Welcome back{" "}
          </h1>
          <div className="flex -mt-6">
            <h2 className="flex items-center ml-4 text-2xl font-black md:text-4xl">
              Your DashBoard Today
            </h2>
            <img
              src={hand}
              className="w-16 mb-10 ml-0 md:mb-6"
              alt="not found"
            />{" "}
          </div>
        </div>
        <div className="my-1 md:my-6">
          <h2 className="my-4 ml-4 text-xl font-bold">Overview</h2>
          <div className="flex justify-start md:hidden ">
            <Slider
              dots={false}
              slidesToShow={1}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={3000}
              className="swiper"
            >
              {chapters?.map((chapter) => (
                <div key={chapter._id}>
                  <CourseTiles key={chapter._id} chapter={chapter} />
                </div>
              ))}
              {/* Add more slides here */}
            </Slider>
          </div>
          <div className="flex justify-start hidden md:flex ">
            <Slider
              dots={false}
              slidesToShow={4}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={3000}
              className="swiper"
            >
              {chapters?.map((chapter) => (
                <div key={chapter._id}>
                  <CourseTiles key={chapter._id} chapter={chapter} />
                </div>
              ))}
              {/* Add more slides here */}
            </Slider>
          </div>
        </div>

        <div>
          <h2 className="mt-6 ml-4 text-xl font-bold">
            {user.role === "Admin" ? "Your Courses" : "All Courses"}
          </h2>
          <div className="flex border rounded-xl flex-wrap  ml-0 md:-ml-6 w-full md:w-[85vw]">
            {chapters &&
              chapters.map((chapter) => (
                <CourseTiles key={chapter._id} chapter={chapter} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
