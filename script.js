const url = 'https://randomuser.me/api/';
// .user-img, .user-first, .user-last, .user-gender, .user-email, .user-phone

const userImg = document.querySelector('.user-img');
const userFirst = document.querySelector('.user-first');
const userLast = document.querySelector('.user-last');
const userGender = document.querySelector('.user-gender');
const userEmail = document.querySelector('.user-email');
const userPhone = document.querySelector('.user-phone');
const btnClass = document.querySelector('.btn-class');

function myfun(){
    fetch(url)
    .then((result) =>{
        return result.json();
    })
    .then((result)=>{
        
        const Ugender = result.results[0].gender;
        userGender.innerHTML = '';
        userGender.append(Ugender);

        const uemail = result.results[0].email;
        userEmail.innerHTML = '';
        userEmail.append(uemail);

        const uphone = result.results[0].phone;
        userPhone.innerHTML = '';
        userPhone.append(uphone);
    
        const uimg = result.results[0].picture.medium;
        userImg.innerHTML='';
        userImg.src = uimg;
        

        const Ulast = result.results[0].name.last;
        userLast.innerHTML = '';
        userLast.append(Ulast);

        const Ufirst = result.results[0].name.first;
        userFirst.innerHTML = '';
        userFirst.append(Ufirst);
        
    })

}
document.addEventListener('DOMContentLoaded',myfun)
btnClass.addEventListener('click',myfun);








// console.log(result.results[0].gender);
        // console.log(result.results[0].name.first);
        // console.log(result.results[0].name.last);
        // console.log(result.results[0].email)
        // console.log(result.results[0].picture.thumbnail);
        // console.log(result.results[0].phone);

// name, gender, email , phone number picture

    