import rls from "readline-sync";

const knightAscii = `
              {}
             {{}}
             {{}}
              {}
            .-''-.
           /  __  \\
          /.-'  '-.\\
          \\::.  .::/
           \\'    '/
      __ ___)    (___ __
    .'   \\\\        //   \`.
   /     | '-.__.-' |     \\
   |     |  '::::'  |     |
   |    /    '::'    \\    |
   |_.-;\\     __     /;-._|
   \\.'^\`\\\\    \\/    //\`^'./
   /   _.-._ _||_ _.-._   \\
  \`\\___\\    '-..-'    /___/\`
       /'---.  \`\\.---'\\
      ||    |\\\\\\\\|    ||
      ||    | || |    ||
      |;.__.' || '.__.;|
      |       ||       |
      {{{{{{{{||}}}}}}}}
       |      ||      |
       |.-==-.||.-==-.|
       <.    .||.    .>
        \\'=='/||\\'=='/
        |   / || \\   |
        |   | || |   |
        |   | || |   |
        /^^\\| || |/^^\\
       /   .' || '.   \\
      /   /   ||   \\   \\
     (__.'    \\/    '.__)
`;

const knightAsciiAtk = `
                         ,dM
                         dMMP
                        dMMM'
                        \\MM/
                        dMMm.
                       dMMP'_\\---.
                      _| _  p ;88;\\\`.
                    ,db; p >  ;8P|  \\\`.
                   (\\\`\\\`T8b,__,'dP |   |
                   |   \\\`Y8b..dP  ;_  |
                   |    |\\\`T88P_ /  \\\`\\;
                   :_.-~|d8P'\\\`Y/    /
                    \\_   TP    ;   7\\\`\\
         ,,__        >   \`._  /'  /   \\\`\\_
         \\\`._ """"~~~~------|\\\`\\;' ;     ,'
            """~~~-----~~~'\\__[|;' _.-'  \\\`\\
                    ;--..._     .-'-._     ;
                   /      /\\\`~~"'   ,'\\\`\\_ ,/
                  ;_    /'        /    ,/
                  | \\\`~-l         ;    /
                  \\\`\\    ;       /\\.._|
                    \\    \\      \\     \\
                    /\\\`---';      \\\`----'
                   (     /            
                    \\\`---'
`;

const wizardAscii = `
              _,-'|
           ,-'._  |
 .||,      |####\\ |
\\.\`',/     \\####| |
= ,. =      |###| |
/ || \\    ,-\\#/,'\`.
  ||     ,'   \`,,. \`.
  ,|____,' , ,;' \\| |
 (3|\\    _/|/'   _| |
  ||/,-''  | >-'' _,\\\\
  ||'      ==\\ ,-'  ,'
  ||       |  V \\ ,|
  ||       |    |\\ |
  ||       |    |   \\
  ||       |    \\    \\
  ||       |     |    \\
  ||       |      \\_,-'
  ||       |___,,--")_\\
  ||         |_|   ccc/
  ||        ccc/
  ||                
`;

const wizardAsciiAtk = `
                             /\\
                            /  \\
                           |    |
                         --:'''':--
                           :### :
                           _:##:\\___
            ' '      ____.' :::     '._
           . *=====<<=)           \\    :
            .  '      '-'-'\\_      /'._.'
                             \\====:_ ""
                            .'     \\\\
                           :       :
                          /   :    \\
                         :   .      '.
         ,. _            :  : :      :
      '-'    ).          :__:-:__.;--'
    (        '  )        '-'   '-'
 ( -   .00.   - _
(    .'  _ )     )
'-  ()_.\\\\,\\\\   -
`;

const assassinAscii = `
             _,._
           ,'   ,\`-.
|.        /     |\\  \`.
\\ \\      (  ,-,-\` ). \`-._ __
 \\ \\      \\|\\,'     \`\\  /'  \\
  \\ \\      \` |, ,  /  \\ \\     \\
   \\ \\         \`,_/\\\`, /\\,\\\`-.__/\\\`.
    \\ \\            | \` /    /    \`-._
     \\\\\\           \`-/'    /         \`-.
      \\\`/ _______,-/_   /'             \\
     ---\`|       |\`  ),' \`---.  ,       |
      \\..-\`--..___|_,/          /       /
                 |    |\`,-,...,/      ,'     
                 \\    | |_|   /     ,' __  r-'',
                  |___|/  |, /  __ /-''  \`\`)  |  
               _,-'   ||__\\ /,-' /     _,.--|  (
            .-'       )   \`(_   / _,.-'  ,-' _,/
             \`-------'       \`--''       \`'''
`;

const assassinAsciiAtk = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣿⣿⡇⠀⠀⠀⠀⠻⠿⠋⢁⣤⣦⠄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢀⣴⣾⣿⣿⣧⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⠿⠛⠛⠃⠀⠀⠀⠀⠈⠁⠀⢻⣿⣿⡆⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⠟⢡⣶⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⢻⣿⣧⠀
⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⢿⣿⠀
⠀⠀⠀⠀⣿⣿⡟⠛⠛⠛⠛⠛⠀⠻⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠈⢿⠀
⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠺⣦⣀⣽⣿⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢹⣿⣿⡟⠀⣴⡶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠻⠟⢀⣾⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⠛⠻⢿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠛⠛⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

const skeletonAscii = `
              .7
            .'/
           / /
          / /
         / /
        / /
       / /
      / /
     / /         
    / /          
  __|/
,-\\__\\
|f-"Y\\|
\\()7L/
 cgD                            __ _
 |\\(                          .'  Y '>,
  \\ \\                        / _   _   \\
   \\\\\\                       )(_) (_)(|}
    \\\\\\                      {  4A   } /
     \\\\\\                      \\uLuJJ/\\l
      \\\\\\                     |3    p)/
       \\\\\\\\___ __________      /nnm_n//
       c7___-__,__-)\\\\,__)(".  \\_>-<_/D
                  //V     \\_"-._.__G G_c__.-__<"/ ( \\
                         <"-._>__-,G_.___)\\   \\7\\
                        ("-.__.| \\"<.__.-" )   \\ \\
                        |"-.__"\\  |"-.__.-".\\   \\ \\
                        ("-.__""\\ \\"-.__.-".|    \\_\\
                        \\"-.__""|!|"-.__.-".)     \\ \\
                         "-.__""\\_|"-.__.-"./      \\ l
                          ".__"">G>-.__.-">       .--,_
`;

const wolfAscii = `
      /^\\      /^\\
      |  \\    /  |
      ||\\ \\../ /||
      )'        \`(
     ,;\`w,    ,w';,
     ;,  ) __ (  ,;
      ;  \\(\\/)/  ;;
     ;|  |vwwv|    \`\`-...
      ;  \`lwwl'   ;      \`\`\`''-.
     ;| ; \`""' ; ;              \`.
      ;         ,   ,          , |
      '  ;      ;   l    .     | |
      ;    ,  ,    |,-,._|      \\;
       ;  ; \`' ;   '    \\ \`\\     \\;
       |  |    |  |     |   |    |;
       |  ;    ;  |      \\   \\   (;
       | |      | l       | | \\  |
       | |      | |       | |  ) |
       | |      | ;       | |  | |
       ; ,      : ,      ,_.'  | |
      :__'      | |           ,_.'
               \`--'
`;

const wolfAsciiAtk = `
             _     ___
            #_~\`--'__ \`===-,
            \`.\`.     \`#.,//
            ,_\\_\\     ## #\\
            \`.__.__    \`####\\          
                 ~~\\ ,###'~
                    \\##'
`;

const spellCasting = `
               *    .
        '  +   ___    @    .
            .-" __"-.   +
    *      /:.\\\`__\\\`'.\\       '
        . |:: .'_ \\\`. :|   *
   @      |:: '._' : :| .
      +    \\\`:.'.__.' :/       '
            /\\\`-...-\\\`\\  '   +
   '       /         \\   .    @
     *     \\\`-.,___,.-'
`;

const attackMissed = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣤⣤⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣤⡤⢤⣴⣶⣶⣤⠄⠀⠀⠀⠀⠀
⠀⠠⢴⣾⣿⣿⡿⠟⠛⠛⠛⠛⠛⢛⣉⣩⣥⣤⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢤⣤⣶⣶⣶⣶⣶⣶⣤⣤⣤⣴⣶⣶⣶⣦⣄⣠⣤⣤⣤⣀⣀⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠉⣉⣉⣀⣻⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠛⠉⠉⠁⠀
⠀⠀⠀⠀⣀⣤⣀⡀⠀⠈⠉⠉⠛⠛⠛⠛⢉⣉⣩⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀
⠀⠀⠒⠿⣿⣿⣿⡿⠗⠀⠀⠀⠀⠶⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠶⠆⠀⠀
⠀⠀⠀⠀⠀⠉⣀⣀⣤⣤⣴⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣯⣍⣁⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠙⠛⠛⠛⠛⢛⣻⣿⣿⣿⣿⣿⣷⣦⣤⣄⡀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣶⣤⣀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠟⠛⠉⠀⠀
⠀⠀⢀⣀⣠⣤⣤⣬⣽⣿⣿⣟⣉⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢩⣭⣿⣿⣿⡉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣄⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠤⢴⣶⣾⣿⣿⣿⣿⣶⠤⠄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀`;

function enterAnyKey() {
  rls.question(`\n(Enter any key to continue)\n`);
}

let knight = {
  health: [100, 100],
  type: "physical",
  attackType: ["rusty sword", 10],
  evasion: 0,
  counter: 0,
  inventory: [],
  enemiesDefeated: 0,
  atkImage: knightAsciiAtk,
};

let assassin = {
  health: [80, 80],
  type: "physical",
  attackType: ["iron dagger", 10],
  evasion: 2,
  counter: 0,
  inventory: [],
  enemiesDefeated: 0,
  atkImage: assassinAsciiAtk,
};

let wizard = {
  health: [70, 70],
  type: "magic",
  attackType: ["wind blast", 30],
  evasion: 0,
  counter: 0,
  inventory: [],
  enemiesDefeated: 0,
  atkImage: wizardAsciiAtk,
};

let skeleton = {
  name: "skeleton",
  type: "physical",
  health: [40, 40],
  attackType: ["rusty sword", 10],
  evasion: 0,
  counter: 0,
  atkImage: skeletonAscii,
};

let wolfFeral = {
  name: "feral wolf",
  type: "physical",
  health: [35, 35],
  attackType: ["bite", 15],
  evasion: 2,
  counter: 0,
  atkImage: wolfAsciiAtk,
};

console.clear();

console.log(`...
You're finally awake! You were out for some time...
...`);
let name;
let confirm;
let mastery;
let player;

do {
  name = rls.question("\nTell me, how should I call you? \n");
  while (true) {
    confirm = rls
      .question(`\n${name} is your name, did I get that correctly? (y/n) \n`)
      .toLowerCase();
    if (confirm === "y" || confirm === "n") break;
    else
      console.log(
        `\nIncorrent input. Please respond with y for yes or n for no.`
      );
  }
} while (confirm !== "y");

console.clear();
confirm = "c";

do {
  mastery = rls
    .question(
      `\nWhat best describes your fighting style, ${name}?  Are you a Knight, Assassin or Wizard? \n`
    )
    .toLowerCase();
  if (mastery === "knight") {
    console.log(knightAscii);
    console.log(
      `\nHeavily armored, knights can wade through the thickest fighting while remaining nearly impervious to harm. 
      Their weapon of choice are a shield and a sword.`
    );
  } else if (mastery === "wizard") {
    console.log(wizardAscii);
    console.log(
      `\nWizards control powerful spells, often dealing elemental damage (fire, ice, lightning) and rely on a resource like mana or energy to cast magic. 
      They often wear robes which makes them vulnerable to damage.`
    );
  } else if (mastery === "assassin") {
    console.log(assassinAscii);
    console.log(
      `\nAssassins are masters of stealth and precise strikes. They excel at avoiding attacks, hiding and dealing critical hits with a bow or knives. 
      However their focus on offense comes at the cost of defense.`
    );
  } else {
    console.log(`\nIncorrent input. Please select knight, assassin or wizard.`);
  }
  if (mastery === "knight" || mastery === "wizard" || mastery === "assassin") {
    do {
      confirm = rls
        .question(`\nSo you're a ${mastery}? (y/n) \n`)
        .toLowerCase();
    } while (confirm !== "y" && confirm !== "n");
  }
} while (confirm !== "y");

player =
  mastery === "knight"
    ? structuredClone(knight)
    : mastery === "wizard"
    ? structuredClone(wizard)
    : structuredClone(assassin);

player.name = name;

console.clear();
console.log(
  `\n${name}, the ${mastery}. It's an honor to serve you! Now, are you ready to start the adventure?`
);
console.log(`
        ***************************************************************************
        *                                                                         *                         
        *                            C H A P T E R  1:                            *
        *                                                                         *
        *                           T H E    W O O D S                            *
        *                                                                         *
        ***************************************************************************
`);
console.log(`
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⢀⣼⣦⠀⠀⣠⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣆⠀⠀⠀⠀⠀
                            ⠀⠀⠒⣿⣿⣿⠓⠀⠀⠻⣿⣿⠀⢀⣴⣿⣦⡀⠀⢀⣾⣦⠘⢿⣿⣧⡀⠀⠀⠀
                            ⠀⢀⣴⣿⡿⠃⡄⠈⠻⣿⣟⣉⣀⠉⣽⡿⠋⠡⠴⣿⣿⣿⠓⠀⠙⢇⠀⠀⠀⠀
                            ⠀⠿⣿⠟⢁⣾⣿⣦⣀⠘⠿⠟⢁⣼⣿⣿⣷⠂⣴⣿⣿⣿⣆⠘⢶⣶⣿⠶⠤⠀
                            ⠀⣀⣀⡀⢉⣿⣿⣿⡍⠀⢀⣀⠙⢻⠿⢋⣤⣾⣿⣿⣿⣿⣿⣷⣄⠙⢿⣦⡀⠀
                            ⠀⠟⠋⣠⣾⣿⣿⣿⣿⣦⣌⠉⠠⣤⣤⣤⡌⢙⣿⣿⣿⣿⣿⣿⠛⠛⠂⢈⣙⠀
                            ⠀⠀⣉⡉⣹⣿⣿⣿⣿⣏⠉⣉⣀⣈⠙⠋⣠⣿⣿⣿⣿⣿⣿⣿⣆⠙⠛⠛⠛⠀
                            ⠀⠀⠋⣴⣿⣿⣿⣿⣿⣿⣷⣌⠉⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
                            ⠀⠴⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠦⠈⣙⠛⠛⠛⠛⠛⠛⠛⠛⣉⣉⠁⠀⠀⠀
                            ⠀⠀⣦⣤⡄⢉⣉⣉⣉⠉⣡⣤⠀⠀⠀⣿⣿⣷⠀⢰⣿⣿⡇⢸⣿⣿⠀⠀⠀⠀
                            ⠀⠀⣿⣿⡇⣸⣿⣿⣿⡄⢻⣿⠀⠀⠀⣿⣿⣿⠀⢸⣿⣿⡇⢸⣿⣿⠀⠀⠀⠀
                            ⠀⠀⣿⣿⠁⣿⣿⣿⣿⡇⠸⠿⠀⠀⠀⣿⣿⣿⠀⢸⣿⣿⣇⠸⣿⣿⠀⠀⠀⠀
                            ⠀⠀⠛⠛⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠉⠉⠉⠀⢸⣿⣿⣿⠀⠿⠿⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀
`);
enterAnyKey();
// CHAPTER 1: THE WOODS (pic + start the adventure)

console.clear();

console.log(
  `\nYou look around and there's forest everywhere. You follow a path which leads to a cabin...`
);
console.log(`
   _              /\\\`\\           (       /\\\`\\
  (_)      /\\\`\\  // \\\\           ))     // \\\\
          // \\\\  // \\\\  /\\\`\\_____||     // \\\\
          // \\\\  // \\\\ // /       \\  /\\\`\\ // \\\\
          // \\\\  // \\\\ ///_________\\// \\\\// \\\\
          // \\\\  // \\\\ // |-[+]---| // \\\\// \\\\
          // \\\\  // \\\\ // |-------| // \\\\// \\\\
_____,....-----'------'-----''-------'---'----'--
\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`~\`
`);

let decision;
do {
  decision = rls
    .question("Do you enter the cabin or pass it? (enter/pass) \n") // if pass, develop story there
    .toLowerCase();
} while (decision !== "enter" && decision !== "pass");

console.clear();

let isEnemyDefeated = false;

let enemy = structuredClone(skeleton);

function attack(enemyObject) {
  this.counter++;
  if (
    (this.type === "physical" && this.counter >= 1) ||
    (this.type === "magic" && this.counter >= 2)
  ) {
    let attackProbability = Math.floor(Math.random() * 10) + 1;
    if (attackProbability >= 2 + enemyObject.evasion) {
      if (this.type === "physical") this.counter--;
      if (this.type === "magic") this.counter -= 2;
      enemyObject.health[0] -= this.attackType[1];
      console.log(this.atkImage);
      console.log(
        `${this.name} attacked the ${enemyObject.name} with ${this.attackType[0]}, dealing ${this.attackType[1]} damage.`
      );
      enemyObject.health[0] <= 0
        ? console.log(`${enemyObject.name} has 0 health left.`)
        : console.log(
            `${enemyObject.name} has ${enemyObject.health[0]} health left.`
          );
    } else {
      console.log(attackMissed);
      console.log(`${this.name}'s ATTACK MISSED!`);
    }
  } else if (this.type === "magic" && this.counter < 2) {
    console.log(spellCasting);
    console.log(`${this.name} is casting a spell.`);
  }
}

function battleSequence() {
  while (player.health[0] > 0 && enemy.health[0] > 0) {
    let battleOrRun;
    do {
      battleOrRun = rls
        .question(`\nWhat do you do? Attack or try to run? (attack/run) \n`)
        .toLowerCase();
      console.clear();
    } while (battleOrRun !== "attack" && battleOrRun !== "run");

    if (battleOrRun === "attack") {
      player.attack(enemy);
      if (enemy.health[0] <= 0) {
        console.log(`
            88                                                       
            ""              ,d                                       
                            88                                       
8b       d8 88  ,adPPYba, MM88MMM ,adPPYba,  8b,dPPYba, 8b       d8  
\`8b     d8' 88 a8"     ""   88   a8"     "8a 88P'   "Y8 \`8b     d8'  
 \`8b   d8'  88 8b           88   8b       d8 88          \`8b   d8'   
  \`8b,d8'   88 "8a,   ,aa   88,  "8a,   ,a8" 88           \`8b,d8'    
    "8"     88  \`"Ybbd8"'   "Y888 \`"YbbdP"'  88             Y88'     
                                                            d8'      
                                                           d8'       
`);
        console.log(
          `\n********************** VICTORY **********************\n`
        );
        console.log(`${enemy.name} has been DEFEATED!`);
        enterAnyKey();
        console.clear();
        player.enemiesDefeated++; // if two, level up
        isEnemyDefeated = true;
        return;
      }
    } else if (battleOrRun === "run") {
      player.counter = 0;
      let probability = Math.floor(Math.random() * 10) + 1;
      if (probability > 5) {
        console.log(`You successfully ran away from the enemy.`);
        enterAnyKey();
        console.clear();
        return;
      } else {
        console.log(`The enemy doesn't allow you to escape.`);
        // enemy.attack(player); away?
      }
    }

    rls.question(
      "\nNow prepare yourself, the enemy's attacking back! (enter any key to continue)"
    );
    console.clear();
    enemy.attack(player);
    if (player.health[0] <= 0) {
      console.log(`
         88                               88           
         88                         ,d    88           
         88                         88    88           
 ,adPPYb,88  ,adPPYba, ,adPPYYba, MM88MMM 88,dPPYba,   
a8"    \`Y88 a8P_____88 ""     \`Y8   88    88P'    "8a  
8b       88 8PP""""""" ,adPPPPP88   88    88       88  
"8a,   ,d88 "8b,   ,aa 88,    ,88   88,   88       88  
 \`"8bbdP"Y8  \`"Ybbd8"' \`"8bbdP"Y8   "Y888 88       88  
`);
      console.log(`********************** YOU DIED **********************`);
      enterAnyKey();
      console.clear();
      return;
    }
  }
}

player.attack = attack;
enemy.attack = attack;

if (decision === "enter" || player.health === 0) {
  console.log(
    `As soon as you enter the cabin... a skeleton rushes towards you!`,
    skeletonAscii,
    `You enter battle!`
  );
  battleSequence();
}

if (isEnemyDefeated === true) {
  console.log(
    `\nNow that the enemy has been defeated, you inspect the cabin...\n`
  );
  console.log(`                    |      |        ,---------,
                    K.    .H        |r'''|'''Y|
                   /  *'.*  \\       ||   |   ||
                  /          \\      ||===|===||
                 /.-       -. \\     ||   |   ||
                / |-|    _/-/  \\    |L.__|__.J|
               /  \\)_)  (_()    \\   '---------'
            _________________________
             -__LLLLLLLLLLLLLLLLL__-
              \\|#/#############\\#|/
              \\|##/           \\##|/
              \\|#|  )  ) ( ) ) |#|/
              \\|#|  ( ( ()((   |#|/
              \\|#|   /\\__\\_(-  |#|/
 _____________\\|#| _(\\/L/(\\/)_) |#|/_____________
              \\|#|-.-.-.-.-.-.-|#|/         
               '''             '''

                 ,_,_,_,_,_,_,_,
                /   .-.   .-.   \\
               / .-'   '-'   '-. \\
              /-'    .-' '-.    '-\\
              +'+'+'+'+'+'+'+'+'+'+
`);
  do {
    decision = rls
      .question(
        `There's a cosy-looking fireplace still lit. You think to yourself: "a quick rest by the fire doesn't seem like a bad idea..." \nDo you rest next to the fireplace or exit the cabin? (rest/exit)\n`
      )
      .toLowerCase();
    console.clear();
  } while (decision !== ("rest" && "exit"));

  if (decision === "rest") {
    player.health[0] = player.health[1];
    console.log(
      `\nThe warmth of the fire and resting after the tough battle replenish your energy. You are again at full health!`
    );
  }
}

// if not enter or run continue out of the cabin
console.log(`\nHealth check: (${player.health[0]}/${player.health[1]})`);

console.log(`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢛⡿⠛⠛⠛⠛⠛⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣼⠿⣦⣤⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡟⠀⣸⡏⠀⠀⢠⣿⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⢷⣶⣿⣶⣤⣤⣼⣿⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡁⠀⠀⠀⠀⢸⡇⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠛⠛⢶⡶⠶⠾⠷⠤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠇⠀⠀⣼⠇⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣆⣴⠾⠻⢶⣤⣄⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠁⠀⠀⠀⠀⣉⣿⣶⠶⠶⠾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣷⢀⣠⣴⠶⠛⠉⠈⢻⡆⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⢿⣤⣄⣀⡀⢀⣸⣧⣀⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡀⠀⠀⠉⠹⣏⠉⠉⠉⠉⠁⠀⢸⠇⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⢀⣿⣦⣴⡶⣶⣦⣤⣾⣄⡀⠈⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⠾⠛⠛⠉⠉⠀⠀⠉⢷⡄⠉⠉⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣤⣤⣤⣤⣤⣿⣦⣤⣤⣤⣤⣤⣽⣿⣿⣿⣿⣿`);
rls.question(
  `\nYou are in front of the cabin... and follow the path forward 
  (enter any button to continue)\n`
);

let decisionWalk;
let decisionWalk2;
enemy = structuredClone(wolfFeral);
enemy.attack = attack;

do {
  console.clear();
  decisionWalk = rls
    .question(
      `\nAfter walking for some time you cannot shake off the feeling as if you're beeing followed.

Do you turn around and investigate or keep walking forward? (investigate/walk)\n`
    )
    .toLowerCase();
} while (decisionWalk !== "investigate" && decisionWalk !== "walk");

if (decisionWalk === "investigate") {
  console.clear();
  do {
    console.clear();
    decisionWalk2 = rls.question(`\nYou realize how dark it is in the woods... 

And in distance you see only a reflection of eyes staring in your direction...

Do you investigate further or walk away? (investigate/walk)\n`);
  } while (decisionWalk2 !== "investigate" && decisionWalk2 !== "walk");

  console.clear();
  console.log(wolfAscii);
  console.log(`It's clear now what's been following you...A FERAL WOLF!

The WOLF locks his eyes on you...
  
There's no escape now - prepare for battle!`);
  battleSequence();
}
function crossway() {
  // crossroads
}
