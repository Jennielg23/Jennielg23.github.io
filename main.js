let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff8604;">Desarrollo sitios WEB y hago traducciones de documentos en tres idiomas diferentes.</span>')
  <!--- Comillas--->
  .pauseFor(200)
  .deleteChars(10)
  .start();

