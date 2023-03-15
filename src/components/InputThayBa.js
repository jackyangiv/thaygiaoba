import classes from "./InputThayBa.module.css";
import React from "react";
import { useState } from "react";
import Image from "./thay-giao-ba-hoa-than-thanh-waifu-livestream-4.jpg";

const InputThayBa = (props) => {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setShowData(data.replace(/\s/g, ""));
    console.log("123");
    setData("");
  };
  const enteredInput = (event) => {
    console.log(event.target.value);
    setData(event.target.value);
  };
  console.log(showData);

  return (
    <div>
      <div className="container">
        <div class="position-relative">
          <img src={Image} alt="Snow"></img>

          <div class="position-absolute bottom-50 end-50">
            <div className={classes.center}>
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  onChange={enteredInput}
                  value={data}
                  placeholder="Em Phương fan từ Phan Thiết tặng Anh Trung <dán link vô nha>"
                />

                <div className="d-flex flex-row-reverse bd-highlight mt-2 me-5">
                  <button
                    type="submit"
                    className="btn me-3 fw-bold text-white bg-primary"
                  >
                    CLICK VÔ ĐÂY ANH TRUNG
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-3">
              <a
                className="text-danger h5 fw-bold"
                target="_blank"
                href={`${showData}`}
              >
                {showData}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputThayBa;
