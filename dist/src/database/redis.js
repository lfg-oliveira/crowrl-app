"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const db = redis_1.default.createClient({
    url: process.env.REDIS_URL
});
db.on('error', (err) => {
    console.error(err);
});
exports.default = db;
