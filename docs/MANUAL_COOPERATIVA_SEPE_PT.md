# Manual Prático (PT) — Cooperativa, SEPE e como lançar a FAZLUIZ3D gastando o mínimo

> Guia orientativo. Confirma sempre os detalhes com a cooperativa e/ou um gestor — as regras mudam.

## 1. Entrar como sócio de uma cooperativa existente
1. **Escolhe a cooperativa** (de trabalho associado ou de facturação/impulso). Pede os estatutos e pergunta: taxa mensal ou % sobre facturação, regime de Segurança Social (Regime Geral ou RETA — depende dos estatutos), e se cobrem seguro de responsabilidade civil.
2. **Documentos habituais**: NIE/DNI, número de Seg. Social, IBAN, e a aportação ao capital social (costuma ser 50–300 €, devolvível ao sair).
3. **Alta**: a cooperativa faz a tua alta na Segurança Social e passa a **facturar por ti** — tu entregas as tuas notas de encargo/pedidos e eles emitem a factura ao cliente, retêm IRPF e liquidam o IVA. Tu recebes uma "nómina"/liquidação.
4. **Vantagem**: zero modelos trimestrais (303/130) para ti, contabilidade incluída, e cotização normalmente mais barata do que autónomo puro no início.

## 2. SEPE — se estás a receber "paro" (prestação por desemprego)
Duas vias possíveis (escolhe UMA, com cita prévia no SEPE **antes** de te dares de alta):
- **Pagamento único (capitalización del paro)**: podes pedir até 100% da prestação pendente de uma vez para **incorporar-te como sócio trabalhador de uma cooperativa**. É exatamente o teu caso. Requisitos: ter ≥3 meses de prestação pendente, não ter usado o pagamento único nos últimos 4 anos, e apresentar a **memória do projeto** + pré-acordo de incorporação da cooperativa. O dinheiro deve ir para a aportação ao capital e investimento (impressoras, material, placas solares).
- **Compatibilizar paro + atividade**: em alguns casos podes manter parte da prestação durante os primeiros meses de atividade. Pergunta no SEPE qual convém mais no teu caso.

Ordem correta**: 1º pedir no SEPE → 2º esperar aprovação → 3º alta na cooperativa. Se te deres de alta antes, perdes o direito.

## 3. Lançar (custo quase zero)
| Item | Ferramenta | Custo |
|---|---|---|
| Web | `index.html` → **Netlify Drop** (arrastar a pasta) | 0 € |
| Domínio | fazluiz3d.es (Hostinger/Namecheap) | ~10 €/ano |
| Email de pedidos | o formulário abre um email pronto — troca `atelier@fazluiz.es` pelo teu | 0 € |
| Painel de consultas | `admin/dashboard.html` no navegador | 0 € |
| Facturas/contratos | `templates/` (a cooperativa emite a factura oficial) | 0 € |
| Cálculo de impostos | `herramientas/calc_impuestos.py` | 0 € |
| Backend completo | só quando crescer: Supabase + Vercel (planos grátis) | 0 €/mês |

Total para arrancar: ~10 €/ano.**

## 4. Manter e cotizar (rotina mensal)
- **Semanal**: responder pedidos (< 2h dá-te vantagem real), atualizar o dashboard.
- **Mensal**: enviar à cooperativa a lista de trabalhos facturáveis; rever a liquidação (verifica retenção IRPF e a taxa da cooperativa); guardar TODAS as facturas de compra (filamento, resina, eletricidade, amortização das impressoras e das placas solares — **tudo isso é dedutível**).
- **Trimestral**: nada, a cooperativa liquida o IVA. Só corre `calc_impuestos.py` para saber quanto reservar.
- **Anual**: declaração de IRPF (Renta) em abril–junho — a cooperativa dá-te o certificado de retenções; com isso a Renta faz-se em 20 minutos.

## 5. Preço mínimo por peça (regra rápida)
`preço = (material × 1,3) + (horas de impressão × custo máquina/h) + (horas de trabalho × tua tarifa) + margem 30%`
Com energia solar, o custo máquina/h cai quase a zero — usa isso como argumento de venda ecológico, não para baixar preço.

## 6. Checklist de arranque
- [ ] Cita SEPE (pagamento único) com memória do projeto
- [ ] Pré-acordo assinado com a cooperativa
- [ ] Alta como sócio + Segurança Social
- [ ] Trocar o email em `index.html` (3 ocorrências de `atelier@fazluiz.es`)
- [ ] Subir a web ao Netlify Drop + domínio
- [ ] Primeira campanha: portos desportivos (náutica) + lojas de decoração locais

Camada sobre camada. O resto é teu.
