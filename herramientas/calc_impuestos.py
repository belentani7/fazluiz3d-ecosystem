#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""FAZLUIZ3D · Calculadora fiscal (España, 2026) — CLI
Socio de cooperativa (facturación vía cooperativa) o autónomo RETA.
Uso: python3 calc_impuestos.py            (interactivo)
     python3 calc_impuestos.py 2500 400 coop   (ingresos gastos modo)
Estimaciones orientativas — confirmar con la cooperativa/gestor.
"""
import sys

IVA = 0.21
TRAMOS_IRPF = [(12450,.19),(20200,.24),(35200,.30),(60000,.37),(300000,.45),(9e9,.47)]

def irpf_anual(base):
    t=0; prev=0
    for lim,tipo in TRAMOS_IRPF:
        if base>prev: t+=(min(base,lim)-prev)*tipo; prev=lim
        else: break
    return t

def calc(ing_mes, gastos_mes, modo):
    b = ing_mes - gastos_mes
    if modo=='coop':
        cuota = ing_mes*0.06          # fee típico cooperativa 4-8%
        ss    = 96.0                  # cotización mínima vía cooperativa (varía)
        nota  = 'Cooperativa: retiene IRPF y liquida IVA por ti.'
    else:
        cuota = 0.0
        ss    = 200.0 if b<=1166 else round(b*0.31,2)  # RETA aprox por tramos 2026
        nota  = 'RETA: presenta tú el 303 (IVA) y 130 (IRPF) trimestrales.'
    neto_antes_irpf = b - cuota - ss
    base_anual = max(neto_antes_irpf*12 - 5550, 0)     # mínimo personal
    irpf_mes = irpf_anual(base_anual)/12
    iva_trim = ing_mes*3*IVA
    neto = neto_antes_irpf - irpf_mes
    print(f"""
── FAZLUIZ3D · Estimación mensual ({'Cooperativa' if modo=='coop' else 'Autónomo RETA'}) ──
Ingresos (sin IVA):          {ing_mes:9.2f} €
Gastos deducibles:          -{gastos_mes:9.2f} €
Cuota cooperativa (~6%):    -{cuota:9.2f} €
Seguridad Social:           -{ss:9.2f} €
IRPF estimado:              -{irpf_mes:9.2f} €
─────────────────────────────────────────
NETO estimado:               {neto:9.2f} €/mes
IVA a repercutir (trimestre, modelo 303): {iva_trim:.2f} €
{nota}
Al cliente le facturas: {ing_mes*(1+IVA):.2f} € (IVA incl.)
""")

if __name__=='__main__':
    a=sys.argv[1:]
    if len(a)>=3: calc(float(a[0]),float(a[1]),a[2])
    else:
        i=float(input('Ingresos/mes sin IVA (€): '))
        g=float(input('Gastos/mes (€): '))
        m=input('Modo [coop/reta]: ').strip() or 'coop'
        calc(i,g,m)
