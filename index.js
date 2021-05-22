const farmAnimals = 'cow horse sheep pig chicken';

const sounds = {
  moo: `cow`,
  neigh: `horse`,
  baa: `sheep`,
  oink: `pig`,
  cluck: `chicken`
}

const { moo, neigh, baa, oink, cluck } = sounds;

const names = {
  bessie: `cow`,
  dolly: `sheep`,
  babe: `pig`,
  little: `chicken`
}

const { bessie, dolly, babe, little} = names;

const traditionalColor = {
  blackAndWhite: `cow`,
  black: `sheep`,
  pink: `pig`,
}

const { blackAndWhite, black, pink} = traditionalColor;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, i, v] = colors;

const [, , , , ,indg] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner} = muppet


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {song2, song4} = nestedMuppet.album.theMuppetMovie;

const {nestedJob, nestedPartner} = nestedMuppet;
