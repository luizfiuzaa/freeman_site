import StepCard from "./StepCard";

const steps = [
  {
    num: "01",
    optional: true,
    title: "Remove o pub cache local",
    cmd: "pub cache clean",
    desc: "Apaga o cache de pacotes Dart na sua máquina. Útil quando algum pacote ficou corrompido.",
  },
  {
    num: "02",
    title: "Flutter clean",
    cmd: "flutter clean",
    desc: (
      <>
        Remove a pasta <code>build/</code> e demais artefatos gerados pelo último build.
      </>
    ),
  },
  {
    num: "03",
    title: "Pub cache repair",
    cmd: "pub cache repair",
    desc: "Reinstala todos os pacotes em cache, restaurando integridade dos hashes.",
  },
  {
    num: "04",
    title: "Pub cache clean",
    cmd: "pub cache clean",
    desc: "Limpa o cache do pub para forçar resolução fresca das dependências.",
  },
  {
    num: "05",
    title: "Remove artefatos gerados",
    cmd: "rm build/ .dart_tool/ *.g.dart",
    desc: "Deleta diretórios e arquivos gerados pelo Flutter, Gradle e IDEs.",
  },
  {
    num: "06",
    title: "Reinstala as dependências",
    cmd: "flutter pub get",
    desc: (
      <>
        Resolve e baixa as dependências do <code>pubspec.yaml</code> do zero.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="wrap">
      <div className="sec-head fade-up">
        <div className="sec-kicker">{"// como funciona"}</div>
        <h2 className="sec-title">Seis passos. Um comando.</h2>
        <p className="sec-sub">
          O Freeman orquestra os comandos do Flutter CLI numa ordem segura — você
          não precisa lembrar deles, nem da ordem, nem das pastas que precisam
          sumir.
        </p>
      </div>

      <div className="steps">
        {steps.map((s) => (
          <StepCard key={s.num} {...s} />
        ))}
      </div>
    </section>
  );
}
