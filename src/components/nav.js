import Link from 'next/link'

export default function Nav() {
    return (
        <header>
            <nav className="flex items-center justify-between fixed w-full">
                <ul className="flex w-full items-center">
                    <li>
                        <Link href="/">
                            <img 
                                src="/TitoHeader2.png"
                                alt="logo"
                                width={120}
                                height={120}
                            />
                        </Link>
                    </li>
                    <li className="flex-grow text-center">
                        <Link href="/">
                            <span className="w-full text-center block text-8xl sm:text-10xl xl:text-12xl font-bold text-red-800">
                                LoLo
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
