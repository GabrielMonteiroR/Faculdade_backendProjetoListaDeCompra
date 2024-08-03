"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const itemController_1 = __importDefault(require("../controllers/itemController"));
router.get('/', itemController_1.default.getAllItems);
router.post('/', itemController_1.default.createItem);
router.put('/:id', itemController_1.default.updateItem);
router.delete('/:id', itemController_1.default.deleteItem);
exports.default = router;
//# sourceMappingURL=itemRoutes.js.map