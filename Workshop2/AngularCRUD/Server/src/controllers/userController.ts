import { Request, Response, text } from "express";
import pool from "../database";
class UserController {
  public async list(req: Request, res: Response) {
    const apiUsers = await pool.query("SELECT * FROM users");
    if (res.statusCode) {
      res.json(apiUsers);
      console.log("status code", res.statusCode);
    } else {
      return console.log("ERROR", res.statusCode);
    }
    return apiUsers;
  }
  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    //el await es para hacer el la consulta  asincrono
    const apiuser = await pool.query("SELECT * FROM users where id = ? ", [id]);
    if (apiuser.length > 0) {
      console.log(apiuser);
      res.json(apiuser[0]);
    } else {
      res.status(404).json({ text: "User doesnt exist" });
    }
  }
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO users set ?", [req.body]);
    res.json({ message: "user saved" });
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const apidelete = await pool.query("DELETE FROM users where id = ?", [id]);
    if (apidelete.statusCode == "200") {
      res.json({ text: "Deleted succes" });
    } else {
      res.status(404).json({ text: "Deleted filed" });
    }
    res.json({ text: "deleting" + req.params.id });
  }
  public async update(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const apiUpdate = await pool.query("UPDATE  users set ? WHERE id = ?", [req.body,id]);
    res.json({message:'User updated'});
    return apiUpdate;
  }
}

const userController = new UserController();
export default userController;
