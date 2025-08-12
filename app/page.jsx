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
      img: "/icons/hearth.png"
    },
    {
      name: "Refuerzo del sistema inmunológico",
      description: "Al incluir vitaminas y minerales esenciales, la sueroterapia puede fortalecer el sistema inmunológico, ayudando al cuerpo a defenderse contra enfermedades y mejorar la capacidad de recuperación.",
      img: "/icons/body.png"
    }
  ]

  return (
    <div className="">
      <Nav/>
      <header id="inicio" className="w-full h-screen flex flex-col pt-52 text-center lg:text-left lg:pl-52 bg-[url(/img-mobile/main.png)] lg:bg-[url(/img-desktop/main.png)] md:bg-cover bg-contain bg-no-repeat bg-bottom lg:relative">
        <h1 className="font-extrabold text-4xl mb-5">Verónica Ávila</h1>
        <p className="leading-6 text-1xl mb-5">Lorem ipsum dolor sit amet consectetur. 
        <br/>Mi turpis tortor lectus integer.</p>
        <a href="#beneficios" className="py-1 px-4 bg-green w-fit mx-auto text-white rounded-sm lg:mx-0">Ver Beneficios...</a>
        <Image
          alt="img plant"
          width={400}
          height={700}
          src={"/img-desktop/plant5.png"}
          className="absolute left-1/4 hidden lg:block plan-float"
        />
        <a className="arrow z-50" href="#beneficios">
            <span></span>
            <span></span>
            <span></span>
        </a>
      </header>
      <section id="quees" className="py-10 bg-[url(/img-mobile/plant1.png)] bg-no-repeat bg-right-bottom lg:flex lg:justify-center">
        <div className="order-2 lg:w-1/2 lg:pl-20">
          <h2 className="font-bold text-3xl text-center mt lg:w-fit lg:text-4xl">¿Qué es la SUEROTERAPIA?</h2>
          <p className="font-extralight leading-10 text-justify px-4 my-5 md:w-3/4 lg:w-full md:mx-auto lg:mx-0">La sueroterapia implica la administración de una mezcla personalizada de sustancias, vitaminas, fármacos o minerales directamente en el torrente sanguíneo de una vía intravenosa. A diferencia de los suplementos orales, este enfoque permite una absorción más rápida y cimpleta de esos nutrientes esenciales, brindado resulados notables en poco tiempo.</p>
        </div>
        <Image
          alt="img sueroterapia"
          width={350}
          height={350}
          src={"/img-mobile/sueroterapia.png"}
          className="m-auto order-1 lg:mx-0"
        />
      </section>
      <section id="beneficios" className="py-10 bg-[url(/img-mobile/plant2.png)] bg-no-repeat bg-left-top lg:px-32">
        <h2 className="text-center font-bold text-3xl py-5">Beneficios</h2>
        <div className="md:flex md:flex-wrap lg:justify-around md:m-5">
          {beneficios.map((b,i)=>(
          <div key={i} className="bg-green mx-4 rounded-2xl p-5 text-white my-4 max-w-96 md:mx-auto lg:mx-5">
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
      <section className="w-full h-44 md:h-80 bg-contain bg-no-repeat bg-[url(/img-mobile/orange.png)] md:bg-cover lg:bg-[url(/img-desktop/orange.png)] lg:bg-cover"></section>
      <section id="faq" className="py-5">
        <h2 className="text-3xl font-bold text-center lg:mb-20">FAQ</h2>
        <div className="mx-4 my-5">
          <details className="cursor-pointer text-2xl" name="questions">
            <summary className="lg:text-3xl lg:my-5 lg:ml-10">¿Cuánto dura una sesión?</summary>
            <p className="text-justify leading-10 my-5">Una sesión típica suele durar entre 30 y 60 minutos, dependiendo del tipo de suero y las necesidades del paciente. En algunos casos, este tipo de terapia puede extenderse hasta 90 minutos, especialmente si se busca mayor relajación durante el proceso. Incluso, fuentes como AARP mencionan que puede durar entre 30 minutos y 2 horas, según el tipo de goteo intravenoso utilizado.</p>
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl" name="questions">
            <summary className="lg:text-3xl lg:my-5 lg:ml-10">¿Es seguro?</summary>
            <p className="text-justify leading-10 my-5">Generalmente, la sueroterapia es segura cuando es realizada por profesionales de la salud, con prácticas de higiene y equipos adecuados. Sin embargo, es fundamental que la preparación y administración la realice personal médico capacitado y que los insumos cuenten con registro sanitario, según normativas vigentes.</p>
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl" name="questions">
            <summary className="lg:text-3xl lg:my-5 lg:ml-10">¿Quien puede recibir sueroterapia?</summary>
            <p className="text-justify leading-10 my-5">Something</p>
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl" name="questions">
            <summary className="lg:text-3xl lg:my-5 lg:ml-10">¿Cuántas sesiones se recomiendan?</summary>
            <p className="text-justify leading-10 my-5">En general, cualquier persona adulta puede recibir sueroterapia, siempre que sea evaluada por un profesional. También se ha empleado en niños en casos específicos, aunque muchos especialistas evitan su uso en mujeres embarazadas sin supervisión médica. Es particularmente adecuada para quienes sufren de deshidratación, fatiga crónica, baja energía, recuperación física o tras enfermedades, y para quienes desean fortalecer su sistema inmunológico, mejorar la piel o desintoxicar el organismo.</p>
          </details>
          <hr className="my-2"/>
          <details className="cursor-pointer text-2xl" name="questions">
            <summary className="lg:text-3xl lg:my-5 lg:ml-10">¿Teien efectos secundarios?</summary>
            <p className="text-justify leading-10 my-5">os efectos secundarios suelen ser leves y poco frecuentes, incluyendo:
              Molestias, enrojecimiento o hematomas en el sitio de punción. Sensación de frío durante la infusión. Raramente mareos leves.</p>
          </details>
        </div>
      </section>
      <footer className="bg-[url(/img-mobile/footer.png)] bg-cover w-full text-white text-center py-5">
          <p className="my-4">Todos los derechos reservados por el autor.</p>
          <p className="my-4">Terapeuta Véronica Ávila.</p>
      </footer>
    </div>
  );
}