import { prisma } from "./db.js";

export class InformesController {
  static async save(req, res, next) {
    try {
      const saveInforme = await prisma.informes.create({
        data: req.body,
      });
      res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });

      res.status(200).json({ message: "Datos guardados correctamente" });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  }

  static async list(req, res, next){
    try{
        const messages = await prisma.informes.findMany()
        res.status(200).json(messages)

    }catch(error){
         res.status(400).json({error: error.message})
    }
  }
}
