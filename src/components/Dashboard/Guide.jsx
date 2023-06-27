import React from "react";
import { Helmet } from "react-helmet-async";

const Guide = () => {
  return (
    <div>
      <Helmet>
        <title>Guide - Skill Studio</title>
      </Helmet>
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto ">
          <div className=" rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">
              Responsive Design for Frontend Developers
            </h3>
            <p>
              In today's mobile-centric world, responsive design is crucial for
              providing a seamless user experience across different devices and
              screen sizes. Here are some key principles and techniques to
              consider:
            </p>
            <div className="carousel mt-4">
              <div className="carousel-inner overflow-hidden">
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Start with a mobile-first approach, prioritizing essential
                    content and progressively enhancing for larger screens.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Use fluid grids and relative units (e.g., percentages) for
                    layout components.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Ensure images scale properly and consider using the{" "}
                    <code>srcset</code> attribute and{" "}
                    <code>&lt;picture&gt;</code> element.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Employ media queries to apply different styles based on
                    screen width.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Utilize CSS Flexbox and CSS Grid for flexible and dynamic
                    layouts.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Include the viewport meta tag to ensure proper rendering on
                    mobile devices.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Regularly test and debug your website on different devices
                    and browsers.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Optimize performance by minifying code, optimizing images,
                    and enabling caching.
                  </p>
                </div>
                <div className="carousel-item card bg-slate-800 p-8 my-8 text-white">
                  <p className="text-lg mb-4">
                    Ensure accessibility by following guidelines and using
                    semantic HTML.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4">
              Remember, responsive design is an ongoing process. Continuously
              test, iterate, and improve your website's responsiveness to
              provide the best possible user experience across devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
