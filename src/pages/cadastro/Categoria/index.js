import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    //chave: nome, descricao, cor
    setValues({
      ...values,
      [key]: value, //nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    console.log('alo brasil');
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta
      ]);
    });
    /*setTimeout(() => {
      setCategorias([
        ...categorias,
          {
            "id": 1,
            "nome": "Front End",
            "descricao": "Uma categoria bacanuda",
            "cor": "#cbd1ff"
          },
          {
            "id": 1,
            "nome": "Back end",
            "descricao": "Outra categoria bacanuda",
            "cor": "#cbd1ff"
          }
      ])
    }, 4 * 1000);*/
  }, [])


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubimit(event) {
        event.preventDefault();
        /* ...categorias é como se tivesse falando pega todas as categorias sem jogar fora e
        adiciona essa nova categoria. */
        setCategorias([...categorias, values]);
        setValues(valoresIniciais)
      }}>
        <FormField
          type="text"
          name="nome"
          label="Nome da Categoria:"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          type="textarea"
          name="descricao"
          label="Descrição:"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          type="color"
          name="cor"
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return(
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;