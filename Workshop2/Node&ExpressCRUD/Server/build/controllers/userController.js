"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiUsers = yield database_1.default.query("SELECT * FROM users");
            if (res.statusCode) {
                res.json(apiUsers);
                console.log("status code", res.statusCode);
            }
            else {
                return console.log("ERROR", res.statusCode);
            }
            return apiUsers;
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //el await es para hacer el la consulta  asincrono
            const apiuser = yield database_1.default.query("SELECT * FROM users where id = ? ", [id]);
            if (apiuser.length > 0) {
                console.log(apiuser);
                res.json(apiuser[0]);
            }
            else {
                res.status(404).json({ text: "User doesnt exist" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO users set ?", [req.body]);
            res.json({ message: "user saved" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const apidelete = yield database_1.default.query("DELETE FROM users where id = ?", [id]);
            if (apidelete.statusCode == "200") {
                res.json({ text: "Deleted succes" });
            }
            else {
                res.status(404).json({ text: "Deleted filed" });
            }
            res.json({ text: "deleting" + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const apiUpdate = yield database_1.default.query("UPDATE  users set ? WHERE id = ?", [req.body, id]);
            res.json({ message: 'User updated' });
            return apiUpdate;
        });
    }
}
const userController = new UserController();
exports.default = userController;
