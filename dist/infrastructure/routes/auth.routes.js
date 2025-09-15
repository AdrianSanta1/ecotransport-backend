"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/auth.routes.ts
const express_1 = require("express");
const AuthService_1 = require("../../application/auth/AuthService");
const UsuarioRepository_1 = require("../adapter/UsuarioRepository");
const router = (0, express_1.Router)();
router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // 👇 Crea el repo y el servicio dentro del handler
        const authService = new AuthService_1.AuthService(new UsuarioRepository_1.UsuarioRepository());
        const token = await authService.login(email, password);
        res.json({ token });
    }
    catch (e) {
        console.error("❌ Error en login:", e.message);
        res.status(401).json({ error: e.message });
    }
});
exports.default = router; // 👈 MUY IMPORTANTE
//# sourceMappingURL=auth.routes.js.map