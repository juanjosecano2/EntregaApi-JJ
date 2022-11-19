import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    async agregarReserva(reserva){
        let nuevaReserva=new modeloReserva(reserva)
        return await nuevaReserva.save()
    }

    async buscarReservas(){
        let reservasEncontradas = await modeloReserva.find()
        return reservasEncontradas
    }

    async buscrReservaporId(id){
        let reservaEncontrada = await modeloReserva.findById(id)
        return reservaEncontrada
    }

    async editarReserva(id,datosNuevos){
        return await modeloReserva.findByIdAndUpdate(id,datosNuevos)
    }

}