let debounce = null;
 
function typeHandler() {
  if(debounce){
    clearTimeout(debounce);
  };
  debounce = setTimeout(()=>{
    if(inputTag.value.trim() == ''){
      inputTag.value = '';
      return
    }
    addOnType(inputTag.value.trim(),inputTag);
  },300);
};

//TODO: 코드 수정이 필요하다.