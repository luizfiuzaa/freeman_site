import FlagCard from "./FlagCard";

const flags = [
  {
    name: "--dry-run",
    alias: "alias: -n",
    desc: "Simula a execução completa imprimindo cada comando que seria rodado, sem tocar em nada.",
  },
  {
    name: "--safe",
    alias: "alias: -s",
    desc: (
      <>
        Executa só <code>flutter clean</code> + <code>flutter pub get</code> —
        limpeza rápida sem mexer em caches globais.
      </>
    ),
  },
  {
    name: "--skip-pub-cache",
    desc: "Pula as etapas de limpeza e reparo do pub cache local da máquina.",
  },
  {
    name: "--keep-lock",
    desc: (
      <>
        Preserva o <code>pubspec.lock</code> durante o processo, mantendo as
        versões resolvidas.
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="flags" className="wrap">
      <div className="sec-head fade-up">
        <div className="sec-kicker">{"// flags"}</div>
        <h2 className="sec-title">Configurável até onde precisar.</h2>
        <p className="sec-sub">
          Cada etapa pode ser pulada, simulada ou restrita. Os defaults são
          seguros — as flags te dão controle fino sem precisar editar nada.
        </p>
      </div>

      <div className="flags">
        {flags.map((f) => (
          <FlagCard key={f.name} {...f} />
        ))}
      </div>

      <div className="fvm-note fade-up">
        <div className="ico">fvm</div>
        <p>
          <strong>Suporte automático a FVM.</strong> Se o Flutter Version Manager
          estiver presente no projeto, o Freeman detecta e usa{" "}
          <code>fvm flutter</code> nos comandos — ou force via flag.
        </p>
      </div>
    </section>
  );
}
