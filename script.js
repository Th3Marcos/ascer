function iniciarGaleria(id) {
    const galeria = document.querySelector(`#${id}`);
    const imagens = galeria.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
        imagens[index].classList.remove("active");
        index = (index + 1) % imagens.length;
        imagens[index].classList.add("active");
    }, 3000);
}

iniciarGaleria("galeria-horta");
iniciarGaleria("galeria-saberes");
iniciarGaleria("galeria-timefc");
iniciarGaleria("carrossel-final");