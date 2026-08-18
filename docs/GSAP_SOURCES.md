# GSAP local: fuentes y decisión técnica

La versión vendorizada en `assets/vendor/gsap/` es **GSAP 3.15.0**, consultada en el paquete oficial de npm el 16 de agosto de 2026.

La documentación oficial indica que GSAP es agnóstico de framework, que sus plugins son archivos JavaScript compatibles con una carga directa mediante `<script>`, y recomienda GSAP 3.13 o posterior. Para este paquete se eligió 3.15.0 y se incluyeron localmente `gsap`, `ScrollTrigger` y `ScrollToPlugin` para que la web no dependa de CDN ni de una plataforma concreta.

## Fuentes

1. [GSAP — Installation](https://gsap.com/docs/v3/Installation/)
2. [GSAP — npm package](https://www.npmjs.com/package/gsap)
3. [GSAP — ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
4. [GreenSock — Standard License](https://gsap.com/standard-license)

## Nota de licencia

La copia local conserva los avisos y la licencia estándar de GreenSock. La atribución del código propio de este proyecto se mantiene como **Belentani** y no sustituye la licencia de GSAP.
