Este es un proyecto React + Relay para una tarea del proceso de entrevistas con Flexhire.

- Se crea el proyecto con create-react-app
- Se agrega relay al proyecto con create-relay-app
- Se modifica el schema.graphql con el schema de Flexhire (https://flexhire.com/api/v2/schema)
- Se modifica RelayEnvironment con el HTTP_ENDPOINT de la API de Flexhire y agregando como header el API Key
- Para poder probar desde el dev server de React contra la API de Flex hay que deshabilitar CORS. 
  + Este comando abre Chrome con CORS deshabilitado:
open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials
  + En Safari se puede ir al menu Develop (que se habilita en Settings/Advances) y togglear Disable Cross Origin Restrictions

