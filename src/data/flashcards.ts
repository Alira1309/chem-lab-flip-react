export interface FlashCard {
  id: number;
  question: string;
  answer: string;
  category: string;
  questionRu?: string;
  answerRu?: string;
  categoryRu?: string;
}

export const flashcards: FlashCard[] = [
  {
    id: 1,
    question: "What is a balanced chemical equation?",
    questionRu: "Что такое сбалансированное химическое уравнение?",
    answer: "An equation where the number of each type of atom is the same on both sides of the equation.",
    answerRu: "Уравнение, в котором количество каждого типа атомов одинаково с обеих сторон уравнения.",
    category: "Balancing",
    categoryRu: "Баланс"
  },
  {
    id: 2,
    question: "What law states that matter cannot be created or destroyed in a chemical reaction?",
    questionRu: "Какой закон гласит, что материя не может быть создана или уничтожена в химической реакции?",
    answer: "Law of Conservation of Mass",
    answerRu: "Закон сохранения массы",
    category: "Balancing",
    categoryRu: "Баланс"
  },
  {
    id: 3,
    question: "What is a chemical reaction?",
    questionRu: "Что такое химическая реакция?",
    answer: "A process where substances transform into different substances with different properties.",
    answerRu: "Процесс, при котором вещества превращаются в различные вещества с разными свойствами.",
    category: "Reactions",
    categoryRu: "Реакции"
  },
  {
    id: 4,
    question: "What are the signs that a chemical reaction has occurred?",
    questionRu: "Какие признаки указывают на то, что произошла химическая реакция?",
    answer: "Color change, temperature change, gas formation, precipitation, or light emission.",
    answerRu: "Изменение цвета, изменение температуры, образование газа, осаждение или излучение света.",
    category: "Reactions",
    categoryRu: "Реакции"
  },
  {
    id: 5,
    question: "What is a displacement reaction?",
    questionRu: "Что такое реакция замещения?",
    answer: "A reaction where an element displaces another element from its compound.",
    answerRu: "Реакция, при которой один элемент замещает другой элемент в его соединении.",
    category: "Exploring Displacement",
    categoryRu: "Исследование замещения"
  },
  {
    id: 6,
    question: "In a single displacement reaction, what happens?",
    questionRu: "Что происходит в реакции замещения?",
    answer: "One element replaces another element in a compound.",
    answerRu: "Один элемент замещает другой элемент в соединении.",
    category: "Exploring Displacement",
    categoryRu: "Исследование замещения"
  },
  {
    id: 7,
    question: "What is an electron configuration?",
    questionRu: "Что такое конфигурация электронов?",
    answer: "The arrangement of electrons in the energy levels and orbitals of an atom.",
    answerRu: "Расположение электронов в энергетических уровнях и орбиталах атома.",
    category: "Electron Configuration",
    categoryRu: "Конфигурация электронов"
  },
  {
    id: 8,
    question: "What does the Aufbau principle state?",
    questionRu: "Каков закон Aufbau?",
    answer: "Electrons fill the lowest energy orbitals first before filling higher energy orbitals.",
    answerRu: "Электроны заполняют наименьшие энергетические орбиталы первыми, прежде чем заполнять более высокие энергетические орбиталы.",
    category: "Electron Configuration",
    categoryRu: "Конфигурация электронов"
  },
  {
    id: 9,
    question: "What is a molecule?",
    questionRu: "Что такое молекула?",
    answer: "A group of two or more atoms held together by chemical bonds.",
    answerRu: "Группа двух или более атомов, связанных химическими связями.",
    category: "Molecules",
    categoryRu: "Молекулы"
  },
  {
    id: 10,
    question: "What is the difference between atoms and molecules?",
    questionRu: "Как различаются атомы и молекулы?",
    answer: "Atoms are the basic units of matter, while molecules are formed when two or more atoms bond together.",
    answerRu: "Атомы - это базовые единицы материи, а молекулы образуются, когда два или более атомов связываются.",
    category: "Molecules",
    categoryRu: "Молекулы"
  },
  {
    id: 11,
    question: "What is reactivity in metals?",
    questionRu: "Какова реактивность металлов?",
    answer: "The tendency of a metal to lose electrons and form positive ions during chemical reactions.",
    answerRu: "Тendency металла потерять электроны и образовать положительные ионы в химических реакциях.",
    category: "Reactivity of Metals",
    categoryRu: "Реактивность металлов"
  },
  {
    id: 12,
    question: "Which metal is the most reactive?",
    questionRu: "Какой металл самое реактивный?",
    answer: "Potassium (K) is among the most reactive metals.",
    answerRu: "Калий (K) - один из самых реактивных металлов.",
    category: "Reactivity of Metals",
    categoryRu: "Реактивность металлов"
  },
  {
    id: 13,
    question: "Who proposed the first atomic theory?",
    questionRu: "Кто предложил первую атомную теорию?",
    answer: "John Dalton in the early 1800s.",
    answerRu: "Джон Далтон в начале 19 века.",
    category: "Atomic Theory",
    categoryRu: "Атомная теория"
  },
  {
    id: 14,
    question: "What are the main points of Dalton's atomic theory?",
    questionRu: "Какие основные точки Далтоновской атомной теории?",
    answer: "1. All matter is made of atoms. 2. Atoms cannot be created, destroyed, or divided. 3. Atoms of the same element are identical. 4. Atoms combine in whole-number ratios to form compounds.",
    answerRu: "1. Все материя состоит из атомов. 2. Атомы не могут быть созданы, уничтожены или разбиты. 3. Атомы одного и того же элемента идентичны. 4. Атомы соединяются в целочисленных соотношениях для образования соединений.",
    category: "Atomic Theory",
    categoryRu: "Атомная теория"
  },
  {
    id: 15,
    question: "What is diffusion in chemistry?",
    questionRu: "Что такое диффузия в химии?",
    answer: "The movement of particles from an area of high concentration to an area of low concentration.",
    answerRu: "Движение частиц от участка высокой концентрации к участку низкой концентрации.",
    category: "Diffusion",
    categoryRu: "Диффузия"
  },
  {
    id: 16,
    question: "What factors affect the rate of diffusion?",
    questionRu: "Какие факторы влияют на скорость диффузии?",
    answer: "Temperature, particle size, concentration gradient, and pressure.",
    answerRu: "Температура, размер частиц, градиент концентрации и давление.",
    category: "Diffusion",
    categoryRu: "Диффузия"
  },
  {
    id: 17,
    question: "What is pressure in chemistry?",
    questionRu: "Что такое давление в химии?",
    answer: "The force exerted per unit area by particles colliding with the walls of a container.",
    answerRu: "Сила, выделяемая на единицу площади частиц, столкнувшихся с стенками контейнера.",
    category: "Pressure",
    categoryRu: "Давление"
  },
  {
    id: 18,
    question: "What is the unit of pressure in the SI system?",
    questionRu: "Какая единица давления в системе SI?",
    answer: "Pascal (Pa)",
    answerRu: "Паскаль (Pa)",
    category: "Pressure",
    categoryRu: "Давление"
  },
  {
    id: 19,
    question: "What is a substance in chemistry?",
    questionRu: "Что такое вещество в химии?",
    answer: "A form of matter that has a definite composition and distinct properties.",
    answerRu: "Вид материи, имеющий определенную композицию и отдельные свойства.",
    category: "Substance",
    categoryRu: "Вещество"
  },
  {
    id: 20,
    question: "What is the difference between a pure substance and a mixture?",
    questionRu: "Как различаются чистое вещество и смесь?",
    answer: "A pure substance has a fixed composition, while a mixture contains two or more substances that are not chemically combined.",
    answerRu: "Чистое вещество имеет фиксированную композицию, а смесь содержит два или более веществ, не соединенных химически.",
    category: "Substance",
    categoryRu: "Вещество"
  },
  {
    id: 21,
    question: "What is an element?",
    questionRu: "Что такое элемент?",
    answer: "A pure substance that cannot be broken down into simpler substances by chemical means.",
    answerRu: "Чистое вещество, которое не может быть разбито на более простые вещества химическими способами.",
    category: "Elements",
    categoryRu: "Элементы"
  },
  {
    id: 22,
    question: "How many elements are there in the periodic table?",
    questionRu: "Сколько элементов в периодической таблице?",
    answer: "118 elements (as of 2023)",
    answerRu: "118 элемента (по состоянию на 2023 год)",
    category: "Elements",
    categoryRu: "Элементы"
  },
  {
    id: 23,
    question: "What is a compound?",
    questionRu: "Что такое соединение?",
    answer: "A substance formed when two or more elements are chemically joined together.",
    answerRu: "Вещество, образованное соединением двух или более элементов.",
    category: "Compounds",
    categoryRu: "Соединения"
  },
  {
    id: 24,
    question: "What is the difference between a molecule and a compound?",
    questionRu: "Как различаются молекула и соединение?",
    answer: "All compounds are molecules, but not all molecules are compounds. Some molecules (like O₂) are made of the same element.",
    answerRu: "Все соединения являются молекулами, но не все молекулы являются соединениями. Некоторые молекулы (например, O₂) состоят из одного и того же элемента.",
    category: "Compounds",
    categoryRu: "Соединения"
  },
  {
    id: 25,
    question: "What is a mixture?",
    questionRu: "Что такое смесь?",
    answer: "A material made up of two or more different substances that are physically combined but not chemically joined.",
    answerRu: "Материал, состоящий из двух или более различных веществ, физически объединенных, но не химически соединенных.",
    category: "Mixtures",
    categoryRu: "Смесь"
  },
  {
    id: 26,
    question: "What are the two main types of mixtures?",
    questionRu: "Какие два основных типа смесей?",
    answer: "Homogeneous mixtures (solutions) and heterogeneous mixtures.",
    answerRu: "Совместимые смеси (сolutions) и несовместимые смеси.",
    category: "Mixtures",
    categoryRu: "Смесь"
  },
  {
    id: 27,
    question: "What is an acid?",
    questionRu: "Что такое кислота?",
    answer: "A substance that donates hydrogen ions (H⁺) when dissolved in water and has a pH less than 7.",
    answerRu: "Вещество, которое донирует водородные ионы (H⁺) при растворении в воде и имеет pH меньше 7.",
    category: "Acids and Bases",
    categoryRu: "Кислоты и базы"
  },
  {
    id: 28,
    question: "What is a base?",
    questionRu: "Что такое база?",
    answer: "A substance that accepts hydrogen ions (H⁺) or donates hydroxide ions (OH⁻) and has a pH greater than 7.",
    answerRu: "Вещество, которое принимает водородные ионы (H⁺) или донирует ионы гидроксида (OH⁻) и имеет pH больше 7.",
    category: "Acids and Bases",
    categoryRu: "Кислоты и базы"
  },
  {
    id: 29,
    question: "What is the pH scale?",
    questionRu: "Что такое pH-шкала?",
    answer: "A scale from 0 to 14 that measures how acidic or basic a solution is.",
    answerRu: "Шкала от 0 до 14, измеряющая, насколько кислой или базовой является раствор.",
    category: "pH Scale",
    categoryRu: "pH-шкала"
  },
  {
    id: 30,
    question: "What pH value is considered neutral?",
    questionRu: "Какой pH-значение считается нейтральным?",
    answer: "pH 7",
    answerRu: "pH 7",
    category: "pH Scale",
    categoryRu: "pH-шкала"
  },
  {
    id: 31,
    question: "What is a physical change?",
    questionRu: "Что такое физическое изменение?",
    answer: "A change that alters the form or appearance of a substance but not its chemical composition.",
    answerRu: "Изменение формы или внешнего вида вещества, но не его химической композиции.",
    category: "Physical vs Chemical Changes",
    categoryRu: "Физические vs химические изменения"
  },
  {
    id: 32,
    question: "What is a chemical change?",
    questionRu: "Что такое химическое изменение?",
    answer: "A change that results in the formation of new substances with different properties and composition.",
    answerRu: "Изменение, приводящее к образованию новых веществ с различными свойствами и композицией.",
    category: "Physical vs Chemical Changes",
    categoryRu: "Физические vs химические изменения"
  },
  {
    id: 33,
    question: "What is the periodic table?",
    questionRu: "Что такое периодическая таблица?",
    answer: "An organized arrangement of elements in rows (periods) and columns (groups) according to their properties.",
    answerRu: "Организованная расстановка элементов в строках (периодах) и столбцах (группах) в соответствии с их свойствами.",
    category: "Periodic Table",
    categoryRu: "Периодическая таблица"
  },
  {
    id: 34,
    question: "Who created the modern periodic table?",
    questionRu: "Кто создал современную периодическую таблицу?",
    answer: "Dmitri Mendeleev is credited with creating the first widely recognized periodic table in 1869.",
    answerRu: "Дмитрий Менделееву принадлежит создание первой широко известной периодической таблицы в 1869 году.",
    category: "Periodic Table",
    categoryRu: "Периодическая таблица"
  },
  {
    id: 35,
    question: "What are isotopes?",
    questionRu: "Что такое иотопы?",
    answer: "Atoms of the same element with the same number of protons but different numbers of neutrons.",
    answerRu: "Атомы одного и того же элемента с одинаковым числом протонов, но разным числом neutronов.",
    category: "Isotopes",
    categoryRu: "Иотопы"
  }
];
