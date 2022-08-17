import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Logo from '../public/logo.jpeg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Custom NFT | MVRNFT</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      </Head>

      <div>
        <Link href="https://mvrnft.netlify.app/">
          <div className='p-10'>
            <Image className="cursor-pointer" src={Logo} alt="logo" width={125} height={35} />
          </div>
        </Link>
      </div>

      <div>
        <form action="https://formspree.io/f/xzbwbovl" method="POST">
          <div className="flex justify-center py-2">
              <input type="text" name="name" placeholder="Full Name" className={`bg-slate-200 p-1 rounded-2xl pl-2`} />
          </div>
          <div className="flex justify-center py-2">
            <input type="text" name="email" placeholder="Email" className="bg-slate-200 p-1 rounded-2xl pl-2"/>
          </div>
          <div className="flex justify-center py-2">
            <select name="collection" className="bg-slate-200 p-1 rounded-2xl pl-2 py-2 px-10">
                <option>Select Collection</option>
                <option>Vans</option>
                <option>Air Jordan Retro</option>
                <option>Pokémon</option>
            </select>
          </div>
          <div className="flex justify-center py-2">
            <textarea name="message" rows="15" placeholder="Describe Your NFT" className="bg-slate-200 p-1 rounded-2xl pl-2"/> 
          </div>
          <div className="flex justify-center py-10">
            <button type="submit" className="text-sm border-2 border-black p-2 rounded-2xl hover:bg-black hover:text-white">
              Submit Custom NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
