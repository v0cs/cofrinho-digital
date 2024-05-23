import React from 'react'
import Paginacao from '../../components/Paginacao';
import Tabela from '../../components/Tabela/Tabela';
import Formulario from '../../components/Formulario/Formulario';

function Movimentacao() {

    return (
        <div>
            <Paginacao>
                <Formulario/>
                <Tabela />
            </Paginacao>
        </div>
    )
}

export default Movimentacao;