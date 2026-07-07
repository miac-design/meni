/* Contenido de lecciones de Meni — español.
   Mismas reglas de escritura que lessons.js: nivel de lectura sencillo,
   2–3 frases por pantalla, una sola idea, tono cálido y directo, sin
   tecnicismos, con enfoque en el trauma. Sin puntajes, sin tachas.
   Tratamiento de "usted" en todo el texto (respetuoso para personas mayores).

   Los ids son IDÉNTICOS a los de lessons.js: el progreso guardado en el
   teléfono sigue valiendo aunque se cambie el idioma a mitad del camino. */

const CORE_LESSONS_ES = [
  {
    id: "core-1",
    skill: "Ya sé que he usado la IA.",
    title: "La IA ya está en su vida",
    teach:
      "IA significa inteligencia artificial. Seguramente la ha usado por años — ayuda a elegir lo que usted ve cuando busca algo en internet.",
    question: "¿Ha usado Google alguna vez?",
    answers: [
      {
        label: "Sí",
        response: "¡Entonces ya ha usado la IA! Le ha estado ayudando todo este tiempo.",
      },
      {
        label: "No lo sé",
        response: "¡No pasa nada! Mañana lo vemos juntos.",
      },
    ],
  },
  {
    id: "core-2",
    skill: "Puedo hablarle a la IA con palabras sencillas.",
    title: "Hablar con la IA es como pedir comida",
    teach:
      "Puede hablarle a la IA con palabras sencillas, como cuando pide comida. Cuanto más claro el pedido, más recibe lo que quiere — sin palabras de computadora.",
    question: "¿Cuál pedido le trae el sándwich correcto?",
    answers: [
      {
        label: "«Un sándwich de pavo, sin cebolla, por favor»",
        response:
          "¡Sí! Claro y sencillo. La IA funciona igual — solo diga lo que quiere con palabras sencillas.",
      },
      {
        label: "«Algo de comida, por favor»",
        response:
          "También funciona, ¡pero le puede llegar cualquier cosa! Un poquito de detalle le ayuda a recibir justo lo que quiere.",
      },
    ],
  },
  {
    id: "core-3",
    skill: "Puedo hacerle una pregunta clara a la IA.",
    title: "Cómo hacer una buena pregunta",
    teach:
      "La IA responde mejor cuando usted agrega un poco de detalle. En vez de «escribe una carta», pruebe «escribe una carta corta y cariñosa para mi nieta».",
    question: "¿Cuál pregunta recibirá una mejor respuesta?",
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
  {
    id: "core-4",
    skill: "Sé que debo verificar lo que dice la IA.",
    title: "Verifique lo que le dice la IA",
    teach:
      "La IA suena muy segura, pero puede equivocarse — a veces inventa cosas. Para asuntos grandes como la salud o el dinero, consulte con una persona de confianza.",
    question: "La IA le dice un dato sobre una medicina nueva. ¿Cuál es un buen siguiente paso?",
    answers: [
      {
        label: "Preguntarle primero a mi médico o farmacéutico",
        response:
          "Exactamente. La IA es una ayudante, no un médico. Consultar con una persona de confianza siempre es lo más sabio.",
      },
      {
        label: "Creerle de inmediato",
        response:
          "Es tentador — ¡la IA suena tan segura de sí misma! Pero puede equivocarse, así que consultar primero con su médico le mantiene a salvo.",
      },
    ],
  },
  {
    id: "core-5",
    skill: "Sé que la IA se equivoca — y yo decido.",
    title: "La IA comete errores",
    teach:
      "La IA aprendió de cosas que escribió la gente, y la gente se equivoca. Así que recuerde: la IA sugiere, y usted decide.",
    question: "¿Quién toma la decisión final, usted o la IA?",
    answers: [
      {
        label: "Yo",
        response: "¡Así es! La IA es su ayudante. Usted siempre tiene la última palabra.",
      },
      {
        label: "La IA",
        response:
          "Puede sentirse así, pero no — usted siempre está al mando. La IA solo sugiere. Usted decide.",
      },
    ],
  },
  {
    id: "core-6",
    skill: "Sé que no puedo dañar la IA por preguntar.",
    title: "No la puede descomponer",
    teach:
      "Mucha gente teme apretar un botón equivocado y descomponer algo. Usted no puede dañar la IA haciendo preguntas — preguntar siempre es seguro.",
    question: "¿Qué pasa si le hace una pregunta chistosa a la IA?",
    answers: [
      {
        label: "Nada malo — solo responde",
        response: "¡Exactamente! No hay preguntas equivocadas. Anímese a probar lo que sea.",
      },
      {
        label: "Se puede descomponer",
        response:
          "Buenas noticias: ¡no se descompone! Puede preguntar lo que quiera y no pasa nada malo. Se lo prometo.",
      },
    ],
  },
  {
    id: "core-7",
    skill: "Puedo pedirle a la IA que lo intente otra vez.",
    title: "Si la respuesta no sirve, pida otra",
    teach:
      "A veces la primera respuesta de la IA no es lo que usted quería. Es normal — pida otra vez con otras palabras, como cuando da direcciones.",
    question: "La respuesta de la IA fue larga y confusa. ¿Qué puede hacer?",
    answers: [
      {
        label: "Decirle: «Hazla más corta y más sencilla»",
        response:
          "¡Perfecto! La IA nunca se cansa ni se molesta. Puede pedirle otra vez cuantas veces quiera.",
      },
      {
        label: "Rendirme",
        response:
          "¡No hace falta! La IA nunca se cansa de intentarlo. Solo diga «más corto» y vea qué pasa.",
      },
    ],
  },
  {
    id: "core-8",
    skill: "Mantengo privadas mis contraseñas y mis números.",
    share: "Buena idea: pregúntele a alguien si conocía esta regla. ¡Ahora usted puede enseñarla!",
    title: "Lo privado se queda privado",
    teach:
      "La IA solo sabe lo que usted le escribe. Guarde para usted sus contraseñas, números de banco y número de Seguro Social — ningún ayudante honesto los necesita.",
    question: "¿Debe decirle a la IA la contraseña de su banco?",
    answers: [
      {
        label: "No, mis contraseñas son solo mías",
        response:
          "¡Así es! Ningún ayudante de verdad — humano o IA — necesita su contraseña. Usted sabe cuidarse.",
      },
      {
        label: "Quizás, si me la pide con amabilidad",
        response:
          "¡Nunca debería pedirla! Si algo le pide una contraseña o un número de banco, esa es la señal para detenerse y consultar con una persona de confianza.",
      },
    ],
  },
  {
    id: "core-9",
    skill: "Sé que ahora las fotos pueden ser falsas.",
    share: "Buena idea: pregúntele a alguien si puede distinguir siempre una foto falsa. ¡Usted ya conoce el truco!",
    title: "Ahora las fotos pueden ser inventadas",
    teach:
      "La IA ya puede crear fotos y videos que parecen reales pero nunca ocurrieron. Si una imagen le parece increíble o extraña, es sabio preguntarse: «¿Será real?»",
    question: "Ve una foto increíble en internet. ¿Cuál es un buen primer pensamiento?",
    answers: [
      {
        label: "«¿Será real esto?»",
        response:
          "Ese es exactamente el instinto correcto. Dudar primero es un superpoder hoy en día.",
      },
      {
        label: "«Las fotos no mienten»",
        response:
          "¡Antes eran más confiables! Hoy la IA puede crear fotos falsas, así que dudar primero le mantiene alerta.",
      },
    ],
  },
  {
    id: "core-11",
    skill: "Puedo hablarle a mi teléfono en vez de escribir.",
    mission: "Pruébelo hoy: toque el micrófono pequeño del teclado y solo diga hola.",
    title: "Hable en vez de escribir",
    teach:
      "Si escribir le cuesta trabajo, buenas noticias: puede hablarle a la IA en voz alta. Casi todos los teclados del teléfono tienen un botón de micrófono — tóquelo y hable.",
    question: "Hoy le duelen las manos al escribir. ¿Qué puede probar?",
    answers: [
      {
        label: "Tocar el micrófono y hablar",
        response:
          "¡Sí! Hablar funciona igual de bien que escribir. Sus palabras se vuelven texto solitas.",
      },
      {
        label: "Dejar de usar la IA",
        response:
          "¡No hace falta! El botoncito del micrófono le deja hablar en vez de escribir. Podemos buscarlo juntos en las horas de consulta.",
      },
    ],
  },
  {
    id: "core-12",
    skill: "Sé lo que la IA no puede hacer.",
    title: "Lo que la IA no puede hacer",
    teach:
      "La IA es buena con las palabras, pero no le conoce a usted y no tiene sentimientos. No puede reemplazar a su médico, a su familia ni a su propio buen juicio.",
    question: "¿Quién sabe qué es lo mejor para su vida?",
    answers: [
      {
        label: "Yo",
        response:
          "Exactamente. La IA es una herramienta útil en sus manos — y usted es quien la sostiene.",
      },
      {
        label: "La IA",
        response:
          "¡La IA ni siquiera sabe su nombre si usted no se lo dice! Usted conoce su vida mejor que nadie. La IA solo ayuda con las palabras.",
      },
    ],
  },
  {
    id: "core-10",
    skill: "Terminé lo básico de la IA.",
    title: "Mire cuánto ha avanzado",
    teach:
      "Ya sabe qué es la IA, cómo hablarle y cómo verificar sus respuestas. Eso es más de lo que sabe la mayoría de la gente — de verdad.",
    question: "¿Quiere seguir con ejemplos de la vida diaria?",
    answers: [
      {
        label: "Sí, sigamos",
        response:
          "¡Maravilloso! Desde aquí, cada lección muestra a la IA ayudando con cosas reales de todos los días.",
      },
      {
        label: "Prefiero repasar primero",
        response:
          "Muy buena idea. Traiga cualquier pregunta a las horas de consulta y repasamos juntos — para eso son.",
      },
    ],
  },
];

const PACKS_ES = {
  everyday: [
    {
      id: "ev-1",
      skill: "Puedo reconocer un mensaje de estafa.",
      title: "Cómo reconocer un mensaje de estafa",
      alert: true,
      teach:
        "Los estafadores usan la IA para escribir mensajes que parecen muy reales. Una estafa casi siempre le mete prisa — los bancos de verdad y la familia de verdad no le apuran para pedir dinero o códigos.",
      question:
        "Un texto dice: «Abuela, estoy en problemas, ¡manda tarjetas de regalo ya!» ¿Qué hace usted?",
      answers: [
        {
          label: "Me detengo y llamo a mi familiar a su número de siempre",
          response:
            "Perfecto. Detenerse y llamar directamente a la persona vence cualquier estafa. Acaba de protegerse.",
        },
        {
          label: "Mando las tarjetas de regalo rápido",
          response:
            "Esa prisa es el truco — el mensaje está hecho para asustar. Deténgase, respire y llame a su familiar al número que usted conoce.",
        },
      ],
    },
    {
      id: "ev-2",
      skill: "Puedo prepararme para el médico con la IA.",
      title: "Prepararse para el médico",
      teach:
        "La IA puede ayudarle a prepararse para una cita médica. Pídale: «Ayúdame a hacer una lista de preguntas sobre mi dolor de rodilla».",
      question: "¿Para qué sirve la IA antes de una cita médica?",
      answers: [
        {
          label: "Para ayudarme a escribir mis preguntas",
          response:
            "¡Sí! La IA le ayuda a organizarse, y su médico le da el consejo médico. Un gran equipo.",
        },
        {
          label: "Para tomar el lugar del médico",
          response:
            "No — ninguna IA puede tomar el lugar de su médico. Pero es maravillosa para ayudarle a preparar sus preguntas.",
        },
      ],
    },
    {
      id: "ev-3",
      skill: "Conozco la regla de las tarjetas de regalo.",
      share: "Buena idea: pregúntele a alguien si conoce la regla de las tarjetas de regalo. ¡Ya puede enseñarla!",
      title: "La regla de las tarjetas de regalo",
      alert: true,
      teach:
        "Aquí va una regla que vence casi todas las estafas: nadie honesto pide que le paguen con tarjetas de regalo. Ni los bancos, ni el gobierno, ni el soporte técnico — nadie.",
      question: "Alguien llama y dice que usted debe dinero y tiene que pagar con tarjetas de regalo. ¿Qué es?",
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
    {
      id: "ev-4",
      skill: "Sé cómo vencer una llamada con voz falsa.",
      share: "Buena idea: hable con su familia para elegir juntos una palabra clave secreta.",
      title: "Una voz que suena como su familia",
      alert: true,
      teach:
        "La IA puede copiar la voz de una persona con una grabación corta. Si una llamada suena como un familiar pidiendo dinero, cuelgue y llámele usted al número que conoce.",
      question:
        "La voz del teléfono suena igual a su nieto pidiendo dinero. ¿Qué hace usted?",
      answers: [
        {
          label: "Cuelgo y le llamo a su número de siempre",
          response:
            "Perfecto. Devolver la llamada al número que usted conoce vence cualquier truco de voz. Algunas familias incluso eligen una palabra clave secreta.",
        },
        {
          label: "Mando el dinero de inmediato",
          response:
            "Las voces ya se pueden falsificar, hasta la de un ser querido. Cuelgue primero y llame usted — si es de verdad, lo van a entender.",
        },
      ],
    },
    {
      id: "ev-5",
      skill: "Puedo escribir un mensaje cariñoso con ayuda de la IA.",
      title: "Un mensaje de cumpleaños con ayuda",
      teach:
        "La IA es encantadora para los mensajes especiales. Pruebe: «Ayúdame a escribir un mensaje de cumpleaños corto y cariñoso para mi hermana que ama su jardín».",
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
            "¡La IA no conoce a su hermana — usted sí! Dele sus detalles y el mensaje sonará justo como usted.",
        },
      ],
    },
    {
      id: "ev-6",
      skill: "Puedo pedir que me expliquen una carta oficial en palabras sencillas.",
      title: "Cartas oficiales en palabras sencillas",
      teach:
        "Las cartas oficiales vienen llenas de palabras confusas. Puede leerle una a la IA y pedirle: «Explícame esta carta en palabras sencillas».",
      question: "Una carta de una oficina le confunde. ¿Qué puede probar?",
      answers: [
        {
          label: "Pedirle a la IA que la explique con sencillez",
          response:
            "¡Sí! Y para las decisiones grandes, lleve la carta también a las horas de consulta — dos ayudantes son mejor que uno.",
        },
        {
          label: "Guardarla en un cajón",
          response:
            "¡Muy tentador! Pero la IA puede quitarle el susto en un minuto. Y siempre puede llevarla a las horas de consulta.",
        },
      ],
    },
    {
      id: "ev-7",
      skill: "Puedo pedir que me expliquen las palabras médicas difíciles.",
      title: "Palabras difíciles del médico",
      teach:
        "Los médicos a veces usan palabras que nadie conoce. Pregúntele a la IA: «¿Qué significa hipertensión, en palabras sencillas?» — y verifique lo importante con su médico.",
      question: "¿Quién da la respuesta médica final?",
      answers: [
        {
          label: "Mi médico",
          response:
            "Así es. La IA explica las palabras, y su médico le cuida. Un buen equipo, en ese orden.",
        },
        {
          label: "La IA",
          response:
            "La IA es buena con las palabras, pero su médico le conoce a usted. Use la IA para entender, y a su médico para decidir.",
        },
      ],
    },
    {
      id: "ev-8",
      skill: "Sé que los mensajes de premios con cargo son estafas.",
      share: "Buena idea: dígale a alguien: los premios de verdad nunca piden dinero por adelantado.",
      title: "Demasiado bueno para ser verdad",
      alert: true,
      teach:
        "«¡Ganó un premio! Solo pague una pequeña cuota.» Los premios de verdad nunca piden dinero por adelantado — esa petición es toda la estafa.",
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
            "¡Está diseñado para darle esperanza! Pero los premios de verdad nunca cobran una cuota. Pagar para ganar siempre significa estafa.",
        },
      ],
    },
    {
      id: "ev-9",
      skill: "Puedo pedirle ideas cotidianas a la IA.",
      mission: "Pruébelo hoy: pídale a una IA tres ideas fáciles para la cena.",
      title: "Ideas para la cena en diez segundos",
      teach:
        "La IA también sirve para las cosas pequeñas. Pruebe: «Dame tres ideas fáciles para cenar con pollo y arroz».",
      question: "¿Quiere que las ideas se ajusten mejor a usted?",
      answers: [
        {
          label: "Agrego lo que me gusta: «nada picante, por favor»",
          response:
            "¡Perfecto! Cuanto más le cuenta, mejor se ajusta a usted. Como un buen mesero.",
        },
        {
          label: "Tomo lo que me dé",
          response:
            "¡También funciona! Y cuando quiera, puede agregar «nada picante» o «algo rápido» — se ajusta al instante.",
        },
      ],
    },
    {
      id: "ev-10",
      skill: "Ya puedo tener mi primera conversación real con la IA.",
      title: "Su primera conversación de verdad",
      teach:
        "Ya sabe lo suficiente para probar la IA de verdad — y no tiene que hacerlo sin compañía. En las horas de consulta abriremos una IA juntos y usted hará su primera pregunta.",
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
  ],
  work: [
    {
      id: "wk-1",
      skill: "Puedo armar mi currículum con ayuda de la IA.",
      title: "La IA puede ayudarle con su currículum",
      teach:
        "Un currículum es una lista corta de lo que usted sabe hacer. Usted pone los datos verdaderos, y la IA le ayuda a decirlos con claridad y con orgullo.",
      question: "¿Qué le da usted a la IA para que ayude con su currículum?",
      answers: [
        {
          label: "Los datos verdaderos de mi trabajo y mis habilidades",
          response:
            "Exactamente. Usted pone la verdad, y la IA ayuda con las palabras. Un equipo fuerte.",
        },
        {
          label: "Nada — ya me conoce",
          response:
            "¡Qué bueno comprobarlo! La IA no le conoce para nada, y eso es bueno para su privacidad. Solo sabe lo que usted decide contarle.",
        },
      ],
    },
    {
      id: "wk-2",
      skill: "Puedo practicar entrevistas con la IA.",
      title: "Practicar para una entrevista",
      teach:
        "Puede practicar una entrevista de trabajo con la IA. Pídale: «Hazme tres preguntas comunes de entrevista para un trabajo de cocina».",
      question: "¿Le gustaría probar una pregunta de práctica en las horas de consulta?",
      answers: [
        {
          label: "Sí, me gustaría",
          response:
            "¡Maravilloso! Toque «Guardar esta pregunta» aquí abajo y la practican juntos en las horas de consulta.",
        },
        {
          label: "Quizás después",
          response:
            "Está muy bien. La idea le estará esperando aquí, para cuando usted quiera.",
        },
      ],
    },
    {
      id: "wk-3",
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
            "Leer ayuda, pero decirlo en voz alta funciona mejor. La IA le escucha las veces que necesite — sin juzgar jamás.",
        },
      ],
    },
    {
      id: "wk-4",
      skill: "Puedo escribir una carta corta para un trabajo.",
      title: "Una carta que abre puertas",
      teach:
        "Una carta corta junto a una solicitud de trabajo muestra interés. Dele a la IA los datos verdaderos: «Ayúdame a escribir tres frases sobre por qué haría bien este trabajo de cocina».",
      question: "¿Qué aporta usted a la carta?",
      answers: [
        {
          label: "Mis habilidades verdaderas y mi interés",
          response:
            "Exactamente. Verdad más buenas palabras es una combinación fuerte. La IA ayuda con las palabras.",
        },
        {
          label: "Nada — la IA la escribe sola",
          response:
            "La IA sin su verdad escribe una carta vacía. Dele sus habilidades reales — entonces sí brilla.",
        },
      ],
    },
    {
      id: "wk-5",
      skill: "Puedo pedir que me expliquen un contrato de renta en palabras sencillas.",
      title: "Entender un contrato de renta",
      teach:
        "Los contratos de renta están llenos de palabras pesadas. Puede preguntarle a la IA: «¿Qué significa esta frase de mi contrato, en palabras sencillas?»",
      question: "Para un problema grande de vivienda, ¿cuál es la jugada más fuerte?",
      answers: [
        {
          label: "Entenderlo con la IA y luego buscar ayuda de verdad",
          response:
            "Así es. La IA explica, y para los pasos grandes, una oficina de ayuda legal o una persona de confianza le acompaña.",
        },
        {
          label: "No hacer nada",
          response:
            "Se entiende — las palabras pesadas cansan. Pero una explicación en palabras sencillas puede hacer posible el siguiente paso. Las horas de consulta también ayudan.",
        },
      ],
    },
    {
      id: "wk-6",
      skill: "Puedo escribir una nota clara para una escuela.",
      title: "Escribir a la escuela",
      teach:
        "Una nota para un maestro funciona mejor corta y clara. Pruebe: «Ayúdame a escribir una nota corta y amable preguntando cómo va mi hijo en matemáticas».",
      question: "¿Cuál nota recibe mejor respuesta?",
      answers: [
        {
          label: "Corta, amable y específica",
          response:
            "¡Sí! Los maestros están ocupados — lo corto y específico sí recibe respuesta. La IA es muy buena para lo corto y amable.",
        },
        {
          label: "Larga, con todo de una vez",
          response:
            "¡Dan ganas de decirlo todo! Pero las notas cortas se leen primero. La IA puede ayudarle a elegir lo más importante de hoy.",
        },
      ],
    },
    {
      id: "wk-7",
      skill: "Puedo pedir que me expliquen las preguntas de un formulario.",
      title: "Formularios sin miedo",
      teach:
        "Los formularios preguntan cosas confusas como «estado civil» o «referencias». Puede preguntarle a la IA qué significa cualquier pregunta antes de contestarla.",
      question: "Una pregunta del formulario no tiene sentido para usted. ¿Qué puede hacer?",
      answers: [
        {
          label: "Preguntarle a la IA qué significa, en palabras sencillas",
          response:
            "Exactamente. Primero entender, después contestar. Y los espacios en blanco pueden esperar a las horas de consulta.",
        },
        {
          label: "Adivinar y esperar suerte",
          response:
            "¡Todos lo hemos hecho! Pero un rápido «¿qué significa esto?» toma diez segundos — y en las horas de consulta pueden terminar cualquier formulario juntos.",
        },
      ],
    },
    {
      id: "wk-8",
      skill: "Sé que los trabajos de verdad nunca me cobran.",
      share: "Buena idea: dígale a alguien: los trabajos de verdad le pagan a usted, nunca al revés.",
      title: "Trabajos que piden dinero",
      alert: true,
      teach:
        "Los trabajos de verdad le pagan a usted — nunca al revés. Cualquier «trabajo» que pida una cuota, tarjetas de regalo o su contraseña del banco es una estafa.",
      question: "Una oferta de trabajo pide $50 para «apartar su lugar». ¿Qué es?",
      answers: [
        {
          label: "Una estafa — los trabajos de verdad nunca cobran",
          response:
            "Exactamente. Aléjese con orgullo — acaba de proteger su dinero.",
        },
        {
          label: "Un trato justo",
          response:
            "¡Está hecho para sonar justo! Pero los empleadores de verdad nunca cobran por empezar. Dinero en la dirección equivocada siempre significa estafa.",
        },
      ],
    },
    {
      id: "wk-9",
      skill: "Puedo aprender lo que sea, paso a paso, con la IA.",
      mission: "Esta semana, pruébelo: pídale a la IA que le explique algo nuevo, paso a paso.",
      title: "Aprender lo que sea, paso a paso",
      teach:
        "La IA puede enseñar a su ritmo. Pruebe: «Explícame cómo usar el correo electrónico, paso a paso, como si fuera mi primera vez».",
      question: "Los pasos van demasiado rápido. ¿Qué le dice?",
      answers: [
        {
          label: "«Más despacio, un paso a la vez»",
          response:
            "Perfecto. La IA nunca suspira ni le mete prisa. Va exactamente a su ritmo, todas las veces.",
        },
        {
          label: "Nada — mejor lo dejo",
          response:
            "Se perdería su mejor truco de estudiante: solo diga «más despacio, por favor». La IA empieza de nuevo con gusto, todas las veces.",
        },
      ],
    },
    {
      id: "wk-10",
      skill: "Ya puedo tener mi primera conversación real con la IA.",
      title: "Su primera conversación de verdad",
      teach:
        "Ya sabe lo suficiente para probar la IA de verdad — y no tiene que hacerlo sin compañía. En las horas de consulta abriremos una IA juntos y usted hará su primera pregunta.",
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
  ],
};
