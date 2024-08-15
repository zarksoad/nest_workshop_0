¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial?

main.ts lo que hacer es la configuracion inicial del proyecto para se pueda manejar nest, y es el punto de entrada de la aplicacion.

¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?

app.module.ts: Define la estructura y organización del módulo raíz de la aplicación. Es el centro de la modularidad en NestJS, donde se importan otros módulos, controladores, y servicios.

app.controller.ts: Define cómo se manejan las solicitudes HTTP dentro del módulo. Es el punto de contacto entre la aplicación.

¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?

Al modululizar una aplicacion permite organizar el codigo de manera estructurada. cada modulo se especializa en una funcion adecuada, puede ser reutilizables, es mantenimiento es mas facil, y al trabajar con equipos, cada uno se puede dedicar a un modulo diferente si tener mayores inconvenientes

¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
Al modular la aplicacion aislas las responsabilidades, los cambios de una parte del codigo son menos propensas a romper a otras partes.

Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

los archivos que puedes genera en la carpeta es el controlador y el servicio,

Controller.ts:

Define las rutas y métodos que manejan las solicitudes HTTP. Es el punto de entrada para la lógica de negocio relacionada con las rutas de la API.

Relación: Se registra en el módulo (module.ts) bajo la propiedad controllers. El
controlador utiliza los servicios del módulo para procesar las solicitudes.

Service.ts

Contiene la lógica de negocio y se utiliza para manejar las operaciones más complejas que el controlador necesita.

Relación: Se registra en el módulo.ts bajo la propiedad providers. Los servicios pueden ser inyectados en los controladores o en otros servicios.

¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

El enpoint no puede ser accedido y con ello llevara a un error

¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?
Las rutas dinamicas permiten realizar operaciones CRUD basadas en indentificadores dinamicos

¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?

Al mantener la lógica de negocio en servicios, los controladores permanecen enfocados en la gestión de solicitudes y respuestas, mientras que los servicios manejan la complejidad de la aplicación

¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?

Permite la inyeccion de dependencia y con ello evita que se necesite instacciar cada vez que usamos una clase, hace que sea mas facil probar la logica de forma aislada.  
ademas permite usar versiones simuladas para probar partes individuales.

¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?

Validar los datos de entrada en una aplicación financiera es esencial para proteger la seguridad, mantener la integridad de los datos como por ejemplo evita que los ataques sean menos efectivos.

¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

si los decoradores estan mal colocados pueden causar errores en la solicitud y procesar datos incorrectamente.

si los pipes no son aplicados pueden llevar a la aceptación de datos inválidos y problemas de seguridad.

¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?

Proporciona mensajes claros para la compresion de los errores, ademas previene los detalles del error y con ello tener falencias de seguridad.

¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

Asegura una gestion uniforme del manejo de erroes , y si se necesita una modificacion se puede hacer desde un solo archivo en vez de gestionar el error individualmente.
