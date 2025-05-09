
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import HomeBttn from '../../Header/HomeButton.jsx';


import AjustCon1 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar contraseña 1.png'
import AjustCon2 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar contraseña 2.png'
import AjustCuenta1 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar cuenta 1.png'
import AjustCuenta2 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar cuenta 2.png'
import AjustCuenta3 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar cuenta 3.png'






function ArticuloCADCC() { 
    return (
      <>
        <Header />
        <div className='ml-44'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px] w-[1024px] h-[190px] bg-gray-600'> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='ml-32'>¿Cómo ajustar los datos de tu cuenta y <br />
        cambiar tu contraseña?  </h1>
        <h2 className='ml-32'>Resumen del artículo.</h2>
        <p className='ml-32'>En este articulo aprenderás a como poder ajustar los datos de tu cuenta, así como poder cambiar tu contraseña actual por una nueva. </p>
        <h2 className='ml-32'>Pasos: </h2>
        <p className='ml-32'> Cambiar datos de cuenta: </p>
        <p className='ml-32'> <strong>Paso 1: </strong> Una vez estes en la sección de configuración de Tramo, en “Perfil”, podrás ver tu información básica como tu nombre, usuario, <br />
        correo, etc.   </p>
        <img src={AjustCon1} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-32'><strong>Paso 2: </strong> Una vez cambia la información, haz clic en el botón “Guardar cambios”. </p>
        <img src={AjustCuenta1} alt="" 
        className='mx-auto w-[700px] h-[500px]' />        
        <div className='flex ml-64 mt-12'>
        <p className='mt-20'> La siguiente notificación aparecerá mostrando <br /> que los cambios han sido guardados. </p>
        <img src={AjustCon2} alt=""
        className='mt-10 w-[320px] h-[120px]' />
        </div> <br />
        <p className='ml-32'> <strong> Cambiar contraseña: </strong> </p>
        <p className='ml-32'> <strong> Paso 1: </strong> En la misma sección, en la parte inferior de “Datos de la cuenta”, encontrarás el espacio para poder hacer el cambio de <br />
        contraseña (en caso de no recordar tu contraseña deberás hablar con tu administrador para que haga el cambio). </p>
        <p className='ml-32'> Deberás ingresar tu contraseña actual y tu nueva contraseña, la nueva contraseña deberá contener:  </p>
        <ul className='ml-32 list-disc list-inside'>
          <li> Al menos 8 caracteres </li>
          <li> Letras de la Aa a la Zz </li>
        </ul>
        <p className='ml-32'> Tramo no acepta caracteres especiales </p>
        <img src={AjustCuenta2} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-32'> Una vez ingresada la contraseña actual y la nueva contraseña con su confirmación, haz clic en “cambiar contraseña” </p>      
        <p className='ml-32'> La siguiente notificación aparecerá mostrando el éxito al cambiar la contraseña. </p>
        <img src={AjustCuenta3} alt=""
        className='mx-auto w-[500px] h-[200px]' /> <br />
        </div>
        

      <a className='ml-20' href="#Inicio">
      <HomeBttn />
      </a>
 
      </>
    );
  
  }

  export default ArticuloCADCC