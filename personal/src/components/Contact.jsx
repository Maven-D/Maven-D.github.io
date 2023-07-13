import React from "react";

function Contact() {
  const contactForm = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h2 className="font-bungee text-4xl text-bistre font-bold mt-16">
        Contact Details
      </h2>

      <div>
        <form
          className="flex flex-col [&>*]:mt-3"
          method="post"
          onSubmit={contactForm}
        >
          <div className="grid grid-cols-2 gap-3 [&>*]:border-2 h-10">
            <input
              type="text"
              placeholder="First Name"
              className="pl-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="pl-3 rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="pl-3 border-2 rounded-md h-10"
          />
          <input
            type="phone"
            placeholder="Phone"
            className="pl-3 border-2 rounded-md h-10"
          />
          <textarea
            type="text"
            placeholder="Feedback (max 1000 characters)"
            maxLength={1000}
            rows={8}
            className="pl-3 border-2 rounded-md resize-none"
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
