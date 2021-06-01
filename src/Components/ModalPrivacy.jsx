import { useDialog } from "react-st-modal";
import React from "react";
import "./ModalPrivacy.css";

function ModalPreSingup() {
  const dialog = useDialog();
  return (
    <div className="ps-modalForm-container">
      <div className="ps-titleModal">Aviso de privacidad</div>
      <div className="privacyContainer">
        <p>
          <strong>Cláusula I.- Identidad y domicilio del responsable</strong>
          <br />
          <br />
          Nacional Monte de Piedad I.A.P. (NMP), con domicilio en avenida Paseo
          de la Reforma N° 355 y 359, Colonia Cuauhtémoc, C.P. 06500, Delegación
          Cuauhtémoc, México, D.F., es responsable de recabar los datos
          personales y sensibles del titular, del manejo de los mismos y de su
          protección.
        </p>
        <p>
          <strong>Cláusula II.- Finalidades del tratamiento</strong>
          <br />
      <br />
          Los datos personales, que le proporcione al NMP, serán utilizados para
          las siguientes finalidades: tomar decisiones de reclutamiento y
          selección; hacer evaluaciones para contratación, confirmación de datos
          de identidad, datos laborales, situación económica, penales,
          patrimoniales y de salud; solicitar referencias personales y
          laborales; conformar expedientes de candidatos a empleados; mantener
          comunicación con el candidato durante el proceso de reclutamiento y
          selección. Adicional a lo anterior, para aquellas actividades
          secundarias de fines estadísticos que nos ayude a mejorar los
          servicios proporcionados por el NMP.
        </p>

        <p>
          En caso de que desee que sus datos personales no sean tratados para
          los fines antes mencionados, usted puede presentar desde este momento
          un escrito en las oficinas del NMP, manifestando lo anterior. Solicite
          el formato correspondiente con el personal de Reclutamiento y
          Selección o al correo electrónico{" "}
          <a href="mailto:datospersonales@montepiedad.com.mx">
            datospersonales@montepiedad.com.mx
          </a>
        </p>

        <p>
          <strong>
            Cláusula III.-Datos personales solicitados para realizar tratamiento
          </strong>
          <br />
      <br />
          Para llevar a cabo las finalidades descritas en el presente aviso de
          privacidad, utilizaremos los siguientes datos personales: de
          identificación, contacto y ubicación, referencias laborales,
          características físicas, biométricos, académicos, patrimoniales,
          financieras y socio demográficos.
        </p>

        <p>
          <strong>Cláusula IV.- Datos personales sensibles</strong>
          <br />
      <br />
          Le informamos que para cumplir las finalidades previstas en este aviso
          de privacidad, serán recabados y tratados datos personales sensibles,
          como aquellos que refieren a su estado de salud, comportamiento,
          conducta e integridad, Ideológicos, políticos, étnicos o racial y de
          afiliación sindical. Nos comprometemos a que los mismos serán tratados
          bajo las más estrictas medidas de seguridad que garanticen su
          confidencialidad.
        </p>

        <p>
          <strong>Cláusula V.- Medios de contacto con los titulares</strong>
          <br />
      <br />
          Los medios de contacto que utilizaremos para las finalidades descritas
          en el presente aviso son: Presencial, telefónico (domicilio o
          trabajo), correo electrónico, SMS, correo tradicional (red postal),
          redes sociales o cualquier otro que usted nos indique.
        </p>

        <p>
          <strong>Cláusula VI.- Transferencias</strong>
          <br />
      <br />
          Le informamos que sus datos podrán ser compartidos con las siguientes
          personas, empresas y organizaciones distintas a nosotros, para los
          siguientes fines:
        </p>

        <p className="justify">
          Nos comprometemos a no transferir su información personal a terceros
          sin su consentimiento, salvo las excepciones previstas en el art. 37
          de la Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares.
        </p>

        <p>
          <strong>
            Cláusula VII.- Aceptación u oposición de transferencias o negativa
            al tratamiento de datos personales
          </strong>
          <br />
      <br />
          En caso de que desee que sus datos personales no sean trasferidos
          usted puede presentar desde este momento un escrito en las oficinas
          del NMP, manifestando lo anterior. Solicite el formato correspondiente
          con el personal de Reclutamiento y Selección o al correo electrónico{" "}
          <a href="mailto:datospersonales@montepiedad.com.mx">
            datospersonales@montepiedad.com.mx
          </a>
          .
        </p>
        <p>
          Se entenderá que ha otorgado su consentimiento para el tratamiento de
          sus datos personales descritos en el presente aviso, para ello con el
          registro de su huella dactilar, a través de su firma autógrafa, firma
          electrónica, o cualquier mecanismo de autenticación que al efecto se
          establezca.
        </p>
        <p>
          <strong>
            Cláusula VIII.- Medios y procedimiento para ejercer los derechos
            ARCO y para revocar el consentimiento del tratamiento de datos
            personales
          </strong>
          <br />
      <br />
          El titular tiene el derecho de acceder, rectificar, cancelar sus datos
          personales, oponerse al tratamiento de dichos datos o bien
          desautorizar el consentimiento que para tal fin haya otorgado
          previamente al NMP.
        </p>
        <p>
          Para la salvaguarda de sus derechos ARCO y para revocar el
          consentimiento al tratamiento de datos personales, el titular podrá
          utilizar los procedimientos implementados a su favor, publicados en el
          sitio webhttp://www.montepiedad.com.mx o solicitarlos directamente al
          número 800 MONTE (35 666 83) o la Oficina de Protección de Datos
          Personales al correo electrónico{" "}
          <a href="mailto:datospersonales@montepiedad.com.mx">
            datospersonales@montepiedad.com.mx
          </a>
        </p>
        <p>
          Es importante que tenga en cuenta que para revocar el consentimiento
          del tratamiento de datos personales, es posible que por alguna
          obligación legal requiramos seguir tratando sus datos personales.
          Asimismo, usted deberá considerar que para ciertos fines, la
          revocación de su consentimiento implicará que no le podamos seguir
          prestando el servicio que nos solicitó, o la conclusión de su relación
          con nosotros.
        </p>
        <p>
          Para dar cumplimiento a la obligación de acceso, el titular lo tendrá
          que solicitar por escrito conforme al procedimiento mencionado en
          párrafos anteriores y le serán entregados de manera gratuita, dentro
          del plazo de 20 días naturales, a partir de la fecha de la solicitud.
        </p>

        <p>
          La respuesta a la solicitud de revocación del consentimiento para el
          tratamiento de datos personales, será de 20 días a partir de la fecha
          de solicitud.
        </p>
        <p>
          <strong>
            Cláusula IX.- Opciones y medios para limitar el uso o divulgación de
            tus datos personales
          </strong>
          <br />
      <br />
          El titular podrá limitar el uso o divulgación de sus datos personales
          y su negativa a seguir recibiendo comunicados o promociones de nuestra
          parte, mediante su registro en las listas de exclusión del responsable
          (NMP). Para conocer procedimientos y requisitos llamar al número 800
          MONTE (35 666 83) o a través de correo electrónico{" "}
          <a href="mailto:datospersonales@montepiedad.com.mx">
            datospersonales@montepiedad.com.mx
          </a>
          .
        </p>
        <p>
          <strong>Cláusula X.- Uso de tecnología en Internet </strong>
          <br />
      <br />
          Le informamos que en nuestra página de internet utilizamos cookies,
          rastreadores GIF, etiquetas de píxel y Google Analytics a través de
          las cuales es posible monitorear su comportamiento como usuario de
          Internet, así como brindarle un mejor servicio y experiencia de
          usuario al navegar en nuestra página.
        </p>
        <p>
          Los datos personales que obtenemos de estas tecnologías de rastreo son
          los siguientes: Dirección IP o http cookie, el sistema operativo del
          usuario, URL, horario y tiempo de navegación, Hit, página, archivo,
          visita, host y navegador, adicional a lo anterior, usted nos puede
          proporcionar de manera directa en nuestra página Web, datos de
          identificación, contacto y ubicación así como fechas de cumpleaños,
          mismos que utilizaremos para: Fines de identificación y verificación
          de datos, informativos, promociones y publicidad, atención y
          seguimiento de quejas, estadísticos, y las demás finalidades descritas
          en el presente aviso.
        </p>
        <p>
          Asimismo, le informamos que los datos recabados por el NMP mediante el
          uso de las tecnologías antes mencionadas, no se transfieren a un
          tercero.
        </p>
        <p>
          Para mayor información sobre el uso de estas tecnologías, así como la
          manera de deshabilitarlas, puede consultar nuestra sitio web
          http://www.montepiedad.com.mx en nuestra sección Aviso de Privacidad,
          apartado Mecanismos para deshabilitar tecnologías de rastreo haciendo
          click aquí.
        </p>
        <p>
          <strong>Cláusula XI.- Videograbación en zonas de vigilancia</strong>
          <br />
      <br />
          Nuestras instalaciones cuentan con zonas de video vigilancia, las
          imágenes y sonidos captados por las cámaras serán utilizados para su
          seguridad y de las personas que nos visitan, mismas que serán
          almacenadas y resguardadas bajo los términos de la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares.
        </p>
        <p>
          <strong>Cláusula XII.- Cambios al Aviso de Privacidad</strong>
          <br />
      <br />
          Cualquier modificación al presente aviso le será notificada a través
          de nuestra página webhttp://www.montepiedad.com.mx y de forma impresa
          publicado en el área de Reclutamiento y Selección de Personal de la
          Institución, por tal motivo, recomendamos consultar regularmente este
          aviso de privacidad ya que puede sufrir cambios en cualquier momento.
        </p>

        <p>
          Estas medidas operan en el marco de la Ley Federal de Protección de
          Datos Personales en Posesión de los Particulares.
        </p>
       
        <p>Atentamente</p>
        <p>Nacional Monte de Piedad I.A.P.</p>
      </div>
      {/* <button className="ps-submit-button">REGISTRAR NUEVO CANDIDATO</button> */}
    </div>
  );
}

export default ModalPreSingup;
