'use client'
import Link from 'next/link'

const Doctolib = () => {
  return (
    <div className="mx-auto w-fit rounded-lg bg-white p-4 font-sans text-sm shadow-lg xl:mx-0">
      <div className="mb-4 flex gap-4">
        <img
          alt="Nicolas Devaux, psychologue à Sceaux"
          src="//media.doctolib.com/image/upload/q_auto:eco,f_auto,dpr_2/w_48,h_48,c_fill,g_face/jmfecpdpi44h7uaftjp6"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <div className="font-bold leading-6 text-black">Nicolas Devaux</div>
          <div className="flex items-center gap-2 leading-6 text-[#2B4660]">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="dl-icon dl-icon-xsmall"
              data-design-system="oxygen"
              data-design-system-component="Icon"
              data-icon-name="regular/location-dot"
            >
              <path d="M9.875 6.5A1.866 1.866 0 0 1 8 8.375 1.85 1.85 0 0 1 6.125 6.5c0-1.031.82-1.875 1.875-1.875A1.88 1.88 0 0 1 9.875 6.5M8 5.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 8 5.75m4.5.75c0 2.063-2.742 5.695-3.96 7.219a.707.707 0 0 1-1.102 0C6.218 12.195 3.5 8.563 3.5 6.5 3.5 4.016 5.492 2 8 2c2.484 0 4.5 2.016 4.5 4.5M8 3.125A3.376 3.376 0 0 0 4.625 6.5c0 .305.094.75.352 1.36.234.562.585 1.218.984 1.874A36 36 0 0 0 8 12.594c.563-.75 1.336-1.781 2.016-2.86.398-.656.75-1.312.984-1.875.258-.609.375-1.054.375-1.359A3.39 3.39 0 0 0 8 3.125"></path>
            </svg>
            Sceaux
          </div>
        </div>
      </div>
      <a
        href="https://www.doctolib.fr/psychologue/sceaux/nicolas-devaux-sceaux/booking?utm_campaign=website-button&utm_source=nicolas-devaux-sceaux-website-button&utm_medium=referral&utm_content=withpreview-white-inlined&utm_term=nicolas-devaux-sceaux"
        target="_blank"
        className="flex gap-2 px-4 h-10 bg-[#107ACA] rounded-lg text-white justify-center items-center font-bold text-sm uppercase no-underline"
        aria-label="Prendre rendez-vous Doctolib"
      >
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-design-system="oxygen"
          data-design-system-component="Icon"
          data-icon-name="regular/doctolib-logo"
        >
          <path d="M12.8 7.8c.3-1.6.3-4.8-4.8-5.3-1.3-.1-3.4.2-4.8.5v.1c0 .1.2.3.4.4.1.1.4 0 .5 0 4.6-.4 7.9.6 7.3 4-.3 1.9-1.6 4.4-5.1 4.4-.7 0-.8-.1-.7-.6 0-.1 1.1-5.9 1.2-6.5 0 0-.8-.2-1 .6 0 .2-1.9 7-2 7.4-.1.5.2.8 2.5.8 5.5-.1 6.3-4.8 6.5-5.8"></path>
        </svg>
        Prendre rendez-vous
      </a>
    </div>
  )
}

export default Doctolib
