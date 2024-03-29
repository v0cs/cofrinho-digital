import express from "express";
import {getMovimentacoes, addMovimentacao, updateMovimentacoes, deleteMovimentacao} from "../controllers/movimentacao_financeira.js";

const router = express.Router();

router.get("/", getMovimentacoes);

router.post("/", addMovimentacao);

router.put("/:id", updateMovimentacoes);

router.delete("/:id", deleteMovimentacao);

export default router;