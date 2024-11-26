import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN stack</span>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.12DNU8vi_dQbIkNhTCnMSwHaE8&pid=Api&P=0&h=180"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">GenVision</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/rj-trip/GenVision"
                    // href="https://github.com/techinfo-youtube/ecommerce-app-2023  "
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.hk4CY1j_B_dhHDhkJXN4FgHaFS&pid=Api&P=0&h=180"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>

                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Mongodb</span>

                  <span className="card-detail-badge">Express.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Wanderlust</h5>
                  </div>
                  <a
                    className="ad-btn"
                    // href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                    href=" https://github.com/rj-trip/Wanderlust"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.h7_k9_I7rRjfYgxCu0X-iwHaEi&pid=Api&P=0&h=180"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">React MUI</span>

                  {/* <span className="card-detail-badge">NoSQL</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">FeastFinder</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/rj-trip/FeastFinder"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
