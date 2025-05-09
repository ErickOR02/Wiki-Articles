
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import HomeBttn from '../../Header/HomeButton.jsx';


import AgregarGPS1 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar GPS 1.png'
import AgregarGPS2 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar GPS 2.png'
import AgregarGPS3 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar GPS 3.png'
import AgregarGPS4 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar GPS 4.png'
import AgregarRetraso1 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar retraso 1.png'
import AgregarRetraso2 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar retraso 2.png'
import AgregarRetraso3 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar retraso 3.png'
import AgregarRetraso4 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar retraso 4.png'
import AgregarVel1 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar velocidad 1.png'
import AgregarVel2 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar velocidad 2.png'
import AgregarVel3 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar velocidad 3.png'
import AgregarVel4 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/Agregar velocidad 4.png'
import AyCAlertas from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar y agregar alertas/AyCAlertas.png'




function ArticuloCAYCA() { 
    return (
      <>
        <Header />
        <div className='ml-44'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px] w-[1024px] h-[190px] bg-gray-600'> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='ml-32'>¿Cómo agregar y configurar mis alertas? </h1>
        <h2 className='ml-32'>Resumen del artículo.</h2>
        <p className='ml-32'>La personalización de Tramo no se detiene en solo configurar tus módulos a tu gusto sino también personalizar tus alertas a tus <br />
        necesidades, en este articulo aprenderás a como agregar y configurar tus alertas en Tramo. </p>
        <p className='ml-32'> Contenido del artículo: </p>
        <ol className= 'ml-32 list-decimal list-inside'>
          <li>¿Cómo agregar una alerta?</li>
          <li> ¿Cómo configurar una alerta </li>
        </ol>
        <h2 className='ml-32'> <strong> Pasos para configurar una alerta </strong> </h2>
        <p className='ml-32'> <strong>Paso 1: </strong> Ve a la configuración de Tramo, cuando estes en esta sección, haz clic en “Configuración de alertas”.   </p>
        <img src={AyCAlertas} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-32'><strong>Paso 2: </strong> Una vez en esta sección, podrás ver las diferentes alertas con las que Tramo cuenta, aquí podrás configurarlas a tu gusto y <br />
        necesidad dependiendo del tipo de alerta que desees.  </p>
        <p className='ml-32'> A continuación, las diferentes alertas que puedes configurar en Tramo. </p>
        <p className='ml-32'> <strong>Alertas de Velocidad: </strong> </p>
        <p className='ml-32'> En esta seccion podrás configurar las “alertas de velocidad”, podrás personalizarlas por “Prioridad”, “Velocidad y “Duración”, también <br />
        podrás configurarlas para que las recibas ya sea en un email o un mensaje por WhatsApp y si deseas hacer algún cambio en <br />
        “velocidad” o en “duración”.  </p>
        <ul className='ml-32'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Velocidad: A que velocidad deberá ir la unidad para que la alerta salte. </li>
          <li>Duración: La cantidad de tiempo que deberá ir la unidad a la velocidad asignada para que la alerta salte.</li>
        </ul> <br />
        <img src={AgregarVel1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />  
        <p className='ml-32'><strong> Alertas de Señal GPS:  </strong></p>
        <p className='ml-32'> En esta seccion podrás configurar las “alertas de señal GPS”, podrás personalizarlas por “Prioridad” y “Tiempo de transmisión”, también <br />
        podrás configurarlas para que las recibas ya sea en un email o un mensaje por WhatsApp.   </p>
        <ul className='ml-32 list-disc list-inside'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Tiempo de transmisión: El tiempo que el GPS necesita estar sin señal para que la alerta salte.</li>
        </ul> <br />
        <img src={AgregarGPS1} alt=""
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'><strong> Alertas de Retraso:  </strong></p>
        <p className='ml-32'> En esta seccion podrás configurar las “alertas de velocidad”, podrás personalizarlas por “Prioridad” y “Tiempo de retraso”, también <br />
        podrás configurarlas para que las recibas ya sea en un email o un mensaje <br />
        por WhatsApp.</p>
        <ul className='ml-32 list-disc list-inside'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Tiempo de retraso: El tiempo de retraso que la unidad deberá llevar para que la alerta salte. </li>
        </ul> <br />
        <img src={AgregarRetraso1} alt=""
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'><strong> Pasos para agregar una alerta </strong></p>
        <p className='ml-32'> <strong>Paso 1: </strong> Una vez estes en la “configuración de alertas”, podrás ver las alertas ya creadas por Tramo.</p>
        <p className='ml-32'> A continuación, verás como agregar una nueva alerta para cada pestaña. </p>
        <p className='ml-32'> <strong> Velocidad </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarVel1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-32 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad “Alta” no podrás agregar <br />
          otra “Alta”).  </li>
          <li> <strong> Velocidad: </strong> Agrega la velocidad en la que la unidad deberá ir para que salte esta alerta. </li>
          <li> <strong> Duración: </strong> Agrega cuantos minutos deberán pasar en la velocidad para que salte esta alerta</li>
        </ol> <br />
        <img src={AgregarVel2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarVel3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando el éxito de la adición.  </p>
        <img src={AgregarVel4} alt="" 
        className='mx-auto w-[320px] h-[128px]' /> <br /> <br />

        <p className='ml-32'> <strong> Señal GPS </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarGPS1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-32 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad “Alta” no podrás agregar <br />
          otra “Alta”).  </li>
          <li> <strong> Tiempo de transmisión: </strong> El tiempo en el que el GPS debe estar sin enviar señal para que la alerta salte.</li>
        </ol> <br />
        <img src={AgregarGPS2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarGPS3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando el éxito de la adición.  </p>
        <img src={AgregarGPS4} alt="" 
        className='mx-auto w-[320px] h-[148px]' /> <br />

        <p className='ml-32'> <strong> Retraso </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarRetraso1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-32 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad “Alta” no podrás agregar <br />
          otra “Alta”).  </li>
          <li> <strong> Tiempo de retraso: </strong> El tiempo de retraso que la unidad debe de tener para que la alerta salte. </li>
        </ol> <br />
        <img src={AgregarRetraso2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarRetraso3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando el éxito de la adición.  </p>
        <img src={AgregarRetraso4} alt="" 
        className='mx-auto w-[320px] h-[148px]' /> <br /> 

      <a className='ml-20' href="#Inicio">
      <HomeBttn />
      </a>

        </div>
        
      </>
    );
  
  }

  export default ArticuloCAYCA