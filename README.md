<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Curso JavaScript</title>

  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #e1bee7, #bbdefb);
      margin: 0;
      padding: 40px;
    }

    .contenedor {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .botones {
      margin-top: 30px;
      text-align: center;
    }

    button {
      background: linear-gradient(to right, #512da8, #7b1fa2);
      color: white;
      border: none;
      padding: 12px 24px;
      margin: 10px;
      font-size: 1em;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    button:hover {
      background: linear-gradient(to right, #7b1fa2, #512da8);
      transform: scale(1.05);
    }

    h1, h2 {
      transition: all 0.4s ease;
      padding: 15px;
      border-radius: 12px;
    }

    #resultado {
      margin-top: 20px;
      font-size: 1.1em;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <!-- Títulos -->
    <h1 id="titulo">JAVASCRIPT</h1>
    <h2 id="subtitulo">¡NO TE LO PUEDES PERDER!</h2>

    <!-- Resultado del cambio -->
    <p id="resultado"></p>

    <!-- Botones ABAJO -->
    <div class="botones">
      <button onclick="cambiarEstiloH1()">Cambiar estilo H1</button>
      <button onclick="cambiarEstiloH2()">Cambiar estilo H2</button>
    </div>
  </div>

  <script>
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
  </script>
</body>
</html>
