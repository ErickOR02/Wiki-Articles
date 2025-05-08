
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import ConfigSub1 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Config sub 1.png'
import ConfigSub2 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Config sub 2.png'
import ConfigSub3 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Config sub 3.png'
import ConfigSub4 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Config sub 4.png'
import ConfigSub5 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Config sub 5.png'
import ConfigSub6 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Config sub 6.png'
import ModSub1 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Modificar sub 1.png'
import ModSub2 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Modificar sub 2.png'
import ModSub3 from '../../assets/Imagenes-articulos/M-Configuracion/Como configurar mi suscripcion/Modificar sub 3.png'

function ArticuloCCMS() { 
    return (
      <>
        <Header />
        <div className='ml-44'> <BreadcrumbNav  /> </div>
        <div className='flex flex-col'>
        <h1 id='Inicio' className='text-center'>¿Cómo configurar mi suscripción? </h1>
        <h2 className='ml-48'>Resumen del artículo.</h2>
        <p className='ml-48'>En Tramo, tú tienes la libertad de decidir que módulo quieres usar, si te gusta te lo quedas, si no, lo quitas, y solamente <br />
        te cobramos por lo que usas, aquí aprenderás a como configurar tu suscripción en Tramo para poder elegir que usar y <br /> que quitar.  </p>
        <h2 className='ml-48'>Pasos: </h2>
        <p className='ml-48'> <strong>Paso 1: </strong> Una vez estes en las configuraciones de Tramo, haz clic en “Suscripción”.  </p>
        <img src={ConfigSub1} alt="" 
        className='mx-auto w-[700px] h-[500px]' />
        <p className='ml-48'><strong>Paso 2: </strong>En la siguiente página, podrás consultar toda la información relacionada con tu suscripción actual, incluyendo <br />
        la cantidad de unidades contratadas y los módulos activos asociados a tu cuenta. </p>
        <p className='ml-48'> Desde este espacio, tienes la posibilidad de agregar o eliminar unidades y/o módulos, lo cual cambiará el costo mensual <br />
        de tu suscripción. </p>
        <p className='ml-48'> Se mostrará el costo detallado por unidad y por flota, así como el cargo correspondiente a cada módulo activo. Al final, <br />
        podrás visualizar el total actual, tanto por unidad como por flota. Si decides realizar alguna modificación, se reflejará el <br />
        ajuste correspondiente en el total final.  </p>
        <p className='ml-48'> Una vez aplicado los cambios que desees hacer el botón “Guardar cambios” se iluminará y podrás hacer clic en este. </p>
        <img src={ConfigSub2} alt="" 
        className='mx-auto w-[700px] h-[500px]' />      
        <p className='ml-48'><strong>Paso 3: </strong> Al haber guardado los cambios, la siguiente ventana aparecerá mostrándote los ajustes que fueron hechos a tu <br />
        suscripción, el costo anterior a los cambios y el nuevo costo que tendrás. </p>
        <p className='ml-48'> Si decidiste hacer este cambio el mismo día de tu fecha normal de facturación solamente pagarás el ajuste como lo haces <br />
        normalmente mes con mes, pero si hiciste los cambios días o semanas antes de la fecha de facturación deberás pagar el <br />
        equivalente a lo que usarás por el resto del mes con el nuevo ajusta al momento de confirmar los cambios.  </p>
        <p className='ml-48'> Tramo te mostrará tus unidades, módulos y costo actualizados después del ajuste. Una vez que hayas confirmado que todo <br />
        este bien haz clic en “Confirmar”.  </p>
        <img src={ConfigSub3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'><strong>Paso 4: </strong> Después de confirmar los ajustes, Tramo te mostrará la siguiente alerta para que puedas realizar el pago por “Stripe”.  </p>
        <p></p>
        <img src={ConfigSub4} alt=""  
        className='mx-auto w-[500px] h-[380px]' /> <br />
        <p className='ml-48'> <strong> Paso 5: </strong> Una vez en “Stripe” podrás hacer el pago, aquí aparecerán los datos necesarios para hacer la transferencia bancaria <br />
        por SPEI.  </p>
        <img src={ConfigSub5} alt=""  
        className='mx-auto w-[400px] h-[600px]' /> <br />
        <p className='ml-48'> <strong> Paso 6: </strong> Una vez hecho el pago, Tramo necesitará confirmarlo, este se verá reflejado el mismo día o hasta el siguiente día <br />
        hábil y una vez confirmado, tendrás acceso a las unidades o módulos que hayas contratado.</p>
        <img src={ConfigSub6} alt=""  
        className='mx-auto w-[500px] h-[100px]' /> <br />
        <p className='ml-48'> <strong>Nota: </strong> En caso de que necesites reducir unidades o quitar módulos haz lo siguiente:  </p> 
        <p className='ml-48'> <strong> Paso 1: </strong> Si deseas reducir las unidades que tienes agregadas, deberás reducirlas haciendo clic en el recuadro de unidades, en <br />
        el símbolo de menos “-“. </p>
        <p className='ml-48'> Si deseas quitar algún módulo, simplemente deberás desmarcar el recuadro del módulo que ya no quieras ocupar y haz clic en <br />
        “Guardar cambios”.  </p>        
        <img src={ModSub1} alt=""  
        className='mx-auto w-[800px] h-[800px]' /> <br />
        <p className='ml-48'> <strong> Paso 2: </strong> Una vez te encuentres en la siguiente ventana, te mostrará el ajuste hecho con los costos reducidos gracias a la <br />
        reducción de unidades o al haber removido algún módulo, este precio se verá reflejado en tu siguiente fecha de facturación, <br />
        haz clic en “Confirmar”.  </p>
        <img src={ModSub2} alt=""  
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p className='ml-48'> La siguiente notificación aparecerá mostrándote que tu subscripción ha sido actualizada.  </p>
        <img src={ModSub3} alt=""  
        className='mx-auto w-[600px] h-[180px]' /> <br />


<a href="#Inicio">Inicio</a>

        </div>
        
      </>
    );
  
  }

  export default ArticuloCCMS