const questions = [
    {
        question: "In Death Note, what additional condition must be met when writing a target's true name?",
        options: [
            "The user must know the target's exact date of birth.",
            "The user must have the target's face in mind.",
            "The target must be within 100 meters of the user.",
            "The user must write the name using human blood."
        ],
        answer: 1,
        reason: "Keeping the target's face in mind prevents people who share a name from being accidentally targeted."
    },
    {
        question: "When Subaru's Return by Death triggers in Re:Zero, what happens to his memories and the world?",
        options: [
            "All characters remember the past timeline.",
            "Only characters with high mana remember the past timeline.",
            "Subaru retains his memories while the world resets.",
            "Time continues forward while Subaru regenerates."
        ],
        answer: 2,
        reason: "Subaru retains his memories when he returns to a previous point. Other characters do not remember the erased timeline."
    },
    {
        question: "In One Piece, what defensive trait does a Logia-type Devil Fruit user typically have?",
        options: [
            "Complete immunity to water and sea energy.",
            "The ability to reflect every attack.",
            "A forcefield that absorbs physical damage.",
            "Intangibility against ordinary physical attacks."
        ],
        answer: 3,
        reason: "Logia users can transform into their element, making ordinary physical attacks ineffective. Haki or an elemental weakness can counter this."
    },
    {
        question: "In Dr. Stone, what natural resource does Senku use as a source of nitrates for Revival Fluid?",
        options: [
            "Bat guano found inside caves.",
            "Sulfur from active volcanic vents.",
            "Seawater processed through distillation.",
            "Crushed seashells mixed with wood ash."
        ],
        answer: 0,
        reason: "Bat guano from the cave provides nitrates used in Senku's process for making Revival Fluid."
    },
    {
        question: "In Re:Zero, what can happen if Subaru tries to reveal Return by Death?",
        options: [
            "He permanently loses the ability to reset.",
            "The Witch's Hand attacks his or the listener's heart.",
            "The listener immediately becomes a witch cultist.",
            "Time freezes permanently for the entire world."
        ],
        answer: 1,
        reason: "The Witch of Envy's taboo punishes Subaru when he tries to reveal Return by Death. The dark hand can attack his heart or, in some cases, the listener."
    },
    {
        question: "In Attack on Titan, what is the lethal weak spot on a Titan's body?",
        options: [
            "The nape of the neck.",
            "The entire head.",
            "The center of the chest.",
            "Both legs."
        ],
        answer: 0,
        reason: "The nape contains the Titan's human pilot. Damaging this area is the standard way to defeat a Titan."
    },
    {
        question: "In One Piece, which type of Haki helps a user sense presences and predict incoming strikes?",
        options: [
            "Busoshoku Haki (Armament Haki)",
            "Haoshoku Haki (Conqueror's Haki)",
            "Kenbunshoku Haki (Observation Haki)",
            "Ryuo Haki (Flowing Haki)"
        ],
        answer: 2,
        reason: "Kenbunshoku, or Observation Haki, helps users sense presence, intent, and movement."
    },
    {
        question: "In Dr. Stone, what compound is combined with sulfur and charcoal to make gunpowder?",
        options: [
            "Copper sulfate (CuSO₄)",
            "Sodium bicarbonate (NaHCO₃)",
            "Calcium carbonate (CaCO₃)",
            "Potassium nitrate (KNO₃)"
        ],
        answer: 3,
        reason: "Potassium nitrate is the oxidizer in black powder, which also includes sulfur and charcoal."
    },
    {
        question: "In Fullmetal Alchemist, what rule prevents alchemists from creating something from nothing?",
        options: [
            "The Rule of Mana Conservation",
            "The Law of Equivalent Exchange",
            "The First Law of Thermodynamics",
            "The Binding Oath Principle"
        ],
        answer: 1,
        reason: "The Law of Equivalent Exchange requires something of equal value to be given to obtain or create something."
    },
    {
        question: "In Death Note, what does a human trade to obtain the Shinigami Eyes?",
        options: [
            "The ability to enter Heaven or Hell.",
            "The ability to write in the Death Note.",
            "Half of their remaining lifespan.",
            "One of their physical senses."
        ],
        answer: 2,
        reason: "The Shinigami Eye Deal cuts the human user's remaining lifespan in half in exchange for the eyes."
    },
    {
        question: "In Naruto, what was the actual objective of Ibiki's 10th Chunin Exam question?",
        options: [
            "To make teams sacrifice one member.",
            "To test candidates' courage to face an uncertain mission without giving up.",
            "To decipher a code hidden in the first nine questions.",
            "To identify the best visual jutsu for cheating."
        ],
        answer: 1,
        reason: "The test measured whether candidates would risk an uncertain future rather than give up. Staying and accepting the question was the point."
    },
    {
        question: "What is Byakuya Kuchiki's release command for Senbonzakura in Bleach?",
        options: [
            "Bloom (Sake).",
            "Dance (Mae).",
            "Shred (Sake).",
            "Scatter (Chire)."
        ],
        answer: 3,
        reason: "Byakuya releases Senbonzakura with the command, “Scatter.”"
    },
    {
        question: "In Jujutsu Kaisen, what is the difference between breaking a binding vow with yourself and one with another person?",
        options: [
            "A self-vow costs cursed energy forever; breaking another vow kills you.",
            "Both result in immediate death.",
            "Breaking a self-vow loses its benefit; breaking a vow with another person can bring unpredictable consequences.",
            "Self-vows cannot be broken; other vows require a sacrifice."
        ],
        answer: 2,
        reason: "Breaking a vow with oneself generally means losing its benefit. The consequences of breaking a vow with another person are severe and unpredictable."
    },
    {
        question: "In JoJo's Bizarre Adventure: Stardust Crusaders, how does Jotaro defeat D'Arby in their poker game?",
        options: [
            "He swaps D'Arby's cards with Star Platinum.",
            "He reads the cards reflected in D'Arby's eyes.",
            "He bluffs with enormous wagers without looking at his cards, causing D'Arby to fold.",
            "He draws a Royal Flush after betting his soul."
        ],
        answer: 2,
        reason: "Jotaro's intense bluff makes D'Arby believe he has been outplayed, causing D'Arby to break down and fold."
    },
    {
        question: "In Hunter x Hunter, what is the time limit for Chrollo to meet the conditions to steal an ability with Skill Hunter?",
        options: [
            "One hour.",
            "24 hours.",
            "One week.",
            "Until the target falls asleep or dies."
        ],
        answer: 0,
        reason: "Chrollo must fulfill the conditions for stealing an ability within one hour."
    },
    {
        question: "When Mirio Togata phases his entire body through solid matter, what sensory effects does he experience?",
        options: [
            "He feels the pain of objects passing through him.",
            "He becomes blind, deaf, and unable to breathe while fully phased.",
            "He passes out after using his quirk for ten seconds.",
            "His organs shut down because of a lack of gravity."
        ],
        answer: 1,
        reason: "Light, sound, and oxygen pass through him while he is phased, temporarily depriving him of sight, hearing, and breath."
    },
    {
        question: "In Demon Slayer, what does Inosuke do to his new Nichirin swords?",
        options: [
            "He tempers them with boar blood.",
            "He snaps them while testing their flexibility.",
            "He chips their edges with a rock to make them jagged.",
            "He refuses them and asks for heavier swords."
        ],
        answer: 2,
        reason: "Inosuke smashes the blades with a rock to give them jagged edges."
    },
    {
        question: "In Chainsaw Man, what happens to devils eaten by the true Chainsaw Devil?",
        options: [
            "Their powers are added to his permanently.",
            "They respawn in Hell as his servants.",
            "Their lifespans make him immortal.",
            "The concepts they represent are erased from existence and human memory."
        ],
        answer: 3,
        reason: "When the Chainsaw Devil eats a devil, the devil's name and the concept it represents can vanish from existence and memory."
    },
    {
        question: "In Code Geass, what phrase accidentally triggers Lelouch's command to Euphemia?",
        options: [
            "“If I told you to kill all the Japanese, you'd do it.”",
            "“You must execute all the prisoners.”",
            "“I command you to destroy the Britannian Empire.”",
            "“Shoot the first person who walks through that door.”"
        ],
        answer: 0,
        reason: "Lelouch uses the phrase as a hypothetical example, but his Geass activates and forces Euphemia to obey."
    },
    {
        question: "In Neon Genesis Evangelion, what is beneath the Eva units' metallic armor?",
        options: [
            "Entirely mechanical robots powered by nuclear engines.",
            "Living, organic beings related to the Angels.",
            "Mutated humans grown in a laboratory.",
            "Ancient alien spacecraft."
        ],
        answer: 1,
        reason: "The Evas are organic beings. Their armor also acts as a restraint system."
    },
    {
        question: "In Tokyo Ghoul, why does Yamori make Kaneki count backward from 1,000 by sevens?",
        options: [
            "Seven is Yamori's lucky number.",
            "To test whether Kaneki's brain is regenerating.",
            "To keep Kaneki mentally focused and prevent him from passing out.",
            "Because Kaneki has 1,000 bones in his kagune."
        ],
        answer: 2,
        reason: "The counting forces Kaneki to remain mentally focused during the torture."
    },
    {
        question: "In Sword Art Online, what does Kayaba say about his original reason for creating Aincrad?",
        options: [
            "He wanted to create an AI god.",
            "He wanted to prove reality was an illusion.",
            "A rival corporation paid him to do it.",
            "He had forgotten the exact reason; it had begun as a childhood dream of a castle in the sky."
        ],
        answer: 3,
        reason: "Kayaba says his original motivation had faded into a childhood dream of a castle in the sky."
    },
    {
        question: "In Steins;Gate, what item becomes a green, gelatinous mess during an early Phonewave experiment?",
        options: [
            "A banana.",
            "An apple.",
            "A slice of pizza.",
            "A can of Dr Pepper."
        ],
        answer: 0,
        reason: "The experiment produces the show's “gel-bana,” an early sign that the Phonewave is behaving strangely."
    },
    {
        question: "In Haikyuu!!, what unusual technique does Hinata initially use for the Freak Quick?",
        options: [
            "Kageyama uses a secret hand signal.",
            "Hinata jumps and swings with his eyes closed, relying on Kageyama's precise toss.",
            "Hinata aims for the net so the ball deflects.",
            "Kageyama spins the ball to make it curve."
        ],
        answer: 1,
        reason: "Early on, Hinata closes his eyes and relies on Kageyama to place the fast toss exactly where he can hit it."
    },
    {
        question: "According to Spike Spiegel in Cowboy Bebop, what is the difference between his two eyes?",
        options: [
            "One sees in the dark, while the other is going blind.",
            "One has a permanent blind spot from a gunfight.",
            "One is a fake eye that sees the past, while the other sees the present.",
            "He sold one real eye to pay a gambling debt."
        ],
        answer: 2,
        reason: "Spike describes one eye as seeing the past and the other as seeing the present, reflecting his feelings about his life."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const progress = document.getElementById("progress");
const questionHeading = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next");
const results = document.getElementById("results");

function showQuestion() {
    const item = questions[currentQuestion];

    answered = false;
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionHeading.textContent = item.question;
    feedback.textContent = "";
    results.textContent = "";
    nextButton.hidden = true;
    optionsContainer.replaceChildren();

    item.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const item = questions[currentQuestion];
    const isCorrect = selectedIndex === item.answer;

    if (isCorrect) {
        score++;
        feedback.textContent = `Correct! ${item.reason}`;
    } else {
        feedback.textContent =
            `That's wrong. The correct answer is: ${item.options[item.answer]} ${item.reason}`;
    }

    optionsContainer.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });

    nextButton.textContent =
        currentQuestion === questions.length - 1 ? "See final score" : "Next question";
    nextButton.hidden = false;
}

function showResults() {
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    let resultMessage;

    if (score === 0) {
        resultMessage = "YOU LARP TOO MUCH!";
    } else if (score === total) {
        resultMessage = "Consider yourself not a larper!";
    } else if (score * 2 < total) {
        resultMessage = "You larper!";
    } else {
        resultMessage = "Not a bad larper!";
    }

    progress.textContent = "Quiz complete!";
    questionHeading.textContent = resultMessage;
    optionsContainer.replaceChildren();
    feedback.textContent = "";
    nextButton.hidden = true;
    results.textContent = `Your score: ${score} out of ${total} (${percentage}%).`;

    const restartButton = document.createElement("button");
    restartButton.type = "button";
    restartButton.textContent = "Play again";
    restartButton.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        showQuestion();
    });

    optionsContainer.appendChild(restartButton);
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});

showQuestion();