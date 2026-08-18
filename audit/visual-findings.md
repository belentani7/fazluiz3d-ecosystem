
## Segunda revisión tras compactar

Después de reducir el padding global y de las secciones, la posición de ancla de `#collections` pasó de 609 px a 1932 px de contenido por encima del viewport, lo que indica que el navegador ya no aterriza tan cerca del hero. La cabecera de colecciones se muestra a una distancia razonable del borde superior.

El espacio oscuro que aparece debajo del encabezado en la captura corresponde a tarjetas con clase `reveal` que esperan el disparo de la animación al entrar en viewport; el contenido textual sí está presente en el DOM. Se debe confirmar con un desplazamiento hacia las tarjetas, no eliminar ciegamente ese espacio porque forma parte del reveal progresivo.
