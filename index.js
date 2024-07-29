/*####<< Epi-17 >>> REAST API without database >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
//#### << 1 >>>>>  >>>>>>>>>>>>>>>>>>>>>>>>>>>

/* @@@ MVC arthiteture Presantetion --------->>>>
1. We will follow MVC architectur 
2. routers demo 
     1. /users => GET -> { id, username, email }
     2. /users => POST -> { username, email }
     3. /users/:id => PUT -> uptate the user
     4. /users/:id => DELETE -> delete the user
 */

//#### All package installation  :=>
/*  npm init --y && npm install express nodemon cors body-parser dovenv uuid */
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
