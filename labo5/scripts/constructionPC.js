/*Salutations à l'ouverture de la page*/

let nomUtilisateurTxt= prompt("Quel est vôtre nom?");
let bienvenuee= document.getElementById(bienvenue);
bienvenue.innerText= "Bonjour " + nomUtilisateurTxt + ", bienvenue sur la page de construction de PC.";
let zoneAffrichage= document.getElementById("blocResume");

/*Fonctions appelées sur clic*/


function ajouterMoboAMD() {
    let carteMereAMD= document.getElementById("moboAMD");
    let carteMereAMDCopie= carteMereAMD.cloneNode(true);
    carteMereAMDCopie.id= "choixMoboAMD";
    let carteMereAMDExist= document.getElementById("choixMoboAMD");
    let carteIntelExist= document.getElementById("choixMoboIntel");

    if (carteMereAMDExist == null && carteIntelExist == null) { 
        let zoneAffrichage= document.getElementById("blocResume");
        zoneAffrichage.appendChild(carteMereAMDCopie);
        carteMereAMD.classList.add("choixActif");

        //si AMD selectionner, Intel déselectionner
        let carteIntel= document.getElementById("moboIntel");
        carteIntel.classList.remove("choixActif");
    }
    else if(carteIntelExist != null)
    {
        zoneAffrichage.replaceChild(carteMereAMDCopie, carteIntelExist);
    }


  

   
}

function ajouterMoboIntel() {

    let carteIntel= document.getElementById("moboIntel");
    let carteIntelCopie= carteIntel.cloneNode(true);
    carteIntelCopie.id = "choixMoboIntel";
    let carteIntelExist= document.getElementById("choixMoboIntel");
    let carteMereAMDExist= document.getElementById("choixMoboAMD");    

     if (carteIntelExist == null && carteMereAMDExist == null) {
        zoneAffrichage.appendChild(carteIntelCopie);
        carteIntel.classList.add("choixActif");
    
        // si Intel selectionner, AMD déselectionner
        let carteMereAMD= document.getElementById("moboAMD");
        carteMereAMD.classList.remove("choixActif");

    }
    else if(carteIntelExist != null)
    {
        zoneAffrichage.replaceChild(carteIntelCopie, carteMereAMDExist);
    }
 



}

//processeur
function ajouterProcAMD() {

    let processAMD= document.getElementById("procAMD");
    let processAMDCopie= processAMD.cloneNode(true);
    processAMDCopie.id = "choixprocessAMD";
    let processAMDExist= document.getElementById("choixProcessAMD");

     if (processAMDExist == null) {
        let zoneAffrichage= document.getElementById("blocResume");
        zoneAffrichage.appendChild(processAMDCopie);
        processAMD.classList.add("choixActif");
    
        let processIntel= document.getElementById("procIntel");
        processIntel.classList.remove("choixActif");

    }
}

function ajouterProcIntel() {

    let processIntel= document.getElementById("procIntel");
    let processIntelCopie= processIntel.cloneNode(true);
    processIntelCopie.id = "choixProcessIntel";
    let processIntelExist= document.getElementById("choixProcessIntel");

     if (processIntelExist == null) {
        let zoneAffrichage= document.getElementById("blocResume");
        zoneAffrichage.appendChild(processIntelCopie);
        processIntel.classList.add("choixActif");
    
        
        let processAMD= document.getElementById("procAMD");
        processAMD.classList.remove("choixActif");

    }
}
//carte graphique
function ajouterGFXRadeon() {

    let CPradeon= document.getElementById("GFXradeon");
    let CPradeonCopie= CPradeon.cloneNode(true);
    CPradeonCopie.id = "choixCPradeon";
    let CPradeonExist= document.getElementById("choixCPradeon");

     if (CPradeonExist == null) {
        let zoneAffrichage= document.getElementById("blocResume");
        zoneAffrichage.appendChild(CPradeonCopie);
        CPradeon.classList.add("choixActif");
    
        // si Intel selectionner, AMD déselectionner
        let CPnvidia= document.getElementById("GFXnvidia");
        CPnvidia.classList.remove("choixActif");

    }
}

    function ajouterGFXNVidia() {

        let CPnvidia= document.getElementById("GFXnvidia");
        let CPnvidiaCopie= carteIntel.cloneNode(true);
        CPnvidiaCopie.id = "choixCPnvidia";
        let CPnvidiaExist= document.getElementById("choixCPnvidia");
    
         if (CPnvidiaExist == null) {
            let zoneAffrichage= document.getElementById("blocResume");
            zoneAffrichage.appendChild(CPnvidiaCopie);
            CPnvidia.classList.add("choixActif");
        
            // si Intel selectionner, AMD déselectionner
            let CPradeon= document.getElementById("GFXradeon");
            CPradeon.classList.remove("choixActif");
    
        }
    }

//mémoire vive
        function ajouterRAMRipjaws() {

            let ramRipJ= document.getElementById("ramRipjaws");
            let ramRipJCopie= ramRipJ.cloneNode(true);
            ramRipJCopie.id = "choixramRipJ";
            let ramRipJExist= document.getElementById("choixramRipJ");
        
             if (ramRipJExist == null) {
                let zoneAffrichage= document.getElementById("blocResume");
                zoneAffrichage.appendChild(ramRipJCopie);
                ramRipJ.classList.add("choixActif");
            
                // si Intel selectionner, AMD déselectionner
                let ramCorsair= document.getElementById("ramCorsair");
                ramCorsair.classList.remove("choixActif");
        
            }
        }


            function ajouterRAMCorsair() {

                let ramCorsair= document.getElementById("ramCorsair");
                let ramCorsairCopie= ramCorsair.cloneNode(true);
                ramCorsairCopie.id = "choixRamCorsair";
                let ramCorsairExist= document.getElementById("choixRamCorsair");
            
                 if (ramCorsairExist == null) {
                    let zoneAffrichage= document.getElementById("blocResume");
                    zoneAffrichage.appendChild(ramCorsairCopie);
                    ramCorsair.classList.add("choixActif");
                
                    // si Intel selectionner, AMD déselectionner
                    let ramRipJ= document.getElementById("ramRipjaws");
                    ramRipJ.classList.remove("choixActif");
            
                }
            }

