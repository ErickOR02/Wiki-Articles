
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import HomeBttn from '../../Header/HomeButton.jsx';

import Emptybttn from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/ButtonEmpty.png'
import FilterBttn from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/FilterButton.png'
import Button from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/Button.png'
import Filtros from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/Filtros.png'
import Pagination from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/Pagination.png'
import SearchBar from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/SearchBar.png'
import Tabs1 from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/Tabs 1.png'
import Tabs from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/Tabs.png'
import ViajeInfo from '../../assets/Imagenes-articulos/M-Viajes/Como esta organizada la información/ViajeInfo.png'


function ArticuloCEOLI() { 
    return (
      <>
        <Header />
        <div className='ml-44'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px] w-[1024px] h-[190px] bg-gray-600'> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='ml-32'> ¿Cómo está organizada la información en Tramo? </h1>
        <h2 className='ml-32'> Conoce tu Módulo de Viaje </h2>
        <h2 className='ml-32'> <strong> Resumen del artículo. </strong></h2>
        <p className='ml-32'>En este articulo conocerás la herramienta de gestión de viajes de Tramo, también conocida como “Módulo de viajes”, a continuación, <br /> 
        verás toda la información que puedes encontrar en este Módulo así también como links con más información para los diferentes puntos <br />
        del Módulo de viajes   </p>
        <img src={Tabs1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <ol className='ml-32 list-decimal list-inside'>  
          <li>  {/* 1 */} 
          Aquí podrás crear un nuevo viaje y poder agregarlo al módulo de viaje. <br /> <br />
          <img src={Button} alt="" 
          className=' w-[150px] h-[40px]' />
          </li> <br />

          <li>  {/* 2 */}
          Estas son las pestañas del Módulo de viaje, aquí podrás aislar tus viajes con la información que quieras como por ejemplo los viajes que cuentan <br />
          con alertas, viajes programados, viajes en ruta, viajes finalizados. <br /> <br />
          <img src={Tabs} alt="" 
          className=' w-[800px] h-[40px]' />
          </li> <br />

          <li>  {/* 3 */}
          Aquí podrás hacer una búsqueda sobre un viaje. <br /> <br />
          <img src={SearchBar} alt="" 
          className=' w-[800px] h-[40px]' />
          </li> <br />

          <li>  {/* 4 */}
          Aquí podrás acceder a los filtros del módulo de viajes, podrás elegir cuales se mostrarán, cual agregar y cual quitar. <br /> <br />
          <img src={FilterBttn} alt="" 
          className=' w-[120px] h-[40px]' />
          </li> <br />
          
          <li>  {/* 5 */}
          Aquí podrás ordenar los viajes de tu módulo de viajes para tener la información ordenada a tu gusto. <br /> <br />
          <ol className='ml-20 list-inside'>
            <li> Estatus: Se mostrará el estatus actual del viaje, este puede ser “En ruta”, “programado” o “finalizado”.  </li>
            <li> Cliente: Se mostrará el nombre del cliente para el cual está dirigido el viaje.  </li>
            <li> Unidad: El tipo de unidad que fue seleccionado para el viaje.  </li>
            <li> Origen: El origen de donde salió la unidad.  </li>
            <li> Destino: El destino hacia dónde se dirige la unidad.  </li>
            <li> Llegada programada: La hora de llegada la cual fue seleccionada al crear el viaje.  </li>
            <li> ETA: Mostrará si el viaje tiene algún retraso, si es así de cuantos minutos o si el viaje va a tiempo. </li>
          </ol> <br />
          <img src={Filtros} alt="" 
          className=' w-[800px] h-[40px]' />
          </li> <br />

          <li>  {/* 6 */}
          Aquí podrás acceder a la información interna del viaje, bitácora, alertas, rutas, etc. <br /> <br />
          <img src={ViajeInfo} alt="" 
          className=' w-[400px] h-[150px]' />
          </li> <br />

          <li>  {/* 7 */}
          Aquí podrás ajustar cuantos viajes se mostrarán en una sola página. <br /> <br />
          <img src={Emptybttn} alt="" 
          className=' w-[140px] h-[20px]' />   
          </li> <br />

          <li>  {/* 8 */}
          Aquí podrás cambiar la página de tu módulo de viajes por si el viaje que buscas no está en la primera página. <br /> <br />
          <img src={Pagination} alt="" 
          className=' w-[150px] h-[40px]' />
          </li>
        </ol>

        <a className='ml-20' href="#Inicio">
      <HomeBttn />
      </a>


        </div>
        
      </>
    );
  
  }

  export default ArticuloCEOLI;