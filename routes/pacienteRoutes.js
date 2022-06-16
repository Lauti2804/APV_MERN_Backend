import  express from "express";
const router = express.Router();
import { agregarPacientes,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente } from "../controllers/pacienteControllers.js";
import checkAuth from "../middleware/authMiddleware.js"

router.route("/")
    .post(checkAuth, agregarPacientes)
    .get(checkAuth, obtenerPacientes)

router.route("/:id")
    .get(checkAuth, obtenerPaciente)
    .patch(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente);

export default router;