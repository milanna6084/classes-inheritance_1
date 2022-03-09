// TODO: write your code here

import Swordsman from './character/Swordsman';
import Bowerman from './character/Bowerman';
import Daemon from './character/Daemon';
import Zombie from './character/Zombie';
import Magician from './character/Magician';
import Undead from './character/Undead';

const bowerman = new Bowerman('Legolas');
const swordman = new Swordsman('Aragorn');
const daemon = new Daemon('Balrog');
const undead = new Undead('');
const zombie = new Zombie('Shaun');
const wizard = new Magician('Gandalf');

console.log(bowerman, swordman, daemon, undead, zombie, wizard);
