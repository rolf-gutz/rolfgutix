import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';



function CadastroCategoria (){
    const valoresInicias ={
        nome:'',
        descricao:'',
        cor:'',
    }
    const [categorias, setCategorias] = useState([]);
    const [valoresFormulario, setValores] = useState(valoresInicias);  //estado padrao 
    
    function SetValue (chave, valor){
        ///chave é variavel: nome, descricao, bla e bla
        setValores({
            ...valoresFormulario,
            [chave]:valor, // se veio nome: 'valor'

        })
    }

    function handleChange (infosdoEvento){
        SetValue(infosdoEvento.target.getAttribute('name'),
        infosdoEvento.target.value
        );
    }

    return (
        <PageDefault>
        <h1> Cadastro de Categoria : {valoresFormulario.nome} </h1>

        <form style={{ background:valoresFormulario.cor }} 
            onSubmit={function handleSubmit(infosdoEvento){
            infosdoEvento.preventDefault();
            setCategorias([
                ...categorias,
                valoresFormulario
            ]);
                   
            setValores(valoresInicias);

             }
             }>

            <FormField 
                label="Nome da Categoria: "
                type="placeholder"
                name= "nome"
                value ={valoresFormulario.nome}
                onChange={handleChange}
            />          

            <FormField  
                label="Descrição: "
                type="????"
                name= "descricao"
                value ={valoresFormulario.descricao}
                onChange={handleChange}
            />       

            <FormField 
                label="Cor: "
                type="color"
                name= "cor"
                value ={valoresFormulario.cor}
                onChange={handleChange}
            />     

           
            <button >
                Cadastrar
            </button>

        </form>

            <ul>
                {categorias.map((categoria,indice) =>{
                    return(                         
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


        </PageDefault>
    )
  }

  export default CadastroCategoria;