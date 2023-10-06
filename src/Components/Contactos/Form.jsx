import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjvpzlr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="flex flex-col  w-1/2 ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 mb-10 md:flex-row">
          <div className="w-full">
            <label htmlFor="name"></label>
            <input
              className="border-b-2 border-gray-300 outline-none w-full "
              placeholder="Nombre"
              id="name"
              type="name"
              name="name"
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="w-full">
            <label htmlFor="email"></label>
            <input
              className="border-b-2 border-gray-300 w-full  outline-none"
              placeholder="Email"
              id="email"
              type="email"
              name="email"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div>
          <textarea
            className="w-full mb-10 h-40 border border-gray-300 outline-none "
            id="message"
            name="message"
            placeholder="Tu mensaje"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="w-48 h-10 text-white font-mont bg-gray-700 hover:bg-black duration-500 "
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export { ContactForm };
