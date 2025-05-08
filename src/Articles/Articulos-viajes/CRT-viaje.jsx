
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import C1 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/C1.png'
import C2 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/C2.png'
import CRT1 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/CRT 1.png'
import CRT2 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/CRT 2.png'
import R1 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/R1.png'
import R2 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/R2.png'
import T1 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/T1.png'
import T2 from '../../assets/Imagenes-articulos/M-Viajes/CRT viaje/T2.png'
import Arrow from '../../assets/Arrow.png'


function ArticuloCRTV() { 
    return (
      <>
        <Header />
        <div className='ml-44'> <BreadcrumbNav  /> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='text-center'> Cancelar, Reprogramar y Terminar un viaje. </h1>
        <h2 className='ml-48'> <strong> Resumen del artículo. </strong></h2>
        <p className='ml-48'>En este articulo encontrarás información sobre como poder cancelar, reprogramar o terminar un viaje de tu módulo <br />
        de viajes en Tramo.  </p>
        <p className='ml-48'> Aprenderás las diferentes opciones para poder trabajar con tus viajes creados y poder tener aún más control sobre <br />
        ellos.   </p>
        <h2 className='ml-48'> <strong> Pasos </strong> </h2>
        <p className='ml-48'> <strong>Paso 1: </strong> Dirígete a tu Módulo de viajes, haz clic en el viaje que desees modificar. </p>
        <p className='ml-48'> Te aparecerá, en este casó usaremos como ejemplo el primer viaje de la siguiente imagen: </p>
        <img src={CRT2} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-48'> <strong>Paso 2: </strong> Aquí aparcerán tres opciones, dependiendo de lo que busques es la opción en la que harás clic </p>
        <p className='ml-48'> Cancelar viaje, Reprogramar y Terminar viaje. </p>
        <p className='ml-48'> Dependiendo de lo que quieras hacer serán los pasos que deberás seguir para hacer este proceso exitoso.  </p>
        <img src={CRT1} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <ol className='ml-60 list-decimal list-inside'>
          <li> <strong> Cancelar viaje: </strong> Esta opción como su nombre lo indica te permitirá cancelar <br />
          un viaje sin importar en la fase que este esté, nos pedirá confirmación para <br />
          poder hacer la cancelación con éxito (Se necesitan permisos especiales para esta opción).  </li>
          <div className='flex -ml-20'>
          <img src={C1} alt="" 
          className='w-[400px] h-[200px]' />
          <img src={Arrow} alt="" 
          className='w-[390px] h-[200px]' />
          <img src={C2} alt=""
          className='mr-48 w-[380px] h-[200px]' />
          </div>
          <li> <strong> Reprogramar viaje: </strong> En esta opción como su nombre lo indica nos permitirá reprogramar <br />
          el viaje al que le diste clic sin importar la fase en la que este viaje se encuentre, al darle clic <br />
          aparecerá una ventana pidiendo reemplazar la información para poder reemplazarla, una vez <br />
          ingresada dicha información podremos confirmar para poder reprogramar el viaje <br />
          (Se necesitan permisos especiales para esta opción).  </li>
          <div className='flex -ml-40'>
          <img src={R1} alt="" 
          className='w-[400px] h-[600px]' />
          <img src={Arrow} alt="" 
          className='mt-40 w-[390px] h-[200px]' />
          <img src={R2} alt=""
          className='mt-40 w-[380px] h-[200px]' />
          </div>

          <li> Terminar viaje: Esta opción como su nombre lo indica te permitirá dar el viaje por terminado, <br />
          podemos terminar el viaje desde que la unidad deja el primer punto de la ruta, al darle clic <br />
          aparecerá una ventana de confirmación preguntando si estamos seguros de terminar el viaje <br /> 
          (Se necesitan permisos especiales para esta opción).   </li>
        </ol>
        <div className='flex ml-36'>
          <img src={T1} alt="" 
          className='w-[400px] h-[200px]' />
          <img src={Arrow} alt="" 
          className=' w-[200px] h-[200px]' />
          <img src={T2} alt=""
          className=' w-[380px] h-[200px]' />
          </div>




<a href="#Inicio">Inicio</a>

        </div>
        
      </>
    );
  
  }

  export default ArticuloCRTV;