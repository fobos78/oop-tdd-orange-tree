let orange = new Orange();
let tree = new OrangeTree();
const reportsBlock = document.getElementById('reports');

// Позвольте сезонам пройти, пока дерево не будет готово приносить плоды.
while (!tree.isMature()) {
  tree.passGrowingSeason();
}


//Сообщайте ежегодную информацию об урожае за время жизни дерева.
while (tree.isDead()) {
  tree.passGrowingSeason();
  let harvestedOranges = [];

  while (tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange())
  }

  let averageOrangeDiameter = harvestedOranges.reduce((sum, el) => sum + el.diameter, 0) / harvestedOranges.length
  // averageOrangeDiameter = Необходимо рассчитать средний диаметр урожая.


  const report = document.createElement('div');
  report.innerHTML = `
      <b>HARVEST_REPORT</b>
      <br/>
      YEAR ${tree.age} REPORT
      <br/>
      Height: ${tree.height} feet.
      <br/>
      Harvest: ${harvestedOranges.length} oranges with an average
      <br/>
      diameter of ${averageOrangeDiameter.toFixed(1)} inches.
      <br/>
      <br/>
      -----------------------
      <br/>
      <br/>
    `;
  reportsBlock.appendChild(report);

}

const lastReport = document.createElement('div');
lastReport.innerHTML = '<h2>Alas, the tree, she is dead!</h2>'
reportsBlock.appendChild(lastReport)
