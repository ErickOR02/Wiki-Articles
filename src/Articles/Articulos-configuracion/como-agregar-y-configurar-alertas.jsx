
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import ScrollUpBttn from '../../Header/ScrollUpBttn.jsx';
import HomeBttn from '../../Header/HomeBttn.jsx';


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
        <div className='ml-28'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px]'> <HomeBttn /> </div>

        <div className='flex flex-col'>
        <div className="ml-32 w-[1024px] break-words">
        <h1 id='Inicio' className='text-2xl font-bold' >¿Cómo agregar y configurar mis alertas? </h1>
        <h2 className='text-xl font-bold' >Resumen del artículo.</h2>
        <p >La personalización de Tramo no se detiene en solo configurar tus módulos a tu gusto sino también personalizar tus alertas a tus 
        necesidades, en este articulo aprenderás a como agregar y configurar tus alertas en Tramo. </p>
        <p > Contenido del artículo: </p>
        <ol className= ' list-decimal list-inside'>
          <li>¿Cómo agregar una alerta?</li>
          <li> ¿Cómo configurar una alerta </li>
        </ol>
        <h2 className='text-xl font-bold' > Pasos para configurar una alerta </h2>
        <p > <strong>Paso 1: </strong> Ve a la configuración de Tramo, cuando estes en esta sección, haz clic en “Configuración de alertas”.   </p>
        <img src={AyCAlertas} alt=""  
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p ><strong>Paso 2: </strong> Una vez en esta sección, podrás ver las diferentes alertas con las que Tramo cuenta, aquí podrás configurarlas a tu gusto y 
        necesidad dependiendo del tipo de alerta que desees.  </p>
        <p > A continuación, las diferentes alertas que puedes configurar en Tramo. </p>
        <p > <strong>Alertas de Velocidad: </strong> </p>
        <p > En esta seccion podrás configurar las “alertas de velocidad”, podrás personalizarlas por “Prioridad”, “Velocidad y “Duración”, también 
        podrás configurarlas para que las recibas ya sea en un email o un mensaje por WhatsApp y si deseas hacer algún cambio en 
        “velocidad” o en “duración”.  </p>
        <ul >
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Velocidad: A que velocidad deberá ir la unidad para que la alerta salte. </li>
          <li>Duración: La cantidad de tiempo que deberá ir la unidad a la velocidad asignada para que la alerta salte.</li>
        </ul> <br />
        <img src={AgregarVel1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />  <br />
        <p ><strong> Alertas de Señal GPS:  </strong></p>
        <p > En esta seccion podrás configurar las “alertas de señal GPS”, podrás personalizarlas por “Prioridad” y “Tiempo de transmisión”, también 
        podrás configurarlas para que las recibas ya sea en un email o un mensaje por WhatsApp.   </p>
        <ul className='ml-16 list-disc list-inside'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Tiempo de transmisión: El tiempo que el GPS necesita estar sin señal para que la alerta salte.</li>
        </ul> <br />
        <img src={AgregarGPS1} alt=""
        className='mx-auto w-[700px] h-[500px]' /> <br /> 
        <p ><strong> Alertas de Retraso:  </strong></p>
        <p > En esta seccion podrás configurar las “alertas de velocidad”, podrás personalizarlas por “Prioridad” y “Tiempo de retraso”, también 
        podrás configurarlas para que las recibas ya sea en un email o un mensaje 
        por WhatsApp.</p>
        <ul className='ml-16 list-disc list-inside'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Tiempo de retraso: El tiempo de retraso que la unidad deberá llevar para que la alerta salte. </li>
        </ul> <br />
        <img src={AgregarRetraso1} alt=""
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p ><strong> Pasos para agregar una alerta </strong></p>
        <p > <strong>Paso 1: </strong> Una vez estes en la “configuración de alertas”, podrás ver las alertas ya creadas por Tramo.</p>
        <p > A continuación, verás como agregar una nueva alerta para cada pestaña. </p>
        <p > <strong> Velocidad </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarVel1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-16 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad “Alta” no podrás agregar 
          otra “Alta”).  </li>
          <li> <strong> Velocidad: </strong> Agrega la velocidad en la que la unidad deberá ir para que salte esta alerta. </li>
          <li> <strong> Duración: </strong> Agrega cuantos minutos deberán pasar en la velocidad para que salte esta alerta</li>
        </ol> <br />
        <img src={AgregarVel2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarVel3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando el éxito de la adición.  </p>
        <img src={AgregarVel4} alt="" 
        className='mx-auto w-[320px] h-[128px]' /> <br /> <br />

        <p > <strong> Señal GPS </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarGPS1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-16 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad “Alta” no podrás agregar 
          otra “Alta”).  </li>
          <li> <strong> Tiempo de transmisión: </strong> El tiempo en el que el GPS debe estar sin enviar señal para que la alerta salte.</li>
        </ol> <br />
        <img src={AgregarGPS2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarGPS3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando el éxito de la adición.  </p>
        <img src={AgregarGPS4} alt="" 
        className='mx-auto w-[320px] h-[148px]' /> <br />

        <p > <strong> Retraso </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarRetraso1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-16 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad “Alta” no podrás agregar 
          otra “Alta”).  </li>
          <li> <strong> Tiempo de retraso: </strong> El tiempo de retraso que la unidad debe de tener para que la alerta salte. </li>
        </ol> <br />
        <img src={AgregarRetraso2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarRetraso3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando el éxito de la adición.  </p>
        <img src={AgregarRetraso4} alt="" 
        className='mx-auto w-[320px] h-[108px]' /> <br /> 
      </div>

      <ScrollUpBttn />

        </div>
        
      </>
    );
  
  }

  export default ArticuloCAYCA