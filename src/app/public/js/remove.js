let table = document.getElementById('tb_livros');

table.addEventListener('click', (event) => {
 
  let element = event.target;  
   
   if (element.dataset.type == 'remove') {
     let livroId = element.dataset.ref;
     fetch(`http://localhost:3000/livros/${livroId}`, { method: 'DELETE' })
     .then(resposta => {
       let tr = element.closest(`#livro_${livroId}`);
           tr.remove();
     }).catch(erro => console.log(erro));
   }
});