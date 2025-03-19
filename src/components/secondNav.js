import Link from 'next/link'
import localFont from "next/font/local"
import ToMail from './email-button'

const NanoFont = localFont({
    src: '../../public/fonts/NaNHoloGigawide-Ultra.ttf',
    weight: '400',
    variable: '--font-nano',
})
const MarioFont = localFont({
    src: '../../public/fonts/Mario-Regular.otf',
    weight: '400',
    variable: '--font-Mario',
})
const GatwickVariable = localFont({
    src: '../../public/fonts/Gatwick-Variable.ttf',
    weight: '1 999',
    variable: '--font-Gatwick',
})
export default function SecondNav() {
    return (
        <header className='w-full absolute top-0 left-0 z-50 pointer-events-auto'>
            <nav className='w-full'>
                <ul className={`${GatwickVariable.className} space-x-4  font-bold flex items-center justify-evenly p-4`}>
                    {/* <li>
                <Link href="/"> Figures </Link>
              </li> */}
                    <li>
                        <Link href="/sculptures">Process</Link>
                    </li>
                    <li>
                        <ToMail />
                    </li>
                    <li>
                        <Link target="_blank" href="https://www.instagram.com/wersdiese/">Instagram</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
