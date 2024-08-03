"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.get('/health', (req, res) => {
    res.send("Server health is Ok!");
});
app.listen(port, () => {
    return console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map