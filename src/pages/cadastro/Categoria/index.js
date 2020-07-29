import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria (){
    return (
        <PageDefault>
            <h1> Cadastro de Categoria </h1>

        <form>
            <label>
                nome da catgegoria:
            <input
                type="text"
            />
            </label>
            <button>
                Cadastrar
            </button>

        </form>



            <Link to="/">
                <h1> Ir para home </h1>
            </Link>
        </PageDefault>
    )
  }

  export default CadastroCategoria;