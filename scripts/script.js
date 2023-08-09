$(document).ready(function(){
   // add input
   $('#add').click(function () {
      let div = document.createElement('div')
      div.classList.add('inputs')
      let input = document.createElement('input')
      input.setAttribute('type','text')
      let button = document.createElement('button')
      button.classList.add('btn')
      button.classList.add('delete')
      button.textContent = 'delete'
      // add children
      div.appendChild(input)
      div.appendChild(button)
      document.querySelector('.form-content').appendChild(div) 
      //function for new elements
      $('.delete').click(function () {
        $(this.parentElement).remove()
      })
   })
   // ****
   $('.delete').click(function () {
        $(this.parentElement).remove()
   })
});

