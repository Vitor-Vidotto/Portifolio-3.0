import Typewriter from 'typewriter-effect';

const TypewriterLoop = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        pauseFor: 2500,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Eu sou <span style="color: #f13232;">Programador</span>')
          .pauseFor(1500)
          .deleteChars(11) // Deleta apenas a parte "Programador"
          .typeString('<span style="color: #33c1ff;">Desenvolvedor</span>')
          .pauseFor(1500)
          .deleteChars(14) // Deleta apenas a parte "Desenvolvedor"
          .typeString('<span style="color: #75ff33;">DevOps</span>')
          .pauseFor(1500)
          .deleteChars(6) // Deleta apenas a parte "DevOps"
          .start();
      }}
      style={{ display: 'inline' }}
    />
  );
};

export default TypewriterLoop;
