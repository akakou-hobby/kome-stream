function chat(){
  var socket = io();
  var form = document.getElementById('form');
  var chat = document.getElementById('chat');
  var messages = document.getElementById('messages');

  /* --- Send Comment --- */
  form.addEventListener('submit', function (e) {
    // stop sending form
    e.preventDefault();

    // ivent and send message
    socket.emit('chat', chat.value);
    // reset entry
    chat.value = '';
  });

  /* --- Get Comment ---- */
  socket.on('chat', function (msg) {
    var randnum = 20 + Math.floor( Math.random() * 61 );
    var list = document.createElement('Marquee');
    list.textContent = msg;
    list.loop = 1;
    list.style.position = "absolute"
    list.style.bottom = randnum.toString() + "%"
    messages.appendChild(list);
  });
}
