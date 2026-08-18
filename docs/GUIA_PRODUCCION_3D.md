# GUÍA: Optimización de Producción 3D - Costes, Errores y Workflow

## INTRODUCCIÓN

Esta guía te ayuda a Thiago a:
1. Reducir costes de materiales y energía
2. Evitar errores comunes en impresión
3. Optimizar workflow (diseño → impresión → acabado)
4. Maximizar márgenes de ganancia

---

## PARTE 1: COSTES DE MATERIALES

### 1.1 Resina (Más común para esculturas)

| Material | Proveedor | Coste/kg | Rendimiento | Coste/pieza |
|----------|-----------|---------|-------------|------------|
| Resina estándar | Amazon | €15-20 | 1kg = 1L | €3-5 |
| Resina UV | Formlabs | €25-35 | 1kg = 1L | €5-8 |
| Resina flexible | Elegoo | €20-25 | 1kg = 1L | €4-6 |
| Resina de castillo | Wanhao | €18-22 | 1kg = 1L | €3-5 |

Recomendación:** Comprar en bulk (5L) para reducir 20-30% coste

Proveedores recomendados:**
- Elegoo (China, envío 2-3 semanas, más barato)
- Formlabs (Europa, envío rápido, más caro)
- Amazon (rápido, precio medio)
- Proveedores locales (Málaga/Barcelona)

### 1.2 Filamento (Para piezas técnicas)

| Material | Coste/kg | Densidad | Coste/100g |
|----------|---------|---------|-----------|
| PLA estándar | €15-20 | 1.24 g/cm³ | €1.50-2.00 |
| ABS | €18-25 | 1.04 g/cm³ | €1.80-2.50 |
| PETG | €20-30 | 1.27 g/cm³ | €2.00-3.00 |
| Nylon | €30-40 | 1.14 g/cm³ | €3.00-4.00 |
| Fibra de carbono | €40-60 | 1.16 g/cm³ | €4.00-6.00 |

Cálculo de coste por pieza:**
- Peso pieza: 50g
- Coste material: 50g × €0.02/g = €1.00
- Desperdicio (10%): €0.10
- **Coste total material: €1.10**

### 1.3 Acabados

| Acabado | Material | Coste | Tiempo |
|---------|----------|-------|--------|
| Pintura acrílica | Spray/pincel | €2-5 | 30-60 min |
| Barniz | Spray | €3-8 | 20-40 min |
| Pulido | Lija/pulidor | €1-2 | 45-90 min |
| Dorado | Pintura dorada | €5-10 | 30-60 min |
| Resina epoxi | Dos componentes | €10-15 | 60-120 min |

---

## PARTE 2: COSTES DE ENERGÍA

### 2.1 Consumo por Tipo de Impresora

| Impresora | Potencia | Tiempo impresión | Coste/hora | Coste/pieza |
|-----------|----------|-----------------|-----------|------------|
| Resina (Elegoo) | 100W | 2-4 horas | €0.15 | €0.30-0.60 |
| FDM (Ender 3) | 200W | 4-8 horas | €0.30 | €0.60-1.20 |
| SLA (Form 3) | 150W | 1-3 horas | €0.22 | €0.22-0.66 |

Cálculo de coste energético:**
- Potencia: 100W = 0.1 kW
- Tiempo: 3 horas
- Consumo: 0.1 kW × 3 h = 0.3 kWh
- Coste (€0.50/kWh): 0.3 × €0.50 = €0.15

Optimización:**
- Usar tarifa nocturna (€0.20-0.30/kWh vs €0.50/kWh diurna)
- Ahorrar: 40-60% en costes de energía
- Imprimir de noche = €0.06-0.09 por pieza

---

## PARTE 3: WORKFLOW OPTIMIZADO

### 3.1 Flujo Completo (Escultura pequeña)

```
DISEÑO (30 min)
    ↓
PREPARACIÓN (15 min)
    ↓
IMPRESIÓN (3 horas)
    ↓
CURADO (30 min)
    ↓
LIMPIEZA (30 min)
    ↓
ACABADO (60 min)
    ↓
EMBALAJE (15 min)
    ↓
ENTREGA
```

Tiempo total: 5.5 horas**
Coste material: €5**
Coste energía: €0.15**
Coste mano de obra (€20/h): €110**
Coste total: €115.15**
Precio venta (margen 60%): €288**

### 3.2 Paralelización (Máxima eficiencia)

Si Thiago tiene 2 impresoras:**

| Hora | Impresora 1 | Impresora 2 | Otras tareas |
|------|-------------|-------------|------------|
| 9:00 | Imprimir A | Imprimir B | Diseño C |
| 12:00 | Curado A | Curado B | Acabado anterior |
| 13:00 | Impresión C | Impresión D | Limpieza A+B |
| 16:00 | Acabado A+B | Acabado C+D | Diseño E+F |

Resultado:** 4 piezas/día en lugar de 1-2

---

## PARTE 4: ERRORES COMUNES Y SOLUCIONES

### 4.1 Impresión de Resina

| Error | Causa | Solución | Coste pérdida |
|-------|-------|---------|--------------|
| Pieza no adhiere | Plataforma sucia | Limpiar con alcohol | €5 + 3h |
| Capas desalineadas | Plataforma desnivelada | Nivelar correctamente | €5 + 3h |
| Agujeros/porosidad | Burbujas atrapadas | Usar desgasificador | €1 + 1h |
| Pieza frágil | Resina vencida | Usar resina nueva | €10 + 3h |
| Deformación | Temperatura alta | Enfriar taller | €0 + 1h |
| Falta de detalle | Exposición incorrecta | Ajustar parámetros | €0 + 1h |

Prevención:**
1. Revisar plataforma antes de cada impresión (5 min)
2. Nivelar cada 2 semanas (15 min)
3. Usar resina fresca (comprar mensual)
4. Mantener temperatura 18-25°C
5. Usar filtro UV para curado

### 4.2 Impresión FDM

| Error | Causa | Solución |
|-------|-------|---------|
| Warping | Temperatura base baja | Aumentar a 60-70°C |
| Stringing | Temperatura alta | Bajar 5-10°C |
| Layer shift | Velocidad muy alta | Reducir a 50-60 mm/s |
| Nozzle clogged | Residuos en boquilla | Limpiar con aguja |
| Bajo detalle | Nozzle grande | Usar 0.4mm en lugar de 0.8mm |

---

## PARTE 5: OPTIMIZACIÓN DE COSTES

### 5.1 Reducción de Desperdicios

Antes (sin optimizar):**
- Resina desperdiciada: 15%
- Piezas fallidas: 10%
- Coste total: €5.75/pieza

Después (optimizado):**
- Resina desperdiciada: 5%
- Piezas fallidas: 2%
- Coste total: €4.20/pieza

Ahorro: €1.55/pieza = 27% reducción**

### 5.2 Compras en Bulk

| Cantidad | Precio unitario | Descuento | Coste total |
|----------|-----------------|-----------|------------|
| 1L | €20 | 0% | €20 |
| 5L | €18 | 10% | €90 |
| 10L | €16 | 20% | €160 |
| 20L | €14 | 30% | €280 |

Recomendación:** Comprar 10L cada 2 meses = €160/2 meses = €80/mes

---

## PARTE 6: MÁRGENES DE GANANCIA

### 6.1 Cálculo de Precio Final

Fórmula:**
```
Precio Final = (Coste Material + Coste Energía + Coste Mano de Obra) / (1 - Margen%)
```

Ejemplo: Escultura pequeña**
- Coste material: €5
- Coste energía: €0.15
- Coste mano de obra: €110
- **Coste total: €115.15**

Con margen 60%:**
```
Precio = €115.15 / (1 - 0.60) = €115.15 / 0.40 = €288
```

Con margen 50%:**
```
Precio = €115.15 / (1 - 0.50) = €115.15 / 0.50 = €230
```

### 6.2 Márgenes Recomendados por Tipo

| Tipo de pieza | Margen | Justificación |
|---------------|--------|--------------|
| Escultura de autor | 60-70% | Valor artístico alto |
| Componente técnico | 40-50% | Competencia mayor |
| Pieza personalizada | 50-60% | Trabajo custom |
| Prototipo | 30-40% | Volumen futuro |
| Producción en serie | 25-35% | Economía de escala |

---

## PARTE 7: PLAN DE PRODUCCIÓN (Mes 1-3)

### Mes 1: Optimización Inicial
- Objetivo: 1-2 piezas/día
- Coste por pieza: €5-6
- Precio venta: €200-300
- Meta: 15 piezas = €3000-4500

### Mes 2: Crecimiento
- Objetivo: 2-3 piezas/día
- Coste por pieza: €4-5 (optimizado)
- Precio venta: €200-300
- Meta: 40 piezas = €8000-12000

### Mes 3: Consolidación
- Objetivo: 3-4 piezas/día
- Coste por pieza: €3.50-4.50 (bulk)
- Precio venta: €200-300
- Meta: 80 piezas = €16000-24000

---

## PARTE 8: CHECKLIST DE PRODUCCIÓN

### Antes de cada impresión
- [ ] Plataforma limpia y nivelada
- [ ] Resina a temperatura correcta
- [ ] Archivo 3D revisado
- [ ] Parámetros de impresión confirmados
- [ ] Espacio de trabajo preparado

### Después de cada impresión
- [ ] Pieza curada correctamente
- [ ] Limpieza completada
- [ ] Inspección de calidad
- [ ] Registro de tiempo
- [ ] Documentación de coste

### Mantenimiento semanal
- [ ] Limpiar plataforma
- [ ] Revisar estado de resina
- [ ] Comprobar calibración
- [ ] Limpiar óptica

### Mantenimiento mensual
- [ ] Nivelar plataforma
- [ ] Cambiar filtro UV
- [ ] Revisar tuberías
- [ ] Comprobar consumo energético

---

## PARTE 9: HERRAMIENTAS RECOMENDADAS

### Impresoras
- **Elegoo Mars 4 Pro:** €300-400 (mejor relación precio/calidad)
- **Formlabs Form 3+:** €3500 (profesional)
- **Ender 3 V2:** €200-300 (FDM)

### Materiales
- **Resina:** Elegoo, Formlabs, Wanhao
- **Filamento:** MatterHackers, Prusament, Overture
- **Acabados:** Spray Montana, Vallejo, Tamiya

### Software
- **Diseño:** Fusion 360, Blender, Tinkercad
- **Slicing:** Chitubox, Prusaslicer, Cura
- **Gestión:** Holded, Debitoor

---

## PARTE 10: CONTACTOS Y RECURSOS

### Proveedores España
- **Elegoo España:** https://www.elegoo.com/es
- **Formlabs España:** https://formlabs.com/es
- **Amazon.es:** Resina y filamento
- **Proveedores locales Málaga:** Buscar en Google Maps "resina 3D"

### Comunidades
- **Reddit:** r/3Dprinting, r/resinprinting
- **YouTube:** Channels de 3D printing
- **Discord:** Comunidades de makers

### Cursos
- **Udemy:** Cursos de impresión 3D
- **YouTube:** Tutoriales gratuitos
- **Fabricantes:** Webinars de Formlabs, Elegoo

---

Documento creado:** 2026-07-03
Válido para:** Impresoras de resina y FDM
Última actualización:** Julio 2026

---

## RESUMEN EJECUTIVO

Para subsistir los primeros 3 meses:**
1. Invertir €1000-1500 en equipamiento
2. Producir 1-2 piezas/día
3. Facturar €600-1200/mes
4. Mantener margen 50-60%
5. Optimizar costes continuamente

Resultado esperado:** Beneficio neto €300-500/mes después de gastos
