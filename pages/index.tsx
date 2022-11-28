import Head from "next/head";
import Image from 'next/image';
import Logo from "../public/madhatter-logo.jpeg";
import BigTitle from '../components/BigTitle';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Madhatter Frontend</title>
        <meta
          name="description"
          content="Bankless DAO Madhatter bot frontpage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex flex-row gap-16 mx-auto mt-16 lg:mt-20 xl:mt-64 mb-16 lg:w-full md:mb-24 lg:mb-32 xl:mb-48 items-center">
        <div className="text-left md:basis-3/5 flex flex-col">
          <BigTitle text="MadHatter Bot"/>
          <p className="my-4 max-w-lg text-lg dark:text-white">
          Mad Hatter is your helping hand in automating administrative tasks, improving community operations, and provide an opportunity to help onboard new members for various groups in the DAO.
          </p>
        </div>
        <div className="basis-2/5 hidden md:block">
          <Image src={Logo} alt="Madhatter brand"/>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto my-16 lg:my-32 xl:my-48 lg:w-full">
        <div className="text-left">
          <BigTitle
            text="Want to contribute to source code?"
          />
          <p className="my-4 max-w-xl dark:text-white">
          Mad Hatter serves specifically to be a public good for Bankless DAO and provides an opportunity for incoming developers to showcase their talent through continued development. This bot is not currently, nor will it ever be, designed for the purpose of generating revenue.

          </p>
          <button className="rounded-none ...">
            <Link href="https://github.com/BanklessDAO/mad-hatter"/>
          </button>
        </div>
      </div>
      
    </div>
  );
}
