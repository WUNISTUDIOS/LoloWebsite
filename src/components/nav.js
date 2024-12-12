import Link from 'next/link'

export default function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex justify-evenly items-center">
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
                    <li>
                        <Link href="/">
                            <span className="text-center text-5xl md:text-10xl xl:text-12xl font-bold text-red-800">
                                LoLo
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
