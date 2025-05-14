
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import ScrollUpBttn from '../../Header/ScrollUpBttn.jsx';
import HomeBttn from '../../Header/HomeBttn.jsx';



import AgregarComnt1 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Agregar comentario 1.png'
import AgregarComnt2 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Agregar comentario 2.png'
import AgregarComnt3 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Agregar comentario 3.png'
import AtenderAlerta1 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Atender alerta 1.png'
import AtenderAlerta2 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Atender alerta 2.png'
import AtenderAlerta3 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Atender alerta 3.png'
import VerAlerta1 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Ver alerta 1.png'
import VerAlerta2 from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Ver alerta 2.png'
import Boton from '../../assets/Imagenes-articulos/M-Alertas/Como ver una alerta/Boton.png'


function ArticuloCVUA() { 
    return (
      <>
        <Header />
        <div className='ml-[108px]'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px]'> <HomeBttn /> </div>

        <div className='flex flex-col'>
        <div className="ml-32 w-[1024px] break-words">
        <h1 id='Inicio' className='text-2xl' >Como ver una alerta, atenderla y agregar comentarios? </h1>
        <h2 className='text-xl' >Resumen del artículo.</h2>
        <p >En este articulo aprenderás a como poder ver, atender y agregar alertas dentro de la pestaña “Alertas por viaje” del Módulo de alertas  de Tramo. </p>
        <p > Esto será útil para poder ver el contenido de las alertas que puedan llegar sobre un viaje, como poder atenderlas con evidencia y como  poder ver y agregar un comentario sobre la misma.  </p>
        <h2 className='text-xl' > <strong> Contenido del artículo </strong> </h2>
        <ul className='ml-32 list-disc list-inside'>
          <li>¿Cómo ver una alerta?</li>
          <li>¿Cómo atender una alerta? </li>
          <li>¿Cómo agregar un comentario? </li>
        </ul> <br />

        <p > <strong>¿Cómo ver una alerta?</strong></p>
        <p > <strong>Pasos</strong></p>
        <p > <strong>Paso 1: </strong> Ve a tu módulo de alertas, aquí podrás encontrar las alertas agrupadas por viaje, una vez aquí darás clic al viaje con la alerta que 
        quieras ver.</p>
        <img src={VerAlerta1} alt="" 
        className='mx-auto w-[700px] h-[600px]' /> <br />
        <p ><strong>Paso 2: </strong>En la parte derecha del módulo podrás ver las diferentes alertas que se han registrado al viaje, da clic en “Ver alerta” para que 
        Tramo te muestre una nueva ventana con la información de esta. </p>
        <p > Aquí podrás ver toda la información de la alerta registrada, desde las coordenadas en las que se registró la alerta hasta la fecha en la 
        que pasó, la fecha en la que se le dio atención, el tiempo de la reacción y por quien fue atendida la alerta. </p>
        <img src={VerAlerta2} alt="" 
        className='mx-auto w-[700px] h-[500px]' />  <br />
        <p ><strong>¿Cómo atender una alerta?</strong></p>
        <p > <strong> Pasos </strong> </p>
        <p ><strong>Paso 1: </strong> Sígue los mismos pasos de "¿Cómo ver una alerta?  </p>        
        <p ><strong>Paso 2: </strong> Paso 2: Una vez estes en la alerta, podrás ver un botón “Atender alerta” en la esquina inferior derecha, haz clic en él y te 
        llevará a la siguiente ventana.  </p>        
        <img src={Boton} alt="" 
        className='mx-auto w-[300px] h-[100px]' /> <br />
        <p > Aquí te pedirá la siguiente información </p>
        <ol className="ml-32 list-decimal list-inside">
          <li className="mb-2">Ubicación</li>
          <li className="mb-2">Observaciones</li>
          <li className="mb-2">Estatus</li>
          <li className="mb-2">Situación</li>
          <li className="mb-2">Evidencia</li>
        </ol> 
        <br /> 
        <img src={AtenderAlerta1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p >Llena los campos de acuerdo con la información que tengas y tendrás dos opciones; </p>
        <ul className=" list-decimal list-inside">
          <li className="mb-2">Escalar alerta: Te permitirá hacer una escalación, llevando esta alerta a niveles superiores para que ellos se encarguen de atender la alerta.</li>
          <div className='flex mr-64' >
          <img src={AtenderAlerta3} alt="" 
        className='mx-auto w-[320px] h-[104px]' /> 
          <p className='mt-6'>Si decidiste escalar la alerta, la siguiente notificación 
            aparecerá marcando con éxito la resolución de esta:</p>
          </div>
          <li className="mb-2">Atender alerta: Al dar clic a esta opción, darás la alerta como atendida y se mostrará completada con todos los datos que hayas puesto. </li>
          <div className='flex mr-64' >
          <img src={AtenderAlerta2} alt="" 
        className='mx-auto w-[320px] h-[104px]' /> 
          <p className='mt-6'>Si decidiste atender la alerta, la siguiente notificación 
            aparecerá marcando con éxito la resolución de esta:</p>
          </div>
        </ul> <br />
        <p ><strong> Cómo agregar un comentario </strong> </p>
        <p > <strong> Pasos: </strong> </p>
        <p ><strong> Paso 1: </strong> Sigue los mismos pasos de “¿Cómo ver una alerta?”. </p>
        <p ><strong> Paso 2: </strong> Al llegar a las pestañas de la alerta donde queramos agregar el comentario, haz clic en la pestaña “Comentarios”. </p>
        <p ><strong> Paso 3: </strong> Paso 3: Haz clic en “agregar comentario”, te aparecerá una nueva ventana donde podrás agregar la información para poder 
        hacer la adicción.  </p>
        <p > La información que debes llenar es: </p>
        <ol className=" list-decimal list-inside">
          <li className="mb-2">Ubicación</li>
          <li className="mb-2">Observaciones</li>
          <li className="mb-2">Estatus</li>
          <li className="mb-2">Situación</li>
          <li className="mb-2">Evidencia</li>
        </ol> <br />
        <img src={AgregarComnt1} alt="" 
        className='mx-auto w-[900px] h-[700px]' /> <br />
        <p > Una vez ingresada toda la información de acuerdo con tus datos, haz clic en “Agregar registro” para que Tramo pueda agregar el nuevo 
        comentario. </p>
        <img src={AgregarComnt2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > Una notificación aparecerá mostrando la adicción. </p>
        <img src={AgregarComnt3} alt="" 
        className='mx-auto w-[320px] h-[104px]' />

        </div>

      <ScrollUpBttn />
      
        </div>


      </>
    );
  
  }

  export default ArticuloCVUA;