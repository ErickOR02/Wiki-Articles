
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import HomeBttn from '../../Header/HomeButton.jsx';

import Importar1 from '../../assets/Imagenes-articulos/M-Unidades/Como importar unidades/Importar-1.png'
import Importar2 from '../../assets/Imagenes-articulos/M-Unidades/Como importar unidades/Importar-2.png'
import Importar3 from '../../assets/Imagenes-articulos/M-Unidades/Como importar unidades/Importar-3.png'
import Importar4 from '../../assets/Imagenes-articulos/M-Unidades/Como importar unidades/Importar-4.png'
import Importar8 from '../../assets/Imagenes-articulos/M-Unidades/Como importar unidades/Importar-8.png'

function ArticuloCIU() { 
    return (
      <>
        <Header />
        <div className='ml-[108px]'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px] w-[1024px] h-[190px] bg-gray-600'> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='ml-32'>¿Como importar unidades? </h1>
        <h2 className='ml-32'>Resumen del artículo.</h2>
        <p className='ml-32'>En este artículo, te guiaremos en el proceso de importación de las unidades registradas en plataformas GPS. Actualmente, Tramo es <br /> 
        compatible con importaciones desde Wialon y Navixy. A continuación,                                                                                                                                      te mostramos los pasos necesarios para realizar una importación <br />
        exitosa. </p>
        <h2 className='ml-32'>Pasos: </h2>
        <p className='ml-32'> <strong>Paso 1: </strong>Dirígete a tu “módulo de unidades”, aquí encontrarás dos botones, este articulo te mostrará como importarlas. </p>
        <p className='ml-32'>Haz clic en “importar unidades”. </p>
        <img src={Importar1} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-32'><strong>Paso 2: </strong>Al hacer clic en 'Importar unidades', serás redirigido a la siguiente página, donde deberás completar los campos requeridos con <br />
        la información necesaria para acceder al asistente de importación de Tramo. En este paso, selecciona la plataforma de GPS correspondiente <br />
        e ingresa tu usuario y contraseña. </p>
        <img src={Importar2} alt="" 
        className='mx-auto w-[700px] h-[500px]' />      
        <p className='ml-32'><strong>Paso 3: </strong> Una vez ingresada la información, se mostrará una lista con todas las unidades disponibles de tu plataforma GPS. Desde ahí, <br />
        podrás seleccionar las unidades que deseas importar a Tramo. </p>
        <img src={Importar3} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-32'><strong>Paso 4: </strong> Deberás seleccionar las unidades que deseas importar a Tramo. En la tabla de unidades, encontrarás casillas de selección a la <br />
        izquierda para marcar las unidades correspondientes. Además, será necesario que elijas manualmente el tipo de unidad para asegurarte <br />
        de que se importe correctamente.  </p>
        <p></p>
        <p className='ml-32'><strong>Nota: </strong> Unidades disponibles te mostrará la cantidad de unidades que podrás importar a Tramo, esto dependerá de las unidades contratadas <br />
        que tengas. </p>
        <img src={Importar4} alt="" 
        className='mx-auto w-[600px] h-[400px]' />
        <p className='ml-32'> <strong> Paso 5: </strong> Una vez completados correctamente los pasos anteriores, recibirás una notificación confirmando que las unidades han sido importadas <br />
        y creadas exitosamente en Tramo.  </p>
        <img src={Importar8} alt="" 
        className='mx-auto w-[420px] h-[164px]' />

        <a className='ml-20' href="#Inicio">
        <HomeBttn />
        </a>

        </div>
        


      </>
    );
  
  }

  export default ArticuloCIU