import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {

  const beneficios = [
    {
      name: "Rejuvenecimiento de la piel",
      description: "Puede mejorar la apariencia de la piel al proporcionar nutrientes esenciales, como la vitamina C y el ácido hialurónico, que promueven la producción de colágeno y combaten los signos del envejecimiento.",
      img: "/icons/rejuvenecimiento.png"
    },
    {
      name: "Mejora del metabolismo",
      description: "Es eficaz para hidratar la piel desde el interior, proporcionando una hidratación profunda y duradera que va más allá de las soluciones tópicas.",
      img: "/icons/flor.png"
    },
    {
      name: "Energía y vitalidad",
      description: "La mezcla de vitaminas del complejo B y minerales contribuye a aumentar la energía y la vitalidad, ayudando a combatir la fatiga y mejorar la función cognitiva.",
      img: "/icons/vitalidad.png"
    },
    {
      name: "Hidratación profunda",
      description: "Es eficaz para hidratar la piel desde el interior, proporcionando una hidratación profunda y duradera que va más allá de las soluciones tópicas.",
      img: "/icons/hidratacion.png"
    },
    {
      name: "Recuperación postoperatoria",
      description: "Después de cirugías o procedimientos médicos, la sueroterapia puede acelerar la recuperación al suministrar los nutrientes necesarios para promover la curación y reducir la inflamación.",
      img: "/icons/hidratacion.png"
    },
    {
      name: "Refuerzo del sistema inmunológico",
      description: "Al incluir vitaminas y minerales esenciales, la sueroterapia puede fortalecer el sistema inmunológico, ayudando al cuerpo a defenderse contra enfermedades y mejorar la capacidad de recuperación.",
      img: "/icons/hidratacion.png"
    }
  ]

  return (
    <div className="">
      {/* <Nav/> */}
      <header className="w-full h-screen flex flex-col pt-52 text-center bg-[url(/img-mobile/main.png)] bg-contain bg-no-repeat bg-bottom">
        <h1 className="font-extrabold text-4xl mb-5">Verónica Ávila</h1>
        <p className="leading-6 text-1xl mb-5">Lorem ipsum dolor sit amet consectetur. 
        <br/>Mi turpis tortor lectus integer.</p>
        <button className="py-1 px-4 bg-green w-fit mx-auto text-white rounded-sm">Ver Beneficios...</button>
      </header>
      <section className="py-10 bg-[url(/img-mobile/plant1.png)] bg-no-repeat bg-right-bottom">
        <h2 className="font-bold text-3xl text-center mt">¿Qué es la SUEROTERAPIA?</h2>
        <p className="font-extralight leading-6 text-justify px-4 my-5 md:w-3/4 md:mx-auto">La sueroterapia implica la administración de una mezcla personalizada de sustancias, vitaminas, fármacos o minerales directamente en el torrente sanguíneo de una vía intravenosa. A diferencia de los suplementos orales, este enfoque permite una absorción más rápida y cimpleta de esos nutrientes esenciales, brindado resulados notables en poco tiempo.</p>
        <Image
          alt="img sueroterapia"
          width={300}
          height={300}
          src={"/img-mobile/sueroterapia.png"}
          className="m-auto"
        />
      </section>
      <section className="py-10 bg-[url(/img-mobile/plant2.png)] bg-no-repeat bg-left-top">
        <h2 className="text-center font-bold text-3xl py-5">Beneficios</h2>
        <div className="md:flex md:flex-wrap">
          {beneficios.map((b,i)=>(
          <div key={i} className="bg-green mx-4 rounded-2xl p-5 text-white my-4 max-w-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">{b.name}</h3>
              <Image
                alt="icon rejuvenecimiento"
                width={35}
                height={35}
                src={b.img}
              />
            </div>
            <p className="text-justify leading-7 mb-4">{b.description}</p>
            <hr className="border-2 rounded-full"/>
          </div>
          ))}
        </div>
      </section>
      <section className="w-full h-44 md:h-80 bg-contain bg-no-repeat bg-[url(/img-mobile/orange.png)] md:bg-cover"></section>
      <section className="py-5">
        <h2 className="text-3xl font-bold text-center">FAQ</h2>
        <div className="mx-4 my-5">
          <details className="cursor-pointer text-2xl">
            <summary>¿Cuánto dura una sesión?</summary>
            Something
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl">
            <summary>¿Es seguro?</summary>
            Something
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl">
            <summary>¿Quien puede recibir sueroterapia?</summary>
            Something
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl">
            <summary>¿Cuántas sesiones se recomiendan?</summary>
            Something
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl">
            <summary>¿Teien efectos secundarios?</summary>
            Something
          </details>
        </div>
      </section>
    </div>
  );
}