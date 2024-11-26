import React from "react";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { GiSteamLocomotive } from "react-icons/gi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="july-2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<GiSteamLocomotive />}
            >
              <h3 className="vertical-timeline-element-title">Intenship</h3>
              <h4 className="vertical-timeline-element-subtitle">
                BLW, Varansi
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Oct-Nov,2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Web developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Oasis infobyte
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Aug-Sept,2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaJava />}
            >
              <h3 className="vertical-timeline-element-title">
                Java Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Coderscave</h4>
              <p>Creative Direction,Problem solving, Project Management</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
