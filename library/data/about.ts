import SectionSideImage from "@/components/organism/SectionSideImage";
import { DataStructure } from "./types";
import LetterBanner from "@/components/cells/LetterBanner";
import SectionBanner from "@/components/organism/SectionBanner";
import Article from "@/components/organism/Article";
import Grid from "@/components/organism/Grid";
import hap14 from "@/library/images/hap14.jpg";
import hap12 from "@/library/images/hap12.jpg";
import master from "@/library/images/master.jpg";
import logo from "@/library/images/hapkido.png";

export const aboutData: DataStructure[] = [
  {
    type: SectionSideImage,
    title: "Historia del hapkido",
    images: [logo.src],
    bgcolor: "grey",
  },
  {
    type: Article,
    images: [master.src],
    $imagecircular: true,
    imagewidth: "400px",
    title: "Do Ju Nim Ji Han Jae (Fundador del Hapkido)",
    content: [
      "Do Ju Nim (Gran Maestro) Ji Han Jae nació en Andong Corea en 1936. Comenzó la práctica de las Artes Marciales con el G. M. Choi Yong Sul quien le enseñó el Arte Japonés denominado Yawara (Yu Kwon Sul). Do Ju Nim Ji es considerado uno de sus mejores estudiantes.",
      "Do Ju Nim Ji comenzó su entrenamiento mental bajo las enseñanzas de un hombre conocido como el Taoísta Lee, del cual aprendió el uso del Bo, palo corto, el Tae Kyon, técnicas de pateo y meditación. Con todo esto y más, el Do Ju Nim Ji Han Jae creó el Hapkido.",
      "Do Ju Nim Ji fue instructor de la mayoría de los Grandes Maestros de Hapkido de la actualidad, además de participar en diferentes películas. Durante su estancia en Hong Kong, Do Ju Nim Ji fue coreógrafo, así como entrenador personal de varias estrellas de las Artes Marciales, entre estos destacan Bruce Lee, Samo Hung (compañero de Jackie Chan), Angela Mao y Carter Wong (Big Trouble in Little China).",
      "En 1984 Do Ju Nim Ji emigró a los Estados Unidos. En aquel tiempo el Maestro agregó más aspectos mentales y filosóficos al Hapkido, así como la palabra Sin Moo al Hapkido. “Sin” significa mente superior y “Moo” Arte Marcial. Por lo tanto “Sin Moo” significa “Armonía y Coordinación entre Mente, Cuerpo y Espíritu”",
    ],
  },
  { type: LetterBanner, title: "CARACTERÍSTICAS DEL HAPKIDO", fontSize: "h3" },
  {
    type: SectionBanner,
    padding: "1rem",
    bgcolor: "white",
    title: "Movimiento Circular",
    content: [
      "El movimiento circular es un principio fácil de explicar. Básicamente cuando eres atacado en una línea recta, en lugar de detener o bloquear el ataque, cambias la dirección con un movimiento circular. Cuando se aplica a la defensa personal, al usar una técnica circular el atacante no podrá resistirse al movimiento defensivo.",
      "El movimiento circular también se aplica en las proyecciones y los golpes. En las proyecciones, el movimiento circular te permite derribar a alguien más grande con muy poca fuerza. Al golpear o patear incrementa la potencia al ganar distancia e incrementa el impulso con el movimiento circular.",
    ],
  },
  {
    type: SectionBanner,
    padding: "1rem",
    bgcolor: "white",
    title: "No resistencia",
    content: [
      "La no resistencia es una de las principales características del Hapkido. Por ejemplo, si un atacante tratara de golpear con mucha fuerza, el hapkidoin (practicante de hapkido) nunca estaría dentro del alcance del golpe en el momento de mayor fuerza del mismo para bloquear el impacto, en lugar de eso, el hapkidoin evita chocar con la fuerza del adversario utilizando un suave movimiento circular, esto dividirá la fuerza del ataque y permitirá contener la agresión.",
      "Otro ejemplo, cuando un oponente agarra tu muñeca y jala, en lugar de resistir y tirar en sentido contrario, el hapkidoin utiliza la fuerza del jalón para ir hacia delante y aplicar un movimiento circular para zafarse y escapar del agarre. Esto también aplica si el oponente trata de empujar ya que con un leve movimiento circular se dividiría la fuerza del empujón y se podría utilizar esa misma fuerza para derribarlo.",
    ],
  },
  {
    type: SectionBanner,
    padding: "1rem",
    bgcolor: "white",
    title: "Teoría del agua",
    content: [
      "La teoría del agua puede ser explicada de diferentes maneras. La primera es la habilidad de fluir rodeando obstáculos, como la corriente del río rodea la roca, esta habilidad se utilizaría cuando el hapkidoin se mueve rodeando un ataque.",
      "También podríamos explicar esta teoría con el goteo del agua sobre una roca, al gotear de manera constante el agua encontraría los puntos débiles de la roca y la penetraría hasta debilitarla, partirla o quebrantarla, esto demuestra como un hapkidoin podría atacar a su oponente hasta encontrar sus puntos débiles y de esa manera penetrar la defensa del adversario para tomar el control del mismo.",
      "Como el poder de la ola que golpea sobre la playa, el hapkidoin podrá enfocar su ataque para que sea igual de poderoso. También a través de la teoría del agua podemos ejemplificar que cuando se presiona sobre un punto débil del cuerpo, esa manera de concentrar la energía en un punto podría dañar a un oponente.",
    ],
  },
  {
    type: Grid,
    title: "Hapkido para todos",
    images: [hap12.src, hap14.src],
  },
];
