import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from "google-auth-library";

function Contact() {
  // const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  // const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  // const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICES_PRIVATE_KEY;

  // const serviceAccountAuth = new JWT({
  //   email: CLIENT_EMAIL,
  //   key: PRIVATE_KEY,
  //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  // });

  // const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
  // const submitFeedback = async (e) => {
  //   e.preventDefault();
  //   const feedback = {
  //     FirstName: document.getElementById("firstname").value,
  //     LastName: document.getElementById("lastname").value,
  //     Email: document.getElementById("email").value,
  //     Phone: document.getElementById("phone").value,
  //     Description: document.getElementById("content").value,
  //   };

  //   try {
  //     await doc.loadInfo();

  //     const sheet = doc.sheetsByIndex[0];
  //     await sheet.addRow(feedback);
  //   } catch (e) {
  //     console.log("Error", e);
  //   }
  // };

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function submitFeedback(e) {
    e.preventDefault();
    const API_KEY = import.meta.env.VITE_API_KEY;
    setIsSubmitting((val) => !val);

    const feedback = {
      FirstName: document.getElementById("FirstName").value,
      LastName: document.getElementById("LastName").value,
      Email: document.getElementById("Email").value,
      Phone: document.getElementById("Phone").value,
      Description: document.getElementById("Description").value,
    };

    fetch(API_KEY, {
      method: "POST",
      body: JSON.stringify(feedback),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then(({ result }) => {
          setShowModal(true);
          setIsSubmitting((val) => !val);
        });
      })
      .catch((e) => {});
  }
  return (
    <>
      <section id="contact">
        <h2 className="font-bungee text-4xl text-bistre font-bold mt-16">
          Contact Details
        </h2>

        <div>
          <form
            className="flex flex-col [&>*]:mt-3"
            id="feedbackForm"
            method="post"
            onSubmit={submitFeedback}
          >
            <div className="grid grid-cols-2 gap-3 [&>*]:border-2 h-10">
              <input
                type="text"
                placeholder="First Name"
                name="FirstName"
                id="FirstName"
                className="pl-3 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="LastName"
                id="LastName"
                className="pl-3 rounded-md"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              id="Email"
              className="pl-3 border-2 rounded-md h-10"
              required
            />
            <input
              type="phone"
              placeholder="Phone"
              name="Phone"
              id="Phone"
              className="pl-3 border-2 rounded-md h-10"
              required
            />
            <textarea
              type="text"
              placeholder="Feedback (max 1000 characters)"
              name="Description"
              id="Description"
              maxLength={1000}
              rows={8}
              className="pl-3 border-2 rounded-md resize-none"
              required
            />
            {!isSubmitting ? (
              <input
                type="submit"
                placeholder="Submit"
                className="rounded-md border-2 bg-flame text-white hover:bg-slate-300 hover:cursor-pointer self-center w-64 h-10"
              />
            ) : (
              <div className="flex bg-flame w-64 h-10 self-center rounded-md border-2 items-center justify-center gap-2">
                <div className="rounded-full bg-white w-2 h-2 animate-bounce-1"></div>
                <div className="rounded-full bg-white w-2 h-2 animate-bounce-2"></div>
                <div className="rounded-full bg-white w-2 h-2 animate-bounce-3"></div>
                <div className="rounded-full bg-white w-2 h-2 animate-bounce-4"></div>
              </div>
            )}
          </form>
        </div>
      </section>
      {showModal && (
        <div className="fixed top-0 left-0 h-full w-full z-10 bg-slate-700 opacity-90 flex justify-center items-center">
          <div className="relative h-1/3 w-1/3 bg-vanilla flex flex-col items-center">
            <AiOutlineClose
              className="absolute top-2 right-2 cursor-pointer"
              size={20}
              color="red"
              onClick={() => setShowModal(false)}
            />
            <TiTick size={64} className="mt-16 text-green-400" />
            <h3 className="max-sm:text-[1.05rem] text-xl uppercase text-green-800 text-center">
              Feedback Successfully Sumbitted
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
