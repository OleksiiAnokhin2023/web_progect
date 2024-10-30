document.addEventListener('DOMContentLoaded', function() {
    const weaponTypeSelect = document.getElementById('weapon-type')as HTMLSelectElement;

    const infantryTable = document.getElementById('infantry-table')as HTMLElement;
    const aviationTable = document.getElementById('aviation-table')as HTMLElement;
    const tanksTable = document.getElementById('tanks-table')as HTMLElement;
    const artilleryTable  = document.getElementById('altilery-table')as HTMLElement;

    function filterWeapons() {
        const weaponType = weaponTypeSelect.value;

        
        infantryTable.style.display = 'none';
        aviationTable.style.display = 'none';
        tanksTable.style.display = 'none';
        artilleryTable.style.display = 'none';

        
        if (weaponType === 'infantry') {
            infantryTable.style.display = 'block';
        } else if (weaponType === 'aviation') {
            aviationTable.style.display = 'block';
        } else if (weaponType === 'tanks') {
            tanksTable.style.display = 'block';
        }
        else if (weaponType === 'altilery') {
            artilleryTable.style.display = 'block';
        }
    }


    weaponTypeSelect.addEventListener('change', filterWeapons);


        
        const modal = document.getElementById('image-modal') as HTMLElement;
        const modalImage = document.getElementById('modal-image') as HTMLImageElement;
        const closeModal = document.getElementById('close-modal') as HTMLElement;
    
        document.querySelectorAll('td img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImage.src = (img as HTMLImageElement).src;
            });
        });
    
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.style.display = 'none';
        });

});
