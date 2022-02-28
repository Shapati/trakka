const input = document.querySelector('input')
const border = document.querySelector('.sectionbox')
const error = document.querySelector('.effect')

input.addEventListener('keyup',()=>{
 
  const value=input.value;

  

  if(value.includes('.com')  && value.includes('@')){
    border.style.border="1px dotted #57BD82"
    error.style.display="none"
  }else{
    border.style.border="1px dotted red"
    error.style.display="block"
    
  }
})