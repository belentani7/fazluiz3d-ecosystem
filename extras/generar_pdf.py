#!/usr/bin/env python3
"""
FAZLUIZ 3D — Plan de Lanzamiento y Empresa (360 días)
Generador de PDF profesional de 50 páginas
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, ListFlowable, ListItem, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Colores
GOLD = HexColor('#C9A96E')
GOLD_DARK = HexColor('#8A734E')
BG = HexColor('#050505')
BG_LIGHT = HexColor('#0A0A0C')
TEXT = HexColor('#F5F5F7')
MUTED = HexColor('#8E8E93')
RED = HexColor('#ff073a')

# Estilos
styles = getSampleStyleSheet()
styles.add(ParagraphStyle('CoverTitle', parent=styles['Title'], fontSize=36, textColor=GOLD, spaceAfter=20, alignment=TA_CENTER, fontName='Helvetica-Bold'))
styles.add(ParagraphStyle('CoverSub', parent=styles['Normal'], fontSize=14, textColor=MUTED, spaceAfter=10, alignment=TA_CENTER))
styles.add(ParagraphStyle('ChapterTitle', parent=styles['Title'], fontSize=24, textColor=GOLD, spaceBefore=30, spaceAfter=20, fontName='Helvetica-Bold'))
styles.add(ParagraphStyle('SectionTitle', parent=styles['Heading2'], fontSize=16, textColor=GOLD_DARK, spaceBefore=20, spaceAfter=10, fontName='Helvetica-Bold'))
styles.add(ParagraphStyle('BodyText2', parent=styles['Normal'], fontSize=10, textColor=TEXT, spaceAfter=8, alignment=TA_JUSTIFY, leading=14))
styles.add(ParagraphStyle('BulletText', parent=styles['Normal'], fontSize=10, textColor=TEXT, spaceAfter=4, leftIndent=20, leading=13))
styles.add(ParagraphStyle('SmallText', parent=styles['Normal'], fontSize=8, textColor=MUTED, spaceAfter=4, leading=11))
styles.add(ParagraphStyle('Highlight', parent=styles['Normal'], fontSize=10, textColor=GOLD, spaceAfter=8, fontName='Helvetica-Bold'))
styles.add(ParagraphStyle('TOCEntry', parent=styles['Normal'], fontSize=11, textColor=TEXT, spaceAfter=6, leftIndent=20))
styles.add(ParagraphStyle('TableHeader', parent=styles['Normal'], fontSize=9, textColor=GOLD, fontName='Helvetica-Bold'))
styles.add(ParagraphStyle('TableCell', parent=styles['Normal'], fontSize=9, textColor=TEXT))

def build_pdf():
    output_path = r"C:\Users\USER\Desktop\FAZLUIZ3D-PLAN-360-DIAS.pdf"
    doc = SimpleDocTemplate(
        output_path, pagesize=A4,
        leftMargin=25*mm, rightMargin=25*mm,
        topMargin=25*mm, bottomMargin=25*mm
    )
    story = []
    
    # ==================== PORTADA ====================
    story.append(Spacer(1, 80*mm))
    story.append(Paragraph("FAZLUIZ 3D", styles['CoverTitle']))
    story.append(Paragraph("ATELIER", styles['CoverTitle']))
    story.append(Spacer(1, 10*mm))
    story.append(Paragraph("Plan de Lanzamiento y Empresa — 360 Días", styles['CoverSub']))
    story.append(Paragraph("Manufactura Aditiva de Precisión | Málaga, España", styles['CoverSub']))
    story.append(Spacer(1, 15*mm))
    story.append(Paragraph("Thiago Luiz Pereira", styles['CoverSub']))
    story.append(Paragraph("Versión 1.0 — Julio 2026", styles['SmallText']))
    story.append(PageBreak())
    
    # ==================== ÍNDICE ====================
    story.append(Paragraph("ÍNDICE", styles['ChapterTitle']))
    toc = [
        "1. Resumen Ejecutivo",
        "2. La Empresa: FAZLUIZ 3D",
        "3. Producto y Servicios",
        "4. Análisis de Mercado",
        "5. Marca y Diseño",
        "6. Arquitectura Técnica",
        "7. Backend: Supabase + Next.js",
        "8. Frontend: Web HTML/GSAP",
        "9. Lanzamiento Web — Coste Mínimo",
        "10. Plan de 360 Días — Fase 1 (Mes 1-3)",
        "11. Plan de 360 Días — Fase 2 (Mes 4-6)",
        "12. Plan de 360 Días — Fase 3 (Mes 7-9)",
        "13. Plan de 360 Días — Fase 4 (Mes 10-12)",
        "14. Estrategia de Ventas y Prospeción",
        "15. Plantillas de Email",
        "16. CRM y Automatización",
        "17. Facturación y Legal",
        "18. Métricas y KPIs",
        "19. Riesgos y Mitigación",
        "20. Presupuesto Detallado",
        "21. Cronograma Visual",
        "22. Conclusiones",
    ]
    for item in toc:
        story.append(Paragraph(item, styles['TOCEntry']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 1: RESUMEN EJECUTIVO ====================
    story.append(Paragraph("1. RESUMEN EJECUTIVO", styles['ChapterTitle']))
    story.append(Paragraph(
        "FAZLUIZ 3D es un atelier de manufactura aditiva ubicado en Málaga, España, "
        "especializado en tres líneas de negocio: decoración de autor, piezas de repuesto "
        "personalizadas y componentes náuticos de precisión. Fundado por Thiago Luiz Pereira, "
        "un brasileño con raíces portuguesas que transitó por Rio de Janeiro, Dublín y Barcelona "
        "antes de establecerse en la Costa del Sol.", styles['BodyText2']))
    story.append(Paragraph(
        "El negocio combina diseño paramétrico, impresión 3D en materiales de grado industrial "
        "(PA12, ASA, PETG-CF, resina técnica) y post-procesado artesanal para entregar piezas "
        "con tolerancias de ±0.05mm. La propuesta de valor se basa en velocidad (24h para "
        "prototipos), precisión técnica y acabado premium.", styles['BodyText2']))
    story.append(Paragraph(
        "Este documento presenta el plan de lanzamiento completo para los primeros 360 días, "
        "incluyendo arquitectura técnica, estrategia de ventas, presupuesto y cronograma.", styles['BodyText2']))
    
    # Key metrics table
    data = [
        ['Métrica', 'Valor'],
        ['Inversión inicial', '< 50€'],
        ['Coste mensual', '~10€/año + comisiones Stripe'],
        ['Tiempo de prototipado', '24-48 horas'],
        ['Tolerancia', '±0.05mm'],
        ['Materiales disponibles', '6+ (PA12, ASA, PETG-CF, Resina, PC, TPU)'],
        ['Mercado objetivo', 'Málaga + Costa del Sol + online'],
        ['Revenue target año 1', '15.000-25.000€'],
    ]
    t = Table(data, colWidths=[120, 200])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(Spacer(1, 10))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 2: LA EMPRESA ====================
    story.append(Paragraph("2. LA EMPRESA: FAZLUIZ 3D", styles['ChapterTitle']))
    story.append(Paragraph("2.1 Fundador", styles['SectionTitle']))
    story.append(Paragraph(
        "Thiago Luiz Pereira — Nacido en Rio de Janeiro con raíces portuguesas. "
        "Trayectoria: Brasil (infancia y creatividad) → Irlanda (disciplina y trabajo duro en delivery) "
        "→ Barcelona (despertar creativo, descubrimiento de la manufactura aditiva) → Málaga (fundación "
        "del atelier). Perfil: visión para los detalles, imaginación creativa, disciplina metódica.", styles['BodyText2']))
    
    story.append(Paragraph("2.2 Misión", styles['SectionTitle']))
    story.append(Paragraph(
        "Fabricar soluciones de precisión mediante manufactura aditiva, combinando tecnología "
        "industrial con acabado artesanal. No fabricamos objetos — fabricamos soluciones que "
        "resuelven problemas reales.", styles['BodyText2']))
    
    story.append(Paragraph("2.3 Valores", styles['SectionTitle']))
    bullets = [
        "Precisión: ±0.05mm de tolerancia garantizada",
        "Velocidad: 24-48h de prototipado",
        "Calidad: acabado premium en cada pieza",
        "Innovación: geometrías imposibles para manufactura tradicional",
        "Proximidad: servicio local en Málaga + envío a toda España",
    ]
    for b in bullets:
        story.append(Paragraph(f"• {b}", styles['BulletText']))
    
    story.append(Paragraph("2.4 Ubicación y Mercado", styles['SectionTitle']))
    story.append(Paragraph(
        "Sede: Polígono Industrial, Málaga. Mercado objetivo: Málaga capital, Costa del Sol "
        "(Marbella, Estepona, Sotogrande), y envío a toda España. Sector náutico: puertos "
        "deportivos de la zona (Puerto Banús, Puerto Deportivo de Málaga).", styles['BodyText2']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 3: PRODUCTO ====================
    story.append(Paragraph("3. PRODUCTO Y SERVICIOS", styles['ChapterTitle']))
    
    story.append(Paragraph("3.1 Línea Decoración", styles['SectionTitle']))
    story.append(Paragraph(
        "Esculturas y objetos de autor con geometrías imposibles para manufactura tradicional. "
        "Cada pieza es una declaración de intenciones entre la tecnología y el arte. "
        "Resolución: 25μm. Acabado: Resina Premium.", styles['BodyText2']))
    
    story.append(Paragraph("3.2 Línea Repuestos", styles['SectionTitle']))
    story.append(Paragraph(
        "Ingeniería inversa y personalización de piezas descatalogadas o imposibles de encontrar. "
        "Escaneo 3D, rediseño CAD y fabricación con tolerancias de ±0.05mm en polímeros de "
        "grado industrial. Lead time: 24-48 horas.", styles['BodyText2']))
    
    story.append(Paragraph("3.3 Línea Náutica", styles['SectionTitle']))
    story.append(Paragraph(
        "Componentes para yates y marina: soportes de radar, cleats, pasamanos, piezas de "
        "cuadro de mandos. Fabricadas en ASA y PA12 resistentes a UV y salitre.", styles['BodyText2']))
    
    story.append(Paragraph("3.4 Materiales Disponibles", styles['SectionTitle']))
    mat_data = [
        ['Material', 'Técnica', 'Uso Principal', 'Resistencia'],
        ['PA12 Nylon', 'SLS', 'Engranajes, bisagras', '48 MPa tracción'],
        ['ASA', 'FDM', 'Náutica, exterior', 'UV Excelente'],
        ['PETG-CF', 'FDM', 'Rigidez extrema', 'Fibra carbono'],
        ['Resina Técnica', 'SLA', 'Prototipado estético', '25μm resolución'],
        ['Policarbonato', 'FDM', 'Carcasas, viseras', 'Impacto muy alto'],
        ['TPU 95A', 'FDM', 'Juntas, protecciones', '450% elongación'],
    ]
    t = Table(mat_data, colWidths=[80, 50, 110, 100])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 4: ANÁLISIS DE MERCADO ====================
    story.append(Paragraph("4. ANÁLISIS DE MERCADO", styles['ChapterTitle']))
    story.append(Paragraph("4.1 Mercado de Impresión 3D en España", styles['SectionTitle']))
    story.append(Paragraph(
        "El mercado español de fabricación aditiva crece a un 15-20% anual. Málaga concentra "
        "un ecosistema náutico fuerte (Puerto Banús, Sotogrande) y un sector turístico que "
        "demanda decoración personalizada. La demanda de piezas de repuesto descatalogadas "
        "es creciente en industriales y talleres.", styles['BodyText2']))
    
    story.append(Paragraph("4.2 Competencia", styles['SectionTitle']))
    story.append(Paragraph(
        "Competidores directos: talleres de impresión 3D genéricos (sin especialización). "
        "Ventaja competitiva: combinación de precisión técnica + acabado artesanal + servicio "
        "local + presencia web premium. Pocos competidores ofrecen el paquete completo.", styles['BodyText2']))
    
    story.append(Paragraph("4.3 Público Objetivo", styles['SectionTitle']))
    targets = [
        "Interioristas y decoradores de interiores",
        "Talleres mecánicos y industriales",
        "Puertos deportivos y talleres náuticos",
        "Comercios que necesitan branding 3D",
        "Particulares con proyectos de decoración",
        "Empresas con piezas descatalogadas",
    ]
    for t_item in targets:
        story.append(Paragraph(f"• {t_item}", styles['BulletText']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 5: MARCA ====================
    story.append(Paragraph("5. MARCA Y DISEÑO", styles['ChapterTitle']))
    story.append(Paragraph("5.1 Identidad Visual", styles['SectionTitle']))
    story.append(Paragraph(
        "La identidad de FAZLUIZ 3D se basa en la premisa de que el negro puro transmite "
        "autoridad y el dorado transmite lujo accesible. El diseño es 'Apple-grade': "
        "preloader animado, cursor personalizado, parallax multicapa, glassmorphism, "
        "animaciones GSAP ScrollTrigger.", styles['BodyText2']))
    
    brand_data = [
        ['Elemento', 'Especificación'],
        ['Fondo principal', '#050505 (negro obsidiana)'],
        ['Dorado primario', '#C9A96E'],
        ['Dorado warm', '#D4B078'],
        ['Bronce', '#8A734E'],
        ['Texto principal', '#F5F5F7'],
        ['Tipografía títulos', 'Syne (pesos 500-800)'],
        ['Tipografía cuerpo', 'Inter (pesos 300-600)'],
        ['Tipografía mono', 'JetBrains Mono'],
        ['Easing principal', 'cubic-bezier(0.22, 1, 0.36, 1)'],
    ]
    t = Table(brand_data, colWidths=[120, 220])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t)
    
    story.append(Paragraph("5.2 Tono de Voz", styles['SectionTitle']))
    story.append(Paragraph(
        "Frases cortas, directas. Sin exclamaciones. Sin superlativos vacíos. "
        "La autoridad se transmite por omisión y precisión técnica, no por afirmación. "
        "Ejemplo: 'De la idea al polímero en 24 horas' vs '¡Las mejores piezas del mundo!'", styles['BodyText2']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 6: ARQUITECTURA TÉCNICA ====================
    story.append(Paragraph("6. ARQUITECTURA TÉCNICA", styles['ChapterTitle']))
    story.append(Paragraph("6.1 Stack Tecnológico", styles['SectionTitle']))
    
    stack_data = [
        ['Capa', 'Tecnología', 'Coste'],
        ['Frontend', 'HTML5 + CSS3 + GSAP 3.12 + ScrollTrigger', '$0'],
        ['Backend API', 'Next.js 16 (App Router) en Vercel', '$0 (Hobby)'],
        ['Base de datos', 'Supabase (PostgreSQL)', '$0 (Free tier)'],
        ['Autenticación', 'Supabase Auth (JWT)', '$0'],
        ['Pagos', 'Stripe (1.4% + 0.25€ por transacción)', '$0 base'],
        ['Email transaccional', 'Resend (100 emails/día gratis)', '$0'],
        ['Almacenamiento', 'Supabase Storage (1GB gratis)', '$0'],
        ['Prospección IA', 'OpenAI GPT-4o (análisis de fotos)', 'Pay-per-use'],
        ['Localización', 'Google Places API', '$0 (200$/mes gratis)'],
        ['CDN + DNS', 'Cloudflare', '$0'],
        ['Hosting', 'Vercel (auto-deploy desde Git)', '$0 (Hobby)'],
        ['Dominio', 'fazluiz3d.es', '~10€/año'],
    ]
    t = Table(stack_data, colWidths=[100, 160, 100])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 7: BACKEND ====================
    story.append(Paragraph("7. BACKEND: SUPABASE + NEXT.JS", styles['ChapterTitle']))
    story.append(Paragraph("7.1 Base de Datos (PostgreSQL via Supabase)", styles['SectionTitle']))
    story.append(Paragraph(
        "El esquema incluye 6 tablas principales: leads (captación), orders (pedidos), "
        "invoices (facturación), products (catálogo), cart_items (carrito), "
        "reviews (valoraciones). Row Level Security (RLS) activado.", styles['BodyText2']))
    
    story.append(Paragraph("7.2 API Routes", styles['SectionTitle']))
    api_data = [
        ['Endpoint', 'Método', 'Función'],
        ['/api/orders', 'POST', 'Crear pedido desde formulario web'],
        ['/api/scrape', 'POST', 'Buscar negocios cercanos (Google Places)'],
        ['/api/analyze', 'POST', 'IA analiza foto y redacta propuesta'],
        ['/api/send', 'POST', 'Envía email de propuesta al lead'],
        ['/api/products', 'GET/POST', 'CRUD de productos (catálogo)'],
        ['/api/checkout', 'POST', 'Crear sesión de pago Stripe'],
        ['/api/webhooks/stripe', 'POST', 'Confirmación automática de pago'],
    ]
    t = Table(api_data, colWidths=[120, 60, 180])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    
    story.append(Paragraph("7.3 Flujo de Datos", styles['SectionTitle']))
    flow = [
        "1. Usuario rellena formulario web",
        "2. JavaScript envía POST a /api/orders",
        "3. Next.js valida con Zod (OrderSchema)",
        "4. Supabase almacena en tabla 'orders'",
        "5. Resend envía email de confirmación al cliente",
        "6. Resend envía notificación al admin (Thiago)",
        "7. Dashboard Supabase muestra el lead",
    ]
    for f in flow:
        story.append(Paragraph(f, styles['BulletText']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 8: FRONTEND ====================
    story.append(Paragraph("8. FRONTEND: WEB HTML/GSAP", styles['ChapterTitle']))
    story.append(Paragraph("8.1 Características de la Web", styles['SectionTitle']))
    features = [
        "Preloader con animación 3D de impresora",
        "Cursor personalizado con glow dorado",
        "Hero con parallax multicapa (3 orbes)",
        "Nav glassmorphism con scroll hide/show",
        "3 colecciones: Decoración, Repuestos, Náutica",
        "Timeline historia (Rio → Dublín → Barcelona → Málaga)",
        "Sección 'La Máquina' con anillos rotativos",
        "Educación: 4 pasos de manufactura",
        "6 materiales con barras de progreso animadas",
        "Proceso horizontal scroll (4 pasos)",
        "2 sectores: Decoración + Náutica",
        "Métricas con contadores animados",
        "Formulario → localStorage + fetch /api/orders",
        "Toast notifications",
        "Modal privado (Ctrl+Shift+T)",
        "GSAP ScrollTrigger en TODAS las secciones",
        "Parallax en hero y secciones",
        "Reveal animations escalonadas",
        "Responsive (mobile-first)",
    ]
    for f in features:
        story.append(Paragraph(f"• {f}", styles['BulletText']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 9: LANZAMIENTO ====================
    story.append(Paragraph("9. LANZAMIENTO WEB — COSTE MÍNIMO", styles['ChapterTitle']))
    story.append(Paragraph(
        "El objetivo es lanzar la web con el coste mínimo posible, usando exclusivamente "
        "servicios gratuitos o de coste ultra-bajo. Aquí está el plan paso a paso:", styles['BodyText2']))
    
    story.append(Paragraph("9.1 Día 1: Infraestructura Base", styles['SectionTitle']))
    day1 = [
        "Crear cuenta Supabase (gratis) → Proyecto nuevo → SQL Editor → pegar schema.sql",
        "Copiar Project URL y Service Role Key",
        "Crear cuenta Vercel (gratis) → Conectar repositorio GitHub",
        "Configurar variables de entorno en Vercel",
        "Crear cuenta Resend (gratis, 100 emails/día) → Verificar dominio",
    ]
    for d in day1:
        story.append(Paragraph(f"• {d}", styles['BulletText']))
    
    story.append(Paragraph("9.2 Día 2: Backend Funcional", styles['SectionTitle']))
    day2 = [
        "Deploy automático de Next.js en Vercel",
        "Probar endpoints: /api/orders, /api/scrape, /api/analyze",
        "Configurar webhook de Stripe (si se usan pagos online)",
        "Test de email: formulario → Resend → inbox del cliente",
    ]
    for d in day2:
        story.append(Paragraph(f"• {d}", styles['BulletText']))
    
    story.append(Paragraph("9.3 Día 3: Frontend + DNS", styles['SectionTitle']))
    day3 = [
        "Subir FAZLUIZ3D-PRINCIPAL.html al repositorio",
        "Configurar dominio fazluiz3d.es en Vercel",
        "Apuntar DNS desde el registrador a Vercel",
        "SSL automático via Vercel/Cloudflare",
        "Test completo: formulario → backend → email",
    ]
    for d in day3:
        story.append(Paragraph(f"• {d}", styles['BulletText']))
    
    story.append(Paragraph("9.4 Costes del Lanzamiento", styles['SectionTitle']))
    cost_data = [
        ['Concepto', 'Coste', 'Período'],
        ['Dominio .es', '10€', 'Anual'],
        ['Vercel Hobby', '0€', 'Mes'],
        ['Supabase Free', '0€', 'Mes'],
        ['Resend Free', '0€', 'Mes (100 emails)'],
        ['Cloudflare Free', '0€', 'Mes'],
        ['Stripe', '1.4% + 0.25€', 'Por transacción'],
        ['OpenAI GPT-4o', '~0.01-0.05€', 'Por análisis'],
        ['TOTAL AÑO 1', '~10-50€', '+ comisiones Stripe'],
    ]
    t = Table(cost_data, colWidths=[120, 100, 120])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('BACKGROUND', (0,-1), (-1,-1), GOLD_DARK),
        ('TEXTCOLOR', (0,-1), (-1,-1), white),
        ('FONTNAME', (0,-1), (-1,-1), 'Helvetica-Bold'),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULOS 10-13: PLAN 360 DÍAS ====================
    story.append(Paragraph("10. PLAN 360 DÍAS — FASE 1 (Mes 1-3)", styles['ChapterTitle']))
    story.append(Paragraph("Objetivo: Establecer la base operativa y conseguir los primeros 5 clientes.", styles['Highlight']))
    
    phase1 = [
        ("Mes 1: Infraestructura y Legal", [
            "Dar de alta la actividad en el RETA (autónomo) o cooperativa",
            "Alta en Hacienda: epígrafe 485 (fabricación de objetos de decoración) o 504 (reparaciones diversas)",
            "Alta en Seguridad Social",
            "Abrir cuenta bancaria empresarial",
            "Configurar facturación (FacturaDirecta o similar, 0€)",
            "Lanzar web en fazluiz3d.es",
            "Crear perfil Google Business (gratuito)",
            "Crear perfil Instagram (@fazluiz3d)",
        ]),
        ("Mes 2: Primeros Clientes", [
            "Prospección local: visitar 3 talleres/días en polígonos de Málaga",
            "Enviar 10 emails/día con plantillas de decoración y náutica",
            "Ofrecer primera pieza de muestra GRATUITA a 5 negocios",
            "Captar primeros 3 leads reales",
            "Producir primeras 2-3 piezas de pago",
            "Pedir 1 review/testimonio por pieza entregada",
        ]),
        ("Mes 3: Consolidación", [
            "Objetivo: 5 clientes pagados, 2.000€ revenue",
            "Optimizar proceso de fabricación (tiempo por pieza)",
            "Crear portfolio con fotos reales de piezas entregadas",
            "Empezar presencia en redes: 3 posts/semana en Instagram",
            "Contactar 1 puerto deportivo para línea náutica",
            "Configurar CRM (HubSpot Free)",
        ]),
    ]
    for title, items in phase1:
        story.append(Paragraph(title, styles['SectionTitle']))
        for item in items:
            story.append(Paragraph(f"• {item}", styles['BulletText']))
    
    story.append(PageBreak())
    
    story.append(Paragraph("11. PLAN 360 DÍAS — FASE 2 (Mes 4-6)", styles['ChapterTitle']))
    story.append(Paragraph("Objetivo: Escalar ventas, abrir línea náutica, 5.000€ revenue.", styles['Highlight']))
    
    phase2 = [
        ("Mes 4: Escalada de Ventas", [
            "Prospección agresiva: 5 visitas/día en polígonos",
            "Email marketing semanal a base de datos",
            "Crear página de Instagram profesional con portfolio",
            "Contactar interioristas de Málaga (5 por semana)",
            "Objetivo: 8 clientes activos",
        ]),
        ("Mes 5: Línea Náutica", [
            "Visitar Puerto Deportivo de Málaga",
            "Contactar talleres náuticos de Marbella/Estepona",
            "Ofrecer servicio de piezas de repuesto náutico",
            "Crear muestras de materiales ASA/PA12 resistentes a salinidad",
            "Primeras 2-3 piezas náuticas de pago",
        ]),
        ("Mes 6: Optimización", [
            "Revisar márgenes: precio vs tiempo de fabricación",
            "Automatizar email de seguimiento (Resend + CRON)",
            "Crear sección 'Proyectos' en la web con fotos reales",
            "Empezar blog técnico (1 artículo/mes, SEO)",
            "Objetivo: 5.000€ revenue acumulado",
        ]),
    ]
    for title, items in phase2:
        story.append(Paragraph(title, styles['SectionTitle']))
        for item in items:
            story.append(Paragraph(f"• {item}", styles['BulletText']))
    
    story.append(PageBreak())
    
    story.append(Paragraph("12. PLAN 360 DÍAS — FASE 3 (Mes 7-9)", styles['ChapterTitle']))
    story.append(Paragraph("Objetivo: Crecimiento sostenido, primeros pedidos online, 10.000€.", styles['Highlight']))
    
    phase3 = [
        ("Mes 7: Ventas Online", [
            "Activar pasarela de pagos Stripe en la web",
            "Crear catálogo de productos predefinidos",
            "Configurar carrito de compra",
            "Test de compra completa: carrito → pago → email confirmación",
            "Objetivo: primeras 2-3 ventas online",
        ]),
        ("Mes 8: Contenido y SEO", [
            "Publicar 4 artículos técnicos (blog)",
            "Optimizar SEO on-page de todas las páginas",
            "Crear Google My Business posts semanales",
            "Contactar bloggers/periodistas locales de diseño",
            "Objetivo: tráfico orgánico creciente",
        ]),
        ("Mes 9: Expansión", [
            "Contactar distribuidores de materiales 3D",
            "Explorar venta B2B a empresas de interiorismo",
            "Crear programa de referidos (descuento por referir)",
            "Objetivo: 10.000€ revenue acumulado",
            "Evaluar necesidad de segundo equipo de impresión",
        ]),
    ]
    for title, items in phase3:
        story.append(Paragraph(title, styles['SectionTitle']))
        for item in items:
            story.append(Paragraph(f"• {item}", styles['BulletText']))
    
    story.append(PageBreak())
    
    story.append(Paragraph("13. PLAN 360 DÍAS — FASE 4 (Mes 10-12)", styles['ChapterTitle']))
    story.append(Paragraph("Objetivo: Consolidación, 15.000-25.000€ revenue, base sólida.", styles['Highlight']))
    
    phase4 = [
        ("Mes 10: Consolidación", [
            "Revisar todos los procesos y optimizar tiempos",
            "Automatizar facturación (emitir automáticamente al cobrar)",
            "Crear dashboard de métricas en Supabase",
            "Objetivo: 15 clientes activos simultáneos",
        ]),
        ("Mes 11: Premium y Upselling", [
            "Crear línea de productos premium (edición limitada)",
            "Ofrecer servicio de diseño personalizado (no solo fabricación)",
            "Crear sección 'Tienda' en la web con productos disponibles",
            "Objetivo: ticket medio > 200€",
        ]),
        ("Mes 12: Evaluación y Plan Año 2", [
            "Revisar P&L completo del año",
            "Analizar qué líneas funcionan mejor",
            "Decidir: ampliar equipo? nueva máquina? nuevo material?",
            "Planificar año 2: ¿abrir tienda online? ¿expandir a otras ciudades?",
            "Objetivo: 15.000-25.000€ revenue, negocio rentable",
        ]),
    ]
    for title, items in phase4:
        story.append(Paragraph(title, styles['SectionTitle']))
        for item in items:
            story.append(Paragraph(f"• {item}", styles['BulletText']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 14: ESTRATEGIA DE VENTAS ====================
    story.append(Paragraph("14. ESTRATEGIA DE VENTAS Y PROSPECCIÓN", styles['ChapterTitle']))
    story.append(Paragraph("14.1 Prospección Local (Málaga)", styles['SectionTitle']))
    story.append(Paragraph(
        "Método: Visitas presenciales a polígonos industriales, talleres, puertos deportivos. "
        "5 visitas/día, 25/semana. Script: presentación de 30 segundos + muestra física + "
        "tarjeta con QR a la web. Follow-up: email al día siguiente.", styles['BodyText2']))
    
    story.append(Paragraph("14.2 Prospección Online", styles['SectionTitle']))
    story.append(Paragraph(
        "Email frío con plantillas personalizadas (ver Cap. 15). 10 emails/día. "
        "Segmentación: línea Decoración (tiendas, restaurantes, hoteles) vs Náutica "
        "(puertos, talleres, chandleries). Tasa de respuesta esperada: 5-10%.", styles['BodyText2']))
    
    story.append(Paragraph("14.3 Google Business + SEO Local", styles['SectionTitle']))
    story.append(Paragraph(
        "Perfil de Google Business optimizado: fotos de piezas, horarios, reseñas. "
        "Publicaciones semanales. Keywords: 'impresión 3D Málaga', 'piezas repuesto 3D', "
        "'decoración 3D Málaga'. Objetivo: aparecer en los 3 primeros resultados.", styles['BodyText2']))
    
    story.append(Paragraph("14.4 Redes Sociales", styles['SectionTitle']))
    story.append(Paragraph(
        "Instagram: 3 posts/semana (proceso de fabricación, piezas terminadas, behind the scenes). "
        "LinkedIn: 1 post/semana (artículos técnicos, caso de estudio). "
        "No gastar dinero en publicidad los primeros 6 meses.", styles['BodyText2']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 15: EMAILS ====================
    story.append(Paragraph("15. PLANTILLAS DE EMAIL", styles['ChapterTitle']))
    story.append(Paragraph("15.1 Email Decoración — Primer Contacto", styles['SectionTitle']))
    story.append(Paragraph(
        "<b>Asunto:</b> Piezas de decoración 3D para [Empresa]<br/><br/>"
        "Hola [Nombre],<br/><br/>"
        "Soy Thiago, de ÁUREA 3D (Málaga). Fabricamos piezas de decoración de autor "
        "—esculturas, branding tridimensional, mobiliario auxiliar— con manufactura "
        "aditiva y acabado premium.<br/><br/>"
        "Si os interesa, puedo enviaros una muestra física gratuita para que "
        "valoréis el acabado antes de cualquier compromiso.<br/><br/>"
        "Un saludo,<br/>"
        "Thiago Luiz Pereira<br/>"
        "ÁUREA 3D | aurea3d.es<br/><br/>"
        "<i>Si no deseas recibir más comunicaciones, responde 'BAJA'.</i>", styles['BodyText2']))
    
    story.append(Paragraph("15.2 Email Náutica — Primer Contacto", styles['SectionTitle']))
    story.append(Paragraph(
        "<b>Asunto:</b> Piezas de repuesto náutico impresas en 3D<br/><br/>"
        "Hola [Nombre],<br/><br/>"
        "Soy Thiago, de ÁUREA 3D (Málaga). Fabricamos piezas de repuesto y "
        "señalización náutica —tiradores, soportes, placas de amarre— en "
        "materiales resistentes a la salinidad.<br/><br/>"
        "¿Os interesaría recibir una muestra física gratuita del acabado?<br/><br/>"
        "Un saludo,<br/>"
        "Thiago Luiz Pereira<br/>"
        "ÁUREA 3D | aurea3d.es<br/><br/>"
        "<i>Si no deseas recibir más comunicaciones, responde 'BAJA'.</i>", styles['BodyText2']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 16: CRM ====================
    story.append(Paragraph("16. CRM Y AUTOMATIZACIÓN", styles['ChapterTitle']))
    story.append(Paragraph("16.1 Pipeline de Ventas", styles['SectionTitle']))
    pipeline = [
        "1. Lead captado (web / prospección) → 2. Contactado → 3. Presupuesto enviado",
        "4. Presupuesto aceptado → 5. En producción → 6. Facturado y cobrado",
        "7. Perdido (para análisis de causas)",
    ]
    for p in pipeline:
        story.append(Paragraph(p, styles['BulletText']))
    
    story.append(Paragraph("16.2 Herramienta Recomendada", styles['SectionTitle']))
    story.append(Paragraph(
        "<b>HubSpot Free</b> — CRM gratuito con formulario web integrado, "
        "pipeline visual, email tracking. Suficiente para los primeros 12 meses. "
        "Si el volumen crece, migrar a Close CRM.", styles['BodyText2']))
    
    story.append(Paragraph("16.3 Automatizaciones", styles['SectionTitle']))
    auto = [
        "Email de confirmación automático al recibir solicitud (vía Resend)",
        "Recordatorio de seguimiento a +4 días si no hay respuesta",
        "Notificación a Thiago por cada lead nuevo (email + WhatsApp si configurado)",
        "Email de estado cuando la pieza entra en producción",
        "Email de fotos para aprobación antes del envío",
    ]
    for a in auto:
        story.append(Paragraph(f"• {a}", styles['BulletText']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 17: LEGAL ====================
    story.append(Paragraph("17. FACTURACIÓN Y LEGAL", styles['ChapterTitle']))
    story.append(Paragraph("17.1 Alta de Actividad", styles['SectionTitle']))
    story.append(Paragraph(
        "Opción 1: Autónomo — Alta en RETA (Seguridad Social) + epígrafe Hacienda. "
        "Coste: cuota de autónomo ~80€/mes (tarifa plana primer año).<br/><br/>"
        "Opción 2: Cooperativa — Alta como socio trabajador. Más complejo pero con "
        "ventajas fiscales. Requiere actividad real desde el día 1.", styles['BodyText2']))
    
    story.append(Paragraph("17.2 Facturación", styles['SectionTitle']))
    story.append(Paragraph(
        "Herramienta: FacturaDirecta (gratuita hasta 3 facturas/mes) o "
        "Aitorial (gratuita). Emitir factura por cada pedido cobrado. "
        "IVA: 21% general. Retención: 15% si facturas a empresas (trimestral).", styles['BodyText2']))
    
    story.append(Paragraph("17.3 Protección Legal", styles['SectionTitle']))
    legal = [
        "Aviso legal en la web (obligatorio RGPD)",
        "Política de privacidad (obligatorio RGPD)",
        "Política de cookies",
        "Términos y condiciones de venta",
        "Seguro de responsabilidad civil (recomendado, ~200€/año)",
    ]
    for l in legal:
        story.append(Paragraph(f"• {l}", styles['BulletText']))
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 18: MÉTRICAS ====================
    story.append(Paragraph("18. MÉTRICAS Y KPIs", styles['ChapterTitle']))
    kpi_data = [
        ['KPI', 'Meta Mes 3', 'Meta Mes 6', 'Meta Mes 12'],
        ['Clientes activos', '5', '10', '15-20'],
        ['Revenue mensual', '700€', '1.500€', '2.000-3.000€'],
        ['Ticket medio', '140€', '150€', '200€+'],
        ['Leads/mes', '20', '40', '60'],
        ['Tasa conversión', '10%', '15%', '20%'],
        ['Días medio entrega', '7', '5', '3-5'],
        ['Reviews en Google', '3', '10', '25+'],
        ['Posts Instagram/mes', '12', '12', '12'],
        ['Artículos blog', '0', '3', '12'],
    ]
    t = Table(kpi_data, colWidths=[100, 80, 80, 80])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 19: RIESGOS ====================
    story.append(Paragraph("19. RIESGOS Y MITIGACIÓN", styles['ChapterTitle']))
    risk_data = [
        ['Riesgo', 'Probabilidad', 'Impacto', 'Mitigación'],
        ['Poca demanda inicial', 'Alta', 'Alto', 'Prospección agresiva + primera pieza gratis'],
        ['Problemas legales (autónomo)', 'Media', 'Alto', 'Alta desde día 1, asesor fiscal'],
        ['Competencia de precio', 'Alta', 'Medio', 'Diferenciarse por calidad y servicio'],
        ['Rotura de máquina', 'Baja', 'Alto', 'Seguro + proveedor de respuestos'],
        ['Impago de clientes', 'Media', 'Medio', '50% anticipo siempre'],
        ['Cambios en APIs externas', 'Baja', 'Bajo', 'Supabase/Vercel gestionan actualizaciones'],
        ['Burnout del fundador', 'Media', 'Alto', 'Automatizar todo lo posible, delegar'],
    ]
    t = Table(risk_data, colWidths=[100, 60, 60, 140])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 20: PRESUPUESTO ====================
    story.append(Paragraph("20. PRESUPUESTO DETALLADO AÑO 1", styles['ChapterTitle']))
    budget_data = [
        ['Concepto', 'Mensual', 'Anual'],
        ['Cuota autónomo (tarifa plana)', '80€', '960€'],
        ['Dominio .es', '—', '10€'],
        ['Seguro responsabilidad civil', '—', '200€'],
        ['Material (PLA/PETG básico)', '50€', '600€'],
        ['Material premium (ASA/PA12/Resina)', '100€', '1.200€'],
        ['Suministros (lijado, pintura, embalaje)', '30€', '360€'],
        ['Herramientas (licalibres, etc)', '—', '150€'],
        ['Software (0€ todo gratis)', '0€', '0€'],
        ['Marketing (0€ los primeros 6 meses)', '0€', '200€'],
        ['TOTAL ESTIMADO', '260€', '3.680€'],
        ['Revenue esperado', '1.500€', '15.000-25.000€'],
        ['BENEFICIO NETO ESTIMADO', '', '11.320-21.320€'],
    ]
    t = Table(budget_data, colWidths=[180, 80, 100])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('BACKGROUND', (0,-2), (-1,-2), HexColor('#1a1a2e')),
        ('TEXTCOLOR', (0,-2), (-1,-2), GOLD),
        ('FONTNAME', (0,-2), (-1,-2), 'Helvetica-Bold'),
        ('BACKGROUND', (0,-1), (-1,-1), GOLD_DARK),
        ('TEXTCOLOR', (0,-1), (-1,-1), white),
        ('FONTNAME', (0,-1), (-1,-1), 'Helvetica-Bold'),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 21: CRONOGRAMA ====================
    story.append(Paragraph("21. CRONOGRAMA VISUAL — 360 DÍAS", styles['ChapterTitle']))
    
    timeline_data = [
        ['Período', 'Acciones Clave', 'Revenue'],
        ['Semana 1-2', 'Alta legal + configurar infraestructura + lanzar web', '0€'],
        ['Mes 1', 'Primeras 5 visitas/día + 10 emails/día + 3 posts/sem IG', '0€'],
        ['Mes 2', 'Primeras piezas de muestra + 5 leads pagados', '500€'],
        ['Mes 3', 'Consolidar + portfolio + CRM + 8 clientes activos', '1.500€'],
        ['Mes 4', 'Escalar prospección + 12 clientes', '2.000€'],
        ['Mes 5', 'Abrir línea náutica + contactar puertos', '1.500€'],
        ['Mes 6', 'Optimizar márgenes + blog + SEO', '1.500€'],
        ['Mes 7', 'Activar pagos online + carrito', '2.000€'],
        ['Mes 8', 'Contenido SEO + 4 artículos', '1.500€'],
        ['Mes 9', 'Expansión B2B + programa referidos', '2.000€'],
        ['Mes 10', 'Consolidar procesos + dashboard', '2.000€'],
        ['Mes 11', 'Línea premium + tienda online', '2.500€'],
        ['Mes 12', 'Evaluar año + planificar año 2', '2.500€'],
    ]
    t = Table(timeline_data, colWidths=[80, 200, 80])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), GOLD_DARK),
        ('TEXTCOLOR', (0,0), (-1,0), white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0,1), (-1,-1), TEXT),
        ('BACKGROUND', (0,1), (-1,-1), BG_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, HexColor('#222')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_LIGHT, BG]),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    story.append(PageBreak())
    
    # ==================== CAPÍTULO 22: CONCLUSIONES ====================
    story.append(Paragraph("22. CONCLUSIONES", styles['ChapterTitle']))
    story.append(Paragraph(
        "FAZLUIZ 3D tiene todos los ingredientes para ser un negocio exitoso:", styles['BodyText2']))
    
    conclusions = [
        "<b>Producto diferenciado:</b> Combinación de precisión técnica + acabado artesanal que pocos competidores ofrecen.",
        "<b>Mercado real:</b> Demanda creciente en Málaga (náutica + decoración industrial + repuestos).",
        "<b>Coste de entrada mínimo:</b> <50€ para empezar, con infraestructura 100% gratuita.",
        "<b>Tecnología accessible:</b> Supabase + Vercel + Resend = backend profesional sin coste.",
        "<b>Escalabilidad:</b> De 1 pieza a 100 piezas/mes sin cambiar la arquitectura.",
        "<b>Storytelling potente:</b> La historia de Rio → Dublín → Barcelona → Málaga genera conexión emocional.",
    ]
    for c in conclusions:
        story.append(Paragraph(f"• {c}", styles['BulletText']))
    
    story.append(Spacer(1, 15))
    story.append(Paragraph(
        "El factor crítico de éxito es la <b>ejecución constante</b>: 5 visitas/día, "
        "10 emails/día, 3 posts/semana. La web ya está lista. El backend ya está listo. "
        "Lo que queda es trabajar.", styles['BodyText2']))
    
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        "\"No fabricamos objetos. Fabricamos soluciones.\"", styles['Highlight']))
    story.append(Paragraph(
        "— Thiago Luiz Pereira, FAZLUIZ 3D", styles['SmallText']))
    
    story.append(Spacer(1, 30))
    story.append(Paragraph(
        "Documento generado por MiMo Code · Julio 2026", styles['SmallText']))
    story.append(Paragraph(
        "Versión 1.0 — Plan de Lanzamiento y Empresa 360 Días", styles['SmallText']))
    
    # Build
    doc.build(story)
    print(f"PDF generado: {output_path}")
    print(f"Tamano: {os.path.getsize(output_path) / 1024:.0f}KB")

if __name__ == '__main__':
    build_pdf()
