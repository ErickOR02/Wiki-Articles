
import Header from '../../Header/Header.jsx'
import BreadcrumbNav from '../../Header/Breadcrumb.jsx';
import ScrollUpBttn from '../../Header/ScrollUpBttn.jsx';
import HomeBttn from '../../Header/HomeBttn.jsx';


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
        <div className='ml-28'> <BreadcrumbNav  /> </div>
        <div className='ml-[125px]'> <HomeBttn /> </div>

        <div className='flex flex-col'>
        <div className="ml-32 w-[1024px] break-words">
        <h1 className='text-2xl font-bold'>¿Cómo configurar mi suscripción? </h1>
        <h2 className='text-xl font-bold'>Resumen del artículo.</h2>
        <p >En Tramo, tú tienes la libertad de decidir que módulo quieres usar, si te gusta te lo quedas, si no, lo quitas, y solamente te cobramos por 
        lo que usas, aquí aprenderás a como configurar tu suscripción en Tramo para poder elegir que usar y que quitar.  </p>
        <h2 className='text-xl font-bold'>Pasos: </h2>
        <p > <strong>Paso 1: </strong> Una vez estes en las configuraciones de Tramo, haz clic en “Suscripción”.  </p>
        <img src={ConfigSub1} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p ><strong>Paso 2: </strong>En la siguiente página, podrás consultar toda la información relacionada con tu suscripción actual, incluyendo la cantidad de 
        unidades contratadas y los módulos activos asociados a tu cuenta. </p>
        <p > Desde este espacio, tienes la posibilidad de agregar o eliminar unidades y/o módulos, lo cual cambiará el costo mensual de tu 
        suscripción. </p>
        <p > Se mostrará el costo detallado por unidad y por flota, así como el cargo correspondiente a cada módulo activo. Al final, podrás 
        visualizar el total actual, tanto por unidad como por flota. Si decides realizar alguna modificación, se reflejará el ajuste correspondiente en 
        el total final.  </p>
        <p > Una vez aplicado los cambios que desees hacer el botón “Guardar cambios” se iluminará y podrás hacer clic en este. </p>
        <img src={ConfigSub2} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br /> 
        <p ><strong>Paso 3: </strong> Al haber guardado los cambios, la siguiente ventana aparecerá mostrándote los ajustes que fueron hechos a tu suscripción, el 
        costo anterior a los cambios y el nuevo costo que tendrás. </p>
        <p > Si decidiste hacer este cambio el mismo día de tu fecha normal de facturación solamente pagarás el ajuste como lo haces normalmente 
        mes con mes, pero si hiciste los cambios días o semanas antes de la fecha de facturación deberás pagar el equivalente a lo que usarás 
        por el resto del mes con el nuevo ajusta al momento de confirmar los cambios.  </p>
        <p > Tramo te mostrará tus unidades, módulos y costo actualizados después del ajuste. Una vez que hayas confirmado que todo este bien haz 
        clic en “Confirmar”.  </p>
        <img src={ConfigSub3} alt="" 
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p ><strong>Paso 4: </strong> Después de confirmar los ajustes, Tramo te mostrará la siguiente alerta para que puedas realizar el pago por “Stripe”.  </p>
        <p></p>
        <img src={ConfigSub4} alt=""  
        className='mx-auto w-[500px] h-[380px]' /> <br />
        <p > <strong> Paso 5: </strong> Una vez en “Stripe” podrás hacer el pago, aquí aparecerán los datos necesarios para hacer la transferencia bancaria por SPEI.  </p>
        <img src={ConfigSub5} alt=""  
        className='mx-auto w-[600px] h-[700px]' /> <br />
        <p > <strong> Paso 6: </strong> Una vez hecho el pago, Tramo necesitará confirmarlo, este se verá reflejado el mismo día o hasta el siguiente día hábil y una vez 
        confirmado, tendrás acceso a las unidades o módulos que hayas contratado.</p>
        <img src={ConfigSub6} alt=""  
        className='mx-auto w-[500px] h-[100px]' /> <br />
        <p > <strong>Nota: </strong> En caso de que necesites reducir unidades o quitar módulos haz lo siguiente:  </p> 
        <p > <strong> Paso 1: </strong> Si deseas reducir las unidades que tienes agregadas, deberás reducirlas haciendo clic en el recuadro de unidades, en el símbolo 
        de menos “-“. </p>
        <p > Si deseas quitar algún módulo, simplemente deberás desmarcar el recuadro del módulo que ya no quieras ocupar y haz clic en “Guardar 
        cambios”.  </p>        
        <img src={ModSub1} alt=""  
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > <strong> Paso 2: </strong> Una vez te encuentres en la siguiente ventana, te mostrará el ajuste hecho con los costos reducidos gracias a la reducción de 
        unidades o al haber removido algún módulo, este precio se verá reflejado en tu siguiente fecha de facturación, haz clic en “Confirmar”.  </p>
        <img src={ModSub2} alt=""  
        className='mx-auto w-[700px] h-[500px]' /> <br />
        <p > La siguiente notificación aparecerá mostrándote que tu subscripción ha sido actualizada.  </p>
        <img src={ModSub3} alt=""  
        className='mx-auto w-[320px] h-[148px]' /> <br />
      </div>

      <ScrollUpBttn />

        </div>
        
      </>
    );
  
  }

  export default ArticuloCCMS