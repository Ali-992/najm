import React, { useContext } from 'react'
import LanguageContext from '../../utils/store'
import ClientLogos from '../ui/ClientLogos'

export default function TrustedBy() {
  const { en } = useContext(LanguageContext)

  return (
    <div className="bg-white">
      <div className="flex min-h-[80vh] flex-col justify-center gap-16  text-black md:gap-32">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-10 text-center text-xl font-bold md:text-2xl">
            <span className="">{en ? 'Trusted by' : 'موثوق بنا من'}</span>{' '}
            <span className="">
              {en
                ? 'Biggest Companies and Institutions in Saudi Arabia.'
                : 'اكبر الشركات والمؤسسات في السعودية'}
            </span>
          </h3>
          <ClientLogos />
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="lg:max-w--[70%] container mx-auto lg:px-10">
              <div className="px-10 text-center text-xl  tracking-tight lg:text-4xl ">
                {en
                  ? 'Your satisfaction is our goal. Your vision is our business'
                  : 'رضاكم هو هدفنا. رؤيتك هي عملنا'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
