export function start(){
    const content = document.getElementById('root');
    let pokemonButton = document.getElementById('pokemon-button');
    let infoButton = document.getElementById('info-button');
    pokemonButton.className = 'button';
    infoButton.className = 'button';
    content.innerHTML = '';
    content.className = 'first-page';
    document.body.className = 'first';
    
   
    let Info = document.createElement("p");
    Info.className = 'Profile-info';
    Info.innerHTML = "Чернышев Владислав</br>Студент группы M3308";
    content.appendChild(Info);
 
}







