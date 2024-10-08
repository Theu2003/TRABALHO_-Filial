// Função para carregar os materiais salvos do Local Storage
function loadMaterials() {
    const materials = JSON.parse(localStorage.getItem('materials')) || [];
    const materialList = document.getElementById('materialList');
    
    materials.forEach(material => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${material.url}" target="_blank" rel="noopener noreferrer">${material.title}</a>`;
        materialList.appendChild(listItem);
    });
}

// Adiciona evento ao formulário para salvar novos materiais
document.getElementById('materialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('materialTitle').value;
    const url = document.getElementById('materialURL').value;

    if (title && url) {
        const newMaterial = { title, url };
        const materials = JSON.parse(localStorage.getItem('materials')) || [];
        materials.push(newMaterial);
        localStorage.setItem('materials', JSON.stringify(materials));

        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`;
        document.getElementById('materialList').appendChild(listItem);
        
        document.getElementById('materialForm').reset();
    }
});

function scrollToMaterials() {
    document.getElementById('materials').scrollIntoView({ behavior: 'smooth' });
}

window.onload = loadMaterials;
