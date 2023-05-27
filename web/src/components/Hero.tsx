import Image from 'next/image'
import logo from '../assets/logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="NLW Spacetime" />

      <div className="max-wd-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e <br /> compartilhe (se
          quiser) com o mundo!
        </p>
      </div>

      <a
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
