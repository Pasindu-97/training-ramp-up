"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const UserController = __importStar(require("../controllers/user.controllers"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", (0, auth_middleware_1.AuthenticationMiddleware)("ADMIN"), UserController.getUsers);
exports.userRouter.get("/detail", UserController.getUserdetail);
exports.userRouter.get("/:id", (0, auth_middleware_1.AuthenticationMiddleware)("ADMIN"), UserController.getUser);
exports.userRouter.post("/", (0, express_validator_1.body)("username").isString(), (0, express_validator_1.body)("email").isString(), (0, express_validator_1.body)("password").isString(), (0, express_validator_1.body)("role").isString(), UserController.createUser);
exports.userRouter.put("/:id", (0, auth_middleware_1.AuthenticationMiddleware)("ADMIN"), (0, express_validator_1.body)("username").isString(), (0, express_validator_1.body)("email").isString(), (0, express_validator_1.body)("password").isString(), (0, express_validator_1.body)("role").isString(), UserController.updateUser);
exports.userRouter.delete("/:id", (0, auth_middleware_1.AuthenticationMiddleware)("ADMIN"), UserController.deleteUser);
