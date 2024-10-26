
document.getElementById('generateButton').addEventListener('click', function() {
    const resultsContainer = document.getElementById('resultsContainer');
    const button = document.getElementById('generateButton');

    if (resultsContainer.style.display === 'none') {
      function rollStats() {
        const rolls = [];
        for (let i = 0; i < 6; i++) {
          const diceRolls = [];
          for (let j = 0; j < 4; j++) {
            diceRolls.push(Math.floor(Math.random() * 6) + 1);
          }
          diceRolls.sort((a, b) => a - b);
          const lowestRoll = diceRolls[0];
          const sumOfTopThree = diceRolls[1] + diceRolls[2] + diceRolls[3];
          rolls.push({ dice: diceRolls, sum: sumOfTopThree, lowest: lowestRoll });
        }
        return rolls;
      }

      const set1 = rollStats();
      const set2 = rollStats();

      const set1Container = document.getElementById('set1');
      const set2Container = document.getElementById('set2');

      set1Container.innerHTML = '<div class="set-title">Set 1</div>';
      set2Container.innerHTML = '<div class="set-title">Set 2</div>';

      set1.forEach(stat => {
        const statLine = document.createElement('div');
        statLine.className = 'stat-line';
        let lowRollHighlighted = false;
        stat.dice.forEach(dice => {
          const diceElement = document.createElement('span');
          diceElement.className = 'dice-roll';
          diceElement.textContent = dice;
          if (dice === stat.lowest && !lowRollHighlighted) {
            diceElement.classList.add('low-roll');
            lowRollHighlighted = true;
          }
          statLine.appendChild(diceElement);
        });
        const sumElement = document.createElement('span');
        sumElement.textContent = ` = ${stat.sum}`;
        statLine.appendChild(sumElement);
        set1Container.appendChild(statLine);
      });

      set2.forEach(stat => {
        const statLine = document.createElement('div');
        statLine.className = 'stat-line';
        let lowRollHighlighted = false;
        stat.dice.forEach(dice => {
          const diceElement = document.createElement('span');
          diceElement.className = 'dice-roll';
          diceElement.textContent = dice;
          if (dice === stat.lowest && !lowRollHighlighted) {
            diceElement.classList.add('low-roll');
            lowRollHighlighted = true;
          }
          statLine.appendChild(diceElement);
        });
        const sumElement = document.createElement('span');
        sumElement.textContent = ` = ${stat.sum}`;
        statLine.appendChild(sumElement);
        set2Container.appendChild(statLine);
      });

      resultsContainer.style.display = 'flex';
      button.textContent = 'CANCELAR DADOS';
    } else {
      resultsContainer.style.display = 'none';
      button.textContent = 'GENERAR STATS';
    }
  });