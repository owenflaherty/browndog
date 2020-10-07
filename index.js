const adjectives = [
  'Put', 'Your', 'Words', 'Here', 'Brown', 'Red', 'Pink'
]
const nouns = [
  'Put', 'Your', 'Words', 'Here', 'Dog', 'Cat', 'Sheep'
]

for (let i = 0; i < (process.argv[2] === undefined ? 1 : process.argv[2]); i++) {
  const a = adjectives[Math.floor(Math.random() * adjectives.length)]
  const n = nouns[Math.floor(Math.random() * nouns.length)]
  console.log(`${a}${n}${Math.round(Math.random() * 90) + 10}`)
}
