import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
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

  function handleChange(value) {
    setValue(
      value.target.getAttribute('name'), 
      value.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubimit(event) {
        event.preventDefault();
        //...categorias é como se tivesse falando pega todas as categorias sem jogar fora e 
        //adiciona essa nova categoria.
        setCategorias([...categorias, values]);
        setValues({valoresIniciais})
      }}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div>
        

        <button>
          Cadastrar
        </button>
      </form>

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