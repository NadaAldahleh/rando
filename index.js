const MUPPETS = ["Kermit", "Miss Piggy", "Fozzie", "Animal", "Scooter", "Skeeter", "Rowlf", "Gonzo", "Bunsen", "Beaker"]

exports.randomMuppet = (req, res) => {
  const muppet = MUPPETS[Math.floor(Math.random()*MUPPETS.length)]
  console.log(`Look at this ----->${muppet}`)
  res.send(`--->${muppet}`)
}
