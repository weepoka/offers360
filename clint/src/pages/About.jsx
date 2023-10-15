import React, { useEffect, useState } from "react";
import axios from "../components/Axios";
const About = () => {
  const [about, setAbout] = useState([]);
  const fatchData = async () => {
    let data = await axios.get("api/about/getabout");
    setAbout(data.data);
  };
  useEffect(() => {
    fatchData();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      {about.map((item) => (
        <>
          <header className="bg-[#ff63484c] md:py-6 py-2 text-center">
            <h1 className="md:text-3xl text-xl font-semibold">About Us</h1>
            <p className="mt-2 px-12 text-base">{item?.about}</p>
          </header>

          <section className="py-16">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="md:text-3xl text-xl font-semibold">
                  Our Mission
                </h2>
                <p className="mt-4 text-gray-600 text-base">{item?.mission}</p>
              </div>
            </div>
          </section>
        </>
      ))}

      {/* Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">Our Values</h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Value 1 */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <i className="fas fa-heart text-3xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mt-2">Customer-Centric</h3>
                <p className="mt-4 text-gray-600">
                  We prioritize our customers and their satisfaction above all
                  else.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <i className="fas fa-handshake text-3xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mt-2">Partnerships</h3>
                <p className="mt-4 text-gray-600">
                  We foster strong relationships with our affiliate partners.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <i className="fas fa-globe text-3xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mt-2">Global Reach</h3>
                <p className="mt-4 text-gray-600">
                  Our platform connects shoppers and affiliates worldwide.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <i className="fas fa-users text-3xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mt-2">Diverse Team</h3>
                <p className="mt-4 text-gray-600">
                  We embrace diversity and value the uniqueness of our team
                  members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
