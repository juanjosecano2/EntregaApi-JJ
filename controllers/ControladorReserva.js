//una clase controlador establece los metodos (ACCCIONES)
//que vamos a realizar en BD
//Y ESTA ALINEADO CON EL ARCHIVO DE RUTAS
import { ServicioReserva } from "../services/servicioReserva.js"
export class ControladorReserva{

    constructor(){}

    async agregarReserva(request,response){
        let datosARegistrar=request.body
        let objetoReserva = new ServicioReserva()

        try{
            await objetoReserva.agregarReserva(datosARegistrar)
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"Fallamos en la consulta "+error,
                "datos":null
            })

        }
    }
    async consultarReservas(request,response){
        let objetoReserva = new ServicioReserva()
        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de reservas",
                "datos": await objetoReserva.buscarReservas()
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })

        }
    }
    async consultarReserva(request,response){
        let id=request.params.id
        let objetoReserva = new ServicioReserva()
        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una reserva",
                "datos":await objetoReserva.buscrReservaporId(id)
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion "+error,
                "datos":null
            })

        }
    }
    async editarReserva(request,response){
        let id=request.params.id
        let datosAEditar=request.body
        let objetoReserva = new ServicioReserva()

        try{
            await objetoReserva.editarReserva(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Exito en la operacion de edicion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"Fallo en la operacion "+error,
                "datos":null
            })

        }
    }
}