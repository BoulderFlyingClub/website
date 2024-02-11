import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mgegagjz");
  if (state.succeeded) {
    return <h2 className="text-3xl font-bold mb-4">Thanks for contacting us! We'll email you back shortly</h2>
  }
  return (
    <div id="ui-container" className="p-6 mx-auto bg-white rounded-xl shadow-lg items-left">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form id="fs-frm" name="simple-contact-form" onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="Message"
                name="Message"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className='pt-4'>

        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
          </div>
          </div>
        </div>


      </form>
    </div>
  );
}
export default ContactForm;

