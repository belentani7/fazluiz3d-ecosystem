# APIs Gratuitas y Alternativas para OpenCode

- Chat ID: `8fdea918-d207-453c-b5b5-305fdb703b69`
- Mensajes: 4
- Periodo: 2026-09-04 16:20 UTC → 2026-09-04 16:22 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-09-04 16:20

Saltar al contenido principalAyuda sobre la accesibilidad
Modo IA
Todo
Imágenes
Vídeos
Vídeos cortos
Más
Actualizar




un agente que vaya haciendo cuenta y sacandome todas las free tier api que hay en el mundo
No existe un agente de IA que automatice la creación de cuentas en todas las APIs del mundo, ya que violaría los términos de servicio, los sistemas de seguridad (CAPTCHAs) y las políticas de verificación de identidad (como SMS o tarjetas de crédito) de las plataformas.
Sin embargo, puedes consultar repositorios y listas públicas exhaustivas que recopilan cientos de APIs con planes gratuitos.
Repositorios principales de APIs gratuitas
Public APIs en GitHub: El catálogo de código abierto más grande del mundo. Está ordenado por categorías (clima, deportes, datos, etc.) e indica claramente cuáles son completamente gratuitas y cuáles no requieren clave de autenticación.
Freepublicapis.com: Un directorio visual muy limpio y fácil de explorar, especializado exclusivamente en APIs de uso libre y sin costes ocultos.
RapidAPI Hub: Una plataforma masiva donde puedes filtrar miles de APIs comerciales utilizando la etiqueta "Free tier". Te permite probarlas directamente desde su navegador web.
Free-for.dev: Una lista excepcional para desarrolladores que, además de APIs, incluye capas gratuitas de servidores, bases de datos, hosting y herramientas de analítica.
Automatización alternativa (Lectura de datos)
Si quieres construir tu propio sistema para consolidar esta información, puedes crear un script en Python que consuma la API de Public APIs Index (o repositorios similares) para extraer la lista actualizada de servicios gratuitos automáticamente en tu base de datos local.
Si te interesa, puedo ayudarte a escribir un script en Python para descargar y filtrar estas listas de APIs automáticamente. ¿Te gustaría enfocar el desarrollo en alguna categoría de datos en específico (como finanzas, IA, mapas)?
Las respuestas de la IA pueden contener errores. Más información




api de opencode, claude...





Para integrar Claude (o cualquier otro modelo de frontera) en OpenCode sin gastar fortunas en consumo directo por tokens, existen pasos de configuración precisos y alternativas con capas gratuitas muy eficientes. 

YouTube
·Leedeo Studio
 +1
1. La Vía de Modelos Gratuitos para OpenCode
Si buscas utilizar el agente OpenCode sin pagar por las consultas, la mejor opción es utilizar un agregador compatible: 

YouTube
·Leedeo Studio
OpenRouter Free Tier: Proporciona más de 25 modelos de IA completamente gratuitos (como Llama 3, Mistral, o Gemma) con un límite de hasta 50 peticiones al día. 

OpenRouter
 +1
OpenCode Zen: Es el agregador nativo de la herramienta que va rotando diferentes modelos gratuitos con acceso ilimitado para sus usuarios registrados. 

Web Reactiva
 +1
2. Configurar la API de Claude (Anthropic) en OpenCode
Si requieres la precisión analítica de los modelos avanzados de Anthropic (como Claude 5 Sonnet o Claude Fable 5.1), debes saber que Anthropic bloqueó el uso de tokens OAuth de las suscripciones Claude Pro/Max en herramientas CLI externas. 

BenchLM
 +1
La única manera de usarlo es mediante pago por uso directo (Pay-as-you-go) creando una clave de API comercial. Para vincularla: 

seguridadenwordpress.com
 +1
Ve a la Consola de Desarrolladores de Anthropic y genera tu API Key. (Nota: Anthropic suele regalar alrededor de $5 en créditos de prueba al verificar cuentas nuevas).
Abre tu terminal de comandos y ejecuta:
bash
opencode /connect
Usa el código con precaución.
Selecciona Anthropic (o el proveedor que utilices) e introduce la API Key cuando el sistema te lo solicite.
Cambia y selecciona el modelo activo con el comando:
bash
opencode /models
Usa el código con precaución.
 

OpenCode
 +2
3. Configuración avanzada vía Archivo JSON
También puedes definir los proveedores editando directamente tu archivo de configuración global de OpenCode en ~/.config/opencode/config.json: 

OpenCode
json
{
  "provider": {
    "anthropic": {
      "apiKey": "TU_CLAVE_API_DE_CLAUDE_AQUÍ"
    },
    "openrouter": {
      "apiKey": "TU_CLAVE_API_DE_OPENROUTER_AQUÍ"
    }
  }
}
Usa el código con precaución.
¿Te gustaría que preparemos el comando para levantar un modelo local gratuito (vía Ollama) en tu máquina para usarlo con OpenCode y ahorrar el 100% de los costes de API? 

Web Reactiva
Las respuestas de la IA pueden contener errores. Más información





OpenCode
Proveedores - OpenCode
3 sept 2026 — * Introducción. * Configuración. * Proveedores. * Red. * Solución de problemas. * Compartir. * Configuración. Herramientas. Reglas...



YouTube
·
Leedeo Studio
OpenCode 🤖 A FREE and Easy Alternative to Claude Code ...
23 abr 2026 — OpenCode 🤖 Alternativa GRATIS y Fácil a Claude Code y Google Antigravity funcionamiento. es un simple chat con agentes de IA abre...

2m

Web Reactiva
Claude Code vs OpenCode: cuál elegir y por qué
15 mar 2026 — Claude Code vs OpenCode: cuál elegir y por qué * ¿Qué es Claude Code y qué es OpenCode? * ¿Cuáles son las principales diferencias?

Mostrar todo
necesito muchos algos mases
¡Entendido! Si lo que buscas es una lista masiva y directa de recursos, plataformas y herramientas con capas gratuitas (free tiers) que puedas exprimir al máximo para programar, desplegar o experimentar, aquí tienes la colección definitiva dividida por categorías:
🚀 Proveedores de Modelos de IA (Alternativas a Claude con Free Tier)
Groq Cloud: Ofrece acceso ultrarrápido a modelos como Llama 3 y Mixtral con una capa gratuita generosa basada en límites de peticiones por minuto.
Google AI Studio: Te da acceso gratuito a las APIs de Gemini Flash y Pro (con límites de velocidad de uso por minuto) ideal para análisis de texto y visión.
Hugging Face Serverless Inference: Te permite hacer peticiones gratuitas a miles de modelos de código abierto alojados en su plataforma.
Cohere: Ofrece una clave de API gratuita para uso de desarrollo y pruebas en sus modelos de lenguaje y embeddings.
🌐 Hosting y Despliegue de Aplicaciones (PaaS)
Render: Te permite alojar aplicaciones web (Node, Python, Go) y bases de datos PostgreSQL de forma gratuita (los servicios web se "duermen" si no reciben tráfico).
Vercel / Netlify: Las mejores opciones del mercado para desplegar aplicaciones de frontend (React, Next.js, Vue) y funciones Serverless sin pagar un céntimo.
Railway: Te otorga créditos mensuales gratuitos para desplegar contenedores Docker, bases de datos o aplicaciones rápidamente.
Supabase: Te da un backend completo con una base de datos PostgreSQL real, autenticación y almacenamiento de archivos en su plan gratuito.
📊 Bases de Datos y Almacenamiento en la Nube
MongoDB Atlas: Incluye un clúster gratuito permanente (512 MB) de base de datos NoSQL ideal para proyectos pequeños.
Neon: Servidor de PostgreSQL serverless con una capa gratuita excelente que incluye escalado automático.
Upstash: Base de datos Redis y Kafka serverless con un plan gratuito basado en el número de peticiones diarias.
Pinecone: Base de datos vectorial esencial para proyectos de IA y sistemas de memoria (RAG), con un índice gratuito.
🔧 Automatización, Webhooks y Herramientas
Make (antiguo Integromat): Te permite automatizar flujos de trabajo conectando APIs visualmente con 1,000 operaciones gratis al mes.
n8n.io: Herramientas de automatización similar a Zapier que puedes auto-alojar gratis en tu propio servidor o usar su versión en la nube limitada.
Cron-job.org: Un servicio completamente gratuito para ejecutar peticiones HTTP periódicas (tareas cron) de forma externa.
¿Hacia qué área te interesa expandirte ahora? Te puedo dar más opciones enfocadas en proveedores de servidores VPS gratuitos, APIs de mapas y geolocalización, o herramientas de analítica web.
Las respuestas de la IA pueden contener errores. Más información




las viejas que fallan siempre
Si te refieres a esas APIs clásicas de desarrollo que nunca se caen, no te piden tarjeta de crédito y jamás te van a cobrar, estás hablando de las "viejas confiables" de la programación. Son las herramientas que todo desarrollador usa para hacer pruebas de concepto (PoC), maquetas o aprender a conectar datos sin lidiar con dolores de cabeza. 

DEV Community
 +1
Aquí tienes la lista de las APIs indestructibles que siempre funcionan:
🛠️ Las Falsas APIs (Para simular bases de datos y usuarios)
JSONPlaceholder: El estándar absoluto. Te da respuestas instantáneas en JSON simulando posts, comentarios, usuarios y tareas. Soporta peticiones GET, POST, PUT y DELETE sin registrarte. 

Medium
·Ujjawal Rohra
 +1
ReqRes: Diseñada exclusivamente para probar flujos de inicio de sesión (Login), registros y autenticación con respuestas de tokens ficticios. 

DEV Community
 +1
Random User Generator: Te genera perfiles completos de personas falsas con nombres, emails, contraseñas y hasta fotos de perfil listas para renderizar en tu interfaz. 

DEV Community
🌍 Datos del Mundo Real (Sin tokens ni llaves)
Open-Meteo: La API del clima definitiva. No requiere API Key. Le pasas la latitud y longitud por la URL y te devuelve el pronóstico meteorológico exacto al instante. 

Medium
·Ujjawal Rohra
REST Countries: Te escupe toda la información de los países del planeta (banderas, monedas, capitales, idiomas) con rutas extremadamente sencillas. 

Medium
·Ujjawal Rohra
ipify: Una API ridículamente simple que solo hace una cosa: le preguntas algo y te devuelve la dirección IP pública de tu cliente en texto plano o JSON. 

Medium
·Ujjawal Rohra
🐶 Contenido Rápido (Imágenes y ocio)
Dog CEO's Dog API: Si necesitas imágenes aleatorias para probar una galería de fotos en tu frontend, esta API te devuelve fotos aleatorias de perros ordenados por razas.
PokéAPI: Un clásico masivo. Contiene la base de datos de todos los Pokémon con movimientos, estadísticas y evoluciones. Perfecta para practicar paginaciones complejas. 

DEV Community
¿Estás intentando montar un entorno de pruebas local con alguna de estas o quieres meter datos reales en tu CLI de OpenCode? Dime cuál es tu plan y te armo el código de integración de inmediato. 

OpenCode
 +1
Las respuestas de la IA pueden contener errores. Más información





OpenCode
OpenCode | The open source AI coding agent
OpenCode is an open source agent that helps you write code in your terminal, IDE, or desktop. [*]. LSP enabled Automatically loads...


DEV Community
30 Free APIs Every Developer Should Know in 2026
13 mar 2026 — 30 Free APIs Every Developer Should Know in 2026. ... APIs are the backbone of modern software development. Every time you check t...


Medium
·
Ujjawal Rohra
15 Free APIs Every Developer Should Know (With Real ...
17 ene 2026 — * JSONPlaceholder — Fake REST API for Testing. Why it's useful: Common Use Cases: Example: GET Posts. Example: POST a New Post. * ...

Mostrar todo
me refiero que groq cohere y compania nunca me han funcionado, necesito algo tipo onmitoute,  awesome free llms
Si Groq o Cohere te fallan constantemente, suele deberse a que sus límites de peticiones por minuto (RPM) para cuentas gratuitas son muy estrictos y las bloquean al instante si usas agentes automáticos (como en OpenCode). 

Reddit
·r/better_claw
 +1
Cuando buscas proyectos como OmniRoute o repositorios del tipo "Awesome Free LLMs", lo que necesitas no son llaves individuales, sino Gateways / Proxies de IA. Estas herramientas unifican docenas de proveedores gratuitos en un solo sitio y saltan automáticamente de uno a otro cuando uno falla (Failover). 

StationX
 +2
Las mejores soluciones activas para resolver esto son:
1. El Enfoque Local: OmniRoute (El balanceador definitivo)
OmniRoute es un proxy de IA de código abierto diseñado exactamente para lo que pides. Se instala en tu máquina (vía Docker o npm) y actúa como un "semáforo" inteligente. 

YouTube
·Panda Making Money
 +2
Cómo funciona: Tú metes 2 o 3 llaves gratuitas de cualquier sitio (o usas sus proveedores públicos integrados). Si configuras OpenCode apuntando a OmniRoute, cuando Groq te dé error por límite de uso, OmniRoute redirige tu petición en milisegundos hacia otro proveedor libre sin que tu agente se entere ni falle.
Ventaja: Soporta más de 150 catálogos gratuitos y tiene un sistema antifallos automático. 

GitHub
 +3
2. El Repositorio: "Awesome Free LLM APIs" actualizado diariamente
Si buscas la lista en GitHub que recopila los accesos directos sin restricciones, el repositorio clave es open-free-llm-api/awesome-freellm-apis (anteriormente Free-LLM y ramificaciones de mnfst). 

GitHub
 +2
Este repositorio rastrea más de 134 APIs de LLM gratuitas en tiempo real.
Te indica explícitamente cuáles son "No API Key / No Auth" (que funcionan metiendo una URL directa en tu código sin registrarte en ningún lado). 

GitHub
 +1
3. Proveedores "Zero-Key" (Sin llaves ni registros)
Si quieres APIs que no requieran que configures nada en absoluto y que no dependan de los molestos bloqueos de Groq, puedes usar pasarelas públicas:
Pollinations.ai: Completamente libre. Solo haces una petición HTTP a su URL mandando el texto y te responde al instante. Sin registros, sin tarjetas, sin caídas continuas. 

YouTube
·Coding Shiksha
 +1
LLM7.io: Un gateway de IA que permite acceso anónimo para desarrollo. Te deja usar modelos abiertos (como Mistral Nemo o MiniMax) simplemente cambiando la URL base de tus peticiones. 

GitHub
Kilo Code: Utiliza un enrutador interno (kilo-auto/free) que te da acceso a modelos enormes (como los Nemotron de Nvidia o Step-Flash) sin necesidad de registrar claves individuales. 

GitHub
¿Cómo configurarlo en tu entorno?
Para que tu entorno de desarrollo deje de fallar, en tu archivo de configuración de OpenCode o tu script, debes cambiar la Base URL tradicional de OpenAI por la de uno de estos proxies libres: 

DEV Community
 +1
json
{
  "api_base": "https://api.llm7.io/v1", 
  "api_key": "any-string-works-here"
}
Usa el código con precaución.
¿Quieres que configuremos juntos un contenedor de OmniRoute en tu máquina local para gestionar todo tu tráfico de agentes de manera infalible? 

YouTube
·Panda Making Money
 +1
Las respuestas de la IA pueden contener errores. Más información





DEV Community
One OpenAI-Compatible Endpoint for 34 Free LLM Providers
4 sept 2026 — What is free, permanently * The router itself is MIT-licensed. Self-host it with Docker, npm, or the desktop app. No account with ...


GitHub
Directory of 34+ free LLM & AI APIs - GitHub
1 sept 2026 — Navigation Menu * Fork 43. * Star 351. ... Latest commit. Cannot retrieve latest commit at this time. ... Table_title: Folders and...


GitHub
mnfst/awesome-free-llm-apis - GitHub
21 ago 2026 — GitHub - mnfst/awesome-free-llm-apis: List of Permanent Free LLM API (API Keys) GitHub. ... Uh oh! * Fork 691. * Star 7.3k. ... Ta...

Mostrar todo
primero ayudame a abrir el json
Para abrir y modificar el archivo JSON de configuración, el procedimiento varía según el sistema operativo que utilices.
El archivo se encuentra habitualmente en tu carpeta de usuario, dentro de la ruta oculta .config/opencode/config.json. Aquí tienes los comandos directos para abrirlo según tu sistema:
🖥️ Si estás en Linux / macOS (Terminal)
Para abrirlo directamente desde la terminal con un editor de texto rápido como Nano, ejecuta este comando:
bash
nano ~/.config/opencode/config.json
Usa el código con precaución.
Para guardar los cambios: Presiona Ctrl + O y luego Enter.
Para salir: Presiona Ctrl + X.
Si prefieres abrirlo con Visual Studio Code, ejecuta:
bash
code ~/.config/opencode/config.json
Usa el código con precaución.
🪟 Si estás en Windows (PowerShell / CMD)
En Windows, la ruta equivalente suele almacenarse en tu perfil de usuario. Ejecuta este comando en PowerShell para abrirlo directamente con el Bloc de notas:
powershell
notepad $HOME\.config\opencode\config.json
Usa el código con precaución.
Si utilizas Visual Studio Code en Windows:
powershell
code $HOME\.config\opencode\config.json
Usa el código con precaución.
⚠️ ¿El archivo o la carpeta no existen?
Si es la primera vez que configuras OpenCode y la terminal te dice que el archivo no existe, debes crear la carpeta y el archivo en blanco ejecutando esto:
En Linux / macOS:
bash
mkdir -p ~/.config/opencode && touch ~/.config/opencode/config.json
Usa el código con precaución.
En Windows (PowerShell):
powershell
New-Item -ItemType Directory -Force -Path $HOME\.config\opencode
New-Item -ItemType File -Force -Path $HOME\.config\opencode\config.json
Usa el código con precaución.
Dime si has logrado abrirlo correctamente y qué sistema operativo usas, y te paso la estructura exacta que debes pegar dentro para conectar los proxies gratuitos sin llaves.
Las respuestas de la IA pueden contener errores. Más información




es windowa
Resultados rápidos de la Web:
Home - Español - ES Windows
Diseñado para la Vida. En ES, liberamos el futuro, rompemos el status quo y redefinimos lo que es posible. Durante más de 40 años, hemos sido una fuerza líder en la industria del vidrio, el metal y la
ES Windows
·
https://eswindows.com
Explora las características nuevas de Windows 11 - Microsoft
Windows 11 funciona como tú trabajas. Escribe tu propia voz y adapta tu experiencia digital a tus exclusivas necesidades visuales y de audio. Windows 11 está hecho para ti y para las cosas que te enca

Microsoft
·
https://www.microsoft.com
¡Perfecto, en Windows es muy fácil! Vamos a asegurarnos de que la carpeta y el archivo existan, y luego lo abriremos para configurarlo.
Por favor, abre la consola PowerShell en tu Windows (puedes buscar "PowerShell" en el menú de inicio) y sigue estos pasos:
🛠️ Paso 1: Crear la ruta y el archivo (Por si acaso)
Copia y pega este comando en PowerShell y pulsa Enter. Esto se asegura de que la carpeta secreta de OpenCode exista y crea el archivo .json en blanco si no estaba ya creado:
powershell
New-Item -ItemType Directory -Force -Path $HOME\.config\opencode; New-Item -ItemType File -Force -Path $HOME\.config\opencode\config.json
Usa el código con precaución.
📂 Paso 2: Abrir el archivo para editarlo
Ahora ejecuta este comando para abrirlo con el Bloc de Notas de Windows:
powershell
notepad $HOME\.config\opencode\config.json
Usa el código con precaución.
(Si tienes Visual Studio Code instalado y prefieres usarlo, puedes cambiar notepad por code en el comando de arriba).
📝 Paso 3: Pegar la configuración "Zero-Key" (Sin llaves fallidas)
Una vez que se abra el bloc de notas (que estará completamente vacío), copia y pega el siguiente código exacto. Este código redirige a OpenCode a las pasarelas gratuitas de llm7 y pollinations que no se caen por límites de tokens como Groq:
json
{
  "api_base": "https://llm7.io",
  "api_key": "free-access-token",
  "model": "mistral-nemo",
  "fallback_providers": [
    {
      "name": "pollinations",
      "api_base": "https://pollinations.ai",
      "model": "openai"
    }
  ]
}
Usa el código con precaución.
💾 Paso 4: Guardar y Cerrar
En el Bloc de Notas, haz clic en Archivo -> Guardar (o pulsa Ctrl + G).
Cierra la ventana del Bloc de Notas.
Avísame cuando lo tengas guardado. El siguiente paso es probar si OpenCode ya te responde en la terminal sin darte los errores que te daban antes. ¿Listo para hacer la prueba?
Las respuestas de la IA pueden contener errores. Más información




mi opencode esta totalmente vacio....
Que el archivo esté totalmente vacío es completamente normal si es la primera vez que tocas la configuración de OpenCode. De hecho, es lo ideal, porque significa que no hay configuraciones viejas rompiendo el sistema. 

GitHub
El nombre exacto que busca la herramienta en su instalación global de Windows es opencode.json (o opencode.jsonc). 

OpenCode
 +1
Sigue estos pasos en orden para rellenarlo desde cero con la pasarela gratuita que nunca falla:
🛠️ Paso 1: Copiar el bloque de configuración
Selecciona y copia (Ctrl + C) este código JSON estructural compatible con OpenCode: 

OpenCode
json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "mistral-nemo",
  "provider": {
    "openai": {
      "api_base": "https://llm7.io",
      "apiKey": "free-access"
    }
  }
}
Usa el código con precaución.
📝 Paso 2: Pegar en el Bloc de Notas
Haz clic dentro de la ventana del Bloc de notas que se abrió y estaba vacía.
Pega el código pulsando Ctrl + V.
Asegúrate de que las llaves { } queden bien cerradas y no falte ningún símbolo.
💾 Paso 3: Guardar el archivo con el nombre correcto
Como OpenCode a veces prefiere el nombre directo de su documentación oficial (opencode.json), vamos a forzar que se guarde de la manera correcta: 

Aiberm
 +1
En el Bloc de Notas ve a Archivo -> Guardar como...
En la barra de dirección de arriba, asegúrate de que estás en la ruta de tu usuario (deberías ver la carpeta .config y luego opencode). Si no estás seguro, escribe esto en la barra de ruta superior y dale Enter: %USERPROFILE%\.config\opencode
En el campo Nombre, escribe exactamente: opencode.json
En el campo Tipo (abajo del nombre), cambia "Documentos de texto (.txt)" por **Todos los archivos (.*)**. (Esto evita que se guarde sin querer como opencode.json.txt).
Haz clic en Guardar.
🚀 Paso 4: ¡A probar en la terminal!
Cierra el Bloc de notas, abre tu terminal habitual de Windows y ejecuta el comando de arranque para comprobar que conecta al proxy libre sin darte los fallos de tokens de antes:
bash
opencode
Usa el código con precaución.
Dime si ha cargado la interfaz o si la consola te arroja algún mensaje en pantalla al iniciar el programa.
Las respuestas de la IA pueden contener errores. Más información





OpenCode
Config | OpenCode
3 sept 2026 — * Usage. * Configure. ... Config. Using the OpenCode JSON config. You can configure OpenCode using a JSON config file. Format * "m...


OpenCode School
Configuration | OpenCode School
Create the global config file * macOS / Linux: ~/.config/opencode/opencode.json. * Windows (WSL): ~/.config/opencode/opencode.json...


GitHub
opencode.jsonc is empty even though models are configured
12 ago 2026 — Description. I configured Mistral and OpenRouter for OpenCode, but my ~/.config/opencode.jsonc is empty (only schema is applied):.
Mostrar todo
Pregunta lo que quieras



La respuesta de Modo IA está lista
Preguntar

## [ASSISTANT] 2026-09-04 16:20 · Qwen3.8-Max

Lo que te está ocurriendo con el archivo `opencode.json` o `opencode.jsonc` (que aparezca vacío, no guarde los cambios o se sobrescriba al iniciar la aplicación) es un comportamiento documentado y un problema recurrente reportado por la comunidad de desarrolladores en Windows [[2]]. La aplicación a veces gestiona su propia configuración interna y descarta o resetea el archivo JSON global al arrancar, invalidando los proveedores personalizados que intentas inyectar manualmente [[5]].

Para saltarte este bug de validación de esquemas JSON y configurar de manera **infalible** proxies gratuitos (como LLM7, Pollinations o OmniRoute) en OpenCode, la documentación oficial recomienda encarecidamente abandonar el archivo JSON y utilizar **Variables de Entorno** o un archivo `.env` local [[30]], [[44]]. 

Al usar variables de entorno compatibles con OpenAI, OpenCode enrutará automáticamente cualquier modelo que selecciones (como `gpt-4o` o `gpt-4`) hacia tu proxy gratuito, sin que la interfaz TUI se entere de que estás usando una API alternativa [[45]].

Aquí tienes las dos vías definitivas para solucionarlo en Windows:

### Opción 1: Configuración Global (Variables de Entorno de Windows)
Esta es la opción más robusta. Configuras el proxy una sola vez y funcionará en cualquier carpeta o proyecto donde abras OpenCode.

1. Presiona la tecla **Windows**, escribe `Variables de entorno` y selecciona la opción que dice **"Editar las variables de entorno del sistema"**.
2. En la ventana que se abre, haz clic en el botón **`Variables de entorno...`** en la esquina inferior derecha.
3. En la sección superior (**Variables de usuario**), haz clic en **`Nueva...`** y crea la primera variable:
   * **Nombre de la variable:** `OPENAI_BASE_URL`
   * **Valor de la variable:** `https://llm7.io/v1` *(Esta es la pasarela gratuita que no requiere llaves reales y no sufre los bloqueos por RPM de Groq)*.
4. Haz clic en **`Nueva...`** nuevamente para crear la segunda variable:
   * **Nombre de la variable:** `OPENAI_API_KEY`
   * **Valor de la variable:** `free-access` *(Los proxies gratuitos ignoran este campo, pero OpenCode exige que tenga algún texto para no arrojar error de autenticación)*.
5. Haz clic en **Aceptar** en todas las ventanas para guardar.
6. **⚠️ CRUCIAL:** Debes **cerrar y volver a abrir** tu terminal de PowerShell o CMD. Las terminales de Windows no leen las nuevas variables de entorno hasta que se reinician.

### Opción 2: Configuración por Proyecto (Archivo `.env`)
Si no quieres modificar las variables globales de tu PC, OpenCode está programado para leer automáticamente un archivo `.env` ubicado en la raíz de la carpeta donde estás trabajando [[36]].

1. Entra a la carpeta de tu proyecto desde la terminal.
2. Crea un archivo llamado exactamente `.env` (puedes hacerlo con `notepad .env` o desde VS Code).
3. Pega exactamente estas dos líneas dentro del archivo:
   ```env
   OPENAI_BASE_URL=https://llm7.io/v1
   OPENAI_API_KEY=free-access
   ```
4. Guarda el archivo.

---

### ¿Cómo usarlo ahora en OpenCode?
Una vez aplicada la Opción 1 o la Opción 2, abre tu terminal y ejecuta `opencode`. 

1. Ignora cualquier error previo del archivo `.json`.
2. Abre el selector de modelos de la interfaz de OpenCode (usualmente presionando `Ctrl+P`, `/` o haciendo clic en el nombre del modelo en la barra inferior).
3. Selecciona cualquier modelo estándar de OpenAI, por ejemplo: **`gpt-4o`**, **`gpt-4`** o **`gpt-3.5-turbo`**.

**¿Qué acaba de pasar?** 
OpenCode creerá que está enviando tu código a los servidores oficiales de OpenAI. Sin embargo, gracias a la variable `OPENAI_BASE_URL`, toda la información se redirigirá en milisegundos hacia `llm7.io` [[44]]. El proxy gratuito recibirá la petición, la procesará con modelos open-source de alta capacidad (como Mistral o Llama) y te devolverá la respuesta a tu terminal sin gastar un solo token, sin pedirte tarjeta de crédito y sin los cortes abruptos que sufrías con Cohere o Groq.

Si en algún momento `llm7.io` llegara a tener una caída puntual, solo tienes que volver a las Variables de Entorno de Windows y cambiar el valor de `OPENAI_BASE_URL` por otra pasarela pública como `https://text.pollinations.ai/openai` y reiniciar la terminal.

## [USER] 2026-09-04 16:22

Claude ha terminado la respuesta
<thinking> El usuario quiere darme contexto para que le recomiende mejor. Quiere saber cómo pasarme la información (PowerShell o preguntas específicas).
Voy directo: dame un conjunto de comandos PowerShell que ejecute y me pase la salida. Es lo más limpio y rápid
Qwen3.8-Max
Saltar al contenido principalAyuda sobre la accesibilidad
Modo IA
Todo
Imágenes
Vídeos
Vídeos cortos
Más
Actualizar




un agente que vaya haciendo cuenta y sacandome todas las free tier api que hay en el mundo
No existe un agente de IA que automatice la creación de cuentas en todas las APIs del mundo, ya que violaría los términos de servicio, los sistemas de seguridad (CAPTCHAs) y las políticas de verificación de identidad (como SMS o tarjetas de crédito) de las plataformas.
Sin embargo, puedes consultar repositorios y listas públicas exhaustivas que recopilan cientos de APIs con planes gratuitos.
Repositorios principales de APIs gratuitas
Public APIs en GitHub: El catálogo de código abierto más grande del mundo. Está ordenado por categorías (clima, deportes, datos, etc.) e indica claramente cuáles son completamente gratuitas y cuáles no requieren clave de autenticación.
Freepublicapis.com: Un directorio visual muy limpio y fácil de explorar, especializado exclusivamente en APIs de uso libre y sin costes ocultos.
RapidAPI Hub: Una plataforma masiva donde puedes filtrar miles de APIs comerciales utilizando la etiqueta "Free tier". Te permite probarlas directamente desde su navegador web.
Free-for.dev: Una lista excepcional para desarrolladores que, además de APIs, incluye capas gratuitas de servidores, bases de datos, hosting y herramientas de analítica.
Automatización alternativa (Lectura de datos)
Si quieres construir tu propio sistema para consolidar esta información, puedes crear un script en Python que consuma la API de Public APIs Index (o repositorios similares) para extraer la lista actualizada de servicios gratuitos automáticamente en tu base de datos local.
Si te interesa, puedo ayudarte a escribir un script en Python para descargar y filtrar estas listas de APIs automáticamente. ¿Te gustaría enfocar el desarrollo en alguna categoría de datos en específico (como finanzas, IA, mapas)?
Las respuestas de la IA pueden contener errores. Más información




api de opencode, claude...





Para integrar Claude (o cualquier otro modelo de frontera) en OpenCode sin gastar fortunas en consumo directo por tokens, existen pasos de configuración precisos y alternativas con capas gratuitas muy eficientes. 

YouTube
·Leedeo Studio
 +1
1. La Vía de Modelos Gratuitos para OpenCode
Si buscas utilizar el agente OpenCode sin pagar por las consultas, la mejor opción es utilizar un agregador compatible: 

YouTube
·Leedeo Studio
OpenRouter Free Tier: Proporciona más de 25 modelos de IA completamente gratuitos (como Llama 3, Mistral, o Gemma) con un límite de hasta 50 peticiones al día. 

OpenRouter
 +1
OpenCode Zen: Es el agregador nativo de la herramienta que va rotando diferentes modelos gratuitos con acceso ilimitado para sus usuarios registrados. 

Web Reactiva
 +1
2. Configurar la API de Claude (Anthropic) en OpenCode
Si requieres la precisión analítica de los modelos avanzados de Anthropic (como Claude 5 Sonnet o Claude Fable 5.1), debes saber que Anthropic bloqueó el uso de tokens OAuth de las suscripciones Claude Pro/Max en herramientas CLI externas. 

BenchLM
 +1
La única manera de usarlo es mediante pago por uso directo (Pay-as-you-go) creando una clave de API comercial. Para vincularla: 

seguridadenwordpress.com
 +1
Ve a la Consola de Desarrolladores de Anthropic y genera tu API Key. (Nota: Anthropic suele regalar alrededor de $5 en créditos de prueba al verificar cuentas nuevas).
Abre tu terminal de comandos y ejecuta:
bash
opencode /connect
Usa el código con precaución.
Selecciona Anthropic (o el proveedor que utilices) e introduce la API Key cuando el sistema te lo solicite.
Cambia y selecciona el modelo activo con el comando:
bash
opencode /models
Usa el código con precaución.
 

OpenCode
 +2
3. Configuración avanzada vía Archivo JSON
También puedes definir los proveedores editando directamente tu archivo de configuración global de OpenCode en ~/.config/opencode/config.json: 

OpenCode
json
{
  "provider": {
    "anthropic": {
      "apiKey": "TU_CLAVE_API_DE_CLAUDE_AQUÍ"
    },
    "openrouter": {
      "apiKey": "TU_CLAVE_API_DE_OPENROUTER_AQUÍ"
    }
  }
}
Usa el código con precaución.
¿Te gustaría que preparemos el comando para levantar un modelo local gratuito (vía Ollama) en tu máquina para usarlo con OpenCode y ahorrar el 100% de los costes de API? 

Web Reactiva
Las respuestas de la IA pueden contener errores. Más información





OpenCode
Proveedores - OpenCode
3 sept 2026 — * Introducción. * Configuración. * Proveedores. * Red. * Solución de problemas. * Compartir. * Configuración. Herramientas. Reglas...



YouTube
·
Leedeo Studio
OpenCode 🤖 A FREE and Easy Alternative to Claude Code ...
23 abr 2026 — OpenCode 🤖 Alternativa GRATIS y Fácil a Claude Code y Google Antigravity funcionamiento. es un simple chat con agentes de IA abre...

2m

Web Reactiva
Claude Code vs OpenCode: cuál elegir y por qué
15 mar 2026 — Claude Code vs OpenCode: cuál elegir y por qué * ¿Qué es Claude Code y qué es OpenCode? * ¿Cuáles son las principales diferencias?

Mostrar todo
necesito muchos algos mases
¡Entendido! Si lo que buscas es una lista masiva y directa de recursos, plataformas y herramientas con capas gratuitas (free tiers) que puedas exprimir al máximo para programar, desplegar o experimentar, aquí tienes la colección definitiva dividida por categorías:
🚀 Proveedores de Modelos de IA (Alternativas a Claude con Free Tier)
Groq Cloud: Ofrece acceso ultrarrápido a modelos como Llama 3 y Mixtral con una capa gratuita generosa basada en límites de peticiones por minuto.
Google AI Studio: Te da acceso gratuito a las APIs de Gemini Flash y Pro (con límites de velocidad de uso por minuto) ideal para análisis de texto y visión.
Hugging Face Serverless Inference: Te permite hacer peticiones gratuitas a miles de modelos de código abierto alojados en su plataforma.
Cohere: Ofrece una clave de API gratuita para uso de desarrollo y pruebas en sus modelos de lenguaje y embeddings.
🌐 Hosting y Despliegue de Aplicaciones (PaaS)
Render: Te permite alojar aplicaciones web (Node, Python, Go) y bases de datos PostgreSQL de forma gratuita (los servicios web se "duermen" si no reciben tráfico).
Vercel / Netlify: Las mejores opciones del mercado para desplegar aplicaciones de frontend (React, Next.js, Vue) y funciones Serverless sin pagar un céntimo.
Railway: Te otorga créditos mensuales gratuitos para desplegar contenedores Docker, bases de datos o aplicaciones rápidamente.
Supabase: Te da un backend completo con una base de datos PostgreSQL real, autenticación y almacenamiento de archivos en su plan gratuito.
📊 Bases de Datos y Almacenamiento en la Nube
MongoDB Atlas: Incluye un clúster gratuito permanente (512 MB) de base de datos NoSQL ideal para proyectos pequeños.
Neon: Servidor de PostgreSQL serverless con una capa gratuita excelente que incluye escalado automático.
Upstash: Base de datos Redis y Kafka serverless con un plan gratuito basado en el número de peticiones diarias.
Pinecone: Base de datos vectorial esencial para proyectos de IA y sistemas de memoria (RAG), con un índice gratuito.
🔧 Automatización, Webhooks y Herramientas
Make (antiguo Integromat): Te permite automatizar flujos de trabajo conectando APIs visualmente con 1,000 operaciones gratis al mes.
n8n.io: Herramientas de automatización similar a Zapier que puedes auto-alojar gratis en tu propio servidor o usar su versión en la nube limitada.
Cron-job.org: Un servicio completamente gratuito para ejecutar peticiones HTTP periódicas (tareas cron) de forma externa.
¿Hacia qué área te interesa expandirte ahora? Te puedo dar más opciones enfocadas en proveedores de servidores VPS gratuitos, APIs de mapas y geolocalización, o herramientas de analítica web.
Las respuestas de la IA pueden contener errores. Más información




las viejas que fallan siempre
Si te refieres a esas APIs clásicas de desarrollo que nunca se caen, no te piden tarjeta de crédito y jamás te van a cobrar, estás hablando de las "viejas confiables" de la programación. Son las herramientas que todo desarrollador usa para hacer pruebas de concepto (PoC), maquetas o aprender a conectar datos sin lidiar con dolores de cabeza. 

DEV Community
 +1
Aquí tienes la lista de las APIs indestructibles que siempre funcionan:
🛠️ Las Falsas APIs (Para simular bases de datos y usuarios)
JSONPlaceholder: El estándar absoluto. Te da respuestas instantáneas en JSON simulando posts, comentarios, usuarios y tareas. Soporta peticiones GET, POST, PUT y DELETE sin registrarte. 

Medium
·Ujjawal Rohra
 +1
ReqRes: Diseñada exclusivamente para probar flujos de inicio de sesión (Login), registros y autenticación con respuestas de tokens ficticios. 

DEV Community
 +1
Random User Generator: Te genera perfiles completos de personas falsas con nombres, emails, contraseñas y hasta fotos de perfil listas para renderizar en tu interfaz. 

DEV Community
🌍 Datos del Mundo Real (Sin tokens ni llaves)
Open-Meteo: La API del clima definitiva. No requiere API Key. Le pasas la latitud y longitud por la URL y te devuelve el pronóstico meteorológico exacto al instante. 

Medium
·Ujjawal Rohra
REST Countries: Te escupe toda la información de los países del planeta (banderas, monedas, capitales, idiomas) con rutas extremadamente sencillas. 

Medium
·Ujjawal Rohra
ipify: Una API ridículamente simple que solo hace una cosa: le preguntas algo y te devuelve la dirección IP pública de tu cliente en texto plano o JSON. 

Medium
·Ujjawal Rohra
🐶 Contenido Rápido (Imágenes y ocio)
Dog CEO's Dog API: Si necesitas imágenes aleatorias para probar una galería de fotos en tu frontend, esta API te devuelve fotos aleatorias de perros ordenados por razas.
PokéAPI: Un clásico masivo. Contiene la base de datos de todos los Pokémon con movimientos, estadísticas y evoluciones. Perfecta para practicar paginaciones complejas. 

DEV Community
¿Estás intentando montar un entorno de pruebas local con alguna de estas o quieres meter datos reales en tu CLI de OpenCode? Dime cuál es tu plan y te armo el código de integ


Pensamiento completado
Lo que te está ocurriendo con el archivo opencode.json o opencode.jsonc (que aparezca vacío, no guarde los cambios o se sobrescriba al iniciar la aplicación) es un comportamiento documentado y un problema recurrente reportado por la comunidad de desarrolladores en Windows 
github.com
. La aplicación a veces gestiona su propia configuración interna y descarta o resetea el archivo JSON global al arrancar, invalidando los proveedores personalizados que intentas inyectar manualmente 
github.com
.
Para saltarte este bug de validación de esquemas JSON y configurar de manera infalible proxies gratuitos (como LLM7, Pollinations o OmniRoute) en OpenCode, la documentación oficial recomienda encarecidamente abandonar el archivo JSON y utilizar Variables de Entorno o un archivo .env local 
opencode.ai
, 
opencode.ai
.
Al usar variables de entorno compatibles con OpenAI, OpenCode enrutará automáticamente cualquier modelo que selecciones (como gpt-4o o gpt-4) hacia tu proxy gratuito, sin que la interfaz TUI se entere de que estás usando una API alternativa 
ofox.ai
.
Aquí tienes las dos vías definitivas para solucionarlo en Windows:
Opción 1: Configuración Global (Variables de Entorno de Windows)
Esta es la opción más robusta. Configuras el proxy una sola vez y funcionará en cualquier carpeta o proyecto donde abras OpenCode.
Presiona la tecla Windows, escribe Variables de entorno y selecciona la opción que dice "Editar las variables de entorno del sistema".
En la ventana que se abre, haz clic en el botón Variables de entorno... en la esquina inferior derecha.
En la sección superior (Variables de usuario), haz clic en Nueva... y crea la primera variable:
Nombre de la variable: OPENAI_BASE_URL
Valor de la variable: https://llm7.io/v1 (Esta es la pasarela gratuita que no requiere llaves reales y no sufre los bloqueos por RPM de Groq).
Haz clic en Nueva... nuevamente para crear la segunda variable:
Nombre de la variable: OPENAI_API_KEY
Valor de la variable: free-access (Los proxies gratuitos ignoran este campo, pero OpenCode exige que tenga algún texto para no arrojar error de autenticación).
Haz clic en Aceptar en todas las ventanas para guardar.
⚠️ CRUCIAL: Debes cerrar y volver a abrir tu terminal de PowerShell o CMD. Las terminales de Windows no leen las nuevas variables de entorno hasta que se reinician.
Opción 2: Configuración por Proyecto (Archivo .env)
Si no quieres modificar las variables globales de tu PC, OpenCode está programado para leer automáticamente un archivo .env ubicado en la raíz de la carpeta donde estás trabajando 
opencode.ai
.
Entra a la carpeta de tu proyecto desde la terminal.
Crea un archivo llamado exactamente .env (puedes hacerlo con notepad .env o desde VS Code).
Pega exactamente estas dos líneas dentro del archivo:
env

12
Guarda el archivo.
¿Cómo usarlo ahora en OpenCode?
Una vez aplicada la Opción 1 o la Opción 2, abre tu terminal y ejecuta opencode.
Ignora cualquier error previo del archivo .json.
Abre el selector de modelos de la interfaz de OpenCode (usualmente presionando Ctrl+P, / o haciendo clic en el nombre del modelo en la barra inferior).
Selecciona cualquier modelo estándar de OpenAI, por ejemplo: gpt-4o, gpt-4 o gpt-3.5-turbo.
¿Qué acaba de pasar?
OpenCode creerá que está enviando tu código a los servidores oficiales de OpenAI. Sin embargo, gracias a la variable OPENAI_BASE_URL, toda la información se redirigirá en milisegundos hacia llm7.io 
opencode.ai
. El proxy gratuito recibirá la petición, la procesará con modelos open-source de alta capacidad (como Mistral o Llama) y te devolverá la respuesta a tu terminal sin gastar un solo token, sin pedirte tarjeta de crédito y sin los cortes abruptos que sufrías con Cohere o Groq.
Si en algún momento llm7.io llegara a tener una caída puntual, solo tienes que volver a las Variables de Entorno de Windows y cambiar el valor de OPENAI_BASE_URL por otra pasarela pública como https://text.pollinations.ai/openai y reiniciar la terminal.


Claude ha terminado la respuesta
<thinking> El usuario quiere darme contexto para que le recomiende mejor. Quiere saber cómo pasarme la información (PowerShell o preguntas específicas).
Voy directo: dame un conjunto de comandos PowerShell que ejecute y me pase la salida. Es lo más limpio y rápido.

Necesito:

Specs de hardware
Tipo de trabajo que hace
Qué hace con IA actualmente
Restricciones (red, internet, latencia)
Lenguajes/áreas específicas </thinking>
powershell
# Ejecuta esto y pasa me la salida

Write-Host "=== HARDWARE ===" -ForegroundColor Cyan
Get-CimInstance Win32_ComputerSystem | Select-Object Name, TotalPhysicalMemory
Get-CimInstance Win32_Processor | Select-Object Name, Cores, ThreadCount
Get-CimInstance Win32_VideoController | Select-Object Name, AdapterMemory
Get-ChildItem -Path "C:\" -ErrorAction SilentlyContinue | Where-Object {$_.PSIsContainer} | Select-Object Name | Measure-Object

Write-Host "`n=== ALMACENAMIENTO ===" -ForegroundColor Cyan
Get-Volume | Select-Object DriveLetter, FileSystem, Size, SizeRemaining

Write-Host "`n=== RED/INTERNET ===" -ForegroundColor Cyan
Test-NetConnection -ComputerName 8.8.8.8 -WarningAction SilentlyContinue | Select-Object ComputerName, PingSucceeded
(Invoke-WebRequest -Uri "https://www.google.com" -UseBasicParsing -TimeoutSec 5 -ErrorAction SilentlyContinue).StatusCode

Write-Host "`n=== SOFTWARE ===" -ForegroundColor Cyan
$python = (python --version 2>&1); Write-Host "Python: $python"
$node = (node --version 2>&1); Write-Host "Node: $node"
$git = (git --version 2>&1); Write-Host "Git: $git"
docker --version 2>&1 | Write-Host
O más simple, dame esto en texto:

Hardware exacto:
RAM total y libre AHORA
CPU (modelo completo)
¿Tiene GPU? ¿Cuál?
Trabajo:
¿Qué haces? (dev, análisis, writing, code, data, etc.)
¿Con qué lenguajes/tools?
¿Volumen típico?` (1 consulta/día, 50/día, procesamiento batch?)
IA Uso:
¿Para qué la necesitas? (completar código, chat general, análisis docs, transcripción?)
¿Latencia tolerable? (5 seg OK? 1 seg necesario?)
¿Necesitas context window grande o pequeño?
Restricciones:
¿Conectado a internet siempre? ¿O a veces offline?
¿Empresa/datos sensibles que NO pueden salir?
¿Budget para GPU en futuro cercano?
Problemas actuales:
¿Por qué Groq no te funciona? (auth timeout, bloqueo ISP, latencia, API key issues?)
¿Qué probaste antes?
Ejecuta el PowerShell o responde los 5 puntos → te doy stack exacto + setup listo.

hardware_info.txt
hardware_info.txt
32 líneas
TXT
facilitame actualizado todas las free tier api online. buscando la info hoy porfa. yo uso opencode,  basicamente. para webs, repos de git.

<thinking> Contexto del usuario: - i7-8665U (4 cores, 8 threads, 2015-era, bajo power) - 16GB RAM (pero ~8GB libre realmente) - GPU integrada UHD 620 (1GB) - Python 3.11, Node v26, Git - Usa OpenAI Codex (Code) - Trabajo: desarrollo web, repositorios Git - Necesita APIs free tier ACTUALES
El i7-8665U es débil para modelos locales grandes. Necesita:

Modelos muy compactos localmente
APIs robustas gratuitas para código + web
Info actualizada a hoy (2026-09-04)
Voy a buscar APIs free tier confiables HABLANDO DE HOY. Debo hacer web_search para verificar qué sigue siendo gratis y activo en septiembre 2026.
</thinking>

Web buscada, 2 memorias editadas
Free Tier APIs Actuales — Septiembre 2026
API	Límite	Comodidad	Coding	Auth
NVIDIA NIM	40 RPM, 1000 créditos	OpenAI-compatible, streaming, function calling	8 modelos coding (Nemotron, DeepSeek)	API key, sin tarjeta
Cerebras	15 RPM, 30K TPM, 1M TPD	OpenAI-compatible, streaming	Llama 3.3 70B, GPT-OSS 120B	Requiere payment method verificado (agosto 2026)
OpenRouter	50 req/día	Múltiples modelos en una key	Acceso a Groq/Cerebras/Llama	API key
Mistral	~1B tokens/mes	Experimentos (data training)	Codestral	Email
Google Gemini AI Studio	1500 req/día	Gemini 3 Flash	Vision + code	Google account
Stack Recomendado PARA TI (i7-8665U + 8GB Libre)
1. LOCAL (Offline)
bash
# Instala Ollama
ollama pull phi3:medium  # 3.8GB, rápido en CPU vieja

# O instala Llamafile (un binario)
./llamafile -m phi-3-medium.gguf --server
# Escucha en localhost:1234 automáticamente
Para OpenCode/Codex: Configura endpoint localhost:1234 (compatible OpenAI).

2. APIs PRIMARIAS (Hazlas failover)
Setup prioritario:

NVIDIA NIM (build.nvidia.com) 
Freellm
Endpoint: https://integrate.api.nvidia.com/v1
Modelos recomendados: Nemotron Super 49B, DeepSeek V4 Pro 
Freellm
40 RPM es suficiente para dev solo 
Freellm
Cerebras (cloud.cerebras.ai)
Llama 3.3 70B o GPT-OSS 120B 
Freellm
30K TPM es generoso 
Freellm
⚠ Requiere payment method (expires 30 días) 
Free-llm
OpenRouter (fallback)
Rota a NVIDIA o Cerebras si falla
3. AUTO-FAILOVER (Python)
bash
pip install freelm --break-system-packages
freelm conecta OpenRouter, Gemini, NVIDIA NIM, Groq, Cerebras, Mistral automáticamente — agrega tus keys, maneja rotación y reconexión.

python
from freelm import LLM

client = LLM(
    providers={
        "nvidia_nim": "your_nim_key",
        "cerebras": "your_cerebras_key",
        "openrouter": "your_openrouter_key",
    }
)

response = client.chat.completions.create(
    model="auto",  # Elige disponible
    messages=[{"role": "user", "content": "genera una función"}],
)
print(response.choices[0].message.content)
4. Para OpenCode/Codex Integration
En .env:

bash
# Primary
LLM_API_KEY=your_nvidia_nim_key
LLM_PROVIDER=nvidia
LLM_BASE_URL=https://integrate.api.nvidia.com/v1
LLM_MODEL=nemotron-super-8b  # o deepseek-llama-405b

# Fallback
FALLBACK_PROVIDER=cerebras
FALLBACK_KEY=your_cerebras_key
En OpenCode/CLI:

bash
opencode --provider=nvidia --model=nemotron-super-8b --key=$LLM_API_KEY
5. RESUMEN POR CASO DE USO
Caso	Solución	Por Qué
Dev web solo, offline OK	Phi 3 Medium local (Ollama)	Gratis, 3.8GB, rápido en CPU
Code gen + web juntos	NVIDIA NIM (Nemotron)	Mejor code hoy, 40 RPM llega
Fallback confiable	Cerebras (si funciona payment)	30K TPM, ultra-rápido
No falla nunca	freelm (todas las keys)	Auto-switchea entre providers
Máxima potencia	Local Mistral 7B + NVIDIA	4.4GB + API backup
6. COMANDOS PARA EMPEZAR HOY
powershell
# 1. Verifica espacio
Get-Volume C: | Select-Object SizeRemaining

# 2. Instala Ollama (o Llamafile)
# https://ollama.ai/ o https://llamafile.ai/

# 3. Descarga modelo
ollama pull phi3:medium

# 4. Corre en background
ollama serve  # Puerto 11434

# 5. Prueba endpoint
Invoke-RestMethod -Uri "http://localhost:11434/api/chat" `
  -Method Post `
  -Body '{"model":"phi3:medium","messages":[{"role":"user","content":"test"}]}'

# 6. Get NVIDIA NIM key
# https://build.nvidia.com -> API Keys -> Copy

# 7. Test NVIDIA
curl -X POST https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Authorization: Bearer $env:NVIDIA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta/llama-3.1-70b-instruct",
    "messages": [{"role": "user", "content": "test"}],
    "max_tokens": 100
  }'
Nota importante: Los límites free tier cambian frecuentemente. Verifica dashboard de cada provider antes de commitear a producción. Mantén 2-3 providers configurados simultáneamente — es la única forma de tener resilencia. 
StationX
Ian L. Paterson

¿Necesitas config específica para OpenCode CLI o Cursor?


¿Quieres recibir una notificación cuando Claude responda?
Escribe un mensaje…


Claude es IA y puede cometer errores. Por favor, verifica las fuentes citadas.
SELECT

EXPORT



El contenido generado por IA puede no ser preciso.
o.

Necesito:

Specs de hardware
Tipo de trabajo que hace
Qué hace con IA actualmente
Restricciones (red, internet, latencia)
Lenguajes/áreas específicas </thinking>
powershell
# Ejecuta esto y pasa me la salida

Write-Host "=== HARDWARE ===" -ForegroundColor Cyan
Get-CimInstance Win32_ComputerSystem | Select-Object Name, TotalPhysicalMemory
Get-CimInstance Win32_Processor | Select-Object Name, Cores, ThreadCount
Get-CimInstance Win32_VideoController | Select-Object Name, AdapterMemory
Get-ChildItem -Path "C:\" -ErrorAction SilentlyContinue | Where-Object {$_.PSIsContainer} | Select-Object Name | Measure-Object

Write-Host "`n=== ALMACENAMIENTO ===" -ForegroundColor Cyan
Get-Volume | Select-Object DriveLetter, FileSystem, Size, SizeRemaining

Write-Host "`n=== RED/INTERNET ===" -ForegroundColor Cyan
Test-NetConnection -ComputerName 8.8.8.8 -WarningAction SilentlyContinue | Select-Object ComputerName, PingSucceeded
(Invoke-WebRequest -Uri "https://www.google.com" -UseBasicParsing -TimeoutSec 5 -ErrorAction SilentlyContinue).StatusCode

Write-Host "`n=== SOFTWARE ===" -ForegroundColor Cyan
$python = (python --version 2>&1); Write-Host "Python: $python"
$node = (node --version 2>&1); Write-Host "Node: $node"
$git = (git --version 2>&1); Write-Host "Git: $git"
docker --version 2>&1 | Write-Host
O más simple, dame esto en texto:

Hardware exacto:
RAM total y libre AHORA
CPU (modelo completo)
¿Tiene GPU? ¿Cuál?
Trabajo:
¿Qué haces? (dev, análisis, writing, code, data, etc.)
¿Con qué lenguajes/tools?
¿Volumen típico?` (1 consulta/día, 50/día, procesamiento batch?)
IA Uso:
¿Para qué la necesitas? (completar código, chat general, análisis docs, transcripción?)
¿Latencia tolerable? (5 seg OK? 1 seg necesario?)
¿Necesitas context window grande o pequeño?
Restricciones:
¿Conectado a internet siempre? ¿O a veces offline?
¿Empresa/datos sensibles que NO pueden salir?
¿Budget para GPU en futuro cercano?
Problemas actuales:
¿Por qué Groq no te funciona? (auth timeout, bloqueo ISP, latencia, API key issues?)
¿Qué probaste antes?
Ejecuta el PowerShell o responde los 5 puntos → te doy stack exacto + setup listo.

hardware_info.txt
hardware_info.txt
32 líneas
TXT
facilitame actualizado todas las free tier api online. buscando la info hoy porfa. yo uso opencode,  basicamente. para webs, repos de git.

<thinking> Contexto del usuario: - i7-8665U (4 cores, 8 threads, 2015-era, bajo power) - 16GB RAM (pero ~8GB libre realmente) - GPU integrada UHD 620 (1GB) - Python 3.11, Node v26, Git - Usa OpenAI Codex (Code) - Trabajo: desarrollo web, repositorios Git - Necesita APIs free tier ACTUALES
El i7-8665U es débil para modelos locales grandes. Necesita:

Modelos muy compactos localmente
APIs robustas gratuitas para código + web
Info actualizada a hoy (2026-09-04)
Voy a buscar APIs free tier confiables HABLANDO DE HOY. Debo hacer web_search para verificar qué sigue siendo gratis y activo en septiembre 2026.
</thinking>

Web buscada, 2 memorias editadas
Free Tier APIs Actuales — Septiembre 2026
API	Límite	Comodidad	Coding	Auth
NVIDIA NIM	40 RPM, 1000 créditos	OpenAI-compatible, streaming, function calling	8 modelos coding (Nemotron, DeepSeek)	API key, sin tarjeta
Cerebras	15 RPM, 30K TPM, 1M TPD	OpenAI-compatible, streaming	Llama 3.3 70B, GPT-OSS 120B	Requiere payment method verificado (agosto 2026)
OpenRouter	50 req/día	Múltiples modelos en una key	Acceso a Groq/Cerebras/Llama	API key
Mistral	~1B tokens/mes	Experimentos (data training)	Codestral	Email
Google Gemini AI Studio	1500 req/día	Gemini 3 Flash	Vision + code	Google account
Stack Recomendado PARA TI (i7-8665U + 8GB Libre)
1. LOCAL (Offline)
bash
# Instala Ollama
ollama pull phi3:medium  # 3.8GB, rápido en CPU vieja

# O instala Llamafile (un binario)
./llamafile -m phi-3-medium.gguf --server
# Escucha en localhost:1234 automáticamente
Para OpenCode/Codex: Configura endpoint localhost:1234 (compatible OpenAI).

2. APIs PRIMARIAS (Hazlas failover)
Setup prioritario:

NVIDIA NIM (build.nvidia.com) 
Freellm
Endpoint: https://integrate.api.nvidia.com/v1
Modelos recomendados: Nemotron Super 49B, DeepSeek V4 Pro 
Freellm
40 RPM es suficiente para dev solo 
Freellm
Cerebras (cloud.cerebras.ai)
Llama 3.3 70B o GPT-OSS 120B 
Freellm
30K TPM es generoso 
Freellm
⚠ Requiere payment method (expires 30 días) 
Free-llm
OpenRouter (fallback)
Rota a NVIDIA o Cerebras si falla
3. AUTO-FAILOVER (Python)
bash
pip install freelm --break-system-packages
freelm conecta OpenRouter, Gemini, NVIDIA NIM, Groq, Cerebras, Mistral automáticamente — agrega tus keys, maneja rotación y reconexión.

python
from freelm import LLM

client = LLM(
    providers={
        "nvidia_nim": "your_nim_key",
        "cerebras": "your_cerebras_key",
        "openrouter": "your_openrouter_key",
    }
)

response = client.chat.completions.create(
    model="auto",  # Elige disponible
    messages=[{"role": "user", "content": "genera una función"}],
)
print(response.choices[0].message.content)
4. Para OpenCode/Codex Integration
En .env:

bash
# Primary
LLM_API_KEY=your_nvidia_nim_key
LLM_PROVIDER=nvidia
LLM_BASE_URL=https://integrate.api.nvidia.com/v1
LLM_MODEL=nemotron-super-8b  # o deepseek-llama-405b

# Fallback
FALLBACK_PROVIDER=cerebras
FALLBACK_KEY=your_cerebras_key
En OpenCode/CLI:

bash
opencode --provider=nvidia --model=nemotron-super-8b --key=$LLM_API_KEY
5. RESUMEN POR CASO DE USO
Caso	Solución	Por Qué
Dev web solo, offline OK	Phi 3 Medium local (Ollama)	Gratis, 3.8GB, rápido en CPU
Code gen + web juntos	NVIDIA NIM (Nemotron)	Mejor code hoy, 40 RPM llega
Fallback confiable	Cerebras (si funciona payment)	30K TPM, ultra-rápido
No falla nunca	freelm (todas las keys)	Auto-switchea entre providers
Máxima potencia	Local Mistral 7B + NVIDIA	4.4GB + API backup
6. COMANDOS PARA EMPEZAR HOY
powershell
# 1. Verifica espacio
Get-Volume C: | Select-Object SizeRemaining

# 2. Instala Ollama (o Llamafile)
# https://ollama.ai/ o https://llamafile.ai/

# 3. Descarga modelo
ollama pull phi3:medium

# 4. Corre en background
ollama serve  # Puerto 11434

# 5. Prueba endpoint
Invoke-RestMethod -Uri "http://localhost:11434/api/chat" `
  -Method Post `
  -Body '{"model":"phi3:medium","messages":[{"role":"user","content":"test"}]}'

# 6. Get NVIDIA NIM key
# https://build.nvidia.com -> API Keys -> Copy

# 7. Test NVIDIA
curl -X POST https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Authorization: Bearer $env:NVIDIA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta/llama-3.1-70b-instruct",
    "messages": [{"role": "user", "content": "test"}],
    "max_tokens": 100
  }'
Nota importante: Los límites free tier cambian frecuentemente. Verifica dashboard de cada provider antes de commitear a producción. Mantén 2-3 providers configurados simultáneamente — es la única forma de tener resilencia. 
StationX
Ian L. Paterson

¿Necesitas config específica para OpenCode CLI o Cursor?


¿Quieres recibir una notificación cuando Claude responda?
Escribe un mensaje…


Claude es IA y puede cometer errores. Por favor, verifica las fuentes citadas.
SELECT

EXPORT

## [ASSISTANT] 2026-09-04 16:22 · Qwen3.8-Max

## APIs Free Tier Actualizadas — Septiembre 2026

Basándome en tu hardware (i7-8665U, ~8GB RAM libre, GPU UHD 620) y tu flujo de trabajo (OpenCode + desarrollo web + Git), aquí tienes el stack óptimo con APIs gratuitas **verificadas hoy**:

### 🤖 APIs de LLM para Código (OpenCode Compatible)

**1. Cerebras Inference** ⭐ RECOMENDADO
- **Free tier:** 1 millón de tokens/día [[37]]
- **Límites:** 5 req/min, 30K tokens/min, contexto 8K [[34]]
- **Modelos:** Llama 3.3 70B, modelos coding
- **Ventaja:** Ultra-rápido, $5 créditos iniciales gratis [[39]]
- **Registro:** Sin tarjeta de crédito [[36]]
- **Endpoint:** OpenAI-compatible

**2. DeepSeek API** ⭐ RECOMENDADO
- **Free tier:** 5 millones de tokens (una sola vez al registrarte) [[59]]
- **Modelos:** DeepSeek V4 Flash ($0.14/1M tokens después) [[63]]
- **Ventaja:** Excelente para código real, persiste sin expirar [[13]]
- **Registro:** Sin tarjeta de crédito [[59]]

**3. Cloudflare Workers AI**
- **Free tier:** 10,000 Neurons/día (permanente) [[44]]
- **Modelos:** 50+ modelos open-source [[42]]
- **Ventaja:** Edge computing, serverless [[46]]
- **Precio:** $0.011/1K Neurons después del free tier [[41]]

**4. OpenRouter**
- **Free tier:** Acceso a múltiples modelos con una key [[1]]
- **Ventaja:** Un solo endpoint para Groq, Cerebras, Llama [[2]]
- **Límite:** ~50 requests/día en modelos gratuitos [[10]]

**5. Google Gemini (AI Studio)**
- **Free tier:** ~1,500 requests/día [[4]]
- **Modelos:** Gemini 3 Flash
- **Ventaja:** Visión + código, sin tarjeta [[12]]

### 🕷️ APIs de Web Scraping

**1. Firecrawl Keyless** ⭐ RECOMENDADO
- **Free tier:** 1,000 créditos/mes [[26]]
- **Ventaja:** Sin registro, sin API key necesaria
- **Ideal para:** Scraping rápido de webs

**2. Bright Data Web Scraper**
- **Free tier:** 5,000 registros/mes [[29]]
- **Ventaja:** 1,000+ scrapers pre-construidos

### 📦 GitHub API (Para tus repos)

- **Autenticado:** 5,000 requests/hora [[16]]
- **Sin autenticar:** 60 requests/hora [[19]]
- **Nota:** Esto es estándar y no ha cambiado en 2026

### ⚠️ APIs RETIRADAS o Problemáticas

- **GitHub Models:** RETIRADO desde julio 30, 2026 [[49]]
- **Groq:** Free tier existe pero límites muy estrictos causan bloqueos frecuentes

### 🔧 Stack Recomendado para OpenCode

**Configuración en `.env`:**
```bash
# Primaria (Cerebras - rápido y generoso)
OPENAI_API_KEY=your_cerebras_key
OPENAI_BASE_URL=https://api.cerebras.ai/v1

# Fallback (DeepSeek - excelente para código)
FALLBACK_API_KEY=your_deepseek_key
FALLBACK_BASE_URL=https://api.deepseek.com/v1
```

**Ejecución en OpenCode:**
```bash
opencode --provider=openai --model=llama-3.3-70b
```

### 📊 Resumen por Caso de Uso

| Uso | API | Por qué |
|-----|-----|---------|
| **Coding diario** | Cerebras | 1M tokens/día, ultra-rápido |
| **Proyectos largos** | DeepSeek | 5M tokens iniciales, buen coding |
| **Scraping webs** | Firecrawl | Sin registro, 1K créditos/mes |
| **Repos Git** | GitHub API | 5K req/hora autenticado |
| **Fallback** | OpenRouter | Rota entre providers automáticamente |

### 🚀 Setup Rápido

```powershell
# 1. Obtén keys (sin tarjeta)
# Cerebras: https://cloud.cerebras.ai
# DeepSeek: https://platform.deepseek.com
# OpenRouter: https://openrouter.ai

# 2. Configura variables de entorno Windows
# Sigue los pasos que te di antes para OPENAI_BASE_URL

# 3. Prueba conectividad
curl -X POST https://api.cerebras.ai/v1/chat/completions `
  -H "Authorization: Bearer $env:CEREBRAS_KEY" `
  -H "Content-Type: application/json" `
  -d '{"model":"llama-3.3-70b","messages":[{"role":"user","content":"test"}]}'
```

**Nota:** Los límites free tier cambian frecuentemente. Mantén 2-3 providers configurados para failover automático [[7]].
