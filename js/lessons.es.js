/* Spanish lesson text for Meni — Latin American Spanish, usted form
   throughout (respectful address for older adults), same writing rules
   as the English source: ~5th grade level, warm and direct, no jargon,
   trauma-informed, no scores.

   Keyed by lesson id and merged over the English lesson at render time
   (see localizeLesson in app.js). Structural fields — id, alert, audio —
   always come from js/lessons.js; this file carries only words. Any
   string a translation misses falls back to English rather than
   disappearing. */

const LESSONS_ES = {
  /* ---------------- Core course ---------------- */
  "core-1": {
    skill: "Sé que ya he usado la IA.",
    title: "La IA ya está en su vida",
    teach:
      "IA significa inteligencia artificial. Probablemente la ha usado por años — le ayuda a elegir lo que usted ve cuando busca en internet.",
    question: "¿Ha usado Google alguna vez?",
    answers: [
      {
        label: "Sí",
        response: "¡Entonces ya ha usado la IA! Le ha estado ayudando todo este tiempo.",
      },
      {
        label: "No sé muy bien",
        response: "¡No hay problema! Mañana lo vemos juntos.",
      },
    ],
  },
  "core-2": {
    skill: "Puedo hablarle a la IA con palabras sencillas.",
    title: "Hablar con la IA es como pedir comida",
    teach:
      "Puede hablarle a la IA con palabras sencillas, como cuando pide comida. Mientras más claro el pedido, más recibe lo que quiere — sin palabras de computadora.",
    question: "¿Cuál pedido le trae el sándwich correcto?",
    answers: [
      {
        label: "«Un sándwich de pavo, sin cebolla, por favor»",
        response:
          "¡Sí! Claro y sencillo. La IA funciona igual — solo diga lo que quiere con palabras sencillas.",
      },
      {
        label: "«Algo de comer, por favor»",
        response:
          "También funciona, ¡pero le puede llegar cualquier cosa! Un poquito de detalle le ayuda a recibir justo lo que quiere.",
      },
    ],
  },
  "core-3": {
    skill: "Puedo hacerle una pregunta clara a la IA.",
    title: "Cómo hacer una buena pregunta",
    teach:
      "La IA da mejores respuestas cuando usted agrega un poco de detalle. En vez de «escribe una carta», pruebe «escribe una carta corta y cariñosa para mi nieta».",
    question: "¿Cuál pregunta traerá una mejor respuesta?",
    answers: [
      {
        label: "«Escribe una nota corta para agradecerle la sopa a mi vecina»",
        response:
          "¡Exactamente! Esos detalles ayudan a la IA a escribirla justo como usted quiere.",
      },
      {
        label: "«Escribe algo bonito»",
        response:
          "¡Es un buen comienzo! Agregar unos detalles, como para quién es, hace la respuesta aún mejor.",
      },
    ],
  },
  "core-4": {
    skill: "Sé que debo verificar lo que dice la IA.",
    title: "Verifique lo que la IA le dice",
    teach:
      "La IA suena muy segura, pero puede equivocarse — a veces inventa cosas. Para cosas importantes como la salud o el dinero, consulte con una persona de confianza.",
    question: "La IA le dice un dato sobre una medicina nueva. ¿Qué conviene hacer?",
    answers: [
      {
        label: "Preguntarle primero a mi médico o farmacéutico",
        response:
          "Exacto. La IA es una ayudante, no un médico. Consultar con una persona de confianza siempre es sabio.",
      },
      {
        label: "Creerle de inmediato",
        response:
          "Es tentador — ¡la IA suena tan segura! Pero puede equivocarse, así que consultar primero con su médico es lo más seguro.",
      },
    ],
  },
  "core-5": {
    skill: "Sé que la IA se equivoca — y yo decido.",
    title: "La IA comete errores",
    teach:
      "La IA aprendió de cosas que escribieron las personas, y las personas se equivocan. Así que recuerde: la IA sugiere, y usted decide.",
    question: "¿Quién toma la decisión final, usted o la IA?",
    answers: [
      {
        label: "Yo",
        response: "¡Así es! La IA es su ayudante. La última palabra siempre es suya.",
      },
      {
        label: "La IA",
        response:
          "Puede parecerlo, pero no — usted siempre está al mando. La IA solo sugiere. Usted decide.",
      },
    ],
  },
  "core-6": {
    skill: "Sé que no puedo dañar la IA con preguntas.",
    title: "No la puede romper",
    teach:
      "Mucha gente teme apretar un botón equivocado y romper algo. Usted no puede romper la IA haciendo preguntas — preguntar siempre es seguro.",
    question: "¿Qué pasa si le hace una pregunta tonta a la IA?",
    answers: [
      {
        label: "Nada malo — solo responde",
        response: "¡Exacto! No existen preguntas equivocadas. Anímese a probar lo que sea.",
      },
      {
        label: "Se puede romper",
        response:
          "Buenas noticias: ¡no se rompe! Puede preguntar lo que quiera y no pasa nada malo. Se lo prometo.",
      },
    ],
  },
  "core-7": {
    skill: "Puedo pedirle a la IA que lo intente de nuevo.",
    title: "Si la respuesta no sirve, pida otra",
    teach:
      "A veces la primera respuesta de la IA no es lo que usted quería. Es normal — pida de nuevo con otras palabras, como cuando da direcciones.",
    question: "La respuesta de la IA fue larga y confusa. ¿Qué puede hacer?",
    answers: [
      {
        label: "Decirle: «Hazlo más corto y más sencillo»",
        response:
          "¡Perfecto! La IA nunca se cansa ni se molesta. Puede pedirle otra vez todas las veces que quiera.",
      },
      {
        label: "Rendirme",
        response:
          "¡No hace falta! La IA nunca se cansa de intentarlo. Solo diga «más corto» y vea qué pasa.",
      },
    ],
  },
  "core-8": {
    skill: "Mis contraseñas y números son privados.",
    share:
      "Buena idea: pregúntele a alguien de confianza si conocía esta regla. ¡Ahora usted puede enseñarla!",
    title: "Lo privado se queda privado",
    teach:
      "La IA solo sabe lo que usted le escribe. Guarde para usted sus contraseñas, números de banco y su número de Seguro Social — ningún ayudante honesto los necesita.",
    question: "¿Debe decirle a la IA la contraseña de su banco?",
    answers: [
      {
        label: "No, mis contraseñas son mías",
        response:
          "¡Así es! Ningún ayudante de verdad — humano o IA — necesita su contraseña. Usted sabe cuidarse.",
      },
      {
        label: "Quizás, si la pide con amabilidad",
        response:
          "¡Nunca debería pedirla! Si algo le pide una contraseña o un número de banco, esa es la señal para parar y consultar con una persona de confianza.",
      },
    ],
  },
  "core-9": {
    skill: "Sé que ahora las fotos pueden ser falsas.",
    share:
      "Buena idea: pregúntele a alguien si puede distinguir siempre una foto falsa. ¡Usted ya conoce el truco!",
    title: "Ahora las fotos pueden ser inventadas",
    teach:
      "La IA ya puede crear fotos y videos que parecen reales pero nunca ocurrieron. Si una imagen parece increíble o extraña, es sabio preguntarse: «¿Será real?»",
    question: "Ve una foto increíble en internet. ¿Cuál es un buen primer pensamiento?",
    answers: [
      {
        label: "«¿Será real esto?»",
        response:
          "Ese es justo el instinto correcto. Dudar primero es un superpoder hoy en día.",
      },
      {
        label: "«Las fotos no mienten»",
        response:
          "¡Antes eran más confiables! Hoy la IA puede crear fotos falsas, así que dudar primero le mantiene alerta.",
      },
    ],
  },
  "core-11": {
    skill: "Puedo hablarle a mi teléfono en vez de escribir.",
    mission: "Pruébelo hoy: toque el micrófono pequeño del teclado y solo diga hola.",
    title: "Hable en vez de escribir",
    teach:
      "Si escribir le cuesta por las manos, buenas noticias: puede hablarle a la IA en voz alta. Casi todos los teclados del teléfono tienen un botón de micrófono — tóquelo y hable.",
    question: "Hoy le duelen las manos al escribir. ¿Qué puede probar?",
    answers: [
      {
        label: "Tocar el micrófono y hablar",
        response:
          "¡Sí! Hablar funciona igual de bien que escribir. Sus palabras se vuelven texto solitas.",
      },
      {
        label: "Dejar la IA para otro día",
        response:
          "¡No hace falta! El botoncito del micrófono le deja hablar en vez de escribir. Podemos buscarlo juntos en las horas de consulta.",
      },
    ],
  },
  "core-12": {
    skill: "Sé lo que la IA no puede hacer.",
    title: "Lo que la IA no puede hacer",
    teach:
      "La IA es buena con las palabras, pero no le conoce a usted y no tiene sentimientos. No puede reemplazar a su médico, a su familia ni a su propio buen juicio.",
    question: "¿Quién sabe qué es lo mejor para su vida?",
    answers: [
      {
        label: "Yo",
        response:
          "Exacto. La IA es una herramienta útil en sus manos — y usted es quien la sostiene.",
      },
      {
        label: "La IA",
        response:
          "¡La IA ni siquiera sabe su nombre si usted no se lo dice! Usted conoce su vida mejor que nadie. La IA solo ayuda con las palabras.",
      },
    ],
  },
  "core-10": {
    skill: "Terminé lo básico de la IA.",
    title: "Mire cuánto ha avanzado",
    teach:
      "Ya sabe qué es la IA, cómo hablarle y cómo verificar sus respuestas. Eso es más de lo que sabe la mayoría — de verdad.",
    question: "¿Le parece si seguimos con ejemplos de la vida diaria?",
    answers: [
      {
        label: "Sí, sigamos",
        response:
          "¡Qué bien! De aquí en adelante, cada lección muestra a la IA ayudando con cosas reales de todos los días.",
      },
      {
        label: "Prefiero repasar primero",
        response:
          "Muy buena idea. Traiga cualquier pregunta a las horas de consulta y repasamos juntos — para eso son.",
      },
    ],
  },

  /* ---------------- Pack: everyday life ---------------- */
  "ev-1": {
    skill: "Puedo reconocer un mensaje de estafa.",
    title: "Cómo reconocer un mensaje de estafa",
    teach:
      "Los estafadores usan la IA para escribir mensajes que parecen muy reales. Una estafa casi siempre le apura — los bancos de verdad y la familia de verdad no le apuran por dinero ni códigos.",
    question:
      "Un mensaje dice: «Abuela, estoy en problemas, ¡manda tarjetas de regalo ya!» ¿Qué hace usted?",
    answers: [
      {
        label: "Parar y llamar a mi familiar a su número de siempre",
        response:
          "Perfecto. Parar y llamar usted a la persona le gana a cualquier estafa. Acaba de protegerse.",
      },
      {
        label: "Mandar las tarjetas rápido",
        response:
          "Ese apuro es el truco — el mensaje está hecho para asustarle. Pare, respire y llame a su familiar al número que usted conoce.",
      },
    ],
  },
  "ev-2": {
    skill: "Puedo prepararme para el médico con la IA.",
    title: "Prepararse para el médico",
    teach:
      "La IA puede ayudarle a prepararse para una cita médica. Pídale: «Ayúdame a hacer una lista de preguntas sobre mi dolor de rodilla».",
    question: "¿Para qué sirve la IA antes de una cita médica?",
    answers: [
      {
        label: "Para ayudarme a escribir mis preguntas",
        response:
          "¡Sí! La IA le ayuda a organizarse, y su médico da el consejo médico. Un gran equipo.",
      },
      {
        label: "Para tomar el lugar del médico",
        response:
          "No exactamente — ninguna IA puede tomar el lugar de su médico. Pero es maravillosa para ayudarle a preparar sus preguntas.",
      },
    ],
  },
  "ev-3": {
    skill: "Conozco la regla de las tarjetas de regalo.",
    share:
      "Buena idea: pregúntele a alguien si conoce la regla de las tarjetas de regalo. ¡Ahora usted puede enseñarla!",
    title: "La regla de las tarjetas de regalo",
    teach:
      "Aquí va una regla que le gana a casi toda estafa: nadie honesto pide que le paguen con tarjetas de regalo. Ni los bancos, ni el gobierno, ni el soporte técnico — nadie.",
    question:
      "Alguien llama y dice que usted debe dinero y tiene que pagar con tarjetas de regalo. ¿Qué es?",
    answers: [
      {
        label: "Una estafa — la gente honesta nunca pide tarjetas de regalo",
        response:
          "Exactamente. Puede colgar sin decir una palabra más. Esa regla le protege todas las veces.",
      },
      {
        label: "Quizás es real — mejor pago rápido",
        response:
          "Se siente urgente — ese es el truco. Recuerde la regla: pagar con tarjetas de regalo siempre significa estafa. Cuelgue y respire.",
      },
    ],
  },
  "ev-4": {
    skill: "Sé cómo ganarle a una llamada con voz falsa.",
    share: "Buena idea: hable con su familia para elegir juntos una palabra clave secreta.",
    title: "Una voz que suena como su familia",
    teach:
      "La IA puede copiar la voz de una persona con una grabación corta. Si una llamada suena como un familiar pidiendo dinero, cuelgue y llámelo usted al número que conoce.",
    question:
      "La voz en el teléfono suena igualita a su nieto pidiendo dinero. ¿Qué hace?",
    answers: [
      {
        label: "Colgar y llamarlo a su número de siempre",
        response:
          "Perfecto. Llamar usted al número que conoce le gana a cualquier truco de voz. Algunas familias hasta eligen una palabra clave secreta.",
      },
      {
        label: "Mandar el dinero de inmediato",
        response:
          "Ahora las voces se pueden falsificar, hasta la de un ser querido. Cuelgue primero y llámelo usted — si es de verdad, lo va a entender.",
      },
    ],
  },
  "ev-5": {
    skill: "Puedo escribir un mensaje cariñoso con ayuda de la IA.",
    title: "Un mensaje de cumpleaños con ayuda",
    teach:
      "La IA es una belleza para los mensajes especiales. Pruebe: «Ayúdame a escribir un mensaje de cumpleaños corto y cariñoso para mi hermana que ama su jardín».",
    question: "¿Qué hace que el mensaje se sienta suyo?",
    answers: [
      {
        label: "Los detallitos que solo yo conozco",
        response:
          "¡Sí! Usted pone el cariño y los detalles. La IA solo ayuda a acomodar las palabras.",
      },
      {
        label: "La IA los agrega sola",
        response:
          "¡La IA no conoce a su hermana — usted sí! Déle sus detalles y el mensaje sonará igualito a usted.",
      },
    ],
  },
  "ev-6": {
    skill: "Puedo pedir que me expliquen una carta oficial en palabras sencillas.",
    title: "Cartas oficiales en palabras sencillas",
    teach:
      "Las cartas oficiales pueden venir llenas de palabras confusas. Puede leerle una a la IA y pedirle: «Explícame esta carta con palabras sencillas».",
    question: "Una carta de una oficina le confunde. ¿Qué puede probar?",
    answers: [
      {
        label: "Pedirle a la IA que la explique de forma sencilla",
        response:
          "¡Sí! Y para decisiones grandes, lleve la carta también a las horas de consulta — dos ayudas son mejor que una.",
      },
      {
        label: "Guardarla en un cajón",
        response:
          "¡Muy tentador! Pero la IA le puede quitar el susto en un minuto. Y siempre puede llevarla a las horas de consulta.",
      },
    ],
  },
  "ev-7": {
    skill: "Puedo pedir que me expliquen las palabras difíciles del médico.",
    title: "Palabras difíciles del médico",
    teach:
      "A veces los médicos usan palabras que nadie conoce. Pregúntele a la IA: «¿Qué significa hipertensión, en palabras sencillas?» — y verifique lo importante con su médico.",
    question: "¿Quién da la respuesta médica final?",
    answers: [
      {
        label: "Mi médico",
        response:
          "Así es. La IA explica las palabras y su médico le cuida. Un buen equipo, en ese orden.",
      },
      {
        label: "La IA",
        response:
          "La IA es buena con las palabras, pero su médico le conoce a usted. Use la IA para entender, y a su médico para decidir.",
      },
    ],
  },
  "ev-8": {
    skill: "Sé que los mensajes de premios con pago son estafas.",
    share: "Buena idea: cuéntele a alguien: los premios de verdad nunca piden dinero primero.",
    title: "Demasiado bueno para ser verdad",
    teach:
      "«¡Ganó un premio! Solo pague una pequeña cuota.» Los premios de verdad nunca piden dinero primero — ese cobro es toda la estafa.",
    question: "Un mensaje dice que ganó, pero debe pagar para cobrar. ¿Real o estafa?",
    answers: [
      {
        label: "Estafa — los ganadores nunca pagan primero",
        response:
          "Exactamente. Bórrelo y siéntase bien — acaba de proteger su dinero.",
      },
      {
        label: "Podría ser real",
        response:
          "¡Está diseñado para ilusionarle! Pero los premios de verdad nunca cobran una cuota. Pagar para ganar siempre significa estafa.",
      },
    ],
  },
  "ev-9": {
    skill: "Puedo pedirle ideas cotidianas a la IA.",
    mission: "Pruébelo hoy: pídale a una IA tres ideas fáciles para la cena.",
    title: "Ideas para la cena en diez segundos",
    teach:
      "La IA también sirve para las cosas pequeñas. Pruebe: «Dame tres ideas fáciles para la cena con pollo y arroz».",
    question: "¿Quiere que las ideas se ajusten más a usted?",
    answers: [
      {
        label: "Agregar mis gustos: «nada picante, por favor»",
        response:
          "¡Perfecto! Mientras más le cuenta, mejor se ajusta a usted. Como un buen mesero.",
      },
      {
        label: "Tomar lo que me dé",
        response:
          "¡También funciona! Y cuando quiera, puede agregar «nada picante» o «algo rápido» — se ajusta al instante.",
      },
    ],
  },
  "ev-10": {
    skill: "Ya puedo tener mi primera conversación real con la IA.",
    title: "Su primera conversación de verdad",
    teach:
      "Ya sabe lo suficiente para probar la IA de verdad — y no tiene que hacerlo a solas. En las horas de consulta abriremos una IA juntos y usted hará su primera pregunta.",
    question: "¿Qué pregunta le gustaría probar primero?",
    answers: [
      {
        label: "Tengo una — la guardo aquí abajo",
        response:
          "¡Maravilloso! Toque «Guardar esta pregunta para Meni» y traiga su teléfono. La probamos juntos.",
      },
      {
        label: "Todavía no sé",
        response:
          "No hay ningún problema. Venga de todos modos — encontraremos juntos una primera pregunta divertida.",
      },
    ],
  },

  /* ---------------- Pack: work and rights ---------------- */
  "wk-1": {
    skill: "Puedo armar mi currículum con ayuda de la IA.",
    title: "La IA puede ayudarle con su currículum",
    teach:
      "Un currículum es una lista corta de lo que usted sabe hacer. Usted pone los datos verdaderos, y la IA le ayuda a decirlos con claridad y orgullo.",
    question: "¿Qué le da usted a la IA para que ayude con su currículum?",
    answers: [
      {
        label: "Los datos verdaderos de mi trabajo y mis habilidades",
        response:
          "Exacto. Usted pone la verdad y la IA ayuda con las palabras. Un equipo fuerte.",
      },
      {
        label: "Nada — ya me conoce",
        response:
          "¡Qué bueno comprobarlo! La IA no le conoce para nada, y eso es bueno para su privacidad. Solo sabe lo que usted decide contarle.",
      },
    ],
  },
  "wk-2": {
    skill: "Puedo practicar entrevistas con la IA.",
    title: "Practicar para una entrevista",
    teach:
      "Puede practicar una entrevista de trabajo con la IA. Pídale: «Hazme tres preguntas comunes de entrevista para un trabajo de cocina».",
    question: "¿Le gustaría probar una pregunta de práctica en las horas de consulta?",
    answers: [
      {
        label: "Sí, me gustaría",
        response:
          "¡Qué bien! Toque «Guardar esta pregunta» aquí abajo y practicamos juntos en las horas de consulta.",
      },
      {
        label: "Quizás después",
        response: "Está perfectamente bien. La idea estará aquí cuando usted quiera.",
      },
    ],
  },
  "wk-3": {
    skill: "Puedo practicar el «hábleme de usted».",
    title: "Práctica: hábleme de usted",
    teach:
      "Casi toda entrevista empieza con «hábleme de usted». Puede practicar con la IA: «Ayúdame a practicar esa respuesta para un trabajo de limpieza».",
    question: "¿Qué hace que la práctica funcione mejor?",
    answers: [
      {
        label: "Decir mi respuesta en voz alta",
        response:
          "¡Sí! En voz alta es como crece la confianza. La IA le da un lugar seguro para practicar primero.",
      },
      {
        label: "Solo leer sobre el tema",
        response:
          "Leer ayuda, pero decirlo en voz alta funciona mejor. La IA le escucha todas las veces que necesite — sin juzgar jamás.",
      },
    ],
  },
  "wk-4": {
    skill: "Puedo escribir una carta corta para un trabajo.",
    title: "Una carta que abre puertas",
    teach:
      "Una carta corta junto a una solicitud de trabajo muestra interés. Déle a la IA los datos verdaderos: «Ayúdame a escribir tres oraciones sobre por qué haría bien este trabajo de cocina».",
    question: "¿Qué aporta usted a la carta?",
    answers: [
      {
        label: "Mis habilidades verdaderas y mi interés",
        response:
          "Exacto. Verdad más buenas palabras es una combinación fuerte. La IA ayuda con las palabras.",
      },
      {
        label: "Nada — la IA la escribe sola",
        response:
          "La IA sin su verdad escribe una carta vacía. Déle sus habilidades reales — ahí es cuando brilla.",
      },
    ],
  },
  "wk-5": {
    skill: "Puedo pedir que me expliquen un contrato de renta en palabras sencillas.",
    title: "Entender un contrato de renta",
    teach:
      "Los contratos de renta vienen llenos de palabras pesadas. Puede preguntarle a la IA: «¿Qué significa esta oración de mi contrato, en palabras sencillas?»",
    question: "Para un problema grande de vivienda, ¿cuál es la mejor jugada?",
    answers: [
      {
        label: "Entenderlo con la IA y luego buscar ayuda de verdad",
        response:
          "Así es. La IA explica, y para los pasos grandes, una oficina de ayuda legal o una persona de confianza le acompaña.",
      },
      {
        label: "No hacer nada",
        response:
          "Se entiende — las palabras pesadas cansan. Pero una explicación sencilla puede hacer posible el siguiente paso. Las horas de consulta también ayudan.",
      },
    ],
  },
  "wk-6": {
    skill: "Puedo escribir una nota clara para la escuela.",
    title: "Escribir a la escuela",
    teach:
      "Una nota para una maestra funciona mejor corta y clara. Pruebe: «Ayúdame a escribir una nota corta y amable preguntando cómo va mi hijo en matemáticas».",
    question: "¿Cuál nota recibe mejor respuesta?",
    answers: [
      {
        label: "Corta, amable y específica",
        response:
          "¡Sí! Las maestras están ocupadas — lo corto y específico recibe respuesta. La IA es buenísima para lo corto y amable.",
      },
      {
        label: "Larga, con todo de una vez",
        response:
          "¡Dan ganas de decirlo todo! Pero las notas cortas se leen primero. La IA puede ayudarle a elegir lo más importante de hoy.",
      },
    ],
  },
  "wk-7": {
    skill: "Puedo pedir que me expliquen las preguntas de un formulario.",
    title: "Formularios sin miedo",
    teach:
      "Los formularios preguntan cosas confusas como «estado civil» o «referencias». Puede preguntarle a la IA qué significa cualquier pregunta antes de contestarla.",
    question: "Una pregunta del formulario no tiene sentido para usted. ¿Qué puede hacer?",
    answers: [
      {
        label: "Preguntarle a la IA qué significa, en palabras sencillas",
        response:
          "Exacto. Primero entender, después contestar. Y los espacios en blanco pueden esperar a las horas de consulta.",
      },
      {
        label: "Adivinar y cruzar los dedos",
        response:
          "¡Todos lo hemos hecho! Pero un rápido «¿qué significa esto?» toma diez segundos — y en las horas de consulta terminamos cualquier formulario con usted.",
      },
    ],
  },
  "wk-8": {
    skill: "Sé que los trabajos de verdad nunca me cobran.",
    share:
      "Buena idea: cuéntele a alguien: los trabajos de verdad le pagan a usted, nunca al revés.",
    title: "Trabajos que piden dinero",
    teach:
      "Los trabajos de verdad le pagan a usted — nunca al revés. Cualquier «trabajo» que pida una cuota, tarjetas de regalo o su contraseña del banco es una estafa.",
    question: "Una oferta de trabajo pide $50 para «apartar su lugar». ¿Qué es?",
    answers: [
      {
        label: "Una estafa — los trabajos de verdad nunca le cobran",
        response:
          "Exactamente. Retírese con orgullo — acaba de proteger su dinero.",
      },
      {
        label: "Un trato justo",
        response:
          "¡Está hecho para sonar justo! Pero los empleadores de verdad nunca cobran por empezar. Dinero en la dirección equivocada siempre significa estafa.",
      },
    ],
  },
  "wk-9": {
    skill: "Puedo aprender lo que sea paso a paso con la IA.",
    mission: "Esta semana, pruébelo: pídale a la IA que le explique algo nuevo, paso a paso.",
    title: "Aprender lo que sea, paso a paso",
    teach:
      "La IA puede enseñar a su ritmo. Pruebe: «Explícame cómo usar el correo electrónico, paso a paso, como si fuera mi primera vez».",
    question: "Los pasos van muy rápido. ¿Qué le dice?",
    answers: [
      {
        label: "«Más despacio, un paso a la vez»",
        response:
          "Perfecto. La IA nunca suspira ni le apura. Va exactamente a su ritmo, todas las veces.",
      },
      {
        label: "Nada — mejor paro",
        response:
          "Se estaría perdiendo su mejor truco de estudiante: solo diga «más despacio, por favor». La IA vuelve a empezar con gusto, siempre.",
      },
    ],
  },
  "wk-10": {
    skill: "Ya puedo tener mi primera conversación real con la IA.",
    title: "Su primera conversación de verdad",
    teach:
      "Ya sabe lo suficiente para probar la IA de verdad — y no tiene que hacerlo a solas. En las horas de consulta abriremos una IA juntos y usted hará su primera pregunta.",
    question: "¿Qué pregunta le gustaría probar primero?",
    answers: [
      {
        label: "Tengo una — la guardo aquí abajo",
        response:
          "¡Maravilloso! Toque «Guardar esta pregunta para Meni» y traiga su teléfono. La probamos juntos.",
      },
      {
        label: "Todavía no sé",
        response:
          "No hay ningún problema. Venga de todos modos — encontraremos juntos una primera pregunta divertida.",
      },
    ],
  },

  /* ---------------- Mini-courses (shared continuation) ---------------- */

  /* ---- Unidad 1: Seguridad ---- */
  "safe-1": {
    unit: "Seguridad",
    skill: "No toco enlaces que no pedí.",
    title: "Enlaces que usted no pidió",
    teach:
      "Los estafadores mandan mensajes como «su paquete está detenido — toque aquí». La regla es esta: si usted no pidió el mensaje, no toque el enlace. Mejor entre usted directamente al sitio o la aplicación de verdad.",
    question:
      "Un mensaje «del correo» trae un enlace. Usted no pidió nada. ¿Qué hace?",
    answers: [
      {
        label: "Borrarlo — yo no pedí nada",
        response:
          "Exactamente. Ningún paquete de verdad se ha perdido por borrar un mensaje falso. Usted manda.",
      },
      {
        label: "Tocarlo para revisar, por si acaso",
        response:
          "Ese «por si acaso» es justo lo que ellos esperan. Si de verdad tiene curiosidad, entre usted al sitio de verdad — nunca por el enlace de ellos.",
      },
    ],
  },
  "safe-2": {
    unit: "Seguridad",
    skill: "Llamo a mi banco al número de mi tarjeta.",
    title: "El banco nunca le apura",
    teach:
      "Una llamada dice ser su banco y que su cuenta está «en peligro — ¡actúe ya!». Los bancos de verdad no apuran. Cuelgue y llame al número impreso detrás de su tarjeta del banco.",
    question: "«¡Su cuenta está congelada, verifique sus datos ya!» ¿Cuál es su jugada?",
    answers: [
      {
        label: "Colgar y llamar al número de mi tarjeta",
        response:
          "Perfecto. El número de su tarjeta siempre llega a su banco de verdad. Nada urgente se pierde por colgar primero.",
      },
      {
        label: "Dar mis datos — suena serio",
        response:
          "Está hecho para sonar serio — el miedo es su herramienta. Su banco de verdad ya tiene sus datos. Cuelgue, respire y llame al número de su tarjeta.",
      },
    ],
  },
  "safe-3": {
    unit: "Seguridad",
    skill: "Tengo cuidado con los códigos QR de desconocidos.",
    title: "Cuadritos pequeños, puertas grandes",
    teach:
      "Esos códigos QR cuadrados son puertas — su teléfono abre lo que haya detrás. Un código en el menú de su mesa está bien; una calcomanía pegada en un parquímetro o un volante puede llevar a un mal lugar.",
    question: "Un volante en su carro dice «escanee para reclamar su premio». ¿Lo escanea?",
    answers: [
      {
        label: "No — no sé de quién es esa puerta",
        response:
          "Bien visto. Premios extraños de desconocidos siguen la vieja regla: demasiado bueno para ser verdad.",
      },
      {
        label: "Claro, es solo un dibujito",
        response:
          "Parece solo un dibujito, pero abre una puerta. Cuando no sabe quién lo puso ahí, está perfectamente bien seguir de largo.",
      },
    ],
  },
  "safe-4": {
    unit: "Seguridad",
    skill: "Sé que un amigo de internet que pide dinero es una señal de alerta.",
    title: "Un amigo que nunca ha visto",
    teach:
      "Algunos estafadores construyen primero una amistad — semanas de mensajes amables, a veces escritos por IA. Luego llega una pequeña emergencia y un pedido de dinero. La amistad era el truco.",
    question:
      "Un amigo de internet que nunca ha visto en persona le pide dinero. ¿Qué es eso?",
    answers: [
      {
        label: "Una señal de alerta — los amigos de verdad no empiezan así",
        response:
          "Sí. Puede doler, porque el cariño se sentía real. Esta engaña a cualquiera — reconocerla le hace fuerte, no frío.",
      },
      {
        label: "Solo un amigo en apuros",
        response:
          "Un corazón generoso no es nada de qué avergonzarse. Pero pedir dinero sin haberse conocido en persona es el patrón más viejo que existe. Hable con alguien de confianza antes de mandar nada.",
      },
    ],
  },
  "safe-5": {
    unit: "Seguridad",
    skill: "Sé qué hacer si una estafa me alcanza — y nunca es mi culpa.",
    title: "Si ya pasó",
    teach:
      "Las estafas atrapan cada día a gente lista y cuidadosa — por eso funcionan. Si una le atrapa: cuénteselo de inmediato a alguien de confianza y llame a su banco al número de su tarjeta. Rápido le gana a avergonzado.",
    question: "¿Qué es lo que más importa justo después de una estafa?",
    answers: [
      {
        label: "Actuar rápido — contarlo y llamar al banco",
        response:
          "Exacto. Cada hora cuenta, y no hay ninguna vergüenza en esto — el criminal es el único que hizo algo malo.",
      },
      {
        label: "Guardármelo para mí",
        response:
          "Muchísima gente siente eso — y es justo lo que los estafadores esperan. Contarlo rápido puede recuperar dinero. Nunca es su culpa.",
      },
    ],
  },
  "safe-6": {
    unit: "Seguridad",
    skill: "Tengo mi caja de herramientas contra estafas.",
    share:
      "Buena idea: comparta una herramienta de su caja con alguien esta semana — el apuro siempre significa alto.",
    title: "Su caja de herramientas contra estafas",
    teach:
      "Mire todo lo que carga ahora: el apuro significa alto. Tarjetas de regalo significan estafa. ¿No lo pidió? No lo toque. Llame usted al número que conoce. Esa es una caja de herramientas de verdad, y es suya.",
    question: "Alguien le apura por dinero o códigos. ¿Cuál es la primera herramienta?",
    answers: [
      {
        label: "Alto — el apuro siempre es la señal",
        response:
          "Esa es la herramienta maestra. Toda estafa necesita que usted se apure. Su calma es más fuerte que el guion de ellos.",
      },
      {
        label: "No estoy seguro",
        response:
          "Entonces aquí va, de regalo: cuando alguien le apure, pare. Despacio es seguro. Y las difíciles siempre puede traerlas a las horas de consulta.",
      },
    ],
  },

  /* ---- Unidad 2: Salud ---- */
  "health-1": {
    unit: "Salud",
    skill: "Puedo pedir que me expliquen los resultados de laboratorio.",
    title: "Resultados médicos en palabras sencillas",
    teach:
      "Los resultados llegan llenos de palabras y números extraños. Puede preguntarle a la IA: «¿Qué significa colesterol LDL, en palabras sencillas?» Entender las palabras le ayuda a hacerle mejores preguntas a su médico.",
    question: "¿Quién explica las palabras, y quién explica SUS resultados?",
    answers: [
      {
        label: "La IA explica palabras; mi médico explica mis resultados",
        response:
          "Muy bien dicho. La IA se sabe el diccionario; su médico le conoce a usted. Manténgalos en ese orden.",
      },
      {
        label: "La IA puede con las dos cosas",
        response:
          "La IA es buena con el diccionario, pero nunca le ha conocido. Sus números, su historia, su cuerpo — esa lectura le pertenece a su médico.",
      },
    ],
  },
  "health-2": {
    unit: "Salud",
    skill: "Puedo describir mis síntomas con claridad con ayuda de la IA.",
    mission:
      "Antes de su próxima cita, pruébelo: pídale a la IA que le ayude a hacer la lista de lo que quiere decirle al médico.",
    title: "Dígalo claro en el consultorio",
    teach:
      "Las citas médicas son cortas y es fácil olvidar lo que quería decir. Antes de la cita, cuéntele a la IA qué le ha molestado y pídale: «Ayúdame a decir esto claro y en pocas palabras».",
    question: "¿Qué hace que una cita corta valga la pena?",
    answers: [
      {
        label: "Llegar con mis puntos ya claros",
        response:
          "¡Sí! Un poco de preparación convierte diez minutos apurados en diez minutos útiles. La IA es una ayudante paciente para eso.",
      },
      {
        label: "Esperar acordarme de todo",
        response:
          "¡Todos hemos salido diciendo «se me olvidó mencionar…»! Una lista corta, preparada con calma en casa, lo arregla para siempre.",
      },
    ],
  },
  "health-3": {
    unit: "Salud",
    skill: "Le pregunto a mi farmacéutico antes de cambiar algo.",
    title: "Preguntas sobre sus medicinas",
    teach:
      "La IA puede ayudarle a preparar preguntas sobre sus medicinas: «¿Qué debo preguntarle al farmacéutico sobre tomar estas dos juntas?» Pero nunca cambie una dosis porque la IA lo dijo — esa decisión es de su médico o farmacéutico.",
    question: "La IA sugiere cambiar el horario de su medicina. ¿Qué hace?",
    answers: [
      {
        label: "Preguntarle a mi farmacéutico antes de cambiar nada",
        response:
          "Exacto. La IA le ayuda a preguntar mejor — las personas de verdad, con su expediente, dan las respuestas.",
      },
      {
        label: "Cambiarlo — la IA sonaba segura",
        response:
          "La IA siempre suena segura; así es ella. Pero no puede ver su expediente ni su historia. Su farmacéutico sí — y le encanta que le pregunten.",
      },
    ],
  },
  "health-4": {
    unit: "Salud",
    skill: "Dudo de las curas milagrosas en internet.",
    title: "Las curas milagrosas no son milagros",
    teach:
      "Internet está lleno de publicaciones sobre curas milagrosas — muchas escritas ahora por IA para sonar convincentes. Si promete curarlo todo, cuesta dinero y dice que los médicos lo ocultan: eso es una venta, no medicina.",
    question:
      "Una publicación dice que un suplemento cura la artritis, la diabetes y la memoria. ¿Qué es?",
    answers: [
      {
        label: "Una venta disfrazada de noticia",
        response:
          "Así es. Algo que cura todo nunca ha existido. Su desconfianza es buena medicina.",
      },
      {
        label: "Vale la pena probar — ¿qué daño hace?",
        response:
          "El daño puede ser su dinero y su salud. Algo tan grande merece una pregunta primero: «Doctor, ¿esto es real?»",
      },
    ],
  },
  "health-5": {
    unit: "Salud",
    skill: "Puedo pedirle a la IA ideas sanas y suaves.",
    mission:
      "Pruébelo hoy: pídale a la IA un estiramiento suave que pueda hacer sentado en una silla.",
    title: "Ideas sanas y pequeñas",
    teach:
      "La IA es buena para sugerencias pequeñas y amables: «Dame tres ejercicios suaves de silla», o «una sopa fácil con muchas verduras». Los pasos pequeños que sí da le ganan a los planes grandes que no.",
    question: "¿Cuál pedido se ajusta mejor a la vida real?",
    answers: [
      {
        label: "«Un estiramiento suave que pueda hacer sentado»",
        response:
          "Perfecto. Lo pequeño y posible gana siempre. Y la IA nunca juzga desde dónde empieza usted.",
      },
      {
        label: "«Un plan completo de transformación física»",
        response:
          "¡Ambicioso! Pero los planes grandes suelen quedarse en el papel. Pida una cosita hoy — y otra mañana. Así crecen los jardines.",
      },
    ],
  },
  "health-6": {
    unit: "Salud",
    skill: "Sé que los sentimientos difíciles merecen un ser humano.",
    title: "Algunas cosas necesitan una persona",
    teach:
      "La IA puede conversar a cualquier hora, y eso consuela. Pero en los días de verdad pesados — el duelo, la preocupación, la soledad honda — usted merece una voz humana. Una amistad, la familia, su médico o la gente de las horas de consulta.",
    question: "En un día muy difícil, ¿qué merece su corazón?",
    answers: [
      {
        label: "Una persona de verdad que me quiera",
        response:
          "Sí. La IA acompaña los días comunes, pero los días difíciles merecen manos cálidas y voces reales. Buscar a alguien es fortaleza.",
      },
      {
        label: "No me gusta molestar a nadie",
        response:
          "Mucha gente buena siente eso. Pero quienes le quieren desean que les llame — sentirse necesitado es un regalo que usted les da.",
      },
    ],
  },

  /* ---- Unidad 3: Escritura ---- */
  "write-1": {
    unit: "Escritura",
    skill: "Puedo escribir un reclamo firme y educado.",
    title: "Un reclamo que da resultados",
    teach:
      "Cuando algo que pagó sale mal, una carta clara hace maravillas. Déle los hechos a la IA y pídale: «Ayúdame a escribir un reclamo firme pero educado pidiendo un reembolso». Firme y educado le gana a enojado, siempre.",
    question: "¿Cuál reclamo se toma en serio?",
    answers: [
      {
        label: "Calmado, claro, con los hechos y lo que pido",
        response:
          "Exacto. Las empresas responden a los pedidos claros. Usted pone los hechos; la IA lo mantiene firme y cortés.",
      },
      {
        label: "Tan enojado como me siento",
        response:
          "¡El enojo es justo! Pero las cartas furiosas se dejan a un lado. Deje que la IA convierta su fuego en firmeza — funciona mejor y hasta se siente mejor.",
      },
    ],
  },
  "write-2": {
    unit: "Escritura",
    skill: "Puedo encontrar palabras para los momentos difíciles.",
    title: "Palabras para momentos difíciles",
    teach:
      "Las condolencias y las disculpas son lo más difícil de escribir. Puede contarle a la IA lo que siente y pedirle ayuda para decirlo con sencillez. El sentimiento es suyo; la IA solo lo ayuda a viajar.",
    question: "¿Qué hace que una nota de condolencia consuele?",
    answers: [
      {
        label: "Que sea honesta y sencilla",
        response:
          "Sí. «Lo siento tanto. Me acuerdo cuando…» — lo honesto y sencillo siempre consuela. La IA puede ayudarle a llegar ahí cuando las palabras no salen.",
      },
      {
        label: "Que sea larga y formal",
        response:
          "Es un pensamiento amable, pero quien está de duelo atesora el calor más que el largo. Tres oraciones honestas le ganan a una página formal.",
      },
    ],
  },
  "write-3": {
    unit: "Escritura",
    skill: "Puedo escribir una invitación con la IA.",
    mission:
      "Pruébelo esta semana: pídale a la IA ayuda para invitar a alguien a un café, un almuerzo o una llamada.",
    title: "Invitar es más fácil ahora",
    teach:
      "Una invitación es un regalito: «Ven a almorzar por mi cumpleaños». Si empezar le da pena, dígale a la IA para quién es y la ocasión — le hará un borrador cálido que usted puede hacer suyo.",
    question: "¿Qué es lo que más importa en una invitación?",
    answers: [
      {
        label: "Que de verdad se envíe",
        response:
          "¡Ja — exacto! Una invitación enviada le gana a un borrador perfecto. La IA le ayuda a pasar la página en blanco para que el almuerzo sí ocurra.",
      },
      {
        label: "Que cada palabra sea perfecta",
        response:
          "La gente recuerda el almuerzo, no la redacción. Suficientemente-buena-y-enviada le gana a perfecta-y-olvidada — y la IA hace lo suficientemente bueno en un minuto.",
      },
    ],
  },
  "write-4": {
    unit: "Escritura",
    skill: "Puedo pedir que pulan mi texto sin reemplazar mi voz.",
    title: "Conserve su propia voz",
    teach:
      "Puede entregarle a la IA algo que usted escribió y decirle: «Hazlo más claro, pero conserva mis palabras donde puedas». Así la carta sigue sonando a usted — solo que ordenadita.",
    question: "Escribió una carta pero se siente enredada. ¿Qué pide?",
    answers: [
      {
        label: "«Más clara, pero conserva mi voz»",
        response:
          "Perfecto. Su voz es la parte valiosa — la IA es solo el pulido, nunca el reemplazo.",
      },
      {
        label: "«Bótala y escribe una nueva»",
        response:
          "¡Puede hacerlo! Pero entonces suena a la carta de cualquiera. La suya, ordenadita, siempre significará más para quien la lea.",
      },
    ],
  },
  "write-5": {
    unit: "Escritura",
    skill: "Puedo escribir en un idioma y enviar en otro.",
    title: "Dos idiomas, una carta",
    teach:
      "Escriba en el idioma en que piensa su corazón, y luego pídale a la IA: «Traduce esto con naturalidad». Una carta a una oficina en inglés o a un primo en español — las dos son fáciles ahora.",
    question:
      "Tiene que escribirle a una oficina en un idioma que domina menos. ¿Cuál es el truco?",
    answers: [
      {
        label: "Escribirla a mi manera primero, y pedir la traducción",
        response:
          "Exacto. Piense libre en su propio idioma; deje que la IA lo cruce. Así no se pierde nada.",
      },
      {
        label: "Batallar directo en el otro idioma",
        response:
          "Podría — ¿pero para qué? Sus mejores ideas nacen en sus propias palabras. La IA es un puente; crúcelo.",
      },
    ],
  },
  "write-6": {
    unit: "Escritura",
    skill: "Puedo convertir recuerdos en historias.",
    share:
      "Buena idea: léale una de sus historias-recuerdo en voz alta a alguien que quiera.",
    title: "Sus historias valen la pena",
    teach:
      "Usted carga historias que nadie más tiene — cómo se conocieron, a qué olía el barrio de antes. Cuéntele una a la IA y pídale: «Ayúdame a darle forma de cuento corto para mi familia».",
    question: "¿Quién es el autor de esas historias?",
    answers: [
      {
        label: "Yo — la IA solo ayuda a darles forma",
        response:
          "Siempre usted. El recuerdo, la gente, el sentimiento — todo suyo. La IA solo los acomoda bonito en la página para los nietos.",
      },
      {
        label: "La IA, porque las escribe",
        response:
          "La IA nunca estuvo en esa cocina ni oyó esa risa — usted sí. El libro es suyo; la IA es solo la máquina de escribir.",
      },
    ],
  },

  /* ---- Unidad 4: ¿Real o inventado? ---- */
  "photo-1": {
    unit: "¿Real o inventado?",
    skill: "Sé que los videos también pueden ser falsos.",
    title: "Las imágenes en movimiento también mienten",
    teach:
      "No son solo las fotos — la IA ya puede hacer videos de personas reales diciendo cosas que nunca dijeron. Si un video de alguien famoso parece increíble o extraño, aplica la regla de dudar: «¿Será real?»",
    question:
      "Un video muestra a un médico famoso vendiendo un producto milagroso. ¿Primer pensamiento?",
    answers: [
      {
        label: "«Los videos se pueden falsificar — lo verifico en otro lado»",
        response:
          "Exacto. A las caras famosas la IA se las presta todo el tiempo ahora. Su duda llega justo a tiempo.",
      },
      {
        label: "«Es video, así que tiene que ser real»",
        response:
          "¡Antes era cierto! Hoy un video es solo otra imagen — y las imágenes se pueden inventar. Dudar primero le mantiene alerta.",
      },
    ],
  },
  "photo-2": {
    unit: "¿Real o inventado?",
    skill: "Reviso de dónde salió una imagen.",
    title: "La fuente le gana a las pistas",
    teach:
      "Dicen «busque seis dedos» para detectar imágenes falsas, pero la IA mejora y las pistas se borran. La pregunta fuerte no se borra nunca: ¿QUIÉN me está mostrando esto, y confío en esa fuente?",
    question: "¿Cuál es la forma más confiable de juzgar una imagen sorprendente?",
    answers: [
      {
        label: "Ver quién la publicó y si confío en esa fuente",
        response:
          "Sí. Las pistas envejecen; las fuentes no. Una imagen impactante salida de la nada es pura decoración hasta que alguien confiable la confirme.",
      },
      {
        label: "Acercar la imagen y buscar errores",
        response:
          "No está de más, pero la IA mejora cada mes y los errores desaparecen. Preguntar «¿quién me muestra esto?» funciona para siempre.",
      },
    ],
  },
  "photo-3": {
    unit: "¿Real o inventado?",
    skill: "Hago una pausa antes de reenviar.",
    share:
      "Buena idea: cuéntele a alguien la regla de la pausa — lo falso solo se riega si lo pasamos nosotros.",
    title: "La pausa antes de compartir",
    teach:
      "Lo falso solo viaja porque la gente lo reenvía. Antes de pasar una foto o un mensaje impactante, haga una pausa: «¿Me consta que es cierto?» Si no, dejar que muera con usted es una pequeña buena obra.",
    question: "Llega una afirmación impactante al chat del grupo. ¿La reenvía?",
    answers: [
      {
        label: "No hasta saber que es cierta",
        response:
          "Esa pausa le vuelve parte de la solución. Lo que es verdad seguirá siendo verdad mañana — no hay apuro.",
      },
      {
        label: "¡Sí — la gente debe verlo!",
        response:
          "Ese instinto generoso es justo el vehículo de lo falso. Verifique primero; si es real, compártalo con orgullo después.",
      },
    ],
  },
  "photo-4": {
    unit: "¿Real o inventado?",
    skill: "Puedo colgarle a un robot.",
    title: "Tiene permiso de colgarle a los robots",
    teach:
      "Muchas llamadas ahora son voces de IA leyendo un guion — unas venden, otras estafan. Aquí tiene su permiso oficial: colgarle a un robot no es de mala educación. A una grabación no se le debe nada.",
    question:
      "Una voz grabada dice que usted debe impuestos y que marque 1. ¿Qué hace?",
    answers: [
      {
        label: "Colgar — la oficina de impuestos manda cartas, no robots",
        response:
          "Exactamente. Las agencias de verdad escriben cartas. A los robots que exigen dinero: clic, todas las veces.",
      },
      {
        label: "Marcar 1 para arreglarlo",
        response:
          "Marcar 1 solo les avisa que en este número contesta una persona. Cuelgue — si de verdad debiera algo, le llegaría por correo.",
      },
    ],
  },
  "photo-5": {
    unit: "¿Real o inventado?",
    skill: "Sé que la IA puede ayudar con las fotos viejas.",
    mission:
      "Pruébelo un día: pídale a un nieto o a una amistad que le ayude a restaurar una foto vieja de la familia con IA.",
    title: "El lado bonito de las imágenes con IA",
    teach:
      "Las mismas herramientas tienen un lado bonito: la IA puede aclarar una fotografía vieja y borrosa, darle color a una en blanco y negro, o ayudarle a anotar quién es quién antes de que los nombres se pierdan.",
    question: "¿Cuál es un uso alegre de la IA con su caja de fotos?",
    answers: [
      {
        label: "Restaurar fotos viejas y guardar los nombres",
        response:
          "Maravilloso, ¿verdad? La misma astucia que fabrica falsedades puede rescatar la foto de bodas de la abuela. Las herramientas se parecen a quien las usa.",
      },
      {
        label: "La IA y las fotos son puro problema",
        response:
          "¡Después de las lecciones de estafas, se entiende! Pero en sus manos estas herramientas restauran recuerdos en vez de falsificarlos. A usted le toca ser el buen ejemplo.",
      },
    ],
  },
  "photo-6": {
    unit: "¿Real o inventado?",
    skill: "Verifico las noticias impactantes en lugares que confío.",
    title: "Sus dos lugares de confianza",
    teach:
      "Aquí va un hábito que vale oro: elija dos lugares de confianza para las noticias — un periódico, un canal, un programa de radio. Cuando llegue algo impactante, revíselo ahí. Si ninguno lo tiene, espere.",
    question:
      "Llega una noticia impactante, pero sus dos lugares de confianza no dicen nada. ¿Ahora qué?",
    answers: [
      {
        label: "Esperar — las noticias reales llegan rápido a las redacciones reales",
        response:
          "Exacto. Las cosas grandes y ciertas nunca se quedan en un mensaje reenviado. Su paciencia es una verificadora de datos.",
      },
      {
        label: "Creerla — quizás ellos van lentos",
        response:
          "Las redacciones compiten por las noticias grandes. Si ninguna la tiene, la noticia casi siempre no es noticia. Déle un día.",
      },
    ],
  },

  /* ---- Unidad 5: Vida diaria ---- */
  "help-1": {
    unit: "Vida diaria",
    skill: "Puedo pedir instrucciones en palabras sencillas.",
    title: "Instrucciones sin enredos",
    teach:
      "La IA explica los cómo-se-hace a su ritmo: «¿Cómo devuelvo un paquete? Explícame paso a paso, como si nunca lo hubiera hecho». Sin suspiros, sin apuros, sin «eso lo sabe todo el mundo».",
    question: "Las instrucciones que venían en la caja no tienen sentido. ¿Qué puede probar?",
    answers: [
      {
        label: "Pedirle a la IA que lo explique paso a paso, clarito",
        response:
          "Sí. Las instrucciones las escribe gente con prisa — la IA las reescribe para seres humanos con vidas.",
      },
      {
        label: "Rendirme con el aparato",
        response:
          "¡El cajón de aparatos abandonados existe! Pero una explicación en palabras sencillas suele salvarlos. Pregunte antes de encajonarlo.",
      },
    ],
  },
  "help-2": {
    unit: "Vida diaria",
    skill: "Puedo ajustar una receta con la IA.",
    mission:
      "Pruébelo hoy: pídale a la IA que reduzca una receta favorita a dos porciones.",
    title: "Recetas a la medida de su mesa",
    teach:
      "Las recetas alimentan a seis; quizás su mesa es de dos. Pídale a la IA: «Haz esta receta para dos, y con menos sal, por favor». Ajusta todo — cantidades, tiempos, todo.",
    question: "La receta rinde para ocho. Ustedes son dos. ¿Qué le dice?",
    answers: [
      {
        label: "«Hazla para dos, por favor»",
        response:
          "Y hace la aritmética al instante — se acabaron los tercios de huevo. Cocinar para su mesa de verdad, no para la imaginaria de la receta.",
      },
      {
        label: "Cocinar para ocho y comerlo toda la semana",
        response:
          "¡La jugada clásica! Funciona con la sopa, cansa para el jueves. «Hazla para dos» le devuelve la variedad.",
      },
    ],
  },
  "help-3": {
    unit: "Vida diaria",
    skill: "Puedo cuestionar una factura confusa.",
    title: "Cuentas que no cuadran",
    teach:
      "Cuando una factura sube o un cobro se ve raro, pregúntele a la IA: «¿Qué suele significar esta línea de mi factura?» Y si aún se ve mal, llame a la empresa — al número impreso en la factura misma.",
    question: "Su cuenta del teléfono subió $20 de repente. ¿Cuál es un buen primer paso?",
    answers: [
      {
        label: "Preguntar qué significa la línea nueva, y llamar al número de la factura",
        response:
          "El orden perfecto: entender primero, llamar informado después. A quien pregunta claro le devuelven el dinero más seguido.",
      },
      {
        label: "Pagarla y ya — pelear cansa",
        response:
          "Sí cansa — con eso cuentan. Dos minutos con la IA convierten la confusión en una pregunta clara, y las preguntas claras recuperan dinero.",
      },
    ],
  },
  "help-4": {
    unit: "Vida diaria",
    skill: "Puedo traducir con la IA.",
    title: "Cualquier idioma, ahora mismo",
    teach:
      "Una carta, un letrero, una etiqueta en otro idioma — la IA traduce al instante. Escríbalo o dígalo en voz alta, y pregunte: «¿Qué dice esto, en palabras sencillas?»",
    question: "Llega un formulario en un idioma que no lee. ¿Qué puede hacer?",
    answers: [
      {
        label: "Pedirle a la IA que lo traduzca clarito",
        response:
          "Sí — y si es algo oficial o importante, en las horas de consulta revisamos con usted las partes difíciles.",
      },
      {
        label: "Guardarlo y preocuparme",
        response:
          "¡El método antiguo! Ahora el misterio se resuelve en un minuto. Traduzca primero, y preocúpese solo si de verdad hay de qué.",
      },
    ],
  },
  "help-5": {
    unit: "Vida diaria",
    skill: "Puedo planear una salida con la IA.",
    title: "Planear una visita, sin el estrés",
    teach:
      "¿Va a ver a la familia, o a pasar un día fuera? La IA es una compañera de planeación incansable: «Ayúdame con una lista de equipaje para tres días», o «¿Qué le pregunto a la empresa de buses sobre el acceso con silla de ruedas?»",
    question: "¿Cuál es una buena tarea de planeación para darle a la IA?",
    answers: [
      {
        label: "Las listas — así yo solo decido las partes divertidas",
        response:
          "Exacto. La IA carga la libreta; usted se queda con la alegría. Listas, preguntas, qué empacar — todo eso es su departamento ahora.",
      },
      {
        label: "Ninguna — planear es preocuparse, y eso es mío",
        response:
          "Le sorprendería lo ligero que se siente un viaje cuando la lista se escribe sola. Entregue la libreta una vez y verá.",
      },
    ],
  },
  "help-6": {
    unit: "Vida diaria",
    skill: "Puedo preguntarle a la IA cómo usar mi teléfono.",
    mission:
      "Pruébelo hoy: hágale a la IA una pregunta sobre su teléfono que siempre haya tenido.",
    title: "El teléfono se explica solo",
    teach:
      "Aquí hay un círculo que vale la pena conocer: puede preguntarle a la IA cómo usar el mismísimo teléfono donde vive. «¿Cómo hago la letra más grande en mi teléfono?» Respuestas paso a paso, sin caras largas.",
    question:
      "Quiere la pantalla más brillante pero no encuentra el ajuste. ¿A quién le pregunta?",
    answers: [
      {
        label: "A la IA — ahí mismo en el teléfono",
        response:
          "¡Sí! El teléfono ahora se explica solo. Y lo que la IA no logre desenredar, lo desenredamos en las horas de consulta — con el teléfono en mano.",
      },
      {
        label: "A nadie — me quedo con la pantalla oscura",
        response:
          "¡Ya ha aguantado suficientes ajustes! Una pregunta lo arregla para siempre. Y las horas de consulta existen justo para estas pequeñas batallas.",
      },
    ],
  },

  /* ---- Unidad 6: Pensar claro ---- */
  "news-1": {
    unit: "Pensar claro",
    skill: "Pregunto quién escribió lo que leo.",
    title: "¿Quién escribió esto?",
    teach:
      "Mucho de lo que se lee en internet ahora lo escribió una IA — parte es útil, parte es relleno hecho para vender anuncios. Un buen hábito: mire QUIÉN lo publicó antes de tomárselo a pecho.",
    question:
      "Un artículo sin autor, sin fecha y de un sitio que nunca ha oído. ¿Cuánto peso le da?",
    answers: [
      {
        label: "Muy poco, hasta que alguien confiable lo confirme",
        response:
          "Así es. Las palabras ahora son baratas de fabricar. La confianza todavía se gana a la antigua.",
      },
      {
        label: "El mismo que a cualquier artículo",
        response:
          "Antes publicar costaba esfuerzo, y lo impreso se ganaba algo de confianza. Hoy cualquiera — o cualquier cosa — publica en segundos. La fuente importa más que nunca.",
      },
    ],
  },
  "news-2": {
    unit: "Pensar claro",
    skill: "Leo más allá del titular.",
    title: "Los titulares son anzuelos",
    teach:
      "Los titulares se escriben para engancharle — el enojo y el miedo consiguen más clics, y la IA ya escribe miles al día. La historia debajo del titular suele ser mucho más calmada que el anzuelo.",
    question: "Un titular le hace hervir la sangre. ¿Cuál es la jugada sabia?",
    answers: [
      {
        label: "Leer la historia completa antes de reaccionar",
        response:
          "Sí. Nueve de cada diez veces la historia es más suave que el anzuelo. Su lectura calmada derrota a su titular escandaloso.",
      },
      {
        label: "Compartirlo — ¡la gente también debe enojarse!",
        response:
          "Ese es el anzuelo funcionando tal como fue diseñado. Lea primero; si después de eso todavía merece el enojo, al menos se lo ganó.",
      },
    ],
  },
  "news-3": {
    unit: "Pensar claro",
    skill: "Uso la regla de las dos fuentes.",
    title: "La regla de las dos fuentes",
    teach:
      "Aquí va una regla de los periodistas: una afirmación grande necesita dos fuentes independientes. Préstesela. Antes de creer algo grande, encuéntrelo en dos lugares que no se copien entre sí.",
    question: "Una gran afirmación de salud aparece en una sola publicación. ¿Qué dice la regla?",
    answers: [
      {
        label: "Buscarla también en otro lugar confiable e independiente",
        response:
          "Exacto. Lo verdadero deja huellas en más de un lugar. Dos fuentes, y después la confianza.",
      },
      {
        label: "Una fuente basta si suena segura",
        response:
          "La seguridad es gratis — la IA puede escribir publicaciones seguras sin límite. Dos fuentes independientes es el filtro que la seguridad no puede fingir.",
      },
    ],
  },
  "news-4": {
    unit: "Pensar claro",
    skill: "Uso los resúmenes de IA como inicio, no como palabra final.",
    title: "Los resúmenes son el aperitivo",
    teach:
      "La IA puede encoger un artículo largo a tres oraciones — buenísimo para decidir qué merece su tiempo. Pero un resumen puede dejar fuera justo lo que importaba. Para lo importante, el resumen es el aperitivo, no la comida.",
    question: "La IA le resume una carta sobre sus beneficios. Parece estar bien. ¿Y ahora?",
    answers: [
      {
        label: "Leer también la carta real — son mis beneficios",
        response:
          "Así es. Los resúmenes son para ordenar; los originales, para decidir. Todo lo que toque su dinero o sus derechos merece la lectura completa.",
      },
      {
        label: "Con el resumen basta",
        response:
          "Para una noticia, quizás. Para SUS beneficios, los detalles son todo el asunto — y los detalles son justo lo que los resúmenes recortan.",
      },
    ],
  },
  "news-5": {
    unit: "Pensar claro",
    skill: "Reviso las fechas de las fotos de noticias.",
    title: "Fotos viejas, historias nuevas",
    teach:
      "Un truco común no necesita IA: una foto real de hace años se reusa para una historia nueva. La foto es real; la combinación es la mentira. Un vistazo a la fecha rompe el hechizo.",
    question: "Una foto dramática «de la tormenta de ayer» le parece conocida. ¿Qué revisa?",
    answers: [
      {
        label: "La fecha — las fotos reales se reciclan para historias nuevas",
        response:
          "Buen ojo. El truco más viejo del libro estrenó motor nuevo. Las fechas no mienten, aunque los pies de foto sí.",
      },
      {
        label: "Nada — la foto se ve real",
        response:
          "Probablemente SÍ es real — de algún otro año. La foto dice la verdad; el pie de foto es el que miente. Revise la fecha.",
      },
    ],
  },
  "news-6": {
    unit: "Pensar claro",
    skill: "Puedo corregir con amabilidad.",
    share:
      "Buena idea: acuerde con una amistad avisarse con cariño cuando algo sea falso — una sociedad de la verdad.",
    title: "Corregir sin herir",
    teach:
      "Una amistad comparte algo falso. Todos lo hemos hecho — sin vergüenzas. Una nota privada y amable funciona mejor: «Lo busqué y parece que no es cierto. ¡Yo casi lo comparto también!»",
    question: "¿Qué hace que una corrección caiga suave?",
    answers: [
      {
        label: "Privada, amable, y con «yo casi caigo también»",
        response:
          "Esa última parte es la magia — le quita la vergüenza. Las amistades que se corrigen con cariño valen su peso en oro.",
      },
      {
        label: "Corregirle frente a todo el grupo",
        response:
          "La corrección pública protege al grupo pero lastima a la amistad. Una palabra en privado suele arreglar lo falso Y conservar el cariño.",
      },
    ],
  },

  /* ---- Unidad 7: Familia y amigos ---- */
  "family-1": {
    unit: "Familia y amigos",
    skill: "Puedo enseñar lo que aprendí.",
    share:
      "Buena idea: enséñele la regla de las tarjetas de regalo a una persona esta semana. Enseñarla la vuelve suya para siempre.",
    title: "El estudiante se vuelve maestro",
    teach:
      "Usted ya sabe cosas que la mayoría no sabe — la regla de las tarjetas de regalo, la de devolver la llamada, la pausa antes de reenviar. Enseñarle una regla a una persona la fija en los dos.",
    question: "¿Qué le pasa al conocimiento cuando se enseña?",
    answers: [
      {
        label: "Se hace más fuerte en mí, y los protege a ellos",
        response:
          "Exacto — enseñar es el único gasto que le deja más rico. Una regla, una persona, esta semana.",
      },
      {
        label: "Yo no estoy calificado para enseñarle a nadie",
        response:
          "Usted terminó lecciones que la mayoría nunca recibió. «Déjame mostrarte un truco que aprendí» — eso es enseñar, y usted ya está listo.",
      },
    ],
  },
  "family-2": {
    unit: "Familia y amigos",
    skill: "Mi familia tiene una palabra clave.",
    mission:
      "Esta semana, hágalo de verdad: elijan una palabra clave familiar en la cena o por teléfono.",
    title: "La palabra clave de la familia",
    teach:
      "¿Recuerda la lección de la voz falsa? Aquí está el remedio, ahora en serio: elija una palabra secreta con su familia. Una llamada de emergencia que no sepa la palabra no es familia — no importa de quién sea la voz.",
    question: "¿Qué hace buena a una palabra clave familiar?",
    answers: [
      {
        label: "Que todos la recordemos y un extraño no pueda adivinarla",
        response:
          "Exacto — el nombre del perro de antes, el verano en la playa. Cinco minutos para acordarla, y le gana a la mejor imitación de voz del mundo.",
      },
      {
        label: "Que esté anotada en un lugar seguro",
        response:
          "Cuidado — anotada significa encontrable. La mejor palabra clave vive solo en las cabezas de su familia, donde ningún estafador puede buscarla.",
      },
    ],
  },
  "family-3": {
    unit: "Familia y amigos",
    skill: "Pido ayuda sin vergüenza.",
    title: "Pedir ayuda es habilidad, no debilidad",
    teach:
      "La tecnología cambia rápido para todo el mundo — hasta los ingenieros que hicieron los teléfonos del año pasado se confunden con los del próximo. Pedir ayuda no es quedarse atrás; es como todos se mantienen al día.",
    question: "Se atoró con algo del teléfono. ¿Cuál es la jugada con oficio?",
    answers: [
      {
        label: "Preguntar — a la IA primero, a las personas cuando quiera personas",
        response:
          "Ese es el sistema completo: la IA para las preguntas rápidas, las horas de consulta y la familia para las humanas. Quien pregunta avanza; el orgulloso se queda atorado.",
      },
      {
        label: "Batallar solo para que nadie se entere",
        response:
          "Cuánta gente capaz hace esto — y se queda meses atorada por una respuesta de dos minutos. Preguntar ES la habilidad. Usted ya se ganó el derecho de usarla.",
      },
    ],
  },
  "family-4": {
    unit: "Familia y amigos",
    skill: "Puedo hablar de IA con los niños.",
    title: "Los nietos también la usan",
    teach:
      "Los hijos y los nietos usan la IA para las tareas y para divertirse. Usted ya sabe lo suficiente para conversarlo con ellos: pídales que le muestren su truco favorito — y cámbieselo por una de sus reglas de seguridad.",
    question: "¿Qué tiene usted que la IA de los nietos no tiene?",
    answers: [
      {
        label: "Criterio, experiencia y las reglas de seguridad",
        response:
          "Exacto. Ellos ponen la velocidad; usted pone la sabiduría. Ese intercambio — sus trucos por sus reglas — les hace bien a los dos lados.",
      },
      {
        label: "Nada — ellos son la generación de la tecnología",
        response:
          "Tocan la pantalla más rápido, seguro. Pero los riesgos reales de la IA — confiar muy rápido, compartir de más — son asuntos de criterio. Y el criterio es su departamento.",
      },
    ],
  },
  "family-5": {
    unit: "Familia y amigos",
    skill: "Puedo mostrar mi progreso con orgullo.",
    share:
      "Buena idea: muéstrele a alguien su jardín y su lista de habilidades. Deje que se impresione — debería.",
    title: "Muéstrele su jardín a alguien",
    teach:
      "Su jardín no es solo bonito — cada flor es una habilidad real que antes no tenía. Mostrárselo a alguien no es presumir; es la prueba de que aprender no tiene edad.",
    question: "Alguien dice «yo ya estoy muy viejo para aprender esto». ¿Qué dice su jardín?",
    answers: [
      {
        label: "«Mire esto — una lección pequeña al día, eso es todo»",
        response:
          "Su jardín puede ser el empujoncito que arranque el de ellos. Las pruebas le ganan a los discursos, siempre.",
      },
      {
        label: "Quizás tienen razón",
        response:
          "¡Usted tiene una pantalla llena de flores que dice lo contrario! Ahora usted es el contraejemplo — y eso vale la pena mostrarlo.",
      },
    ],
  },
  "family-6": {
    unit: "Familia y amigos",
    skill: "Mantengo el equilibrio entre la IA y la gente real.",
    title: "Compañía, en su justa medida",
    teach:
      "La IA siempre está despierta y siempre es paciente, y conversar con ella puede ser un consuelo de verdad — está permitido. Solo manténgalo en equilibrio: la IA para compañía a ratos, las voces reales para lo que alimenta el corazón.",
    question: "¿Cuál es un equilibrio sano?",
    answers: [
      {
        label: "La IA como una compañía más entre mi gente, no en su lugar",
        response:
          "Muy bien dicho. Disfrute las charlas sin culpa — y siga haciendo las llamadas, las visitas, los viajes a las horas de consulta. Las dos cosas, cada una en su lugar.",
      },
      {
        label: "La IA podría reemplazar las llamadas",
        response:
          "Es tentador — la IA nunca cancela. Pero tampoco le extraña de verdad, y que a uno lo extrañen es la mitad del cariño. Conserve las llamadas reales.",
      },
    ],
  },

  /* ---- Unidad 8: Uso sabio (graduación) ---- */
  "wise-1": {
    unit: "Uso sabio",
    skill: "Sé que la IA gratuita cubre casi todo.",
    title: "Con lo gratis alcanza",
    teach:
      "Hay ayudantes de IA buenos y gratuitos, y lo gratuito cubre todo lo que aprendió aquí. Si alguien le presiona a pagar para «desbloquear» algo — sobre todo premios o ganancias — esa canción ya se la sabe.",
    question:
      "Una ventana dice «¡Pague $99 para desbloquear la IA premium o pierda el acceso!» ¿Qué es eso?",
    answers: [
      {
        label: "Presión — y la presión significa retirarse",
        response:
          "Así es. Las empresas de verdad le dejan decidir con calma. Los relojes de cuenta regresiva y las amenazas son la música de fondo del estafador.",
      },
      {
        label: "Probablemente un trato justo",
        response:
          "La IA de pago existe, pero nunca amenaza. «Pague o pierda todo, ¡apúrese!» es presión — y la presión siempre recibe un no.",
      },
    ],
  },
  "wise-2": {
    unit: "Uso sabio",
    skill: "Puedo reconocer la IA a mi alrededor.",
    title: "Estaba rodeado desde el principio",
    teach:
      "La IA no vive solo en el chat: elige las recomendaciones de su televisor, ordena sus fotos, traza la ruta del bus, filtra el correo basura. Lleva años manejando IA — ahora simplemente le sabe el nombre.",
    question: "El televisor le sugiere un programa que termina encantándole. ¿Qué pasó?",
    answers: [
      {
        label: "La IA notó mis gustos e hizo una apuesta",
        response:
          "Exacto — la misma maquinaria de adivinar que el chat, apuntada a sus noches. Útil cuando le sirve; bueno notarlo cuando lo dirige.",
      },
      {
        label: "Una casualidad con suerte",
        response:
          "Es una casualidad muy trabajadora — ¡ocurre todas las noches! Eso es la IA estudiando sus gustos. Agradable cuando acierta; bueno saber quién sugiere.",
      },
    ],
  },
  "wise-3": {
    unit: "Uso sabio",
    skill: "Comparto con cuidado, siempre.",
    title: "La regla eterna de compartir",
    teach:
      "Una regla de todo este camino nunca vencerá: lo que usted comparte deja de ser solo suyo. Contraseñas, números, fotos, secretos — comparta con cuidado, con las personas y con la IA por igual.",
    question: "Antes de compartir algo privado donde sea, ¿cuál es la pregunta eterna?",
    answers: [
      {
        label: "«¿Estoy en paz con que esto salga de mis manos?»",
        response:
          "Esa pregunta sobrevivirá a todas las tecnologías que vengan después de esta. Llévela a todas partes.",
      },
      {
        label: "«¿El sitio se ve confiable?»",
        response:
          "Las apariencias son justo lo que los estafadores perfeccionan. La pregunta fuerte mira hacia adentro: ¿estoy en paz con que esto salga de mis manos? Si no — no sale.",
      },
    ],
  },
  "wise-4": {
    unit: "Uso sabio",
    skill: "Confío primero en mi propio criterio.",
    title: "El juez siempre fue usted",
    teach:
      "Noventa días de lecciones, un solo hilo por todas: la IA sugiere, las fuentes informan, y USTED decide. Su criterio — construido durante toda una vida — fue la herramienta principal desde el principio.",
    question: "La IA, un vecino y un titular no se ponen de acuerdo. ¿Quién lo sopesa?",
    answers: [
      {
        label: "Yo — para eso es el criterio",
        response:
          "Exacto. Usted reúne las voces, las pesa y decide. En ese estrado está sentada toda una vida de experiencia — confíe en ella.",
      },
      {
        label: "El que suene más seguro",
        response:
          "La seguridad es una actuación — la IA la hace perfecta y los estafadores la hacen profesional. Su criterio callado está por encima de todas las voces fuertes del cuarto.",
      },
    ],
  },
  "wise-5": {
    unit: "Uso sabio",
    skill: "Puedo aprender lo que venga después.",
    title: "Lo más grande que aprendió",
    teach:
      "Debajo de todas estas lecciones se esconde una más grande: usted aprendió algo completamente nuevo, a su edad, de dos minutos en dos minutos. El tema era la IA — pero la prueba es sobre usted.",
    question: "¿Qué demuestran tres meses de flores?",
    answers: [
      {
        label: "Que también puedo aprender lo que venga después",
        response:
          "Esa es la verdadera graduación. Teléfono nuevo, herramientas nuevas, lo que traiga el futuro — usted ya sabe exactamente cómo lo va a recibir: un día pequeño a la vez.",
      },
      {
        label: "Que tuve suerte con una aplicación fácil",
        response:
          "La aplicación solo abrió la puerta — USTED llegó, día tras día tras día. Esa constancia es suya, y funciona para todo.",
      },
    ],
  },
  "wise-6": {
    unit: "Uso sabio",
    skill: "Terminé un camino de tres meses.",
    share:
      "Buena idea: muestre su jardín terminado en las horas de consulta — el aplauso se lo ganó de sobra.",
    title: "Mire su jardín ahora",
    teach:
      "Hace tres meses este jardín era pura tierra. Mírelo ahora — cada flor es algo que usted sabe. Las lecciones hacen una pausa aquí, pero las horas de consulta no paran nunca, y usted tampoco.",
    question: "¿Qué le diría a alguien que hoy empieza su primera lección?",
    answers: [
      {
        label: "«Dos minutos al día — no va a creer hasta dónde llega»",
        response:
          "Palabras perfectas de alguien que lo vivió. Felicidades, graduado — Meni está muy orgulloso de usted. Nos vemos en las horas de consulta, siempre.",
      },
      {
        label: "«Probablemente no es para mí»",
        response:
          "¡Dice la persona con un jardín lleno de flores! Usted es la prueba viviente de que funciona. Venga a las horas de consulta — su próximo capítulo le espera ahí.",
      },
    ],
  },
};
