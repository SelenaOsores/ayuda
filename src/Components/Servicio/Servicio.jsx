import React from 'react'
import './Servicio.css'
import lavado from '../Assets/lavado.jpeg'
import corte from '../Assets/corte.jpeg'
import peinado from '../Assets/peinado.jpeg'
import coloracion from '../Assets/coloracion.jpeg'
import tratamiento from '../Assets/tratamiento.jpeg'

export const Servicio = () => {
  return (
    <div>
        <h1>Servicios</h1>

        {/*lavado */}
      <div class="service">
            <div class="service-text">
                <h2 id='lavado'>LAVADO</h2>
                <p>El primero de los servicios, el más importante.</p>
                <p>Lavarte el cabello previo a un corte o peinado y/o luego de una coloración: hace al inicio y/o la finalización perfecta de tu experiencia en AC.</p>
                <p>Contamos con las mejores manos en nuestro equipo y una amplia variedad de marcas Premium que te garantizan un momento único.</p>
                <p>Las grandes marcas de la cosmética argentina, francesa, británica, italiana entre otras, dan garantía de formación para la persona que te lavará el pelo y un producto a medida según deseo y necesidad. Contarás con el asesoramiento preciso sobre tu cuero cabelludo y pelo para lograr la excelencia y confort que necesitas.</p>
                <p>No te pierdas una de las mejores experiencias en AC.</p>
            </div>
            <div class="service-image">
                <img src={lavado} alt="" />
            </div>
        </div>

        {/*corte */}
        <div class="service">
            <div class="service-image">
                <img src={corte} alt="" />
            </div>
            <div class="service-text">
                <h2 id='corte'>CORTE</h2>
                <p>Nuestro equipo de expertos domina el arte del corte, con técnicas que destacan tu estilo personal.</p>
                <p>Desde estilos clásicos hasta los más modernos, trabajamos con precisión y atención al detalle.</p>
                <p>Recibe una asesoría completa para elegir el corte que mejor se adapte a la forma de tu rostro y tipo de cabello.</p>
                <p>Deja que nuestros estilistas resalten tu personalidad a través de un corte a la medida.</p>
                <p>¡Confía en nosotros para darle a tu cabello el estilo que merece!</p>
            </div>
        </div>

        {/*peinado */}
        <div class="service">
            <div class="service-text">
                <h2 id='peinado'>PEINADO</h2>
                <p>Porque un buen peinado puede cambiarlo todo. En AC, te ayudamos a lograr el look perfecto para cualquier ocasión.</p>
                <p>Desde peinados elegantes y formales hasta estilos más casuales y desenfadados.</p>
                <p>Nuestros profesionales te guiarán para elegir el peinado que complemente mejor tu vestimenta y personalidad.</p>
                <p>Usamos productos de alta calidad para asegurar que el peinado se mantenga impecable durante todo el día.</p>
                <p>Prepárate para impresionar en cualquier evento o celebración.</p>
            </div>
            <div class="service-image">
                <img src={peinado} alt="" />
            </div>
        </div>

        {/*coloracion */}
        <div class="service">
            <div class="service-image">
                <img src={coloracion} alt="" />
            </div>
            <div class="service-text">
                <h2 id='coloracion'>COLORACIÓN</h2>
                <p>Transforma tu cabello con los colores de moda o resalta su tono natural con nuestra coloración profesional.</p>
                <p>Utilizamos productos de alta calidad que cuidan la salud de tu cabello y aseguran un color duradero.</p>
                <p>Desde colores vibrantes hasta técnicas de balayage y mechas, tenemos lo necesario para lograr el efecto que deseas.</p>
                <p>Nuestros estilistas te ayudarán a encontrar el tono perfecto que resalte tus rasgos.</p>
                <p>¡Atrévete a un cambio de color con AC!</p>
            </div>
        </div>

        {/*tratamientos */}
        <div class="service">
            <div class="service-text">
                <h2 id='tratamientos'>TRATAMIENTOS</h2>
                <p>Dale a tu cabello el cuidado que necesita con nuestros tratamientos personalizados.</p>
                <p>Ofrecemos tratamientos hidratantes, reparadores, anti-frizz y mucho más, adaptados a las necesidades de tu cabello.</p>
                <p>Trabajamos con productos de las mejores marcas para asegurar resultados visibles y duraderos.</p>
                <p>Disfruta de una experiencia relajante y mejora la salud y apariencia de tu cabello con cada visita.</p>
                <p>Porque tu cabello merece el mejor cuidado, ven y revitalízalo en AC.</p>
            </div>
            <div class="service-image">
                <img src={tratamiento} alt="" />
            </div>
        </div>
    </div>
  )
}
