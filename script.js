async function fetchPlayers() {
  try {
    // Requisição para obter dados dos jogadores
    const response = await fetch("http://localhost:3000/players/");

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Algo não está certo com a response.");
    }

    const data = await response.json();

    // Cria o HTML para a tabela de jogadores
    const playerTableContainer = document.getElementById(
      "playerTableContainer"
    );
    let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Rank Level</th>
                        <th>Exp Points</th>
                        <th>Bio</th>
                        <th>Enemies Destroyed</th>
                        <th>Total Score</th>
                        <th>Highest Score</th>
                        <th>Coins Collected</th>
                        <th>Avatar Index</th>
                        <th>Color Index</th>
                    </tr>
                </thead>
                <tbody>
        `;

    // Adiciona cada jogador à tabela
    data.content.forEach((player) => {
      tableHTML += `
                <tr>
                    <td>${player.name}</td>
                    <td>${player.rankLevel}</td>
                    <td>${player.expPoints}</td>
                    <td>${player.bio}</td>
                    <td>${player.enemiesDestroyed}</td>
                    <td>${player.totalScore}</td>
                    <td>${player.highestScore}</td>
                    <td>${player.coinsCollected}</td>
                    <td>${player.avatarIndex}</td>
                    <td>${player.colorIndex}</td>
                </tr>
            `;
    });

    tableHTML += `
                </tbody>
            </table>
        `;

    playerTableContainer.innerHTML = tableHTML;
  } catch (error) {
    document.getElementById(
      "errorMessage"
    ).textContent = `Error: ${error.message}`;
  }
}
