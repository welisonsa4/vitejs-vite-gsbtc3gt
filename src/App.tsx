
import { useState } from 'react';
import './App.css';

type Pagina =
  | 'inicio'
  | 'sobre'
  | 'bibliografia'
  | 'aprenda'
  | 'duvidas';

const modalidades = [
  {
    sigla: 'RX',
    nome: 'Radiografia',
    descricao: 'Incidências e técnicas radiográficas.',
    classe: 'rx',
    disponivel: true,
  },
  {
    sigla: 'TC',
    nome: 'Tomografia',
    descricao: 'Protocolos por região e contraste.',
    classe: 'tc',
    disponivel: true,
  },
  {
    sigla: 'RM',
    nome: 'Ressonância',
    descricao: 'Técnicas e informações por exame.',
    classe: 'rm',
    disponivel: false,
  },
  {
    sigla: 'AC',
    nome: 'Arco cirúrgico',
    descricao: 'Escopia, posicionamentos e procedimentos.',
    classe: 'arco',
    disponivel: true,
  },
  {
    sigla: 'MG',
    nome: 'Mamografia',
    descricao: 'Incidências e técnicas específicas.',
    classe: 'mamografia',
    disponivel: false,
  },
];

const atalhos = [
  'TC de abdome com contraste',
  'RX de tórax',
  'Arco cirúrgico',
];

const linksMenu: { pagina: Pagina; texto: string }[] = [
  { pagina: 'aprenda', texto: 'Aprenda' },
  { pagina: 'sobre', texto: 'Sobre' },
  { pagina: 'bibliografia', texto: 'Bibliografia' },
  { pagina: 'duvidas', texto: 'Dúvidas frequentes' },
];

function IconeModalidade({ tipo }: { tipo: string }) {
  if (tipo === 'rx') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="9" y="9" width="46" height="46" rx="12" />
        <path d="M22 21v22M42 21v22M22 32h20" />
        <circle cx="32" cy="32" r="6" />
      </svg>
    );
  }

  if (tipo === 'tc') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="7" y="12" width="50" height="40" rx="12" />
        <circle cx="32" cy="32" r="14" />
        <circle cx="32" cy="32" r="8" />
        <path d="M32 18v28M18 32h28" />
      </svg>
    );
  }

  if (tipo === 'rm') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="7" y="13" width="50" height="38" rx="10" />
        <circle cx="32" cy="32" r="13" />
        <path d="M23 32c4-10 14-10 18 0s-5 10-9 3-9-2-9 3" />
      </svg>
    );
  }

  if (tipo === 'arco') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M42 12a23 23 0 1 0 9 36" />
        <path d="M42 12l-2 13 12-2" />
        <rect x="12" y="28" width="10" height="12" rx="3" />
        <rect x="42" y="28" width="10" height="12" rx="3" />
        <path d="M27 50v5m-8 0h16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 53S9 40 9 25a12 12 0 0 1 23-5 12 12 0 0 1 23 5c0 15-23 28-23 28Z" />
      <path d="M32 27v16m-8-8h16" />
    </svg>
  );
}

function App() {
  const [busca, setBusca] = useState('');
  const [pagina, setPagina] = useState<Pagina>('inicio');
  const [menuAberto, setMenuAberto] = useState(false);

  function navegar(destino: Pagina) {
    setPagina(destino);
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function realizarBusca() {
    if (!busca.trim()) {
      alert('Digite o nome de um exame ou região anatômica.');
      return;
    }

    alert(
      `A pesquisa real ainda será implementada.\n\nTermo digitado: ${busca.trim()}`
    );
  }

  function abrirModalidade(nome: string, disponivel: boolean) {
    if (!disponivel) {
      alert(`${nome}: conteúdo previsto para uma próxima etapa.`);
      return;
    }

    alert(
      `O módulo de ${nome} ainda será desenvolvido. Esta opção é apenas uma prévia.`
    );
  }

  function abrirLogin() {
    alert('A área de Login será implementada em uma próxima etapa.');
    setMenuAberto(false);
  }

  function abrirAdm() {
    alert(
      'A área administrativa será criada com autenticação e autorização próprias.'
    );
    setMenuAberto(false);
  }

  return (
    <main className="pagina">
      <section className="area-destaque">
        <header className="cabecalho">
          <button
            className="marca"
            type="button"
            onClick={() => navegar('inicio')}
            aria-label="RadSaber, página inicial"
          >
            <span className="marca-icone" aria-hidden="true">
              R<span>+</span>
            </span>
            <span className="marca-texto">
              RadSaber
              <small>Sua dúvida vira imagem</small>
            </span>
          </button>

          <nav className="menu-desktop" aria-label="Navegação principal">
            {linksMenu.map((link) => (
              <button
                key={link.pagina}
                type="button"
                className={`link-menu ${
                  pagina === link.pagina ? 'link-menu-ativo' : ''
                }`}
                onClick={() => navegar(link.pagina)}
              >
                {link.texto}
              </button>
            ))}
            <button
              type="button"
              className="botao-login"
              onClick={abrirLogin}
            >
              Entrar <span aria-hidden="true">↗</span>
            </button>
          </nav>

          <button
            type="button"
            className="botao-menu-mobile"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </header>

        {menuAberto && (
          <nav
            className="menu-mobile"
            id="menu-mobile"
            aria-label="Navegação para celular"
          >
            {linksMenu.map((link) => (
              <button
                key={link.pagina}
                type="button"
                onClick={() => navegar(link.pagina)}
              >
                {link.texto}
                <span aria-hidden="true">→</span>
              </button>
            ))}
            <button type="button" onClick={abrirLogin}>
              Entrar <span aria-hidden="true">→</span>
            </button>
            <button type="button" onClick={abrirAdm}>
              Acesso administrativo <span aria-hidden="true">→</span>
            </button>
          </nav>
        )}

        {pagina === 'inicio' ? (
          <section className="principal">
            <div
              className="elemento-tecnico elemento-tecnico-um"
              aria-hidden="true"
            />
            <div
              className="elemento-tecnico elemento-tecnico-dois"
              aria-hidden="true"
            />

            <div className="etiqueta">
              <span className="ponto" />
              SEU APOIO NA ROTINA RADIOLÓGICA
            </div>

            <h1>
              Bateu a dúvida?
              <br />
              Bora <span>radiologar.</span>
            </h1>

            <p className="descricao">
              Um apoio prático para as dúvidas da rotina radiológica.
              Encontre informações técnicas com mais clareza e agilidade.
            </p>

            <form
              className="pesquisa"
              onSubmit={(evento) => {
                evento.preventDefault();
                realizarBusca();
              }}
            >
              <span className="lupa" aria-hidden="true">
                ⌕
              </span>

              <input
                type="search"
                placeholder="Busque por exame, técnica ou região..."
                aria-label="Pesquisar exame ou região anatômica"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
              />

              <button type="submit">
                Buscar <span aria-hidden="true">→</span>
              </button>
            </form>

            <div className="atalhos">
              <span className="atalhos-titulo">BUSCAS POPULARES</span>
              {atalhos.map((termo) => (
                <button
                  className="atalho"
                  type="button"
                  key={termo}
                  onClick={() => setBusca(termo)}
                >
                  {termo}
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="pagina-interna">
            <span className="etiqueta">
              <span className="ponto" />
              RADSABER · CONSULTA EM RADIOLOGIA
            </span>
            <h1>{pagina === 'sobre' ? 'Sobre o RadSaber' : pagina === 'fontes' ? 'Fontes e referências' : 'Aprenda radiologia'}</h1>
            <p className="descricao">
              {pagina === 'sobre'
                ? 'Uma plataforma em desenvolvimento para facilitar o acesso a informações práticas da rotina radiológica.'
                : pagina === 'fontes'
                  ? 'Um espaço planejado para reunir referências técnicas, bibliográficas e links relacionados aos conteúdos.'
                  : 'Um espaço planejado para estudar modalidades, técnicas e conceitos importantes da radiologia.'}
            </p>
            <div className="conteudo-interno">
              {pagina === 'sobre' && (
                <>
                  <h2>Nosso objetivo</h2>
                  <p>
                    Tornar a consulta técnica mais clara, prática e organizada,
                    ajudando profissionais a localizar informações relevantes
                    para sua rotina.
                  </p>
                  <h2>Em desenvolvimento</h2>
                  <p>
                    As fichas técnicas, a busca real e os recursos de conta
                    serão construídos gradualmente. O conteúdo publicado deverá
                    contar com referências verificáveis.
                  </p>
                </>
              )}

              {pagina === 'fontes' && (
                <>
                  <h2>Referências por conteúdo</h2>
                  <p>
                    A proposta é vincular as referências diretamente aos
                    tópicos de cada ficha técnica, com links e dados
                    bibliográficos que permitam conferir a origem da informação.
                  </p>
                  <div className="aviso-conteudo">
                    As referências ainda serão cadastradas. Esta página não
                    representa uma biblioteca bibliográfica já disponível.
                  </div>
                </>
              )}

              {pagina === 'aprenda' && (
                <>
                  <h2>Explore as modalidades</h2>
                  <p>
                    A área educacional reunirá conteúdos introdutórios e
                    materiais organizados por modalidade radiológica.
                  </p>
                  <div className="lista-aprenda">
                    {modalidades.map((modalidade) => (
                      <button
                        type="button"
                        key={modalidade.sigla}
                        onClick={() =>
                          abrirModalidade(
                            modalidade.nome,
                            modalidade.disponivel
                          )
                        }
                      >
                        <span className="sigla-aprenda">
                          {modalidade.sigla}
                        </span>
                        <span>{modalidade.nome}</span>
                        <span className="seta-aprenda" aria-hidden="true">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="texto-pendente">
                    Os conteúdos educacionais serão adicionados em etapas
                    futuras.
                  </p>
                </>
              )}
            </div>
            <button
              type="button"
              className="botao-voltar"
              onClick={() => navegar('inicio')}
            >
              ← Voltar à página inicial
            </button>
          </section>
        )}
      </section>

      {pagina === 'inicio' && (
        <section className="modulos">
          <div className="secao-titulo">
            <div>
              <span className="subtitulo">EXPLORE O MANUAL</span>
              <h2>Radiologia, por modalidade.</h2>
              <p>Escolha uma área para tirar sua dúvida.</p>
            </div>
            <span className="contador">05 modalidades</span>
          </div>

          <div className="faixa-modalidades">
            {modalidades.map((modalidade) => (
              <button
                className={`modalidade ${modalidade.classe} ${
                  !modalidade.disponivel ? 'modalidade-bloqueada' : ''
                }`}
                type="button"
                key={modalidade.sigla}
                onClick={() =>
                  abrirModalidade(modalidade.nome, modalidade.disponivel)
                }
                aria-label={`${modalidade.nome}${
                  modalidade.disponivel ? '' : ', em breve'
                }`}
              >
                <span className="modalidade-ilustracao">
                  <IconeModalidade tipo={modalidade.classe} />
                  {!modalidade.disponivel && (
                    <span className="selo-breve">EM BREVE</span>
                  )}
                </span>
                <strong>{modalidade.nome}</strong>
                <span className="modalidade-descricao">
                  {modalidade.descricao}
                </span>
                <span className="modalidade-acao">
                  {modalidade.disponivel ? 'Conhecer área' : 'Conteúdo futuro'}
                  <span aria-hidden="true"> ↗</span>
                </span>
              </button>
            ))}
          </div>

          <p className="nota-modalidades">
            <span aria-hidden="true">ⓘ</span>
            Os módulos estão em desenvolvimento. A pesquisa ainda não consulta
            uma base real de exames.
          </p>
        </section>
      )}

      <footer>
        <button
          type="button"
          className="rodape-marca"
          onClick={() => navegar('inicio')}
        >
          RadSaber
        </button>
        <span>Menos pesquisa. Mais radiologia.</span>
        <span>Consulta prática em radiologia.</span>
      </footer>
    </main>
  );
}

export default App;

