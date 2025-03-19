import Link from 'next/link'

export default function Nav() {
    return (
        <header className='w-full absolute top-0 left-0 py-10'>
            <nav className='w-full'>
                <ul className="flex items-center justify-center w-full absolute">
                    <li>
                        {/* <Link href="/">
                            <img
                                src="/TitoHeader2.png"
                                alt="logo"
                                width={120}
                                height={120}
                            />
                        </Link> */}
                    </li>
                    <li>
                        <Link href="/">
                            <span className="text-5xl md:text-10xl xl:text-12xl font-bold text-red-800">
                                LoLo
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
