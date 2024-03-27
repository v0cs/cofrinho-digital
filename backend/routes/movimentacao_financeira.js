import express from "express";
import {getMovimentacao} from "../controllers/movimentacao_financeira.js";

const router = express.Router()

router.get("/", getMovimentacao);

export default router;