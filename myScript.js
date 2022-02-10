const myForm =document.querySelector('#searchForm');
const myBtn = document.querySelector('#submitBtn');
const titleField=document.getElementById("title");

myBtn.addEventListener('click',()=>{
    console.log("hjekh")
});

myForm.addEventListener('submit',async(event)=>{
    event.preventDefault();
    console.log(titleField.value);

    // const res= await axios.get("url");
});

