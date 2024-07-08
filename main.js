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

let name;
let confirm;
let mastery;
let player;

function enterAnyKey() {
  rls.question(`\n(Enter any key to continue)\n`);
}

let knight = {
  health: [80, 80],
  type: "physical",
  attackType: ["rusty sword", 10],
  evasion: 0,
  counter: 0,
  inventory: ["resurrection ankh"],
  enemiesDefeated: 0,
  atkImage: knightAsciiAtk,
};

let assassin = {
  health: [70, 70],
  type: "physical",
  attackType: ["dual rusty dagger", 10],
  evasion: 2,
  counter: 0,
  inventory: ["resurrection ankh"],
  enemiesDefeated: 0,
  atkImage: assassinAsciiAtk,
};

let wizard = {
  health: [65, 65],
  type: "magic",
  attackType: ["wind blast", 30],
  evasion: 0,
  counter: 0,
  inventory: ["resurrection ankh"],
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
  attackType: ["bite", 10],
  evasion: 2,
  counter: 0,
  atkImage: wolfAsciiAtk,
};

console.clear();

console.log(`
            ****************************************************************************
            *                                                                          *
            *                            C H R O N I C L E S                           *
            *                                                                          *
            *                                    O F                                   *
            *                                                                          *
            *                                A E T H E L                               *
            *                                                                          *
            ****************************************************************************
  `);

console.log(`
                                               ______
                                            .-"      "-.
                                           /            \\
                                          |              |
                                          |,  .-.  .-.  ,|
                                          | )(__/  \\__)( |
                                          |/     /\\     \\|
                                (@_       (_     ^^     _)
                                 ) \\_______\\__|IIIIII|__/__________________________
                           (_)@8@8{}<________|-\IIIIII/-|___________________________>
                                 )_/        \\          /
                                (@           \`--------\` 
`);

enterAnyKey();
console.clear();

console.log(`
       ...
You're finally awake! 

You were out for some time...`);
enterAnyKey();
console.clear();

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
  console.clear();
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
    console.clear();
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
  // potion use
  this.counter++;
  if (
    (this.type === "physical" && this.counter >= 1) ||
    (this.type === "magic" && this.counter >= 2)
  ) {
    let attackProbability = Math.floor(Math.random() * 10) + 1;
    if (this.type === "physical") this.counter--;
    if (this.type === "magic") this.counter -= 2;
    if (attackProbability >= 2 + enemyObject.evasion) {
      enemyObject.health[0] -= this.attackType[1];
      console.log(this.atkImage);
      console.log(
        `${this.name} attacked ${enemyObject.name} with ${this.attackType[0]}, dealing ${this.attackType[1]} damage.`
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
  isEnemyDefeated = false;
  while (player.health[0] > 0 && enemy.health[0] > 0) {
    let battleOrRun;
    do {
      if (
        player.health[0] <= player.health[1] / 3 &&
        player.inventory.includes("health potion")
      ) {
        console.log(`W A R N I N G:   L O W    H E A L T H
          (${player.health[0]}/${player.health[1]})`);
        let usePotionDecision = rls
          .question(
            `You have a HEALTH POTION (30hp) in your inventory. Use it now? (y/n)\n`
          )
          .toLowerCase();
        if (usePotionDecision == "y") {
          usePotion();
        }
      }
      battleOrRun = rls
        .question(`\nWhat do you do? Attack or try to run? (attack/run) \n`)
        .toLowerCase();
      console.clear();
    } while (battleOrRun !== "attack" && battleOrRun !== "run");

    if (battleOrRun === "attack") {
      player.attack(enemy);
      if (enemy.health[0] <= 0) {
        enterAnyKey();
        console.clear();
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
        console.log(`${enemy.name} has been DEFEATED!`);
        console.log(
          `\nHealth check: (${player.health[0]}/${player.health[1]})`
        );
        enterAnyKey();
        console.clear();
        player.enemiesDefeated++; // if two, level up
        if (player.enemiesDefeated >= 3) {
          player.enemiesDefeated = 0;
          player.health[1] += 5;
          player.health[0] = player.health[1];
          console.log(`
            * * * * * * * * * * * *             
            *  L E V E L   U P !  *
            * * * * * * * * * * * *             

            -> Health restored <-
            -> Max Health +5   <-
            (${player.health[0]} / ${player.health[1]})`);
        }
        isEnemyDefeated = true;
        return;
      }
    } else if (battleOrRun === "run") {
      player.counter = 0;
      let probability = Math.floor(Math.random() * 10) + 1;
      if (probability > 5 - enemy.evasion / 2) {
        console.log(`You successfully ran away from the enemy.`);
        enterAnyKey();
        console.clear();
        return;
      } else {
        console.log(`The enemy doesn't allow you to escape.`);
      }
    }

    rls.question(
      "\nNow prepare yourself, the enemy's attacking back! (enter any key to continue)"
    );
    console.clear();
    enemy.attack(player);
    if (player.health[0] <= 0) {
      console.clear();
      defeatOrDeath();
      return;
    }
  }
}

function defeatOrDeath() {
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
  rls.question(`(Enter any key to continue...)`);
  console.log(` 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `); // alternative to console.clear()
  if (player.inventory.includes("resurrection ankh")) {
    console.log(`
        ...
    What's this???
        ...`);
    console.log(`

       .d88b.
       88  88
       \`8bd8'
        \`88'
    g888SEAL888g
         88
         88
         88
        d88b
       d8888b
`);
    player.health[0] = player.health[1];
    console.log(`The RESURRECTION ANKH from your inventory triggers!

  You are brought back to life with full health! (${player.health[0]}/${player.health[1]})
  
  The bright aura has scared away the enemy!
  
  You are safe again.`);
    player.inventory.splice(player.inventory.indexOf("resurrection ankhh"), 1);
  } else {
    console.log(`Your adventure ends here, traveler.`);
    console.log(`
              ...
             ;::::;
           ;::::; :;
         ;:::::'   ;
        ;:::::;     ;
       ,:::::'       ;           OOO\\
       ::::::;       ;          OOOOO\\
       ;:::::;       ;         OOOOOOOO
      ,;::::::;     ;'         / OOOOOOO
    ;:::::::::\`. ,,,;.        /  / DOOOOOO
  .';:::::::::::::::::;,     /  /     DOOOO
 ,::::::;::::::;;;;::::;,   /  /        DOOO
;\`::::::\`'::::::;;;::::: ,#/  /          DOOO
:\`:::::::\`;::::::;;::: ;::#  /            DOOO
::\`:::::::\`;:::::::: ;::::# /              DOO
\`:\`:::::::\`;:::::: ;::::::#/               DOO
 :::\`:::::::\`;; ;:::::::::##                OO
 ::::\`:::::::\`;::::::::;:::#                OO
 \`:::::\`::::::::::::;'\`:;::#                O
  \`:::::\`::::::::;' /  / \`:#                  
   ::::::\`:::::;'  /  /   \`#
`);
    rls.question(`TRY AGAIN?`);
    process.exit();
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
        `There's a cosy-looking fireplace still lit. 
        You think to yourself: "a quick rest by the fire doesn't seem like a bad idea..." 
        \nDo you rest next to the fireplace or exit the cabin? (rest/exit)\n`
      )
      .toLowerCase();
    console.clear();
  } while (decision !== "rest" && decision !== "exit");

  if (decision === "rest") {
    player.health[0] = player.health[1];
    console.log(
      `\nThe warmth of the fire and resting after the tough battle replenish your energy. You are again at full health!`
    );
    enterAnyKey();
    console.clear();
  }
}

// if not enter or run continue out of the cabin

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
    decisionWalk2 = rls
      .question(
        `\nYou realize how dark it is in the woods... 

And in distance you see only a reflection of eyes staring in your direction...

Do you investigate further or walk away? (investigate/walk)\n`
      )
      .toLowerCase();
  } while (decisionWalk2 !== "investigate" && decisionWalk2 !== "walk");

  console.clear();
  console.log(wolfAscii);
  console.log(`It's clear now what's been following you...A FERAL WOLF!

The WOLF locks his eyes on you...
  
There's no escape now - prepare for battle!`);
  battleSequence();
}

if (isEnemyDefeated == true) {
  decisionWalk = "";
  console.log(`Previously a living skeleton attacked me, now a feral wolf... 

what could be causing this disturbance in the land?`);
  do {
    decisionWalk = rls
      .question(`\nInspect the wolf's corpse or go forward? (inspect/walk) \n`)
      .toLowerCase();
    console.clear();
  } while (decisionWalk !== "inspect" && decisionWalk !== "walk");
  if (decisionWalk == "inspect") {
    console.log(`You notice the wolf has a colar with a vial attached to it. `);
    player.inventory.push("health potion");
    console.log(`
   _         
 .'~'. 
 : h : 
 :___:
`);
    console.log(`HEALTH POTION (30hp) has been added to your inventory!`);
    do {
      decision = false;
      decision = rls
        .question(
          `Your health is at (${player.health[0]}/${player.health[1]}). 
        Do you want to use the potion now or save it for later? (use/save)\n`
        )
        .toLowerCase();
      if (decision == "use") {
        usePotion();
      }
    } while (decision !== "use" && decision !== "save");
    enterAnyKey();
    console.clear();
    console.log(
      `Why would a wolf have a colar? 
      
      Was this once someone's dog? 
      
             Has it mutated into a monster?`
    );
    enterAnyKey();
  }
}

function usePotion() {
  player.inventory.splice(player.inventory.indexOf("health potion"), 1);
  player.health[0] += 30;
  player.health[0] > player.health[1]
    ? (player.health[0] = player.health[1])
    : player.health[0];
  console.log(`Your health is at (${player.health[0]}/${player.health[1]}).`);
}

let isCemetaryComplete = false;
function crossway() {
  decision = false;
  console.clear();
  console.log(`You arrive to a path crossing`);
  console.log(`
⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠻⠿⢿⣿⣿⣿⣿⡿⠿⠟⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⢸⡇⢸⡇⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⣄⠀⠀⠈⠛⢿⣿⣿⣿⣿⣶⣾⡇⢸⣷⣶⣿⣿⣿⣿⡿⠛⠁⠀⠀⣠⣾⣿
⣿⣿⣿⣷⣄⠀⠀⠀⠈⠻⢿⣿⣿⣿⡇⢸⣿⣿⣿⡿⠟⠁⠀⠀⠀⣠⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠙⠻⣿⣷⣾⣿⠟⠋⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠈⠛⠛⠁⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣯⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣽⣿⣿⣿⣿⣿
    `);
  console.log(`Upon close inspection, you notice the signs:
    <= CEMETARY      WILDLIFE SANCTUARY =>`);
  enterAnyKey();
  if (!player.inventory.includes("pendant")) {
    console.clear();
    console.log(
      `Before you decide where to go next, you notice a pendant on the floor.
      
      The pendant has initials "R.B." carved in.`
    ); // REGINA BLACKWOOD
    console.log(`
                o--o--=g=--o--o     
               /      .'       \\
               o      '.       o
                \\             /
                 o           o
                  \\         /
                   o       o
                    \\     /
                     o   o
                      \\_/
                       =
                      .^.
                     '   '
                     '. .'
                       !   
      `);
    console.log(`\n The pendant has been added to your inventory`);
    player.inventory.push("pendant");
    enterAnyKey();
  }
  do {
    console.clear();
    decision = rls
      .question(
        `\”Do you continue your way LEFT (GRAVEYARD) or RIGHT (WILDLIFE SANCTUARY)? (left/right)\n`
      )
      .toLowerCase();
  } while (decision !== "left" && decision !== "right");

  if (decision == "left") {
    goLeft();
  }
  if (decision == "right") {
    goRight();
  }
}

function goRight() {
  console.log(`
    ...
    
    You selected the right path and are going towards the wildlife sanctuary...
    ...`);
  enterAnyKey();
  console.clear();

  if (isCemetaryComplete == false) {
    console.log(
      `However as soon as you make a few steps forward,
      a tornado is formed - preventing you to continue!`
    );
    console.log(`
      ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣠⣤⠶⢛⣉⣠⣤⣶⠶⠾⠿⠿⠿⠿⠿⠿⠿⠶⣶⣤⣄⣀⠀⠀⠀⠀
⠀⢀⣴⡿⢋⣥⣾⡿⠛⠉⣀⣀⣤⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠉⠻⣿⣿⣦⡀⠀
⠀⣾⣿⣵⣿⣿⣫⣴⠾⠛⠋⠉⠉⠀⠀⠀⠀⠉⠉⠉⠛⠻⠷⣦⣄⣿⣿⣿⣧⠀
⠀⢻⣿⣿⣿⣿⣏⠁⠀⢀⣀⣤⣴⡶⠶⠶⠶⠶⠶⣶⣤⣤⣀⣤⣿⡿⣿⣿⠇⠀
⠀⠀⠙⠻⢿⣿⣿⣷⣶⣿⣏⣁⣀⣀⣀⣀⣀⣠⣤⣴⣶⡿⠟⢋⣡⣾⡿⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠿⠿⠿⠛⠛⠛⠛⠉⣉⣠⣴⠾⠟⠋⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠑⠶⣤⣄⣀⣀⠀⠀⠒⠒⠂⠉⠉⠉⢀⣀⣠⣤⠖⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡀⠀⠉⠙⠛⠻⠿⠿⢿⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠶⣶⣶⣿⣿⠿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠐⣦⣤⣄⣀⣀⣠⣤⣤⡶⠚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠋⢉⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣈⠙⠻⠿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣶⣶⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      `);
    console.log(`How is that possible?? It definitely stinks of magic!`);
    console.log(`You look around and in the distance you see a silhouette...`);
    console.log(
      `However for now we don't have a choice, we need to go back...`
    );
    enterAnyKey();
    crossway();
  }
}

function goLeft() {
  console.log(`
...

You selected the left path and are going towards the graveyard...
...
    `);
  enterAnyKey();
  console.clear();

  if (isCemetaryComplete == false) {
    console.log(`
      ***************************************************************************
      *                                                                         *
      *                            C H A P T E R  2:                            *
      *                                                                         *
      *                        T H E    G R A V E Y A R D                       *
      *                                                                         *
      ***************************************************************************
`);
    console.log(`
                                  _____  _____
                                <     \`/     |
                                 >          (
                                |   _     _  |
                                |  |_) | |_) |
                                |  | \\ | |   |
                                |            |
                 ______.______%_|            |__________  _____
               _/                                       \\|     |
              |               O U R  B E L O V E D              <
              |_____.-._________              ____/|___________|
                                | * 05/07/02 |
                                | + 19/10/57 |
                                |            |
                                |            |
                                |   _        <
                                |__/         |
                                 / \`--.      |
                               %|            |%
                           |/.%%|          -< @%%%
                           \`\\%\\\`@|     v      |@@%@%%    - mfj
                         .%%%@@@|%    |    % @@@%%@%%%%
                    _.%%%%%%@@@@@@%%_/%\\_%@@%%@@@@@@@%%%%%%
      `);
    enterAnyKey();
    console.clear();
  }
  console.log(`
                  _  /)
                 mo / )
                 |/)\)
                  /\\_
                  \\__|=
                 (    )
                 __)(__
_________+______/      \\______+__________
  __--   |       R.I.P.       |-_-- __
_-- -    | ___ __________ ___ |
-_-- __  || | | | {|    /| | || __---  -_
 --__-   || | | | {|   /|| | ||--        -
         || | | | {|  /||| | ||__--
 __-- -__|| | | | {| |}||| | ||--   __--
         ||_|_|_|_{| |}|||_|_||  -__
 --__-  -|| | | | {& |}||/ | ||---   __--
         || | | | {| |}|/| | ||-__
--   __--|| | | | {| |}/|| | ||__-- -__
  --     || | | | {| &}||| | ||   __
---   __-|| | | | {| |}||| | ||_---__-  --
 -  -_   || | | | {| |}||| | || --
 __      || | | | {| |}||| | ||_--__-   _---
_________||_|_|_|_{| |}|||_|_||______________
                     |}|/
                     |}/
                     |/
`);
  console.log(`You arrive to the cemetary gate.
    
You feel a dark aura surrounding you...`);
  enterAnyKey();
  console.clear();
  enemy = structuredClone(skeleton);
  enemy.attack = attack;
  console.log(
    `As you enter through the gate... a skeleton rushes towards you!`,
    skeletonAscii,
    `You enter battle!`
  );
  battleSequence();

  console.log(`You continue your way forward - which leads you to a church.`);
  console.log(`
                  _|_
                   |
                  / \\\\
                 //_\\\\\\\\
                //(_)\\\\\\\\
                 |/^\\\\| 
       ,%%%%     // \\\\\\\\    ,@@@@@@@,
     ,%%%%/%%%  //   \\\\\\\\ ,@@@\\\\@@@@/@@,
 @@@%%%\\\\%%//%%%// === \\\\\\\\ @@\\\\@@@/@@@@@
@@@@%%%%\\\\%%%%%// =-=-= \\\\\\\\@@@@\\\\@@@@@@;%#####,
@@@@%%%\\\\%%/%%//   ===   \\\\\\\\@@@@@@/@@@%%%######,
@@@@@%%%%/%%//|         |\\\\\\\\@\\\\\\\\//@@%%%%%%#/####
'@@@@@%%\\\\/%~ |         | ~ @|| %\\\\\\\\//%%%#####;
  @@\\\\//@||   |  __ __  |    || %%||%%'######
   '@||  ||   | |  |  | |    ||   ||##\\\\\\\\//####
     ||  ||   | | -|- | |    ||   ||'#||###'
     ||  ||   |_|__|__|_|    ||   ||  ||
     ||  ||_/\\  =======  \`\\\\__||_._||  ||
   __||_/\\      =======            \`\\\\_||___
`);
  enterAnyKey();
  console.clear();
  console.log(`The church seems to be empty and abandoned.`);
  console.log(
    `However as you inspect further, you notice something on the church altar.`
  );
  decision = null;
  if (mastery == "knight") {
    console.log(`
                         .                                               
                     /   ))     |\\\\         )               ).           
               c--. (\\\\  ( \`.    / )  (\\\\   ( \`.     ).     ( (           
               | |   ))  ) )   ( (   \`.\`.  ) )    ( (      ) )          
               | |  ( ( / _..----.._  ) | ( ( _..----.._  ( (           
 ,-.           | |---) V.'-------.. \`-. )-/.-' ..------ \`--) \\\\._        
 | /===========| |  (   |      ) ( \`\\\`-.\\\`\\/'.-''           (   ) \`\`-._   
 | | / / / / / | |--------------------->  <-------------------------_>=-
 | \\\\===========| |                 ..-'./\\\\.\\\`-..                _,,-'    
 \`-'           | |-------._------''_.-'----\\\`-._\\\`\\\`------_.-----'         
               | |         \`\`----''            \`\`----''                  
               | |                                                       
               c--\`
`);
    console.log(`It seems to be a sword, which radiates a dark aura.`);
  } else if (mastery == "assassin") {
    console.log(`
       /\\
      //\\\\
     //  \\\\
 ^   \\\\  //   ^
/ \\   )  (   / \\
) (   )  (   ) (
\\  \\_/ /\\ \\_/  /
 \\__  _)(_  __/
    \\ \\  / /
     ) \\/ (
     | /\\ |
     | )( |
     | )( |
     | \\/ |
     )____(
    /      \\
    \\______/      
      `);
    console.log(`It seems to be two daggers, which radiate a dark aura.`);
  } else {
    console.log(`
         _______________
    ()==(              (@==()
         '______________'|
           |             |
           |             |
         __)_____________|
    ()==(               (@==()
         '--------------'
`);
    console.log(`It seems to be a scroll, which radiates a dark aura.`);
  }
  do {
    decision = rls.question(`\nDo you pick up the item? (y/n)\n`).toLowerCase();
  } while (decision !== "y" && decision !== "n");
  if (decision == "y") {
    switch (mastery) {
      case "knight":
        console.log(`You equip the dark blade.`);
        console.log(`MAX Health -15`);
        console.log(`Attack +5`);
        player.health[1] -= 15;
        player.attackType[1] += 5;
        player.attackType[0] = "dark blade";
        break;
      case "assassin":
        console.log(`You equip the dark daggers.`);
        console.log(`MAX Health -10`);
        console.log(`Attack +5`);
        player.health[1] -= 10;
        player.attackType[1] += 5;
        player.attackType[0] = "dual dark daggers";

        break;
      case "wizard":
        console.log(`You study the scroll of dark arts.`);
        console.log(`MAX Health -5`);
        console.log(`Attack +10`);
        player.health[1] -= 5;
        player.attackType[1] += 10;
        player.attackType[0] = "dark magic blast";
        break;
    }
    enterAnyKey();
    console.log(`You feel the energy of your new weapon - you regain health.`);
    player.health[0] = player.health[1];
    console.log(`Health: ${player.health[0]}/${player.health[1]}`);
  }
}

crossway();
