import moose from 'mongoose';

const usuariosSchema = new moose.Schema({
    email:{type: String, unique: true,required: true},
    password: {type: String, required: true}
});

const Usuarios = moose.model('usuarios', usuariosSchema);

export const crearUsuario = async (email, passwordHash) => {
   try {
       const nuevoUsuario = await Usuarios.create({email: email, password: passwordHash});
       return {id: nuevoUsuario.id, email: nuevoUsuario.email};
   }
   catch (error) {
     console.error('Error al crear el usuario:', error);
     throw error;
   }
}

export const verificarUsuario = async (email) => {
    try{
       const usuario = await Usuarios.findOne({email: email});
       return usuario;
    }
    catch (error) {
      console.error('Error al verificar el usuario:', error);
      throw error;
    }
}