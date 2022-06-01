import React from "react";
import "../cssFiles/policy.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Policy = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios
      .get("http://localhost:5001/api/policy", config)
      .then((payload) => setState(payload.data))
      .catch((e) => console.error(e));
  }, []);

  if (state.length == 0) {
    return <div> Loading ...</div>;
  }
  return (
    <div class="policy">
      <div class="container User-information">
        <div class="tncsection">
          <h1>{state.find((d) => d.key === "Terms and Conditions").key}</h1>
          <blockquote>
            {state.find((d) => d.key === "Terms and Conditions").description}
          </blockquote>
        </div>

        <div class="row">
          <div class="column">
            <div class="card">
              <div class="container">
                <h2>{state.find((d) => d.key === "Cookies").key}</h2>
                <p>{state.find((d) => d.key === "Cookies").description}</p>
                <blockquote>
                  {state.find((d) => d.key === "blockquote").description}
                </blockquote>

                <h2>{state.find((d) => d.key === "Content Liability").key}</h2>
                <p>
                  {state.find((d) => d.key === "Content Liability").description}
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="container">
                <h2>{state.find((d) => d.key === "Disclaimer").key}</h2>
                <p>{state.find((d) => d.key === "Disclaimer").description}</p>
                <ul>
                  <li>
                    {
                      state.find((d) => d.key === "disclaimerListOne")
                        .description
                    }
                  </li>{" "}
                  <li>
                    {
                      state.find((d) => d.key === "disclaimerListTwo")
                        .description
                    }
                  </li>
                  <li>
                    {
                      state.find((d) => d.key === "disclaimerListThree")
                        .description
                    }
                  </li>
                  <li>
                    {
                      state.find((d) => d.key === "disclaimerListFour")
                        .description
                    }
                  </li>
                </ul>
                <p>
                  {state.find((d) => d.key === "disclaimerTwo").description}
                </p>

                <p>
                  {state.find((d) => d.key === "disclaimerLast").description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
