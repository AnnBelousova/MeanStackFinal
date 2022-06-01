import React from "react";
import "../cssFiles/help.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Help = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios
      .get("http://localhost:5001/api/help", config)
      .then((payload) => setState(payload.data))
      .catch((e) => console.error(e));
  }, []);
  if (state.length == 0) {
    return <div> Loading ...</div>;
  }
  return (
    <div className="faq_area section_padding_130" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div
              className="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <h3>
                <span>Frequently </span> Asked Questions
              </h3>

              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="accordion faq-accordian" id="faqAccordion">
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: " visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingOne">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {
                      state.find((d) => d.key === "When will my order ship?")
                        .key
                    }

                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      {
                        state.find((d) => d.key === "When will my order ship?")
                          .description
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",

                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingTwo">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    {
                      state.find(
                        (d) =>
                          d.key ===
                          "Do you accept backorders for items that are out of stock?"
                      ).key
                    }

                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      {
                        state.find(
                          (d) =>
                            d.key ===
                            "Do you accept backorders for items that are out of stock?"
                        ).description
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingThree">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    {state.find((d) => d.key === "Can I cancel my order?").key}

                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      {
                        state.find((d) => d.key === "Can I cancel my order?")
                          .description
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",

                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingFour">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    {
                      state.find((d) => d.key === "How do I exchange an item?")
                        .key
                    }

                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseFour"
                  aria-labelledby="headingFour"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      {
                        state.find(
                          (d) => d.key === "How do I exchange an item?"
                        ).description
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",

                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingFive">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    {
                      state.find((d) => d.key === "How do I return an item?")
                        .key
                    }

                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseFive"
                  aria-labelledby="headingFive"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      {
                        state.find((d) => d.key === "How do I return an item?")
                          .description
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",

                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingSix">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    {
                      state.find((d) => d.key === "How do I track my order?")
                        .key
                    }

                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseSix"
                  aria-labelledby="headingSix"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      {
                        state.find((d) => d.key === "How do I track my order?")
                          .description
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
