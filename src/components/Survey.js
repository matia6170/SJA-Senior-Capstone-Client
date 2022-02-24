import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/survey.css";
import { useNavigate } from "react-router-dom";

export default function Survey() {
  const backend = "https://matia-senior-capstone.herokuapp.com/api/surveys"
  const localBackend ="http://localhost:8082/api/surveys"

    const navigate = useNavigate();

  const [survey, setSurvey] = useState({
    ip: "",
    name: "(optional)",
    q1: 5,
    q2: 1,
    q3: true,
  });

  useEffect(() => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      setSurvey((prev) => ({ ...prev, ip: res.data.IPv4 }));
    }).catch(err=>{
        setSurvey((prev) => ({ ...prev, ip: "err" }));
    });
  }, []);

  const parseBool = (str) => (str === "true" ? true : false);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(backend, survey)
      .then((res) => {
        setSurvey({
          q1: 5,
          q2: 1,
          q3: true,
        });
        alert("Thank You!");
        navigate("/");
      })
      .catch((err) => {
        alert("Error posting survey data!");
        console.log("Error posting survey data!");
      });

  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput"><b>Name</b></label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="(optional)"
            onChange={(e) =>
              setSurvey((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="q1FormControlSelect1">
            <b>Question 1.</b> <br />
            How well do you think you know COVID government guidelines(wearing
            masks, washing hands, etc...)? (after simulation)
          </label>
          <select
            className="form-control sel"
            id="q1FormControlSelect1"
            placeholder={5}
            value={survey.q1}
            onChange={(e) =>
              setSurvey((prev) => ({ ...prev, q1: parseInt(e.target.value) }))
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="q2FormControlSelect1">
            <b>Question 2</b>
            <br />
            From a scale from 1 to 5, how well do you think the students are
            following the COVID government guidelines?(wearing masks, washing
            hands, etc...)(Including outside of school)(after simulation)
          </label>
          <select
            className="form-control sel"
            id="q2FormControlSelect1"
            placeholder={1}
            value={survey.q2}
            onChange={(e) =>
              setSurvey((prev) => ({ ...prev, q2: parseInt(e.target.value) }))
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="q3FormControlSelect1">
            <b>Question 3</b> <br /> Do you think your understanding/awareness of government guidelines for COVID-19 has increased after the simulation?
          </label>
          <select
            className="form-control sel"
            id="q3FormControlSelect1"
            placeholder="true"
            value={survey.q3}
            onChange={(e) =>
              setSurvey((prev) => ({ ...prev, q3: parseBool(e.target.value) }))
            }
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline-primary"
        ></input>
      </form>
    </div>
  );
}
