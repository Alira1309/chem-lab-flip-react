
export interface FlashCard {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const flashcards: FlashCard[] = [
  {
    id: 1,
    question: "What is a balanced chemical equation?",
    answer: "An equation where the number of each type of atom is the same on both sides of the equation.",
    category: "Balancing"
  },
  {
    id: 2,
    question: "What law states that matter cannot be created or destroyed in a chemical reaction?",
    answer: "Law of Conservation of Mass",
    category: "Balancing"
  },
  {
    id: 3,
    question: "What is a chemical reaction?",
    answer: "A process where substances transform into different substances with different properties.",
    category: "Reactions"
  },
  {
    id: 4,
    question: "What are the signs that a chemical reaction has occurred?",
    answer: "Color change, temperature change, gas formation, precipitation, or light emission.",
    category: "Reactions"
  },
  {
    id: 5,
    question: "What is a displacement reaction?",
    answer: "A reaction where an element displaces another element from its compound.",
    category: "Exploring Displacement"
  },
  {
    id: 6,
    question: "In a single displacement reaction, what happens?",
    answer: "One element replaces another element in a compound.",
    category: "Exploring Displacement"
  },
  {
    id: 7,
    question: "What is an electron configuration?",
    answer: "The arrangement of electrons in the energy levels and orbitals of an atom.",
    category: "Electron Configuration"
  },
  {
    id: 8,
    question: "What does the Aufbau principle state?",
    answer: "Electrons fill the lowest energy orbitals first before filling higher energy orbitals.",
    category: "Electron Configuration"
  },
  {
    id: 9,
    question: "What is a molecule?",
    answer: "A group of two or more atoms held together by chemical bonds.",
    category: "Molecules"
  },
  {
    id: 10,
    question: "What is the difference between atoms and molecules?",
    answer: "Atoms are the basic units of matter, while molecules are formed when two or more atoms bond together.",
    category: "Molecules"
  },
  {
    id: 11,
    question: "What is reactivity in metals?",
    answer: "The tendency of a metal to lose electrons and form positive ions during chemical reactions.",
    category: "Reactivity of Metals"
  },
  {
    id: 12,
    question: "Which metal is the most reactive?",
    answer: "Potassium (K) is among the most reactive metals.",
    category: "Reactivity of Metals"
  },
  {
    id: 13,
    question: "Who proposed the first atomic theory?",
    answer: "John Dalton in the early 1800s.",
    category: "Atomic Theory"
  },
  {
    id: 14,
    question: "What are the main points of Dalton's atomic theory?",
    answer: "1. All matter is made of atoms. 2. Atoms cannot be created, destroyed, or divided. 3. Atoms of the same element are identical. 4. Atoms combine in whole-number ratios to form compounds.",
    category: "Atomic Theory"
  },
  {
    id: 15,
    question: "What is diffusion in chemistry?",
    answer: "The movement of particles from an area of high concentration to an area of low concentration.",
    category: "Diffusion"
  },
  {
    id: 16,
    question: "What factors affect the rate of diffusion?",
    answer: "Temperature, particle size, concentration gradient, and pressure.",
    category: "Diffusion"
  },
  {
    id: 17,
    question: "What is pressure in chemistry?",
    answer: "The force exerted per unit area by particles colliding with the walls of a container.",
    category: "Pressure"
  },
  {
    id: 18,
    question: "What is the unit of pressure in the SI system?",
    answer: "Pascal (Pa)",
    category: "Pressure"
  },
  {
    id: 19,
    question: "What is a substance in chemistry?",
    answer: "A form of matter that has a definite composition and distinct properties.",
    category: "Substance"
  },
  {
    id: 20,
    question: "What is the difference between a pure substance and a mixture?",
    answer: "A pure substance has a fixed composition, while a mixture contains two or more substances that are not chemically combined.",
    category: "Substance"
  },
  {
    id: 21,
    question: "What is an element?",
    answer: "A pure substance that cannot be broken down into simpler substances by chemical means.",
    category: "Elements"
  },
  {
    id: 22,
    question: "How many elements are there in the periodic table?",
    answer: "118 elements (as of 2023)",
    category: "Elements"
  },
  {
    id: 23,
    question: "What is a compound?",
    answer: "A substance formed when two or more elements are chemically joined together.",
    category: "Compounds"
  },
  {
    id: 24,
    question: "What is the difference between a molecule and a compound?",
    answer: "All compounds are molecules, but not all molecules are compounds. Some molecules (like O₂) are made of the same element.",
    category: "Compounds"
  },
  {
    id: 25,
    question: "What is a mixture?",
    answer: "A material made up of two or more different substances that are physically combined but not chemically joined.",
    category: "Mixtures"
  },
  {
    id: 26,
    question: "What are the two main types of mixtures?",
    answer: "Homogeneous mixtures (solutions) and heterogeneous mixtures.",
    category: "Mixtures"
  },
  {
    id: 27,
    question: "What is an acid?",
    answer: "A substance that donates hydrogen ions (H⁺) when dissolved in water and has a pH less than 7.",
    category: "Acids and Bases"
  },
  {
    id: 28,
    question: "What is a base?",
    answer: "A substance that accepts hydrogen ions (H⁺) or donates hydroxide ions (OH⁻) and has a pH greater than 7.",
    category: "Acids and Bases"
  },
  {
    id: 29,
    question: "What is the pH scale?",
    answer: "A scale from 0 to 14 that measures how acidic or basic a solution is.",
    category: "pH Scale"
  },
  {
    id: 30,
    question: "What pH value is considered neutral?",
    answer: "pH 7",
    category: "pH Scale"
  },
  {
    id: 31,
    question: "What is a physical change?",
    answer: "A change that alters the form or appearance of a substance but not its chemical composition.",
    category: "Physical vs Chemical Changes"
  },
  {
    id: 32,
    question: "What is a chemical change?",
    answer: "A change that results in the formation of new substances with different properties and composition.",
    category: "Physical vs Chemical Changes"
  },
  {
    id: 33,
    question: "What is the periodic table?",
    answer: "An organized arrangement of elements in rows (periods) and columns (groups) according to their properties.",
    category: "Periodic Table"
  },
  {
    id: 34,
    question: "Who created the modern periodic table?",
    answer: "Dmitri Mendeleev is credited with creating the first widely recognized periodic table in 1869.",
    category: "Periodic Table"
  },
  {
    id: 35,
    question: "What are isotopes?",
    answer: "Atoms of the same element with the same number of protons but different numbers of neutrons.",
    category: "Isotopes"
  }
];
