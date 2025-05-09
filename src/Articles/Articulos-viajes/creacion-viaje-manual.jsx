
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import HomeBttn from '../../Header/HomeButton.jsx';


import CVM1 from '../../assets/Imagenes-articulos/M-Viajes/Creacion de viaje manual/C1.png'
import CVM2 from '../../assets/Imagenes-articulos/M-Viajes/Creacion de viaje manual/C2.png'
import CVM3 from '../../assets/Imagenes-articulos/M-Viajes/Creacion de viaje manual/C3.png'
import CVM4 from '../../assets/Imagenes-articulos/M-Viajes/Creacion de viaje manual/C4.png'
import CVM5 from '../../assets/Imagenes-articulos/M-Viajes/Creacion de viaje manual/C5.png'


function ArticuloCVM() { 
    return (
      <>
        <Header />
        <div className='ml-44'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px] w-[1024px] h-[190px] bg-gray-600'> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='text-center'> Creación de viaje manual </h1>
        <h2 className='ml-32'> <strong> Resumen del artículo. </strong></h2>
        <p className='ml-32'> Existen dos formas de crear viajes en Tramo.   </p>
        <ol className='ml-32 list-decimal list-inside'>
          <li> La primera es de forma manual, en la que los viajes se crean de forma individual.  </li>
          <li> La segunda es de forma masiva, en la que varios viajes pueden cargarse a Tramo por medio de un layout en Excel. </li>
        </ol> <br />
        <p className='ml-32'> En este artículo aprenderás a crear un viaje de forma manual. </p>
        <img src={CVM1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        
        <p className='ml-32'> <strong> Pasos: </strong>   </p>
        <p className='ml-32'> <strong> Paso 1: </strong> Dentro del módulo de viajes haz clic en el botón “nuevo viaje” ubicado en la esquina superior derecha de la pantalla. </p>
        <p className='ml-32'> <strong> Paso 2: </strong> Aparecerá una ventana donde podrás llenar toda la información del viaje. Hay tres secciones que deben llenarse: Detalles, <br />
        Logística y Asignación. A continuación, detallaremos que debes llenar en cada sección.  </p>
        <img src={CVM2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        
        <p className='ml-32'> <strong> Paso 3: </strong> En la sección “Detalles” podrás ingresar la información básica del viaje. Podrás ver que hay distintos campos dentro de la sección, <br />
        no es necesario llenar los campos que tienen la palabra “Opcional” debajo de ellos. </p>
        <ol className='ml-60 list-decimal list-inside'>
          <li> ID externo (opcional): Aquí puedes ingresar un ID externo que manejen dentro de tu empresa.  </li>
          <li> Tipo de viaje (obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar el tipo de viaje. <br />
          Aparecerán los tipos de viajes que hayan sido dados de alta en el catálogo correspondiente. Si el tipo de viaje que necesitas <br />
          no aparece en el listado puedes crearlo directamente haciendo clic en “Nuevo tipo de viaje”  </li>
          <li> Tipo de carga (obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar el tipo de carga. <br />
          Aparecerán los tipos de carga que hayan sido dados de alta en el catálogo correspondiente. Si el tipo de carga que necesitas <br />
          no aparece en el listado puedes crearlo directamente haciendo clic en “Nuevo tipo de carga” </li>
          <li> Cliente (obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar el cliente. Aparecerán los <br />
          clientes que hayan sido dados de alta en el catálogo correspondiente. Si el cliente que necesitas no aparece en el listado <br />
          puedes crearlo directamente haciendo clic en “Nuevo cliente” </li>
          <li> Carta porte (opcional): En este campo debes ingresar el número de carta porte correspondiente al viaje.  </li>
          <li> Descripción del viaje (opcional): En este campo puedes escribir una descripción breve del viaje en caso de ser necesario.  </li>
        </ol> <br />

        <p className='ml-32'> <strong> Paso 4: </strong> En la sección “Logística” podremos ingresar los puntos que conformarán la ruta de nuestro viaje. Por default tendremos dos <br />
        puntos, A (Inicio) y B (Fin).  Para agregar un nuevo punto basta con hacer clic en el botón “Agregar punto” ubicado en la parte inferior.  </p>

        <p className='ml-32'> <strong> Paso 5: </strong> El siguiente paso en configurar los puntos que conformarán nuestro viaje. Los siguientes puntos deberán seguirse para cada <br />
        punto que agregues al viaje. </p>
        <ol className='ml-60 list-decimal list-inside'>
          <li> Ubicación (obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar la ubicación del punto. <br />
          Aparecerán las ubicaciones que hayan sido dadas de alta en el catálogo correspondiente. Si la ubicación que necesitas no <br />
          aparece en el listado puedes crearla directamente haciendo clic en “Nuevo ubicación”. </li>
          <li> Tipo de destino (obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar el tipo de destino <br />
          del punto. Aparecerán los tipos de destino que hayan sido dados de alta en el catálogo correspondiente. Si el tipo de destino <br />
          que necesitas no aparece en el listado puedes crearlo directamente haciendo clic en “Nuevo tipo de destino” </li>
          <li> Entrada (obligatorio): Aquí podrás seleccionar la fecha y hora de entrada al punto en cuestión.  </li>
          <li> Salida (obligatorio): Aquí podrás seleccionar la fecha y hora de salida del punto en cuestión.  </li>
          <li> Regresar al punto de origen (opcional): Si quieres que el viaje regrese al punto de origen debes seleccionar la casilla <br />
          “Regresar al punto de origen, esto hará que se automáticamente se agregue el punto de inicio A al final de viaje como <br />
          el punto C. El viaje quedaría así: A – B – C, donde A y C son iguales.  </li>
        </ol> <br />
        <img src={CVM3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-32'> <strong> Paso 6: </strong> En la sección “Asignación” podremos asignar la línea transportista, unidades y los operadores para el nuevo viaje: </p>
        <ol className='ml-60 list-decimal list-inside'>
          <li> Línea transportista (obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar la línea <br />
          transportista que asignaremos. Aparecerán las diferentes líneas transportistas que hayan sido dadas de alta en el catálogo <br />
          correspondiente. Si la línea transportista que necesitas no aparece en el listado puedes crearla directamente haciendo clic <br />
          en “Nueva línea transportista” (depende de los permisos del usuario).  </li> <br />

          <li> Unidades(obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar la unidad que <br />
          asignaremos al viaje. Aparecerán las diferentes unidades que hayan sido dadas de alta en el catálogo correspondiente. <br />
          Si la unidad que necesitas no aparece en el listado puedes crearla directamente haciendo clic en “Nueva unidad” <br />
          (depende de los permisos del usuario).  </li> <br />

          <li> Operadores(obligatorio): En este campo aparecerá una lista desplegable en la cual debes seleccionar el operador asignado <br />
          al viaje, en esta sección podemos asignar hasta un máximo de dos operadores por viaje. Aparecerán los diferentes operadores <br />
          que hayan sido dados de alta en el catálogo correspondiente. Si el operador que necesitas no aparece en el listado puedes <br />
          crearla directamente haciendo clic en “Nuevo operador” (depende de los permisos del usuario).  </li> 
        </ol> <br />
        <img src={CVM4} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />

        <p className='ml-32'> <strong> Paso 7: </strong> Una vez terminado el anterior paso, daremos clic en “Crear viaje” para así poder dar de alta el viaje con toda la información <br />
        agregada. Una vez completado, la siguiente notificación aparecerá en la esquina inferior derecha de la pantalla indicando la creación <br />
        del nuevo viaje y el mismo aparecerá en nuestro módulo de viaje. </p>
        <img src={CVM5} alt=""
        className='mx-auto w-[450px] h-[200px]' />

      <a className='ml-20' href="#Inicio">
      <HomeBttn />
      </a>

        </div>
        
      </>
    );
  
  }

  export default ArticuloCVM;