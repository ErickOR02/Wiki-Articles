
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import ScrollUpBttn from '../../Header/ScrollUpBttn.jsx';
import HomeBttn from '../../Header/HomeBttn.jsx';


import AjustCon1 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar contraseña 1.png'
import AjustCon2 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar contraseña 2.png'
import AjustCuenta1 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar cuenta 1.png'
import AjustCuenta2 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar cuenta 2.png'
import AjustCuenta3 from '../../assets/Imagenes-articulos/M-Configuracion/Como ajustar los datos de tu cuenta y cambiar tu contraseña/Ajustar cuenta 3.png'






function ArticuloCADCC() { 
    return (
      <>
        <Header />
        <div className='ml-28'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px]'> <HomeBttn /> </div>

        <div className='flex flex-col'>
        <div className="ml-32 w-[1024px] break-words">
        <h1 className='text-2xl font-bold' >¿Cómo ajustar los datos de tu cuenta y cambiar tu contraseña?  </h1>
        <h2 className='text-xl font-bold' >Resumen del artículo.</h2>
        <p >En este articulo aprenderás a como poder ajustar los datos de tu cuenta, así como poder cambiar tu contraseña actual por una nueva. </p>
        <h2 className='text-xl font-bold' >Pasos: </h2>
        <p > Cambiar datos de cuenta: </p>
        <p > <strong>Paso 1: </strong> Una vez estes en la sección de configuración de Tramo, en “Perfil”, podrás ver tu información básica como tu nombre, usuario, 
        correo, etc.   </p>
        <img src={AjustCon1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p ><strong>Paso 2: </strong> Una vez cambia la información, haz clic en el botón “Guardar cambios”. </p>
        <img src={AjustCuenta1} alt="" 
        className='mx-auto w-[700px] h-[500px]' />        
        <div className='flex mt-12'>
        <p className='mt-20'> La siguiente notificación aparecerá mostrando  que los cambios han sido guardados. </p>
        <img src={AjustCon2} alt=""
        className='mt-10 w-[320px] h-[120px]' />
        </div> <br />
        <p > <strong> Cambiar contraseña: </strong> </p>
        <p > <strong> Paso 1: </strong> En la misma sección, en la parte inferior de “Datos de la cuenta”, encontrarás el espacio para poder hacer el cambio de 
        contraseña (en caso de no recordar tu contraseña deberás hablar con tu administrador para que haga el cambio). </p>
        <p > Deberás ingresar tu contraseña actual y tu nueva contraseña, la nueva contraseña deberá contener:  </p>
        <ul className='ml-32 list-disc list-inside'>
          <li> Al menos 8 caracteres </li>
          <li> Letras de la Aa a la Zz </li>
        </ul> <br />
        <p > Tramo no acepta caracteres especiales </p>
        <img src={AjustCuenta2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > Una vez ingresada la contraseña actual y la nueva contraseña con su confirmación, haz clic en “cambiar contraseña” </p>      
        <p > La siguiente notificación aparecerá mostrando el éxito al cambiar la contraseña. </p>
        <img src={AjustCuenta3} alt=""
        className='mx-auto w-[320px] h-[104px]' /> <br />
        </div>
        </div>

      <ScrollUpBttn />
 
      </>
    );
  
  }

  export default ArticuloCADCC