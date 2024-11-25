'use client'
import Link from 'next/link'
import { openSans } from '@/app/fonts'

interface CardProps {
    title: string;
    description: string;
    href: string;
    linkText: string;
}

const Card = ({ title, description, href, linkText }: CardProps) => {
    return (
        <div className="shadow-md flex flex-col pb-5">
            <h2 className={`${openSans.className} text-xl p-5 bg-juniper-100`}>{title}</h2>
            <p className='p-5'>{description}</p>
            <Link href={href} className='c-btn-cta pl-5 mt-auto self-end mr-5'>{linkText}</Link>
        </div>
    )
}

export default Card