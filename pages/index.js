import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

// import MainGrid from '../src/components/MainGrid'

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades}`}>
          @{propriedades.githubUser}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}
export default function Home() {
  const githubUser = 'ThyagoMariano'
  const [comunidades, setComunidades] = React.useState([
    {
      id: '1',
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }
  ])
  // const comunidades = comunideades[0]
  // const alteradorDeComunicades = comunidades[1]

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea " style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box className="welcomeArea">
            <h1>Bem vindo(a),{githubUser}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault()
                const dadosDoForm = new FormData(e.target)

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image')
                }
                const comunidadesAtualizadas = [...comunidades, comunidade]
                setComunidades(comunidadesAtualizadas)
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  arial-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="image"
                  arial-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades({comunidades.length})</h2>

            <ul>
              {comunidades.map(itemAtual => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus amigos({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map(itemAtual => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>Minhas Comunidades</Box>
          <Box>Lives</Box>
        </div>
      </MainGrid>
    </>
  )
}
