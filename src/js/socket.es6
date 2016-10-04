export default class socket {
  constructor(socket) {
    this.socket = socket;
    this.socket.on('users online', function(msg){
      console.log(msg);
    });
  }
}