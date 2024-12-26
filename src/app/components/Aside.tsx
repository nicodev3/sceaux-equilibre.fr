'use client'
import Link from 'next/link'
import { openSans } from '@/app/fonts'
import Image from 'next/image'
import Doctolib from '@/app/components/Doctolib'

const Aside = () => (
  <div className="border-green rounded border p-5 shadow-md md:col-start-10 md:col-end-13">
    <Image
      alt="equilibre nature"
      src="/sceaux-equilibre-home.jpg"
      width="266"
      height="266"
      className="mb-5"
    />
    <Doctolib />
  </div>
)

export default Aside
