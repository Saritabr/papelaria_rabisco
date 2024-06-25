/* Arquivo pages/index.jsx */ 

import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import Carrossel from '../components/Carrossel'

export default function Home() {
  return (
    <>
      <Headerb />
      <Carrossel />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <Titulo texto="Bem-vindo à Papelaria Rabisco!" />
            <p className="lead mt-3">
              A Papelaria Rabisco oferece uma ampla variedade de produtos de papelaria para todas as suas necessidades, desde materiais escolares até itens para escritório. Nossa missão é fornecer produtos de alta qualidade com um excelente atendimento ao cliente.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img  src="historia/material.webp" className="card-img-top" alt="Produtos escolares" />
              <div className="card-body">
                <h5 className="card-title">Produtos Escolares</h5>
                <p className="card-text">Encontre tudo o que precisa para o seu material escolar, desde cadernos e canetas até mochilas e estojos.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="historia/papel.webp" className="card-img-top" alt="Material de Escritório" />
              <div className="card-body">
                <h5 className="card-title">Material de Escritório</h5>
                <p className="card-text">Oferecemos uma linha completa de produtos para escritório, incluindo papel, impressoras, e acessórios diversos.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="historia/loca.jpeg" className="card-img-top" alt="Artigos de Papelaria" />
              <div className="card-body">
                <h5 className="card-title">Artigos de Papelaria</h5>
                <p className="card-text">Explore nossa seleção de artigos de papelaria, como agendas, planners, cartões e muito mais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  )
}