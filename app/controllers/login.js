import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  asd: "Hola",
  actions: {
    foo() { },
    saveTurn(turno){
      var newTurno = this.store.createRecord('turno', {
        name:turno
      });
      newTurno.save();
    },
    init(user, pass){
      console.log(this.get('session'));

      let Controller = this;
      console.log(Controller.get('session'))

      this.get('session').open('firebase', {
        provider: 'password',
        email: 'test@example.com',
        password: 'password1234'
      });
      // swal({
      //   title: 'Cargando...',
      //   onOpen: function (){
      //     swal.showLoading();
      //     Controller.get('session').open('firebase', {
      //         provider: 'password',
      //         email: user,
      //         password: pass
      //     }).then(function(){
      //       swal.close();
      //       //registrado correctamente
      //       Controller.transitionToRoute('index');

      //     }, function(data){
      //       console.log(data)
      //       swal.close();
      //       if(data.code=="auth/user-not-found"){ //no registrado
      //         swal(
      //           'Oops...',
      //           'Parece que no estás registrado en nuestra web',
      //           'error'
      //         );
      //       }
      //       else if(data.code=="auth/wrong-password"){ //contraseña incorrecta
      //         swal(
      //           'Oops...',
      //           'Contraseña incorrecta!',
      //           'error'
      //         );
      //       }
      //       else if(data.code=="auth/invalid-email"){
      //         swal(
      //           'Oops...',
      //           'Correo no válido',
      //           'error'
      //         );
      //       }
      //       else{ //no se mandaron datos
      //         swal(
      //           'Oops...',
      //           'No has enviado ningún dato!',
      //           'error'
      //         );
      //       }
      //     });


      //   }
      // });

    }


  }
});
