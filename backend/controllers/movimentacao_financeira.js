import { db } from "../db.js";

export const getMovimentacoes = (_, res) => {
    const q = "SELECT * FROM movimentacao_financeira";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });
};

export const addMovimentacao = (req, res) => {
  const q = "INSERT INTO movimentacao_financeira(`tipo`,`categoria`,`descricao`,`valor`,`data_movimentacao`) VALUES(?)";
  
  const values = [
    req.body.tipo,
    req.body.categoria,
    req.body.descricao,
    req.body.valor,
    req.body.data_movimentacao,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registrado movimentação com sucesso.");
  });
};

export const updateMovimentacoes = (req, res) => {
  const q = "UPDATE movimentacao_financeira SET `tipo` = ?, `categoria` = ?, `descricao` = ?, `valor` = ?, `data_movimentacao` = ? WHERE `id` = ?";

  const values = [
    req.body.tipo,
    req.body.categoria,
    req.body.descricao,
    req.body.valor,
    req.body.data_movimentacao,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Atualizado registro de movimentação.");
  });
};

export const deleteMovimentacao = (req, res) => {
  const q = "DELETE FROM movimentacao_financeira WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Deletado registro de movimentação. ");
  });
};