document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('share-modal-trigger');

  if (!trigger) return;

  trigger.addEventListener('click', () => {
    const dialog = document.getElementById('share-modal');
    if (dialog) {
      dialog.style.display = 'block';
    }
  });
});
