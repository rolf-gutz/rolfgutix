import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo (){
    return (
        <PageDefault>
            <h1> Cadastro de video </h1>

            <Link to="/cadastro/categoria">
                <h1> Cadastrar  categoria</h1>
            </Link>
        </PageDefault>
    )
  }

  export default CadastroVideo;