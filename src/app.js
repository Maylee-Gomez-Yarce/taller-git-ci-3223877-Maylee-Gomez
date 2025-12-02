export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAgregar');
  if (btn) {
    btn.addEventListener('click', () => {
      const numero = document.querySelectorAll('#lista li').length + 1;
      agregarItem(`Item ${numero}`);
    });
  }
});
