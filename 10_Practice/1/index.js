document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullSizeUrl = this.getAttribute('data-full-size');
            modalImage.src = fullSizeUrl;
            modal.style.display = 'block';
        });
    });
    
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
});