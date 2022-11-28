import { Navbar, Button, Footer, Tooltip } from 'flowbite-react'
import Link from 'next/link'
import Image from 'next/image'
import {
    FaDiscord,
    FaGithub,
} from 'react-icons/fa'
import Logo from "../public/madhatter-logo.jpeg"

const navigation = [
    { name: 'Docs', href: 'https://wenhelp.gitbook.io/mad-hatter-user-guide/', target: '_blank' },
]

export default function Layout({children}: any ) {
  return (
    <>
      <div className="container h-full max-w-screen-xl mx-auto px-6 lg:px-8 mt-4">
        <div className="relative mb-4 z-10 -mx-4">
          <Navbar fluid={true} rounded={true}>
            <Navbar.Brand>
              <Link href="/" passHref>
                <div className="flex flex-row gap-2 cursor-pointer hover:opacity-80 transition">
                  <Image src={Logo} width={50} height={50} alt="Madhatter logo" />
                  <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
                    MadHatter
                  </span>
                </div>
              </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <div className="hidden md:block">
                <Link href="#" passHref>
                  <Button color="primary">Support on Juicebox</Button>
                </Link>
              </div>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {navigation.map((item) => (
                <Navbar.Link key={item.href}>
                  <Link key={item.name} href={item.href} target={item.target} passHref>
                    <span className="cursor-pointer text-base font-display">
                      {item.name}
                    </span>
                  </Link>
                </Navbar.Link>
              ))}
              <div className="md:hidden">
                <Link href="#" passHref>
                  <Button color="primary">Support on Juicebox</Button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {children}
        <footer className="py-6 mt-16 flex justify-between">
          <div className="w-full">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <div className="relative w-10 h-10">
                <Image src={Logo} layout="fill" alt="MadHatter icon" />
              </div>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="https://discord.gg/mysMjfHJ" icon={FaDiscord} />
                <Footer.Icon
                  href="https://github.com/BanklessDAO/mad-hatter"
                  icon={FaGithub}
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}