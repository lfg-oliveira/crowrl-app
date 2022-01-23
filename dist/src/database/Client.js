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
const redis_1 = __importDefault(require("./redis"));
class Client {
    constructor() {
        this.hostname = "https://cr.ow/";
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.connect();
        });
        this.generateUri = () => __awaiter(this, void 0, void 0, function* () {
            const str = Math.random().toString(16).substring(2, 11);
            return str;
        });
        this.shortenURL = (url, timeout) => __awaiter(this, void 0, void 0, function* () {
            const uri = yield this.generateUri();
            yield this.client.set(uri, url, {
                EX: timeout
            });
            return this.hostname + uri;
        });
        this.redirectFrom = (shortUri) => __awaiter(this, void 0, void 0, function* () {
            const redirectUrl = yield this.client.get(shortUri);
            return redirectUrl;
        });
        this.client = redis_1.default;
        this.connect()
            .then(() => {
            console.log("Successfully connected to database");
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.default = new Client();
