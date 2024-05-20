function toggleCV(card) {
    var cvSection = card.querySelector('.cv-section');
    if (cvSection.style.display === "none" || cvSection.style.display === "") {
        cvSection.style.display = "block";
    } else {
        cvSection.style.display = "none";
    }
}