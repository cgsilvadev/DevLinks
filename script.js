function toggleMode(){
    const html = document.documentElement;
    // Alterna entre o modo light e escuro da página.
    html.classList.toggle("light");
    
    // Pegar a tag img  
    const img = document.querySelector("#profile img");

    // Substituir o avatar.
    if(html.classList.contains('light')){
        // Se o modo for light-mode adiciona a imagem light.
        img.setAttribute("src", "./assets/avatar-light.png");
        img.setAttribute("alt", "Imagem de Mayk Brito sorrindo usando óculos escuros e camiseta preta com fundo azul e lilás.")
    } else {
        // Se o modo não for light-mode adiciona a imagem padrão.
        img.setAttribute("src", "./assets/avatar.png");
    }
}