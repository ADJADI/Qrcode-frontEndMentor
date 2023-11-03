import React from "react";
import mobile from "../../images/favicon-32x32.png";
import codeQr from "../../images/image-qr-code.png";

function App() {
  return (
    <div className="flex justify-center items-center h-screen font-outfit bg-Lightgray p-5 ">
      <div className="flex bg-white flex-col gap-5 w-80 items-center p-5 shadow-lg rounded-2xl ">
        <section>
          <img src={codeQr} alt="" className="rounded-md" />
        </section>
        <section className="flex flex-col text-center gap-4 mb-2 p-2 ">
          <h1 className="font-extrabold text-xl text-Darkblue">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-15 text-Grayishblue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
