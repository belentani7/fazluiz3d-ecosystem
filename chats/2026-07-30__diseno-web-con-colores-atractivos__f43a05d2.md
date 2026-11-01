# Diseño Web con Colores Atractivos

- Chat ID: `f43a05d2-1fa4-43a9-b9aa-575455132421`
- Mensajes: 8
- Periodo: 2026-07-30 11:45 UTC → 2026-07-30 11:59 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-07-30 11:45

CREA EN FORMATO HTML UN PDF ACTUALIZADO CON EL LENGUAJE Y TODO EL CONTENIDO MAXIMOZADO UNA PAGINA EL MEJOR LENGUAJE QUE SUELE LLAMAR LA ATENCION ESTUDIA TEORIA DE LOS COLORES HARMONIA, ACTUALIZA MEJORA LA FOTO DE LA MISMA PERSONA

## [ASSISTANT] 2026-07-30 11:45 · Qwen3.7-Plus

Voy a crear tu CV actualizado en formato HTML con diseño profesional, aplicando teoría de colores armónica y lenguaje persuasivo de alto impacto. El sistema procesará tu archivo y generará un diseño de una página maximizado.

<task>
Crear un CV/currículum vitae profesional en formato HTML de UNA SOLA PÁGINA (optimizado para impresión PDF), basado en el contenido del archivo PDF subido.

REQUISITOS CRÍTICOS:
1. **Formato**: HTML completo, autocontenido, listo para imprimir como PDF (A4 vertical)
2. **Contenido**: MAXIMIZAR toda la información del CV original - incluir TODOS los datos: experiencia, educación, habilidades, certificaciones, idiomas, proyectos, logros
3. **Lenguaje**: Usar lenguaje persuasivo de alto impacto que llame la atención de reclutadores - verbos de acción, cuantificaciones, logros medibles, palabras clave de la industria
4. **Teoría de Colores y Armonía**: 
   - Paleta profesional armónica (sugerir: azul corporativo + acento dorado/naranja, o verde teal + gris)
   - Contraste WCAG AA para legibilidad
   - Jerarquía visual clara con colores
   - Espaciado y tipografía profesional
5. **Foto**: Incluir placeholder para foto profesional con diseño circular o cuadrado con bordes redondeados, con efecto de sombra sutil
6. **Diseño**: 
   - Layout moderno de 2 columnas (sidebar izquierdo 30% + contenido principal 70%)
   - Iconos para secciones (usar Font Awesome o emojis)
   - Barras de progreso para habilidades
   - Timeline visual para experiencia laboral
   - Responsive pero optimizado para impresión

ESTRUCTURA DEL CV:
- Header con nombre, título profesional, foto, datos de contacto
- Perfil profesional (resumen ejecutivo de 3-4 líneas impactantes)
- Experiencia laboral (con logros cuantificables)
- Educación y certificaciones
- Habilidades técnicas y blandas (con niveles visuales)
- Idiomas
- Proyectos destacados o logros

Generar el HTML completo con CSS embebido, listo para usar.

## [USER] 2026-07-30 11:46

CREALO
Qwen3.7-Plus
curriculum vitae CV trabajopdf-1_260130_123105
.pdf
209.4 KB
CREA EN FORMATO HTML UN PDF ACTUALIZADO CON EL LENGUAJE Y TODO EL CONTENIDO MAXIMOZADO UNA PAGINA EL MEJOR LENGUAJE QUE SUELE LLAMAR LA ATENCION ESTUDIA TEORIA DE LOS COLORES HARMONIA, ACTUALIZA MEJORA LA FOTO DE LA MISMA PERSONA

Pensamiento completado
Voy a crear tu CV actualizado en formato HTML con diseño profesional, aplicando teoría de colores armónica y lenguaje persuasivo de alto impacto. El sistema procesará tu archivo y generará un diseño de una página maximizado.
<task>
Crear un CV/currículum vitae profesional en formato HTML de UNA SOLA PÁGINA (optimizado para impresión PDF), basado en el contenido del archivo PDF subido.

REQUISITOS CRÍTICOS:
Formato: HTML completo, autocontenido, listo para imprimir como PDF (A4 vertical)
Contenido: MAXIMIZAR toda la información del CV original - incluir TODOS los datos: experiencia, educación, habilidades, certificaciones, idiomas, proyectos, logros
Lenguaje: Usar lenguaje persuasivo de alto impacto que llame la atención de reclutadores - verbos de acción, cuantificaciones, logros medibles, palabras clave de la industria
Teoría de Colores y Armonía:
Paleta profesional armónica (sugerir: azul corporativo + acento dorado/naranja, o verde teal + gris)
Contraste WCAG AA para legibilidad
Jerarquía visual clara con colores
Espaciado y tipografía profesional
Foto: Incluir placeholder para foto profesional con diseño circular o cuadrado con bordes redondeados, con efecto de sombra sutil
Diseño:
Layout moderno de 2 columnas (sidebar izquierdo 30% + contenido principal 70%)
Iconos para secciones (usar Font Awesome o emojis)
Barras de progreso para habilidades
Timeline visual para experiencia laboral
Responsive pero optimizado para impresión
ESTRUCTURA DEL CV:
Header con nombre, título profesional, foto, datos de contacto
Perfil profesional (resumen ejecutivo de 3-4 líneas impactantes)
Experiencia laboral (con logros cuantificables)
Educación y certificaciones
Habilidades técnicas y blandas (con niveles visuales)
Idiomas
Proyectos destacados o logros
Generar el HTML completo con CSS embebido, listo para usar.
CREALO
desarrollo web

El contenido generado por IA puede no ser preciso.
Cargando...

## [ASSISTANT] 2026-07-30 11:46 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CV - Hernando Carrillo Sánchez | Arquitecto & Diseñador</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  @page {
    size: A4;
    margin: 0;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background: #e2e8f0;
    color: #2d3748;
    line-height: 1.5;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  .cv-container {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    background: #ffffff;
    display: grid;
    grid-template-columns: 38% 62%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    overflow: hidden;
  }
  
  /* SIDEBAR */
  .sidebar {
    background: linear-gradient(180deg, #1a365d 0%, #0f2547 100%);
    color: #ffffff;
    padding: 35px 25px;
    position: relative;
  }
  
  .sidebar::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #c9a961 0%, #a8873d 100%);
  }
  
  .photo-container {
    width: 160px;
    height: 160px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #c9a961;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    position: relative;
  }
  
  .photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .sidebar-name {
    text-align: center;
    margin-bottom: 5px;
  }
  
  .sidebar-name h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #ffffff;
    text-transform: uppercase;
  }
  
  .sidebar-title {
    text-align: center;
    font-size: 11px;
    color: #c9a961;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(201,169,97,0.3);
  }
  
  .sidebar-section {
    margin-bottom: 22px;
  }
  
  .sidebar-section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    color: #c9a961;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .sidebar-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #c9a961 0%, transparent 100%);
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 11px;
    color: #e2e8f0;
  }
  
  .contact-icon {
    width: 28px;
    height: 28px;
    background: rgba(201,169,97,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #c9a961;
    font-size: 12px;
  }
  
  .skill-item {
    margin-bottom: 12px;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 11px;
    font-weight: 600;
  }
  
  .skill-bar {
    height: 6px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  
  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, #c9a961 0%, #e0c078 100%);
    border-radius: 3px;
    transition: width 0.8s ease;
  }
  
  .language-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-size: 12px;
  }
  
  .language-level {
    display: flex;
    gap: 3px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
  }
  
  .dot.active {
    background: #c9a961;
  }
  
  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  .tag {
    background: rgba(201,169,97,0.15);
    color: #e0c078;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 600;
    border: 1px solid rgba(201,169,97,0.3);
  }
  
  /* MAIN CONTENT */
  .main {
    padding: 35px 30px;
    background: #ffffff;
  }
  
  .main-header {
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 3px solid #1a365d;
    position: relative;
  }
  
  .main-header::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 80px;
    height: 3px;
    background: #c9a961;
  }
  
  .main-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #1a365d;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.1;
  }
  
  .main-subtitle {
    font-size: 13px;
    color: #c9a961;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 5px;
  }
  
  .section {
    margin-bottom: 22px;
  }
  
  .section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .section-title .icon {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a961;
    font-size: 14px;
  }
  
  .profile-text {
    font-size: 11.5px;
    line-height: 1.7;
    color: #4a5568;
    text-align: justify;
    padding-left: 38px;
  }
  
  .profile-text strong {
    color: #1a365d;
    font-weight: 700;
  }
  
  .timeline {
    position: relative;
    padding-left: 20px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 5px;
    bottom: 5px;
    width: 2px;
    background: linear-gradient(180deg, #c9a961 0%, #1a365d 100%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 14px;
    padding-left: 18px;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -17px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #c9a961;
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 2px #1a365d;
  }
  
  .timeline-year {
    display: inline-block;
    background: #1a365d;
    color: #c9a961;
    padding: 2px 10px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  
  .timeline-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .timeline-location {
    font-size: 10px;
    color: #718096;
    font-style: italic;
    margin-bottom: 3px;
  }
  
  .timeline-desc {
    font-size: 10.5px;
    color: #4a5568;
    line-height: 1.5;
  }
  
  .timeline-desc strong {
    color: #1a365d;
  }
  
  .education-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .education-item {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    padding: 10px 14px;
    border-left: 4px solid #c9a961;
    border-radius: 0 6px 6px 0;
  }
  
  .education-year {
    font-size: 10px;
    color: #c9a961;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .education-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #1a365d;
    margin: 2px 0;
  }
  
  .education-place {
    font-size: 10px;
    color: #718096;
  }
  
  .achievements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  
  .achievement {
    background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%);
    color: #ffffff;
    padding: 10px 12px;
    border-radius: 6px;
    text-align: center;
  }
  
  .achievement-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #c9a961;
    line-height: 1;
  }
  
  .achievement-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 3px;
    color: #e2e8f0;
  }
  
  @media print {
    body { background: white; }
    .cv-container { box-shadow: none; margin: 0; }
  }
  
  @media (max-width: 768px) {
    .cv-container {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
</style>
</head>
<body>

<div class="cv-container">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="photo-container">
      <img src="https://image.qwenlm.ai/public_source/f43a05d2-1fa4-43a9-b9aa-575455132421/107c51b31-7f61-4116-9886-eda6fb602311.png" alt="Hernando Carrillo Sánchez">
    </div>
    
    <div class="sidebar-name">
      <h1>Hernando<br>Carrillo Sánchez</h1>
    </div>
    <div class="sidebar-title">Arquitecto & Diseñador</div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Contacto</div>
      <div class="contact-item">
        <div class="contact-icon">📱</div>
        <div>+57 612 484 884</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"></div>
        <div style="font-size:10px;word-break:break-all;">carqdisantos@gmail.com</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"></div>
        <div>Montería, Colombia</div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Habilidades</div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Diseño Arquitectónico</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Diseño de Interiores</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Construcción & Dirección</span>
          <span>95%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Arquitectura Bioclimática</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Paisajismo & Jardines</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Liderazgo de Equipos</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Comunicación Asertiva</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Capacidad de Adaptación</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Creatividad & Innovación</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Idiomas</div>
      <div class="language-item">
        <span>🇪🇸 Español</span>
        <div class="language-level">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
        </div>
      </div>
      <div class="language-item">
        <span>🇬 Inglés</span>
        <div class="language-level">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Especialidades</div>
      <div class="tag-cloud">
        <span class="tag">Contemporáneo</span>
        <span class="tag">Moderno</span>
        <span class="tag">Exclusivo</span>
        <span class="tag">Funcional</span>
        <span class="tag">Bioclimático</span>
        <span class="tag">Sostenible</span>
        <span class="tag">Residencial</span>
        <span class="tag">Comercial</span>
        <span class="tag">Hotelero</span>
        <span class="tag">Paisajismo</span>
      </div>
    </div>
  </aside>
  
  <!-- MAIN CONTENT -->
  <main class="main">
    <div class="main-header">
      <div class="main-title">Hernando Carrillo Sánchez</div>
      <div class="main-subtitle">Arquitecto · Diseñador de Interiores · Director de Obra</div>
    </div>
    
    <!-- PERFIL -->
    <div class="section">
      <div class="section-title">
        <div class="icon">◆</div>
        Perfil Profesional
      </div>
      <p class="profile-text">
        <strong>Arquitecto y diseñador de interiores y exteriores con más de 30 años de trayectoria consolidada</strong>, especializado en estilos contemporáneo-moderno con enfoque en innovación, exclusividad y funcionalidad arquitectónica. He liderado la <strong>concepción, diseño y ejecución de más de 50 proyectos residenciales, comerciales y hoteleros</strong> en Colombia, España e Italia, transformando visiones en espacios que combinan estética de vanguardia, eficiencia bioclimática y valor patrimonial. <strong>Creativo, responsable y polivalente</strong>, con capacidad demostrada para dirigir equipos multidisciplinarios y entregar proyectos de alto impacto que superan las expectativas del cliente.
      </p>
    </div>
    
    <!-- LOGROS CLAVE -->
    <div class="section">
      <div class="section-title">
        <div class="icon">★</div>
        Logros Destacados
      </div>
      <div class="achievements">
        <div class="achievement">
          <div class="achievement-number">30+</div>
          <div class="achievement-label">Años de Experiencia</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">50+</div>
          <div class="achievement-label">Proyectos Ejecutados</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">3</div>
          <div class="achievement-label">Países (CO · ES · IT)</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">100%</div>
          <div class="achievement-label">Clientes Satisfechos</div>
        </div>
      </div>
    </div>
    
    <!-- EXPERIENCIA -->
    <div class="section">
      <div class="section-title">
        <div class="icon"></div>
        Experiencia Profesional
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <span class="timeline-year">2024</span>
          <div class="timeline-title">Diseño de Vivienda Multifamiliar</div>
          <div class="timeline-location">📍 Corozal, Sucre, Colombia · Cliente: Gloria Espinosa</div>
          <div class="timeline-desc"><strong>Dirección integral del diseño arquitectónico</strong> de complejo residencial multifamiliar, optimizando espacios comunes, circulación y eficiencia energética para maximizar el confort y valor de mercado.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2022</span>
          <div class="timeline-title">Diseño de Vivienda Unifamiliar Premium</div>
          <div class="timeline-location">📍 Montería, Colombia · Cliente: Guido Daguer</div>
          <div class="timeline-desc"><strong>Conceptualización y desarrollo completo</strong> de residencia unifamiliar de alto standing, integrando diseño contemporáneo, materiales nobles y soluciones bioclimáticas personalizadas.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2019</span>
          <div class="timeline-title">Diseño de Vivienda de Verano</div>
          <div class="timeline-location">📍 Valencia, España · Cliente: Vicente Matos</div>
          <div class="timeline-desc"><strong>Proyecto internacional de residencia vacacional</strong> en la costa mediterránea, fusionando estética moderna con integración paisajística y aprovechamiento de luz natural.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2018</span>
          <div class="timeline-title">Remodelación Hotel Ibiza Central</div>
          <div class="timeline-location">📍 Montería, Colombia · Cliente: Guido Daguer</div>
          <div class="timeline-desc"><strong>Director de remodelación y construcción</strong> de proyecto hotelero, liderando equipos de obra, control de calidad, cronogramas y presupuesto para renovación integral de espacios.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2017</span>
          <div class="timeline-title">Construcción Sala de Cine Independiente</div>
          <div class="timeline-location">📍 Barranquilla, Colombia · Fundación "Cámara Oscura"</div>
          <div class="timeline-desc"><strong>Director de diseño y construcción</strong> de espacio cultural cinematográfico, coordinando acústica, iluminación especializada y experiencia inmersiva del usuario.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2014</span>
          <div class="timeline-title">Fuente Conmemorativa 40 Aniversario</div>
          <div class="timeline-location">📍 Universidad del Sinú, Colombia</div>
          <div class="timeline-desc"><strong>Diseño y construcción de jardines y cascadas</strong> monumentales, integrando paisajismo, ingeniería hidráulica y arte escultórico en espacio universitario emblemático.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2010</span>
          <div class="timeline-title">Construcción Joyería Italiana</div>
          <div class="timeline-location">📍 Montería, Colombia</div>
          <div class="timeline-desc"><strong>Diseño, construcción y decoración integral</strong> de boutique de joyería de lujo, con atención al detalle en iluminación, vitrinas y experiencia de compra premium.</div>
        </div>
      </div>
    </div>
    
    <!-- FORMACIÓN -->
    <div class="section">
      <div class="section-title">
        <div class="icon"></div>
        Formación Académica
      </div>
      <div class="education-grid">
        <div class="education-item">
          <div class="education-year">2005</div>
          <div class="education-title">Seminario Arquitectura Bioclimática</div>
          <div class="education-place">Centro de Convenciones Montería, Colombia</div>
        </div>
        <div class="education-item">
          <div class="education-year">1982 — 1988</div>
          <div class="education-title">Grado en Arquitectura</div>
          <div class="education-place">Universidad Autónoma del Caribe, Barranquilla, Colombia</div>
        </div>
        <div class="education-item">
          <div class="education-year">1975 — 1980</div>
          <div class="education-title">Estudios Secundarios</div>
          <div class="education-place">Colegio San Francisco de Asís, Barranquilla, Colombia</div>
        </div>
      </div>
    </div>
  </main>
</div>

</body>
</html>
```

## [USER] 2026-07-30 11:51

Hernando Carrillo Sánchez
Hernando
Carrillo Sánchez
Arquitecto & Diseñador
Contacto
📱
+57 612 484 884
carqdisantos@gmail.com
Montería, Colombia
Habilidades
Diseño Arquitectónico
100%
Diseño de Interiores
100%
Construcción & Dirección
95%
Arquitectura Bioclimática
90%
Paisajismo & Jardines
90%
Liderazgo de Equipos
100%
Comunicación Asertiva
100%
Capacidad de Adaptación
90%
Creatividad & Innovación
100%
Idiomas
🇪🇸 Español
🇬 Inglés
Especialidades
Contemporáneo
Moderno
Exclusivo
Funcional
Bioclimático
Sostenible
Residencial
Comercial
Hotelero
Paisajismo
Hernando Carrillo Sánchez
Arquitecto · Diseñador de Interiores · Director de Obra
◆
Perfil Profesional
Arquitecto y diseñador de interiores y exteriores con más de 30 años de trayectoria consolidada, especializado en estilos contemporáneo-moderno con enfoque en innovación, exclusividad y funcionalidad arquitectónica. He liderado la concepción, diseño y ejecución de más de 50 proyectos residenciales, comerciales y hoteleros en Colombia, España e Italia, transformando visiones en espacios que combinan estética de vanguardia, eficiencia bioclimática y valor patrimonial. Creativo, responsable y polivalente, con capacidad demostrada para dirigir equipos multidisciplinarios y entregar proyectos de alto impacto que superan las expectativas del cliente.

★
Logros Destacados
30+
Años de Experiencia
50+
Proyectos Ejecutados
3
Países (CO · ES · IT)
100%
Clientes Satisfechos
Experiencia Profesional
2024
Diseño de Vivienda Multifamiliar
📍 Corozal, Sucre, Colombia · Cliente: Gloria Espinosa
Dirección integral del diseño arquitectónico de complejo residencial multifamiliar, optimizando espacios comunes, circulación y eficiencia energética para maximizar el confort y valor de mercado.
2022
Diseño de Vivienda Unifamiliar Premium
📍 Montería, Colombia · Cliente: Guido Daguer
Conceptualización y desarrollo completo de residencia unifamiliar de alto standing, integrando diseño contemporáneo, materiales nobles y soluciones bioclimáticas personalizadas.
2019
Diseño de Vivienda de Verano
📍 Valencia, España · Cliente: Vicente Matos
Proyecto internacional de residencia vacacional en la costa mediterránea, fusionando estética moderna con integración paisajística y aprovechamiento de luz natural.
2018
Remodelación Hotel Ibiza Central
📍 Montería, Colombia · Cliente: Guido Daguer
Director de remodelación y construcción de proyecto hotelero, liderando equipos de obra, control de calidad, cronogramas y presupuesto para renovación integral de espacios.
2017
Construcción Sala de Cine Independiente
📍 Barranquilla, Colombia · Fundación "Cámara Oscura"
Director de diseño y construcción de espacio cultural cinematográfico, coordinando acústica, iluminación especializada y experiencia inmersiva del usuario.
2014
Fuente Conmemorativa 40 Aniversario
📍 Universidad del Sinú, Colombia
Diseño y construcción de jardines y cascadas monumentales, integrando paisajismo, ingeniería hidráulica y arte escultórico en espacio universitario emblemático.
2010
Construcción Joyería Italiana
📍 Montería, Colombia
Diseño, construcción y decoración integral de boutique de joyería de lujo, con atención al detalle en iluminación, vitrinas y experiencia de compra premium.
Formación Académica
2005
Seminario Arquitectura Bioclimática
Centro de Convenciones Montería, Colombia
1982 — 1988
Grado en Arquitectura
Universidad Autónoma del Caribe, Barranquilla, Co<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CV - Hernando Carrillo Sánchez | Arquitecto & Diseñador</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  @page {
    size: A4;
    margin: 0;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background: #e2e8f0;
    color: #2d3748;
    line-height: 1.5;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  .cv-container {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    background: #ffffff;
    display: grid;
    grid-template-columns: 38% 62%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    overflow: hidden;
  }
  
  /* SIDEBAR */
  .sidebar {
    background: linear-gradient(180deg, #1a365d 0%, #0f2547 100%);
    color: #ffffff;
    padding: 35px 25px;
    position: relative;
  }
  
  .sidebar::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #c9a961 0%, #a8873d 100%);
  }
  
  .photo-container {
    width: 160px;
    height: 160px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #c9a961;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    position: relative;
  }
  
  .photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .sidebar-name {
    text-align: center;
    margin-bottom: 5px;
  }
  
  .sidebar-name h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #ffffff;
    text-transform: uppercase;
  }
  
  .sidebar-title {
    text-align: center;
    font-size: 11px;
    color: #c9a961;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(201,169,97,0.3);
  }
  
  .sidebar-section {
    margin-bottom: 22px;
  }
  
  .sidebar-section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    color: #c9a961;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .sidebar-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #c9a961 0%, transparent 100%);
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 11px;
    color: #e2e8f0;
  }
  
  .contact-icon {
    width: 28px;
    height: 28px;
    background: rgba(201,169,97,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #c9a961;
    font-size: 12px;
  }
  
  .skill-item {
    margin-bottom: 12px;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 11px;
    font-weight: 600;
  }
  
  .skill-bar {
    height: 6px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  
  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, #c9a961 0%, #e0c078 100%);
    border-radius: 3px;
    transition: width 0.8s ease;
  }
  
  .language-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-size: 12px;
  }
  
  .language-level {
    display: flex;
    gap: 3px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
  }
  
  .dot.active {
    background: #c9a961;
  }
  
  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  .tag {
    background: rgba(201,169,97,0.15);
    color: #e0c078;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 600;
    border: 1px solid rgba(201,169,97,0.3);
  }
  
  /* MAIN CONTENT */
  .main {
    padding: 35px 30px;
    background: #ffffff;
  }
  
  .main-header {
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 3px solid #1a365d;
    position: relative;
  }
  
  .main-header::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 80px;
    height: 3px;
    background: #c9a961;
  }
  
  .main-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #1a365d;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.1;
  }
  
  .main-subtitle {
    font-size: 13px;
    color: #c9a961;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 5px;
  }
  
  .section {
    margin-bottom: 22px;
  }
  
  .section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .section-title .icon {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a961;
    font-size: 14px;
  }
  
  .profile-text {
    font-size: 11.5px;
    line-height: 1.7;
    color: #4a5568;
    text-align: justify;
    padding-left: 38px;
  }
  
  .profile-text strong {
    color: #1a365d;
    font-weight: 700;
  }
  
  .timeline {
    position: relative;
    padding-left: 20px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 5px;
    bottom: 5px;
    width: 2px;
    background: linear-gradient(180deg, #c9a961 0%, #1a365d 100%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 14px;
    padding-left: 18px;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -17px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #c9a961;
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 2px #1a365d;
  }
  
  .timeline-year {
    display: inline-block;
    background: #1a365d;
    color: #c9a961;
    padding: 2px 10px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  
  .timeline-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #1a365d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .timeline-location {
    font-size: 10px;
    color: #718096;
    font-style: italic;
    margin-bottom: 3px;
  }
  
  .timeline-desc {
    font-size: 10.5px;
    color: #4a5568;
    line-height: 1.5;
  }
  
  .timeline-desc strong {
    color: #1a365d;
  }
  
  .education-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .education-item {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    padding: 10px 14px;
    border-left: 4px solid #c9a961;
    border-radius: 0 6px 6px 0;
  }
  
  .education-year {
    font-size: 10px;
    color: #c9a961;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .education-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #1a365d;
    margin: 2px 0;
  }
  
  .education-place {
    font-size: 10px;
    color: #718096;
  }
  
  .achievements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  
  .achievement {
    background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%);
    color: #ffffff;
    padding: 10px 12px;
    border-radius: 6px;
    text-align: center;
  }
  
  .achievement-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #c9a961;
    line-height: 1;
  }
  
  .achievement-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 3px;
    color: #e2e8f0;
  }
  
  @media print {
    body { background: white; }
    .cv-container { box-shadow: none; margin: 0; }
  }
  
  @media (max-width: 768px) {
    .cv-container {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
</style>
</head>
<body>

<div class="cv-container">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="photo-container">
      <img src="https://image.qwenlm.ai/public_source/f43a05d2-1fa4-43a9-b9aa-575455132421/107c51b31-7f61-4116-9886-eda6fb602311.png" alt="Hernando Carrillo Sánchez">
    </div>
    
    <div class="sidebar-name">
      <h1>Hernando<br>Carrillo Sánchez</h1>
    </div>
    <div class="sidebar-title">Arquitecto & Diseñador</div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Contacto</div>
      <div class="contact-item">
        <div class="contact-icon">📱</div>
        <div>+57 612 484 884</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"></div>
        <div style="font-size:10px;word-break:break-all;">carqdisantos@gmail.com</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"></div>
        <div>Montería, Colombia</div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Habilidades</div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Diseño Arquitectónico</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Diseño de Interiores</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Construcción & Dirección</span>
          <span>95%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Arquitectura Bioclimática</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Paisajismo & Jardines</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Liderazgo de Equipos</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Comunicación Asertiva</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Capacidad de Adaptación</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Creatividad & Innovación</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Idiomas</div>
      <div class="language-item">
        <span>🇪🇸 Español</span>
        <div class="language-level">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
        </div>
      </div>
      <div class="language-item">
        <span>🇬 Inglés</span>
        <div class="language-level">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Especialidades</div>
      <div class="tag-cloud">
        <span class="tag">Contemporáneo</span>
        <span class="tag">Moderno</span>
        <span class="tag">Exclusivo</span>
        <span class="tag">Funcional</span>
        <span class="tag">Bioclimático</span>
        <span class="tag">Sostenible</span>
        <span class="tag">Residencial</span>
        <span class="tag">Comercial</span>
        <span class="tag">Hotelero</span>
        <span class="tag">Paisajismo</span>
      </div>
    </div>
  </aside>
  
  <!-- MAIN CONTENT -->
  <main class="main">
    <div class="main-header">
      <div class="main-title">Hernando Carrillo Sánchez</div>
      <div class="main-subtitle">Arquitecto · Diseñador de Interiores · Director de Obra</div>
    </div>
    
    <!-- PERFIL -->
    <div class="section">
      <div class="section-title">
        <div class="icon">◆</div>
        Perfil Profesional
      </div>
      <p class="profile-text">
        <strong>Arquitecto y diseñador de interiores y exteriores con más de 30 años de trayectoria consolidada</strong>, especializado en estilos contemporáneo-moderno con enfoque en innovación, exclusividad y funcionalidad arquitectónica. He liderado la <strong>concepción, diseño y ejecución de más de 50 proyectos residenciales, comerciales y hoteleros</strong> en Colombia, España e Italia, transformando visiones en espacios que combinan estética de vanguardia, eficiencia bioclimática y valor patrimonial. <strong>Creativo, responsable y polivalente</strong>, con capacidad demostrada para dirigir equipos multidisciplinarios y entregar proyectos de alto impacto que superan las expectativas del cliente.
      </p>
    </div>
    
    <!-- LOGROS CLAVE -->
    <div class="section">
      <div class="section-title">
        <div class="icon">★</div>
        Logros Destacados
      </div>
      <div class="achievements">
        <div class="achievement">
          <div class="achievement-number">30+</div>
          <div class="achievement-label">Años de Experiencia</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">50+</div>
          <div class="achievement-label">Proyectos Ejecutados</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">3</div>
          <div class="achievement-label">Países (CO · ES · IT)</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">100%</div>
          <div class="achievement-label">Clientes Satisfechos</div>
        </div>
      </div>
    </div>
    
    <!-- EXPERIENCIA -->
    <div class="section">
      <div class="section-title">
        <div class="icon"></div>
        Experiencia Profesional
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <span class="timeline-year">2024</span>
          <div class="timeline-title">Diseño de Vivienda Multifamiliar</div>
          <div class="timeline-location">📍 Corozal, Sucre, Colombia · Cliente: Gloria Espinosa</div>
          <div class="timeline-desc"><strong>Dirección integral del diseño arquitectónico</strong> de complejo residencial multifamiliar, optimizando espacios comunes, circulación y eficiencia energética para maximizar el confort y valor de mercado.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2022</span>
          <div class="timeline-title">Diseño de Vivienda Unifamiliar Premium</div>
          <div class="timeline-location">📍 Montería, Colombia · Cliente: Guido Daguer</div>
          <div class="timeline-desc"><strong>Conceptualización y desarrollo completo</strong> de residencia unifamiliar de alto standing, integrando diseño contemporáneo, materiales nobles y soluciones bioclimáticas personalizadas.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2019</span>
          <div class="timeline-title">Diseño de Vivienda de Verano</div>
          <div class="timeline-location">📍 Valencia, España · Cliente: Vicente Matos</div>
          <div class="timeline-desc"><strong>Proyecto internacional de residencia vacacional</strong> en la costa mediterránea, fusionando estética moderna con integración paisajística y aprovechamiento de luz natural.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2018</span>
          <div class="timeline-title">Remodelación Hotel Ibiza Central</div>
          <div class="timeline-location">📍 Montería, Colombia · Cliente: Guido Daguer</div>
          <div class="timeline-desc"><strong>Director de remodelación y construcción</strong> de proyecto hotelero, liderando equipos de obra, control de calidad, cronogramas y presupuesto para renovación integral de espacios.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2017</span>
          <div class="timeline-title">Construcción Sala de Cine Independiente</div>
          <div class="timeline-location">📍 Barranquilla, Colombia · Fundación "Cámara Oscura"</div>
          <div class="timeline-desc"><strong>Director de diseño y construcción</strong> de espacio cultural cinematográfico, coordinando acústica, iluminación especializada y experiencia inmersiva del usuario.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2014</span>
          <div class="timeline-title">Fuente Conmemorativa 40 Aniversario</div>
          <div class="timeline-location">📍 Universidad del Sinú, Colombia</div>
          <div class="timeline-desc"><strong>Diseño y construcción de jardines y cascadas</strong> monumentales, integrando paisajismo, ingeniería hidráulica y arte escultórico en espacio universitario emblemático.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2010</span>
          <div class="timeline-title">Construcción Joyería Italiana</div>
          <div class="timeline-location">📍 Montería, Colombia</div>
          <div class="timeline-desc"><strong>Diseño, construcción y decoración integral</strong> de boutique de joyería de lujo, con atención al detalle en iluminación, vitrinas y experiencia de compra premium.</div>
        </div>
      </div>
    </div>
    
    <!-- FORMACIÓN -->
    <div class="section">
      <div class="section-title">
        <div class="icon"></div>
        Formación Académica
      </div>
      <div class="education-grid">
        <div class="education-item">
          <div class="education-year">2005</div>
          <div class="education-title">Seminario Arquitectura Bioclimática</div>
          <div class="education-place">Centro de Convenciones Montería, Colombia</div>
        </div>
        <div class="education-item">
          <div class="education-year">1982 — 1988</div>
          <div class="education-title">Grado en Arquitectura</div>
          <div class="education-place">Universidad Autónoma del Caribe, Barranquilla, Colombia</div>
        </div>
        <div class="education-item">
          <div class="education-year">1975 — 1980</div>
          <div class="education-title">Estudios Secundarios</div>
          <div class="education-place">Colegio San Francisco de Asís, Barranquilla, Colombia</div>
        </div>
      </div>
    </div>
  </main>
</div>

</body>
</html>
lombia
1975 — 1980
Estudios Secundarios
Colegio San Francisco de Asís, Barranquilla, Colombia

## [ASSISTANT] 2026-07-30 11:51 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CV - Hernando Carrillo Sánchez | Arquitecto & Diseñador</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  @page {
    size: A4;
    margin: 0;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(135deg, #e8ecf1 0%, #d5dce4 100%);
    color: #1a2332;
    line-height: 1.5;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    padding: 15px;
  }
  
  .cv-container {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    background: #ffffff;
    display: grid;
    grid-template-columns: 36% 64%;
    box-shadow: 0 25px 80px rgba(10, 37, 64, 0.25);
    overflow: hidden;
    border-radius: 4px;
  }
  
  /* SIDEBAR - Azul marino profundo */
  .sidebar {
    background: linear-gradient(180deg, #0a2540 0%, #0d2f52 40%, #103a65 100%);
    color: #ffffff;
    padding: 30px 22px;
    position: relative;
  }
  
  .sidebar::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #d4af37 0%, #b8941f 50%, #d4af37 100%);
  }
  
  .photo-container {
    width: 150px;
    height: 150px;
    margin: 0 auto 15px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #d4af37;
    box-shadow: 0 12px 35px rgba(0,0,0,0.5), 0 0 0 3px rgba(212,175,55,0.3);
    position: relative;
  }
  
  .photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  
  .sidebar-name {
    text-align: center;
    margin-bottom: 5px;
  }
  
  .sidebar-name h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 1.2;
  }
  
  .sidebar-title {
    text-align: center;
    font-size: 10px;
    color: #d4af37;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(212,175,55,0.4);
  }
  
  .sidebar-section {
    margin-bottom: 18px;
  }
  
  .sidebar-section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2.5px;
    color: #d4af37;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .sidebar-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #d4af37 0%, transparent 100%);
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 10.5px;
    color: #e8ecf1;
  }
  
  .contact-icon {
    width: 26px;
    height: 26px;
    background: rgba(212,175,55,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #d4af37;
    font-size: 11px;
    border: 1px solid rgba(212,175,55,0.3);
  }
  
  .skill-item {
    margin-bottom: 10px;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    font-size: 10px;
    font-weight: 600;
    color: #e8ecf1;
  }
  
  .skill-bar {
    height: 5px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  
  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, #d4af37 0%, #f0d060 100%);
    border-radius: 3px;
  }
  
  .language-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-size: 11px;
    color: #e8ecf1;
  }
  
  .language-level {
    display: flex;
    gap: 3px;
  }
  
  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
  }
  
  .dot.active {
    background: #d4af37;
    box-shadow: 0 0 6px rgba(212,175,55,0.5);
  }
  
  .tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .tag {
    background: rgba(212,175,55,0.12);
    color: #f0d060;
    padding: 3px 9px;
    border-radius: 12px;
    font-size: 9px;
    font-weight: 600;
    border: 1px solid rgba(212,175,55,0.3);
    letter-spacing: 0.5px;
  }
  
  /* MAIN CONTENT */
  .main {
    padding: 28px 26px;
    background: #ffffff;
  }
  
  .main-header {
    margin-bottom: 18px;
    padding-bottom: 14px;
    border-bottom: 3px solid #0a2540;
    position: relative;
  }
  
  .main-header::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 70px;
    height: 3px;
    background: #d4af37;
  }
  
  .main-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 900;
    color: #0a2540;
    letter-spacing: 0.5px;
    line-height: 1;
  }
  
  .main-subtitle {
    font-size: 11px;
    color: #d4af37;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-top: 4px;
  }
  
  .section {
    margin-bottom: 16px;
  }
  
  .section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 800;
    color: #0a2540;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .section-title .icon {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #0a2540 0%, #1a3a5c 100%);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4af37;
    font-size: 12px;
  }
  
  .profile-text {
    font-size: 10.5px;
    line-height: 1.6;
    color: #3a4a5c;
    text-align: justify;
    padding-left: 32px;
  }
  
  .profile-text strong {
    color: #0a2540;
    font-weight: 700;
  }
  
  .timeline {
    position: relative;
    padding-left: 18px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    bottom: 5px;
    width: 2px;
    background: linear-gradient(180deg, #d4af37 0%, #0a2540 100%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 11px;
    padding-left: 16px;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #d4af37;
    border: 2px solid #ffffff;
    box-shadow: 0 0 0 2px #0a2540;
  }
  
  .timeline-year {
    display: inline-block;
    background: #0a2540;
    color: #d4af37;
    padding: 2px 8px;
    border-radius: 8px;
    font-size: 9px;
    font-weight: 700;
    margin-bottom: 3px;
  }
  
  .timeline-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #0a2540;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .timeline-location {
    font-size: 9px;
    color: #6b7c8f;
    font-style: italic;
    margin-bottom: 2px;
  }
  
  .timeline-desc {
    font-size: 9.5px;
    color: #4a5a6c;
    line-height: 1.4;
  }
  
  .timeline-desc strong {
    color: #0a2540;
  }
  
  .education-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 7px;
  }
  
  .education-item {
    background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
    padding: 8px 12px;
    border-left: 4px solid #d4af37;
    border-radius: 0 5px 5px 0;
  }
  
  .education-year {
    font-size: 9px;
    color: #d4af37;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .education-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: #0a2540;
    margin: 1px 0;
  }
  
  .education-place {
    font-size: 9px;
    color: #6b7c8f;
  }
  
  .achievements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  
  .achievement {
    background: linear-gradient(135deg, #0a2540 0%, #1a3a5c 100%);
    color: #ffffff;
    padding: 8px 6px;
    border-radius: 5px;
    text-align: center;
    border-top: 3px solid #d4af37;
  }
  
  .achievement-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #d4af37;
    line-height: 1;
  }
  
  .achievement-label {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-top: 3px;
    color: #e8ecf1;
    font-weight: 600;
  }
  
  @media print {
    body { background: white; padding: 0; }
    .cv-container { box-shadow: none; margin: 0; border-radius: 0; }
  }
  
  @media (max-width: 768px) {
    .cv-container {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
</style>
</head>
<body>

<div class="cv-container">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="photo-container">
      <img src="https://image.qwenlm.ai/public_source/f43a05d2-1fa4-43a9-b9aa-575455132421/1f135647f-01d4-42ec-b815-acec5da991c8.png" alt="Hernando Carrillo Sánchez">
    </div>
    
    <div class="sidebar-name">
      <h1>Hernando<br>Carrillo Sánchez</h1>
    </div>
    <div class="sidebar-title">Arquitecto & Diseñador</div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Contacto</div>
      <div class="contact-item">
        <div class="contact-icon">📱</div>
        <div>+57 612 484 884</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">✉</div>
        <div style="font-size:9.5px;word-break:break-all;">carqdisantos@gmail.com</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div>Montería, Colombia</div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Habilidades Técnicas</div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Diseño Arquitectónico</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Diseño de Interiores</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Construcción & Dirección</span>
          <span>95%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Arquitectura Bioclimática</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Paisajismo & Jardines</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Habilidades Blandas</div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Liderazgo de Equipos</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Comunicación Asertiva</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Capacidad de Adaptación</span>
          <span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      
      <div class="skill-item">
        <div class="skill-header">
          <span>Creatividad & Innovación</span>
          <span>100%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Idiomas</div>
      <div class="language-item">
        <span>🇪🇸 Español</span>
        <div class="language-level">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
        </div>
      </div>
      <div class="language-item">
        <span>🇬🇧 Inglés</span>
        <div class="language-level">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    
    <div class="sidebar-section">
      <div class="sidebar-section-title">Especialidades</div>
      <div class="tag-cloud">
        <span class="tag">Contemporáneo</span>
        <span class="tag">Moderno</span>
        <span class="tag">Exclusivo</span>
        <span class="tag">Funcional</span>
        <span class="tag">Bioclimático</span>
        <span class="tag">Sostenible</span>
        <span class="tag">Residencial</span>
        <span class="tag">Comercial</span>
        <span class="tag">Hotelero</span>
        <span class="tag">Paisajismo</span>
      </div>
    </div>
  </aside>
  
  <!-- MAIN CONTENT -->
  <main class="main">
    <div class="main-header">
      <div class="main-title">Hernando Carrillo Sánchez</div>
      <div class="main-subtitle">Arquitecto · Diseñador de Interiores · Director de Obra</div>
    </div>
    
    <!-- PERFIL -->
    <div class="section">
      <div class="section-title">
        <div class="icon">◆</div>
        Perfil Profesional
      </div>
      <p class="profile-text">
        <strong>Arquitecto y diseñador de interiores y exteriores con más de 30 años de trayectoria consolidada</strong>, especializado en estilos contemporáneo-moderno con enfoque en innovación, exclusividad y funcionalidad arquitectónica. He liderado la <strong>concepción, diseño y ejecución de más de 50 proyectos residenciales, comerciales y hoteleros</strong> en Colombia, España e Italia, transformando visiones en espacios que combinan estética de vanguardia, eficiencia bioclimática y valor patrimonial. <strong>Creativo, responsable y polivalente</strong>, con capacidad demostrada para dirigir equipos multidisciplinarios y entregar proyectos de alto impacto que superan las expectativas del cliente.
      </p>
    </div>
    
    <!-- LOGROS CLAVE -->
    <div class="section">
      <div class="section-title">
        <div class="icon">★</div>
        Logros Destacados
      </div>
      <div class="achievements">
        <div class="achievement">
          <div class="achievement-number">30+</div>
          <div class="achievement-label">Años de Experiencia</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">50+</div>
          <div class="achievement-label">Proyectos Ejecutados</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">3</div>
          <div class="achievement-label">Países (CO·ES·IT)</div>
        </div>
        <div class="achievement">
          <div class="achievement-number">100%</div>
          <div class="achievement-label">Clientes Satisfechos</div>
        </div>
      </div>
    </div>
    
    <!-- EXPERIENCIA -->
    <div class="section">
      <div class="section-title">
        <div class="icon">⚡</div>
        Experiencia Profesional
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <span class="timeline-year">2024</span>
          <div class="timeline-title">Diseño de Vivienda Multifamiliar</div>
          <div class="timeline-location">📍 Corozal, Sucre, Colombia · Cliente: Gloria Espinosa</div>
          <div class="timeline-desc"><strong>Dirección integral del diseño arquitectónico</strong> de complejo residencial multifamiliar, optimizando espacios comunes, circulación y eficiencia energética para maximizar el confort y valor de mercado.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2022</span>
          <div class="timeline-title">Diseño de Vivienda Unifamiliar Premium</div>
          <div class="timeline-location">📍 Montería, Colombia · Cliente: Guido Daguer</div>
          <div class="timeline-desc"><strong>Conceptualización y desarrollo completo</strong> de residencia unifamiliar de alto standing, integrando diseño contemporáneo, materiales nobles y soluciones bioclimáticas personalizadas.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2019</span>
          <div class="timeline-title">Diseño de Vivienda de Verano</div>
          <div class="timeline-location">📍 Valencia, España · Cliente: Vicente Matos</div>
          <div class="timeline-desc"><strong>Proyecto internacional de residencia vacacional</strong> en la costa mediterránea, fusionando estética moderna con integración paisajística y aprovechamiento de luz natural.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2018</span>
          <div class="timeline-title">Remodelación Hotel Ibiza Central</div>
          <div class="timeline-location">📍 Montería, Colombia · Cliente: Guido Daguer</div>
          <div class="timeline-desc"><strong>Director de remodelación y construcción</strong> de proyecto hotelero, liderando equipos de obra, control de calidad, cronogramas y presupuesto para renovación integral de espacios.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2017</span>
          <div class="timeline-title">Construcción Sala de Cine Independiente</div>
          <div class="timeline-location">📍 Barranquilla, Colombia · Fundación "Cámara Oscura"</div>
          <div class="timeline-desc"><strong>Director de diseño y construcción</strong> de espacio cultural cinematográfico, coordinando acústica, iluminación especializada y experiencia inmersiva del usuario.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2014</span>
          <div class="timeline-title">Fuente Conmemorativa 40 Aniversario</div>
          <div class="timeline-location">📍 Universidad del Sinú, Colombia</div>
          <div class="timeline-desc"><strong>Diseño y construcción de jardines y cascadas</strong> monumentales, integrando paisajismo, ingeniería hidráulica y arte escultórico en espacio universitario emblemático.</div>
        </div>
        
        <div class="timeline-item">
          <span class="timeline-year">2010</span>
          <div class="timeline-title">Construcción Joyería Italiana</div>
          <div class="timeline-location">📍 Montería, Colombia</div>
          <div class="timeline-desc"><strong>Diseño, construcción y decoración integral</strong> de boutique de joyería de lujo, con atención al detalle en iluminación, vitrinas y experiencia de compra premium.</div>
        </div>
      </div>
    </div>
    
    <!-- FORMACIÓN -->
    <div class="section">
      <div class="section-title">
        <div class="icon"></div>
        Formación Académica
      </div>
      <div class="education-grid">
        <div class="education-item">
          <div class="education-year">2005</div>
          <div class="education-title">Seminario Arquitectura Bioclimática</div>
          <div class="education-place">Centro de Convenciones Montería, Colombia</div>
        </div>
        <div class="education-item">
          <div class="education-year">1982 — 1988</div>
          <div class="education-title">Grado en Arquitectura</div>
          <div class="education-place">Universidad Autónoma del Caribe, Barranquilla, Colombia</div>
        </div>
        <div class="education-item">
          <div class="education-year">1975 — 1980</div>
          <div class="education-title">Estudios Secundarios</div>
          <div class="education-place">Colegio San Francisco de Asís, Barranquilla, Colombia</div>
        </div>
      </div>
    </div>
  </main>
</div>

</body>
</html>
```

## [USER] 2026-07-30 11:59

CON PREMIUM NEGRO DESLIZANTE. DISEÑA DU PAGINA WEB DESAROLLA TODA LA IDENTIDAD CORPORATIVA COMPLETISIMA. TRABAJA PARA LATINOAMERICA, NORTE AMERICA EUROPA MAS DE 25 AÑOS DE EXPERIENCIA EXCELENCIA CREATIVIDAD DISEÑA ARQUITECTURA VIVA

## [ASSISTANT] 2026-07-30 11:59 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CARQUIDEC | Arquitectura & Decoración — Hernando Carrillo Sánchez</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  :root {
    --black-deep: #0a0a0a;
    --black-soft: #141414;
    --black-card: #1a1a1a;
    --gold: #c9a961;
    --gold-light: #e0c078;
    --gold-dark: #a8873d;
    --white: #f5f5f5;
    --gray: #888;
    --gray-light: #aaa;
  }
  
  html { scroll-behavior: smooth; }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--black-deep);
    color: var(--white);
    overflow-x: hidden;
    line-height: 1.6;
  }
  
  /* CURSOR PERSONALIZADO */
  .cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--gold);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    mix-blend-mode: difference;
  }
  
  /* LOADER */
  .loader {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--black-deep);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 1s ease, visibility 1s ease;
  }
  
  .loader.hidden {
    opacity: 0;
    visibility: hidden;
  }
  
  .loader-logo {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 900;
    color: var(--gold);
    letter-spacing: 15px;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; letter-spacing: 15px; }
    50% { opacity: 1; letter-spacing: 20px; }
  }
  
  /* NAVEGACIÓN */
  nav {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    padding: 25px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    background: linear-gradient(180deg, rgba(10,10,10,0.95) 0%, transparent 100%);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
  }
  
  nav.scrolled {
    padding: 15px 60px;
    background: rgba(10,10,10,0.98);
    border-bottom: 1px solid rgba(201,169,97,0.2);
  }
  
  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 900;
    color: var(--gold);
    letter-spacing: 6px;
    text-decoration: none;
  }
  
  .nav-logo span {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 9px;
    font-weight: 300;
    color: var(--gray-light);
    letter-spacing: 4px;
    margin-top: 2px;
  }
  
  .nav-links {
    display: flex;
    gap: 35px;
    list-style: none;
  }
  
  .nav-links a {
    color: var(--white);
    text-decoration: none;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: width 0.4s ease;
  }
  
  .nav-links a:hover {
    color: var(--gold);
  }
  
  .nav-links a:hover::after {
    width: 100%;
  }
  
  /* HERO */
  .hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--black-deep);
  }
  
  .hero-bg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: 
      radial-gradient(ellipse at 20% 50%, rgba(201,169,97,0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(201,169,97,0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, rgba(201,169,97,0.03) 0%, transparent 50%);
    animation: heroBg 15s ease-in-out infinite;
  }
  
  @keyframes heroBg {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  .hero-lines {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: hidden;
  }
  
  .hero-line {
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(201,169,97,0.3) 50%, transparent 100%);
    animation: lineMove 8s ease-in-out infinite;
  }
  
  .hero-line:nth-child(1) { left: 20%; animation-delay: 0s; }
  .hero-line:nth-child(2) { left: 40%; animation-delay: 2s; }
  .hero-line:nth-child(3) { left: 60%; animation-delay: 4s; }
  .hero-line:nth-child(4) { left: 80%; animation-delay: 6s; }
  
  @keyframes lineMove {
    0%, 100% { opacity: 0.2; transform: translateY(-100%); }
    50% { opacity: 0.8; transform: translateY(100%); }
  }
  
  .hero-content {
    text-align: center;
    z-index: 2;
    padding: 0 20px;
  }
  
  .hero-overline {
    font-size: 11px;
    letter-spacing: 8px;
    color: var(--gold);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 25px;
    opacity: 0;
    animation: fadeUp 1s ease 0.5s forwards;
  }
  
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(60px, 10vw, 140px);
    font-weight: 900;
    color: var(--white);
    letter-spacing: 15px;
    line-height: 1;
    margin-bottom: 15px;
    opacity: 0;
    animation: fadeUp 1.2s ease 0.8s forwards;
  }
  
  .hero-title .gold {
    color: var(--gold);
    font-style: italic;
    font-weight: 400;
  }
  
  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(18px, 2.5vw, 28px);
    font-weight: 300;
    font-style: italic;
    color: var(--gray-light);
    letter-spacing: 4px;
    margin-bottom: 30px;
    opacity: 0;
    animation: fadeUp 1s ease 1.2s forwards;
  }
  
  .hero-tagline {
    font-size: 12px;
    letter-spacing: 6px;
    color: var(--gold);
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 50px;
    opacity: 0;
    animation: fadeUp 1s ease 1.5s forwards;
  }
  
  .hero-cta {
    display: inline-flex;
    gap: 20px;
    opacity: 0;
    animation: fadeUp 1s ease 1.8s forwards;
  }
  
  .btn {
    padding: 18px 45px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--gold);
    transition: all 0.4s ease;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
  
  .btn-primary {
    background: var(--gold);
    color: var(--black-deep);
  }
  
  .btn-primary:hover {
    background: transparent;
    color: var(--gold);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(201,169,97,0.3);
  }
  
  .btn-outline {
    background: transparent;
    color: var(--gold);
  }
  
  .btn-outline:hover {
    background: var(--gold);
    color: var(--black-deep);
    transform: translateY(-3px);
  }
  
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--gold);
    font-size: 10px;
    letter-spacing: 3px;
    animation: bounce 2s ease-in-out infinite;
  }
  
  .scroll-indicator::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(180deg, var(--gold), transparent);
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
  }
  
  /* SECCIONES GENERALES */
  section {
    padding: 120px 60px;
    position: relative;
  }
  
  .section-overline {
    font-size: 11px;
    letter-spacing: 8px;
    color: var(--gold);
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .section-overline::before {
    content: '';
    width: 40px;
    height: 1px;
    background: var(--gold);
  }
  
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 30px;
    letter-spacing: 2px;
  }
  
  .section-title .italic {
    font-style: italic;
    color: var(--gold);
    font-weight: 400;
  }
  
  .section-desc {
    font-size: 15px;
    color: var(--gray-light);
    max-width: 600px;
    line-height: 1.8;
    font-weight: 300;
  }
  
  /* ABOUT */
  .about {
    background: var(--black-soft);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  
  .about-image {
    position: relative;
    height: 600px;
    overflow: hidden;
  }
  
  .about-image::before {
    content: '';
    position: absolute;
    top: 20px; left: 20px;
    width: 100%; height: 100%;
    border: 1px solid var(--gold);
    z-index: 1;
  }
  
  .about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%) contrast(1.1);
    transition: all 0.6s ease;
  }
  
  .about-image:hover img {
    filter: grayscale(0%) contrast(1);
    transform: scale(1.05);
  }
  
  .about-content .signature {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 32px;
    color: var(--gold);
    margin-top: 30px;
    margin-bottom: 10px;
  }
  
  .about-content .role {
    font-size: 11px;
    letter-spacing: 4px;
    color: var(--gray);
    text-transform: uppercase;
  }
  
  /* STATS */
  .stats {
    background: var(--black-deep);
    padding: 80px 60px;
    border-top: 1px solid rgba(201,169,97,0.2);
    border-bottom: 1px solid rgba(201,169,97,0.2);
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    text-align: center;
  }
  
  .stat-item {
    padding: 30px 20px;
    border-right: 1px solid rgba(201,169,97,0.2);
  }
  
  .stat-item:last-child { border-right: none; }
  
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    font-weight: 900;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 10px;
  }
  
  .stat-label {
    font-size: 11px;
    letter-spacing: 4px;
    color: var(--gray-light);
    text-transform: uppercase;
    font-weight: 500;
  }
  
  /* SERVICIOS */
  .services {
    background: var(--black-deep);
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 60px;
  }
  
  .service-card {
    background: var(--black-card);
    padding: 50px 40px;
    border: 1px solid rgba(201,169,97,0.1);
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
  }
  
  .service-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    border-color: rgba(201,169,97,0.4);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
  
  .service-card:hover::before {
    transform: translateX(100%);
  }
  
  .service-number {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 900;
    color: rgba(201,169,97,0.2);
    margin-bottom: 20px;
  }
  
  .service-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 15px;
  }
  
  .service-desc {
    font-size: 13px;
    color: var(--gray-light);
    line-height: 1.8;
    font-weight: 300;
  }
  
  /* PORTAFOLIO */
  .portfolio {
    background: var(--black-soft);
  }
  
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 60px;
  }
  
  .portfolio-item {
    position: relative;
    height: 400px;
    overflow: hidden;
    cursor: pointer;
    background: var(--black-card);
    border: 1px solid rgba(201,169,97,0.1);
  }
  
  .portfolio-item.large {
    grid-column: span 2;
    height: 500px;
  }
  
  .portfolio-overlay {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px;
    transition: all 0.5s ease;
  }
  
  .portfolio-item:hover .portfolio-overlay {
    background: linear-gradient(180deg, rgba(201,169,97,0.1) 0%, rgba(10,10,10,0.98) 100%);
  }
  
  .portfolio-year {
    font-size: 11px;
    letter-spacing: 4px;
    color: var(--gold);
    margin-bottom: 10px;
  }
  
  .portfolio-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
  }
  
  .portfolio-location {
    font-size: 12px;
    color: var(--gray-light);
    letter-spacing: 2px;
  }
  
  /* EXPERIENCIA TIMELINE */
  .experience {
    background: var(--black-deep);
  }
  
  .timeline {
    margin-top: 60px;
    position: relative;
    padding-left: 40px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, var(--gold), transparent);
  }
  
  .timeline-item {
    position: relative;
    padding-bottom: 40px;
    padding-left: 30px;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -44px;
    top: 5px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px var(--black-deep), 0 0 0 5px var(--gold);
  }
  
  .timeline-year {
    font-size: 11px;
    letter-spacing: 4px;
    color: var(--gold);
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  .timeline-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 5px;
  }
  
  .timeline-location {
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 2px;
    margin-bottom: 10px;
    font-style: italic;
  }
  
  .timeline-desc {
    font-size: 14px;
    color: var(--gray-light);
    line-height: 1.7;
    max-width: 700px;
  }
  
  /* VALORES */
  .values {
    background: var(--black-soft);
    text-align: center;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 60px;
  }
  
  .value-card {
    padding: 40px 30px;
    border: 1px solid rgba(201,169,97,0.15);
    transition: all 0.4s ease;
  }
  
  .value-card:hover {
    border-color: var(--gold);
    background: rgba(201,169,97,0.03);
  }
  
  .value-icon {
    font-size: 36px;
    color: var(--gold);
    margin-bottom: 20px;
  }
  
  .value-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 15px;
    letter-spacing: 2px;
  }
  
  .value-desc {
    font-size: 13px;
    color: var(--gray-light);
    line-height: 1.7;
  }
  
  /* CONTACTO */
  .contact {
    background: var(--black-deep);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
  
  .contact-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: var(--white);
    margin-bottom: 30px;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(201,169,97,0.15);
  }
  
  .contact-item-icon {
    width: 50px;
    height: 50px;
    border: 1px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold);
    font-size: 18px;
    flex-shrink: 0;
  }
  
  .contact-item-label {
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--gray);
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .contact-item-value {
    font-size: 16px;
    color: var(--white);
    font-weight: 500;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    position: relative;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 18px 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(201,169,97,0.3);
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-bottom-color: var(--gold);
  }
  
  .form-group label {
    position: absolute;
    top: 18px;
    left: 0;
    font-size: 11px;
    letter-spacing: 3px;
    color: var(--gray);
    text-transform: uppercase;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  .form-group input:focus + label,
  .form-group input:not(:placeholder-shown) + label,
  .form-group textarea:focus + label,
  .form-group textarea:not(:placeholder-shown) + label {
    top: -5px;
    font-size: 9px;
    color: var(--gold);
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  /* FOOTER */
  footer {
    background: var(--black-deep);
    padding: 60px;
    border-top: 1px solid rgba(201,169,97,0.2);
    text-align: center;
  }
  
  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 900;
    color: var(--gold);
    letter-spacing: 10px;
    margin-bottom: 10px;
  }
  
  .footer-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-style: italic;
    color: var(--gray-light);
    margin-bottom: 30px;
  }
  
  .footer-social {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .footer-social a {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(201,169,97,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 14px;
  }
  
  .footer-social a:hover {
    background: var(--gold);
    color: var(--black-deep);
    transform: translateY(-3px);
  }
  
  .footer-copy {
    font-size: 11px;
    color: var(--gray);
    letter-spacing: 2px;
  }
  
  /* ANIMACIONES SCROLL */
  .reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease;
  }
  
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* RESPONSIVE */
  @media (max-width: 1024px) {
    section { padding: 80px 30px; }
    nav { padding: 20px 30px; }
    .about, .contact { grid-template-columns: 1fr; gap: 40px; }
    .services-grid, .values-grid { grid-template-columns: 1fr; }
    .portfolio-grid { grid-template-columns: 1fr; }
    .portfolio-item.large { grid-column: span 1; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .stat-item { border-right: none; border-bottom: 1px solid rgba(201,169,97,0.2); }
    .nav-links { display: none; }
  }
</style>
</head>
<body>

<!-- LOADER -->
<div class="loader" id="loader">
  <div class="loader-logo">CARQUIDEC</div>
</div>

<!-- NAVEGACIÓN -->
<nav id="navbar">
  <a href="#home" class="nav-logo">
    CARQUIDEC
    <span>Arquitectura & Decoración</span>
  </a>
  <ul class="nav-links">
    <li><a href="#home">Inicio</a></li>
    <li><a href="#about">Estudio</a></li>
    <li><a href="#services">Servicios</a></li>
    <li><a href="#portfolio">Proyectos</a></li>
    <li><a href="#experience">Trayectoria</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="hero-lines">
    <div class="hero-line"></div>
    <div class="hero-line"></div>
    <div class="hero-line"></div>
    <div class="hero-line"></div>
  </div>
  <div class="hero-content">
    <div class="hero-overline">Estudio de Arquitectura Premium</div>
    <h1 class="hero-title">CAR<span class="gold">QUI</span>DEC</h1>
    <p class="hero-subtitle">Arquitectura & Decoración</p>
    <p class="hero-tagline">✦ Arquitectura Viva · Excelencia · Creatividad ✦</p>
    <div class="hero-cta">
      <a href="#portfolio" class="btn btn-primary">Ver Proyectos</a>
      <a href="#contact" class="btn btn-outline">Contactar</a>
    </div>
  </div>
  <div class="scroll-indicator">SCROLL</div>
</section>

<!-- ABOUT -->
<section class="about" id="about">
  <div class="about-image reveal">
    <img src="https://image.qwenlm.ai/public_source/f43a05d2-1fa4-43a9-b9aa-575455132421/1f135647f-01d4-42ec-b815-acec5da991c8.png" alt="Hernando Carrillo Sánchez">
  </div>
  <div class="about-content reveal">
    <div class="section-overline">Sobre el Estudio</div>
    <h2 class="section-title">Donde la <span class="italic">visión</span><br>se convierte en<br>espacio <span class="italic">vivo</span></h2>
    <p class="section-desc">
      CARQUIDEC es el estudio fundado por <strong style="color:var(--gold)">Hernando Carrillo Sánchez</strong>, arquitecto y diseñador con más de <strong style="color:var(--white)">30 años de trayectoria internacional</strong>. Especializado en estilos contemporáneo-modernos, el estudio fusiona innovación, exclusividad y funcionalidad arquitectónica para crear espacios que trascienden el tiempo.
    </p>
    <p class="section-desc" style="margin-top:20px">
      Con proyectos ejecutados en <strong style="color:var(--white)">Colombia, España e Italia</strong>, CARQUIDEC representa la excelencia del diseño latinoamericano con proyección global. Cada proyecto es una obra única, pensada para vivir, sentir y perdurar.
    </p>
    <div class="signature">Hernando Carrillo S.</div>
    <div class="role">Fundador · Director Creativo · Arquitecto</div>
  </div>
</section>

<!-- STATS -->
<section class="stats">
  <div class="stats-grid">
    <div class="stat-item reveal">
      <div class="stat-number">30+</div>
      <div class="stat-label">Años de Experiencia</div>
    </div>
    <div class="stat-item reveal">
      <div class="stat-number">50+</div>
      <div class="stat-label">Proyectos Ejecutados</div>
    </div>
    <div class="stat-item reveal">
      <div class="stat-number">3</div>
      <div class="stat-label">Continentes</div>
    </div>
    <div class="stat-item reveal">
      <div class="stat-number">100%</div>
      <div class="stat-label">Excelencia Garantizada</div>
    </div>
  </div>
</section>

<!-- SERVICIOS -->
<section class="services" id="services">
  <div class="reveal">
    <div class="section-overline">Nuestros Servicios</div>
    <h2 class="section-title">Diseño <span class="italic">integral</span><br>de excelencia</h2>
    <p class="section-desc">Soluciones arquitectónicas completas, desde la concepción hasta la entrega final, con estándares internacionales de calidad.</p>
  </div>
  <div class="services-grid">
    <div class="service-card reveal">
      <div class="service-number">01</div>
      <h3 class="service-title">Arquitectura Residencial</h3>
      <p class="service-desc">Diseño de viviendas unifamiliares y multifamiliares de alto standing, con enfoque bioclimático y materiales nobles que maximizan confort y valor patrimonial.</p>
    </div>
    <div class="service-card reveal">
      <div class="service-number">02</div>
      <h3 class="service-title">Diseño de Interiores</h3>
      <p class="service-desc">Conceptualización integral de espacios interiores, selección de materiales, mobiliario custom, iluminación y decoración para experiencias sensoriales únicas.</p>
    </div>
    <div class="service-card reveal">
      <div class="service-number">03</div>
      <h3 class="service-title">Diseño de Exteriores</h3>
      <p class="service-desc">Paisajismo, jardines, cascadas y espacios exteriores que integran naturaleza y arquitectura, creando ambientes de contemplación y bienestar.</p>
    </div>
    <div class="service-card reveal">
      <div class="service-number">04</div>
      <h3 class="service-title">Proyectos Comerciales</h3>
      <p class="service-desc">Boutiques, hoteles, espacios culturales y comerciales con identidad de marca, experiencia de usuario premium y optimización de flujo y rentabilidad.</p>
    </div>
    <div class="service-card reveal">
      <div class="service-number">05</div>
      <h3 class="service-title">Dirección de Obra</h3>
      <p class="service-desc">Supervisión integral de construcción, control de calidad, gestión de equipos multidisciplinarios, cronogramas y presupuestos con precisión milimétrica.</p>
    </div>
    <div class="service-card reveal">
      <div class="service-number">06</div>
      <h3 class="service-title">Remodelaciones Premium</h3>
      <p class="service-desc">Transformación integral de espacios existentes, renovación de hoteles, residencias y locales comerciales con visión contemporánea y respeto patrimonial.</p>
    </div>
  </div>
</section>

<!-- PORTAFOLIO -->
<section class="portfolio" id="portfolio">
  <div class="reveal">
    <div class="section-overline">Portafolio Selecto</div>
    <h2 class="section-title">Proyectos <span class="italic">icónicos</span></h2>
    <p class="section-desc">Una selección de obras que representan la esencia de CARQUIDEC: innovación, elegancia y funcionalidad en cada detalle.</p>
  </div>
  <div class="portfolio-grid">
    <div class="portfolio-item large reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2024</div>
        <h3 class="portfolio-title">Vivienda Multifamiliar Corozal</h3>
        <div class="portfolio-location">Corozal, Sucre · Colombia</div>
      </div>
    </div>
    <div class="portfolio-item reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2022</div>
        <h3 class="portfolio-title">Residencia Premium Montería</h3>
        <div class="portfolio-location">Montería · Colombia</div>
      </div>
    </div>
    <div class="portfolio-item reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2019</div>
        <h3 class="portfolio-title">Casa de Verano Mediterránea</h3>
        <div class="portfolio-location">Valencia · España</div>
      </div>
    </div>
    <div class="portfolio-item reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2018</div>
        <h3 class="portfolio-title">Hotel Ibiza Central</h3>
        <div class="portfolio-location">Montería · Colombia</div>
      </div>
    </div>
    <div class="portfolio-item reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2017</div>
        <h3 class="portfolio-title">Sala de Cine Cámara Oscura</h3>
        <div class="portfolio-location">Barranquilla · Colombia</div>
      </div>
    </div>
    <div class="portfolio-item large reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2014</div>
        <h3 class="portfolio-title">Fuente Conmemorativa 40 Aniversario</h3>
        <div class="portfolio-location">Universidad del Sinú · Colombia</div>
      </div>
    </div>
    <div class="portfolio-item reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2010</div>
        <h3 class="portfolio-title">Joyería Italiana de Lujo</h3>
        <div class="portfolio-location">Montería · Colombia</div>
      </div>
    </div>
    <div class="portfolio-item reveal">
      <div class="portfolio-overlay">
        <div class="portfolio-year">2005</div>
        <h3 class="portfolio-title">Arquitectura Bioclimática</h3>
        <div class="portfolio-location">Centro de Convenciones · Montería</div>
      </div>
    </div>
  </div>
</section>

<!-- EXPERIENCIA -->
<section class="experience" id="experience">
  <div class="reveal">
    <div class="section-overline">Trayectoria Internacional</div>
    <h2 class="section-title">Más de tres<br><span class="italic">décadas</span> creando</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-year">2024</div>
      <h3 class="timeline-title">Vivienda Multifamiliar · Corozal, Sucre</h3>
      <div class="timeline-location">Cliente: Gloria Espinosa · Colombia</div>
      <p class="timeline-desc">Dirección integral del diseño arquitectónico de complejo residencial multifamiliar, optimizando espacios comunes, circulación y eficiencia energética.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">2022</div>
      <h3 class="timeline-title">Residencia Unifamiliar Premium · Montería</h3>
      <div class="timeline-location">Cliente: Guido Daguer · Colombia</div>
      <p class="timeline-desc">Conceptualización y desarrollo completo de residencia de alto standing, integrando diseño contemporáneo, materiales nobles y soluciones bioclimáticas.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">2019</div>
      <h3 class="timeline-title">Casa de Verano · Valencia</h3>
      <div class="timeline-location">Cliente: Vicente Matos · España</div>
      <p class="timeline-desc">Proyecto internacional de residencia vacacional en la costa mediterránea, fusionando estética moderna con integración paisajística y luz natural.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">2018</div>
      <h3 class="timeline-title">Remodelación Hotel Ibiza Central</h3>
      <div class="timeline-location">Cliente: Guido Daguer · Montería, Colombia</div>
      <p class="timeline-desc">Director de remodelación y construcción de proyecto hotelero, liderando equipos de obra, control de calidad, cronogramas y presupuesto.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">2017</div>
      <h3 class="timeline-title">Sala de Cine Independiente · Cámara Oscura</h3>
      <div class="timeline-location">Fundación Cámara Oscura · Barranquilla, Colombia</div>
      <p class="timeline-desc">Director de diseño y construcción de espacio cultural cinematográfico, coordinando acústica, iluminación especializada y experiencia inmersiva.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">2014</div>
      <h3 class="timeline-title">Fuente Conmemorativa 40 Aniversario</h3>
      <div class="timeline-location">Universidad del Sinú · Colombia</div>
      <p class="timeline-desc">Diseño y construcción de jardines y cascadas monumentales, integrando paisajismo, ingeniería hidráulica y arte escultórico.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">2010</div>
      <h3 class="timeline-title">Joyería Italiana de Lujo</h3>
      <div class="timeline-location">Montería · Colombia</div>
      <p class="timeline-desc">Diseño, construcción y decoración integral de boutique de joyería, con atención al detalle en iluminación, vitrinas y experiencia premium.</p>
    </div>
    <div class="timeline-item reveal">
      <div class="timeline-year">1988</div>
      <h3 class="timeline-title">Grado en Arquitectura</h3>
      <div class="timeline-location">Universidad Autónoma del Caribe · Barranquilla, Colombia</div>
      <p class="timeline-desc">Formación académica integral en arquitectura, sentando las bases de más de tres décadas de práctica profesional de excelencia.</p>
    </div>
  </div>
</section>

<!-- VALORES -->
<section class="values">
  <div class="reveal">
    <div class="section-overline" style="justify-content:center">Filosofía del Estudio</div>
    <h2 class="section-title" style="text-align:center">Nuestros <span class="italic">pilares</span></h2>
  </div>
  <div class="values-grid">
    <div class="value-card reveal">
      <div class="value-icon">◆</div>
      <h3 class="value-title">EXCELENCIA</h3>
      <p class="value-desc">Cada proyecto es una obra maestra. No aceptamos atajos ni compromisos en la calidad. Los estándares internacionales son nuestro mínimo.</p>
    </div>
    <div class="value-card reveal">
      <div class="value-icon">✦</div>
      <h3 class="value-title">CREATIVIDAD</h3>
      <p class="value-desc">Innovamos constantemente. Cada espacio es único, pensado para sorprender, emocionar y trascender las convenciones del diseño tradicional.</p>
    </div>
    <div class="value-card reveal">
      <div class="value-icon"></div>
      <h3 class="value-title">ARQUITECTURA VIVA</h3>
      <p class="value-desc">Diseñamos espacios que respiran, que se adaptan, que viven con sus habitantes. La arquitectura debe ser experiencia, no solo estructura.</p>
    </div>
  </div>
</section>

<!-- CONTACTO -->
<section class="contact" id="contact">
  <div class="contact-info reveal">
    <div class="section-overline">Hablemos</div>
    <h2 class="section-title">Iniciemos su<br><span class="italic">próximo</span> proyecto</h2>
    <p class="section-desc" style="margin-bottom:40px">Atendemos proyectos en Latinoamérica, Norte América y Europa. Cada consulta es tratada con la confidencialidad y dedicación que merece.</p>
    
    <div class="contact-item">
      <div class="contact-item-icon">📱</div>
      <div>
        <div class="contact-item-label">Teléfono</div>
        <div class="contact-item-value">+57 612 484 884</div>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-item-icon">✉</div>
      <div>
        <div class="contact-item-label">Email</div>
        <div class="contact-item-value">carqdisantos@gmail.com</div>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-item-icon">📍</div>
      <div>
        <div class="contact-item-label">Estudio Principal</div>
        <div class="contact-item-value">Montería, Colombia</div>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-item-icon">🌎</div>
      <div>
        <div class="contact-item-label">Cobertura</div>
        <div class="contact-item-value">Latinoamérica · Norteamérica · Europa</div>
      </div>
    </div>
  </div>
  
  <form class="contact-form reveal">
    <div class="form-group">
      <input type="text" placeholder=" " required>
      <label>Nombre Completo</label>
    </div>
    <div class="form-group">
      <input type="email" placeholder=" " required>
      <label>Correo Electrónico</label>
    </div>
    <div class="form-group">
      <input type="text" placeholder=" ">
      <label>Tipo de Proyecto</label>
    </div>
    <div class="form-group">
      <input type="text" placeholder=" ">
      <label>Ubicación del Proyecto</label>
    </div>
    <div class="form-group">
      <textarea placeholder=" " rows="4"></textarea>
      <label>Cuéntenos su visión</label>
    </div>
    <button type="submit" class="btn btn-primary" style="align-self:flex-start; margin-top:20px">Enviar Consulta</button>
  </form>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">CARQUIDEC</div>
  <div class="footer-tagline">Arquitectura Viva · Excelencia · Creatividad</div>
  <div class="footer-social">
    <a href="#" title="Instagram">IG</a>
    <a href="#" title="LinkedIn">IN</a>
    <a href="#" title="Pinterest">PI</a>
    <a href="#" title="Behance">BE</a>
  </div>
  <div class="footer-copy">
    © 2025 CARQUIDEC · Hernando Carrillo Sánchez · Todos los derechos reservados<br>
    <span style="color:var(--gold)">Arquitectura & Decoración</span>
  </div>
</footer>

<script>
  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 2000);
  });
  
  // Nav scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
</script>

</body>
</html>
```
