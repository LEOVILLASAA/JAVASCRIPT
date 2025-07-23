const estilosH1 = [
  { background: "#ffeb3b", color: "#3e2723", font: "Comic Sans MS" },
  { background: "#03a9f4", color: "#fff", font: "Georgia" },
  { background: "#4caf50", color: "#212121", font: "Verdana" },
  { background: "#f44336", color: "#fff", font: "Impact" },
  { background: "#9c27b0", color: "#fffde7", font: "Arial Black" }
];

const estilosH2 = [
  { background: "#ffc107", color: "#1a237e", font: "Courier New" },
  { background: "#00bcd4", color: "#263238", font: "Times New Roman" },
  { background: "#8bc34a", color: "#004d40", font: "Tahoma" },
  { background: "#e91e63", color: "#fff", font: "Lucida Console" },
  { background: "#ff5722", color: "#ffffff", font: "Garamond" }
];

function cambiarEstiloH1() {
  const h1 = document.getElementById("titulo");
  const estilo = estilosH1[Math.floor(Math.random() * estilosH1.length)];
  h1.style.backgroundColor = estilo.background;
  h1.style.color = estilo.color;
  h1.style.fontFamily = estilo.font;
  document.getElementById("resultado").innerText = "🎨 ¡Estilo H1 aplicado!";
}

function cambiarEstiloH2() {
  const h2 = document.getElementById("subtitulo");
  const estilo = estilosH2[Math.floor(Math.random() * estilosH2.length)];
  h2.style.backgroundColor = estilo.background;
  h2.style.color = estilo.color;
  h2.style.fontFamily = estilo.font;
  document.getElementById("resultado").innerText = "🎨 ¡Estilo H2 aplicado!";
}
