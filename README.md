# MCGA_Recuperatorio_Consigna_B
Consigna B:
Crear una aplicación web utilizando React y Redux, partiendo del Template create-react-app. Dicha
aplicacion debe cumplis los siguientes requisitos:

Debe contar con 2 rutas navegables manejadas con react-router.

  ○ /home: ruta principal de la aplicación, debe contar con el nombre del alumnos y el de la
aplicación.
  ○ /users: debe mostrar la lista de usuarios y debe mostrar un formulario que permita agregar
editar un usuario. La lista debe permitir eliminar un usuario.

Ambas rutas deben contar con un layout reutilizable, el cual debe contener:
  ○ Header
  ○ NavBar (barra de navegación)
  ○ Body (contenido)
  ○ Footer
  
Debe contar con la librería react-hook-form para el manejo de formulario. Todos los formularios
deben contar con sus respectivas validaciones, siendo fieles al Schema Usuarios.

El ABM de usuarios mostrado en la ruta /users debe realizar un request HTTP de tipo GET, POST,
PATCH y DELETE al server correspondiente, respetando la arquitectura API REST.

Deben contar con componentes compartidos (botones, inputs, etc). Estos componentes deben
contar con sus archivos .css utilizando CSS modules.

Debe contar con Redux y Redux Thunk para el manejo del estado global de la aplicación, esto
implica la creación de reducers, acciones, thunks por cada módulo de Redux que la aplicación
necesite.

React, Redux
