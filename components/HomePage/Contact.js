import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    companyName: '',
    email: '',
    message: '',
  })

  const handleOnChange = useCallback((e) => {
    e.persist()
    setInputs((inputs) => ({
      ...inputs,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null,
      },
    })
  }, [])

  const handleServerResponse = useCallback((ok, message) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: null,
        },
      })
      setInputs({
        companyName: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: 'Something went wrong. Please try again later.',
        },
      })
    }
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
      axios({
        method: 'POST',
        url: 'https://formspree.io/f/xrgjdovd',
        data: inputs,
      }).then((_response) =>
        handleServerResponse(true, 'Thank You , Message sent successfully')
      )
    },
    [inputs, handleServerResponse]
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black pt-10 pb-10 text-cta">
      <div className="pb-10">
        <Image src="/images/logo.png" width={100} height={70} alt="logo" />
      </div>
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <form
        className="mt-16 flex min-w-[90vw] flex-col gap-4  lg:mt-20 lg:min-w-[500px]"
        onSubmit={handleSubmit}
      >
        {status.info.error && (
          <div
            className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            {' '}
            <strong className="font-bold">Error</strong>{' '}
            <span className="block sm:inline">{status.info.msg}</span>
          </div>
        )}
        {status.submitted ? (
          <div
            className="relative rounded px-4 py-3 text-xl font-bold text-white"
            role="alert"
          >
            Your message has been sent successfully. We will Contact you soon.
          </div>
        ) : (
          <>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              maxLength={128}
              placeholder="Company Name"
              className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
              onChange={handleOnChange}
              value={inputs.companyName}
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              maxLength={200}
              placeholder="Your Email"
              className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
              onChange={handleOnChange}
              value={inputs.email}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              maxLength={1048576}
              placeholder="Additional Information"
              className="min-h-[16em] rounded-3xl border-2 border-white bg-black px-8 py-6 text-white outline-none"
              onChange={handleOnChange}
              value={inputs.message}
            ></textarea>
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="rounded-3xl bg-white px-8 py-2 text-black"
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}
