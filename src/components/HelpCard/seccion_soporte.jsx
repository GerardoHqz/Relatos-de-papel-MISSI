import React, { useState } from "react";
import './seccion_soporte.css'
import { Link } from "react-router-dom";
 function Ayuda() {
    const [openIndex, setOpenIndex] = useState(null);
    const [ticketAbierto, setTicketAbierto] = useState(false);
    const [mensajeTicket, setMensajeTicket] = useState("");
    const [asuntoTicket, setAsuntoTicket] = useState("");
    const [ticketEnviado, setTicketEnviado] = useState(false);
    const [codigoTicket, setCodigoTicket] = useState("");

  const faqs = [
     {
        pregunta: "¿Necesito crear una cuenta para comprar?",
        respuesta:
        "Sí, es necesario crear una cuenta para poder realizar compras y acceder a tu lista de libros."
     },
     {
    pregunta: "¿Qué hago si olvidé mi contraseña?",
    respuesta:
        "Puedes recuperar tu contraseña desde la opción 'Olvidé mi contraseña' en la pantalla de inicio de sesión."
    },
     {
        pregunta: "¿Cómo descargo mis libros digitales?",
        respuesta:
        "Después de completar la compra, los libros estarán disponibles en tu cuenta, en la sección 'Mis libros'."
    },
    {
    pregunta: "¿Los libros digitales tienen fecha de vencimiento?",
    respuesta:
        "No, los libros digitales no vencen y estarán disponibles en tu cuenta de forma permanente."
    },
    {
      pregunta: "¿Cómo realizo una compra en Relatos de Papel?",
      respuesta:
        "Selecciona los libros que desees, agrégalos al carrito, una vez ahi sigue los pasos para finalizar tu compra."
    },
    {
    pregunta: "¿Puedo leer los libros desde cualquier dispositivo?",
    respuesta:
        "Sí, puedes acceder a 'Mis libros' desde distintos dispositivos iniciando sesión con tu cuenta."
    },

    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta:
        "Aceptamos tarjetas de crédito y débito por el momento."
    },
    {
      pregunta: "¿Puedo devolver un producto?",
      respuesta:(
       <>
        Sí, puedes solicitar cambios o devoluciones dentro del plazo indicado y bajo los {" "}.
        <Link to="/terminos-y-condiciones" className="link-terminos">
          términos y condiciones
        </Link>
        </>
        )
    },
    {
      pregunta: "Se realizo el pago pero no aparece el libro en mi cuenta ¿Qué hago?",
      respuesta:
        " Si al realizar el pago y luego de unos minutos no aparece en tu lista de libros, favor envianos un ticket a 'Soporte Tecnico' con el ticket de pago para poder ayudarte."
    },
    {
    pregunta: "¿Puedo cancelar un pedido?",
    respuesta:
        "Sí, puedes cancelar tu pedido mientras se encuentre en estado 'Packing' y posterior debes solicitar el reembolso (aplican tarifas transaccionales)."
    },
     {
        pregunta: "¿Cuánto cuesta el envío?",
        respuesta:
          "El costo de envío depende de tu ubicación y emitido por la compania de envio donde se mostrará antes de finalizar la compra."
    },

    {
      pregunta: "Mis libros desaparecieron de mi cuenta, ¿Qué hago?",
      respuesta:
        "Si tus libros digitales no aparecen en tu cuenta asegurate de que se haya completado el proceso de compra, si aun sigue el problema envianos un ticket a 'Soporte Tecnico' detallando tu problema."
    },
      {
      pregunta: "¿Donde puedo revisar el estado de mi pedido?",
      respuesta:
        "Una vez inciado sesion dirigete a 'pedidos' y podras revisar el estado del historial de tus pedidos ."
    },
     {
      pregunta: "¿Puedo cambiar la direccion de la entrega del libro ?",
      respuesta:
        "Una vez realizado el pedido entra en estado 'Packing' donde unicamente dentro de este periodo es posible aun modificar la direccion de entrega."
    },
    {
    pregunta: "¿Cómo contacto con soporte técnico?",
    respuesta:
        "Puedes comunicarte con nuestro equipo desde el apartado 'Soporte Tecnico' al final del sitio o en este enlace."
    },
    
  ];

  const generarCodigoTicket = () => {
  const fecha = new Date();

  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, "0");
  const day = String(fecha.getDate()).padStart(2, "0");

  const fechaFormateada = `${year}${month}${day}`;

  const key = `ticket-counter-${fechaFormateada}`;
  let contador = localStorage.getItem(key);

  contador = contador ? parseInt(contador, 10) + 1 : 1;

  localStorage.setItem(key, contador);

  const numero = String(contador).padStart(5, "0");

  return `RPT${fechaFormateada}${numero}`;

};

   return (
    <div className="ayuda-container">
      <h1>Centro de Ayuda</h1>


      <section>
        <h2>Preguntas Frecuentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.pregunta}
            </button>
            {openIndex === index && <p>{faq.respuesta}</p>}
          </div>
        ))}
      </section>

   
      <section className="soporte-section">
        <h2>Soporte Técnico</h2>
        <p>¿No encontraste lo que buscabas?</p>
        <button
          className="ticket-btn"
          onClick={() => setTicketAbierto(true)}
        >
          Enviar ticket de soporte
        </button>
        <Link to ='/terminos-y-condiciones' className="link-terminos" > 
        Terminos y Condiciones
        </Link>
      </section>

  
      {ticketAbierto && (
        <div className="ticket-container">
          <div className="ticket-header">
            <strong>Ticket de Soporte</strong>
            <span
              className="ticket-close"
              onClick={() => {
                setTicketAbierto(false);
                setTicketEnviado(false);
                setMensajeTicket("");
              }}
            >
              Salir
            </span>
          </div>

          <div className="ticket-body">
            {!ticketEnviado ? (
             <>
                <label className="ticket-label">Asunto</label>
                <input
                  type="text"
                  className="ticket-input"
                  placeholder="Ej: Problema con mi compra"
                  value={asuntoTicket}
                  onChange={(e) => setAsuntoTicket(e.target.value)}
                />

                <label className="ticket-label">Descripción</label>
                <textarea
                  rows="4"
                  placeholder="Estimado lector, describe aquí tu problema..."
                  value={mensajeTicket}
                  onChange={(e) => setMensajeTicket(e.target.value)}
                />

                <button
                  className="ticket-btn"
                  onClick={() => {
                    if (asuntoTicket.trim() !== "" && mensajeTicket.trim() !== "") {
                      const codigo = generarCodigoTicket();
                      setCodigoTicket(codigo);
                      setTicketEnviado(true);
                      setAsuntoTicket("");
                      setMensajeTicket("");
                    }
                  }}
                >
                  Enviar ticket
                </button>
              </>
            ) : (
              <p className="ticket-ok">
                listo! Tu ticket fue enviado correctamente.
                <br />
                <strong>Código de seguimiento:</strong> {codigoTicket}
                <br />
                Guarda este código para futuras consultas.
              </p>

            )}
          </div>
        </div>
      )}
    </div>
  );
}


export default Ayuda