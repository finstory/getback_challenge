//*  Users:

//$ Registro de Usuario || POST

//% FUNC: Registrar un nuevo usuario en la base de datos.
//% RTA: { user }.


//$ Inicio de Sesión || POST

//% FUNC: Autenticar al usuario y generar un token JWT.
//% RTA: { "token": "Token_JWT" }.


//$ Cierre de Sesión || POST

//% FUNC: Cerrar la sesión del usuario (puede ser opcional en una API).
//% RTA: { "message": "Sesión cerrada" }


//$ Obtener un Perfil de Usuario por id || GET

//% FUNC: Obtener los datos del perfil del usuario autenticado.
//% RTA (Éxito): { "user": {...} }

