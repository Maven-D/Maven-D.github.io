import React from "react";
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
  function submitFeedback(e) {
    e.preventDefault();

    const feedback = new FormData(document.getElementById("feedbackForm"));

    fetch("/api", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: feedback,
    })
      .then((res) => {
        res.json().then(({ result }) => console.log(result));
      })
      .catch((e) => {});

    console.log("hello");
  }
  return (
    <section>
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
              className="pl-3 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="LastName"
              className="pl-3 rounded-md"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className="pl-3 border-2 rounded-md h-10"
            required
          />
          <input
            type="phone"
            placeholder="Phone"
            name="Phone"
            className="pl-3 border-2 rounded-md h-10"
            required
          />
          <textarea
            type="text"
            placeholder="Feedback (max 1000 characters)"
            name="Description"
            maxLength={1000}
            rows={8}
            className="pl-3 border-2 rounded-md resize-none"
            required
          />

          <input
            type="submit"
            placeholder="Submit"
            className="rounded-md border-2 bg-flame text-white hover:bg-slate-300 hover:cursor-pointer self-center w-64 h-10"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
