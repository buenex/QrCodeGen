function gerarQRCode() {
    var texto = document.getElementById("texto").value;
    var canvas = document.getElementById("qrcode");
    
    // Limpa o conteúdo do canvas
    canvas.innerHTML = "";
  
    // Define o tamanho do QR Code
    var tamanho = 200;
  
    // Cria um elemento de imagem
    var img = document.createElement("img");
  
    // Define a URL do QR Code
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=" + tamanho + "x" + tamanho + "&data=" + encodeURIComponent(texto);
  
    // Adiciona a imagem ao canvas
    canvas.appendChild(img);
  }
  
  document.getElementById("gerar").addEventListener("click", gerarQRCode);
  