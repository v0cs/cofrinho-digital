import { db } from "../db.js";

export const getMovimentacao = (_, res) => {
    const q = "SELECT * FROM movimentacao_financeira";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });
};