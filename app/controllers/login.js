import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  actions: {
    foo() { },
    saveTurn(turno){
      var newTurno = this.store.createRecord('turno', {
        name:turno
      });
      newTurno.save();
    },
    init(user, pass){

      let Controller = this;
      swal({
        title: 'Cargando...',
        onOpen: function (){
          swal.showLoading();
          Controller.get('session').open('firebase', {
              provider: 'password',
              email: user,
              password: pass
          }).then(function(){
            swal.close();
            //registrado correctamente
            if (Controller.get('currentUser.isAuthenticated')) {
              return Controller.get('currentUser').loadAccount().then(() => {
                if (Controller.get('currentUser.account.perfil')=="encargado") {
                  return Controller.transitionToRoute('encargado');
                }
                else if(Controller.get('currentUser.account.perfil')=="dueño"){
                  return Controller.transitionToRoute('dueno');
                }
                else{
                  return Controller.transitionToRoute('index');
                }
              });
            }

          }, function(data){
            console.log(data)
            swal.close();
            if(data.code=="auth/user-not-found"){ //no registrado
              swal(
                'Oops...',
                'Parece que no estás registrado en nuestra web',
                'error'
              );
            }
            else if(data.code=="auth/wrong-password"){ //contraseña incorrecta
              swal(
                'Oops...',
                'Contraseña incorrecta!',
                'error'
              );
            }
            else if(data.code=="auth/invalid-email"){
              swal(
                'Oops...',
                'Correo no válido',
                'error'
              );
            }
            else{ //no se mandaron datos
              swal(
                'Oops...',
                'No has enviado ningún dato!',
                'error'
              );
            }
          });


        }
      });

    }


  }
});
