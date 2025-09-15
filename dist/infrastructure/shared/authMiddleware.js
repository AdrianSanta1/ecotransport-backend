"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
        return res.status(401).json({ error: "Token no enviado" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    }
    catch {
        res.status(403).json({ error: "Token inválido" });
    }
}
//# sourceMappingURL=authMiddleware.js.map