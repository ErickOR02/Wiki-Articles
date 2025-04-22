
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
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
        <BreadcrumbNav />
        <div className='flex flex-col'>
        <h1 id='Inicio' className='text-center'>¿Cómo agregar y configurar mis alertas? </h1>
        <h2 className='ml-48'>Resumen del artículo.</h2>
        <p className='ml-48'>La personalización de Tramo no se detiene en solo configurar tus módulos a tu gusto sino también personalizar <br /> 
        tus alertas a tus necesidades, en este articulo aprenderás a como agregar y configurar tus alertas en Tramo. </p>
        <p className='ml-48'> Contenido del artículo: </p>
        <ol className= 'ml-48 list-decimal list-inside'>
          <li>¿Cómo agregar una alerta?</li>
          <li> ¿Cómo configurar una alerta </li>
        </ol>
        <h2 className='ml-48'> <strong> Pasos para configurar una alerta </strong> </h2>
        <p className='ml-48'> <strong>Paso 1: </strong> Ve a la configuración de Tramo, cuando estes en esta sección, haz clic en “Configuración de alertas”.   </p>
        <img src={AyCAlertas} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-48'><strong>Paso 2: </strong> Una vez en esta sección, podrás ver las diferentes alertas con las que Tramo cuenta, aquí podrás configurarlas <br />
        a tu gusto y necesidad dependiendo del tipo de alerta que desees.  </p>
        <p className='ml-48'> A continuación, las diferentes alertas que puedes configurar en Tramo. </p>
        <p className='ml-48'> <strong>Alertas de Velocidad: </strong> </p>
        <p className='ml-48'> En esta seccion podrás configurar las “alertas de velocidad”, podrás personalizarlas por “Prioridad”, “Velocidad y <br />
        “Duración”, también podrás configurarlas para que las recibas ya sea en un email o un mensaje por WhatsApp y si deseas <br />
        hacer algún cambio en “velocidad” o en “duración”.  </p>
        <ul className='ml-48'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Velocidad: A que velocidad deberá ir la unidad para que la alerta salte. </li>
          <li>Duración: La cantidad de tiempo que deberá ir la unidad a la velocidad asignada para que la alerta salte.</li>
        </ul> <br />
        <img src={AgregarVel1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />  
        <p className='ml-48'><strong> Alertas de Señal GPS:  </strong></p>
        <p className='ml-48'> En esta seccion podrás configurar las “alertas de señal GPS”, podrás personalizarlas por “Prioridad” y <br />
        “Tiempo de transmisión”, también podrás configurarlas para que las recibas ya sea en un email o un mensaje por WhatsApp.   </p>
        <ul className='ml-48 list-disc list-inside'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Tiempo de transmisión: El tiempo que el GPS necesita estar sin señal para que la alerta salte.</li>
        </ul> <br />
        <img src={AgregarGPS1} alt=""
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'><strong> Alertas de Retraso:  </strong></p>
        <p className='ml-48'> En esta seccion podrás configurar las “alertas de velocidad”, podrás personalizarlas por “Prioridad” y <br />
        “Tiempo de retraso”, también podrás configurarlas para que las recibas ya sea en un email o un mensaje <br />
        por WhatsApp.</p>
        <ul className='ml-48 list-disc list-inside'>
          <li>Prioridad: El nivel de severidad de la alerta.</li>
          <li>Tiempo de retraso: El tiempo de retraso que la unidad deberá llevar para que la alerta salte. </li>
        </ul> <br />
        <img src={AgregarRetraso1} alt=""
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'><strong> Pasos para agregar una alerta </strong></p>
        <p className='ml-48'> <strong>Paso 1: </strong> Una vez estes en la “configuración de alertas”, podrás ver las alertas ya creadas por Tramo.</p>
        <p className='ml-48'> A continuación, verás como agregar una nueva alerta para cada pestaña. </p>
        <p className='ml-48'> <strong> Velocidad </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarVel1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-48 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic <br />
          en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad <br />
          “Alta” no podrás agregar otra “Alta”).  </li>
          <li> <strong> Velocidad: </strong> Agrega la velocidad en la que la unidad deberá ir para que salte esta alerta. </li>
          <li> <strong> Duración: </strong> Agrega cuantos minutos deberán pasar en la velocidad para que salte esta alerta</li>
        </ol> <br />
        <img src={AgregarVel2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarVel3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando <br />
        el éxito de la adición.  </p>
        <img src={AgregarVel4} alt="" 
        className='mx-auto w-[400px] h-[200px]' /> <br /> <br />

        <p className='ml-48'> <strong> Señal GPS </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarGPS1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-48 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic <br />
          en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad <br />
          “Alta” no podrás agregar otra “Alta”).  </li>
          <li> <strong> Tiempo de transmisión: </strong> El tiempo en el que el GPS debe estar sin enviar señal para que la alerta salte.</li>
        </ol> <br />
        <img src={AgregarGPS2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarGPS3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando <br />
        el éxito de la adición.  </p>
        <img src={AgregarGPS4} alt="" 
        className='mx-auto w-[400px] h-[200px]' /> <br />

        <p className='ml-48'> <strong> Retraso </strong> Haz clic en "Nueva Alerta" </p>
        <img src={AgregarRetraso1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> La siguiente ventana aparecerá, aquí deberás agregar la información necesaria para poder crear la nueva alerta  </p>
        <ol className= 'ml-48 list-decimal list-inside'>
          <li> <strong> Etiqueta: </strong> Agrega una etiqueta para poder identificar la alerta, podrás verla dentro de la prioridad cuando hagas clic <br />
          en ella. </li>
          <li> <strong> Prioridad: </strong> Agrega la prioridad a la alerta (solo puede existir un tipo de prioridad en tus alertas, si ya hay una prioridad <br />
          “Alta” no podrás agregar otra “Alta”).  </li>
          <li> <strong> Tiempo de retraso: </strong> El tiempo de retraso que la unidad debe de tener para que la alerta salte. </li>
        </ol> <br />
        <img src={AgregarRetraso2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <img src={AgregarRetraso3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> Una vez agregada la información, haz clic en “Crear alerta”, después de esto una notificación saldrá mostrando <br />
        el éxito de la adición.  </p>
        <img src={AgregarRetraso4} alt="" 
        className='mx-auto w-[400px] h-[200px]' /> <br /> 

<a href="#Inicio">Inicio</a>

        </div>
        
      </>
    );
  
  }

  export default ArticuloCAYCA