import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Mail({ blackWord = "Ota ", purpleWord = "Yhteyttä" }) {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const resetForm = () => {
    reset();
  };

  const sendEmail = () => {
    resetForm();
    emailjs
      .sendForm(
        "service_zda3zg2",
        "template_71gnars",
        form.current,
        "z1BvBatXVZWa9SweI"
      )
      .then(
        () => {
          alert("Sähköposti lähetetty onnistuneesti!");
        },
        (error) => {
          console.error(error.text);
          alert("Sähköpostin lähetys epäonnistui :(");
        }
      );
  };

  const handleRegister = !register
    ? console.error("Form registration has an error")
    : 1;

  return (
    <div id="mail">
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <h3 className=" animate-pulse text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            {blackWord} <span className="text-indigo-600">{purpleWord}</span>
          </h3>
        </div>
        <form className="w-full" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                htmlFor="firstName"
              >
                Etunimi
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Sukunimi
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Sähköposti
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                id="grid-email"
                name="email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Puhelinnumero
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                type="tel"
                id="phone"
                name="phone"
                placeholder="PuhelinNumero"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Viesti
              </label>
              <textarea
                register={handleRegister}
                required
                rows={10}
                id="message"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="message"
              />
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center"></div>
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Lähetä
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-600">Tai ota yhteyttä meihin:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/+3580442358460"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 text-gray-700 underline"
          >
            <strong>Whatsapp</strong>
          </a>
          <a
            href="https://www.facebook.com/finclear6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-gray-700 underline"
          >
            <strong>Facebook</strong>
          </a>
          <a
            href="https://www.instagram.com/finclear/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-gray-700 underline"
          >
            <strong>Instagram</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mail;
