const dropdown = document.getElementById('myDropdown');
const selectedBtn = dropdown.querySelector('.dropdown-selected');
const selectedText = document.getElementById('selectedText');
const items = dropdown.querySelectorAll('.dropdown-item');

//1.click vao than hien thi de bat tat menu
selectedBtn.addEventListener('click',(e)=>{
    //ngan chan su kien noi bot len document gap dong menu lap tuc
    e.stopPropagation();
    dropdown.classList.toggle('open');
});

//2.lap qua cac lua chon de gan su kien chon item
items.forEach(item =>{
    item.addEventListener('click',(e)=>{
        e.stopPropagation();

        //cap nhat van ban len thanh hien thi
        selectedText.innerText=item.innerText;
        //don dep:xoa trang thau selected cu cua cac item khac
        items.forEach(i => i.classList.remove('selected'));

        //danh dau item hien tai la dc chon
        item.classList.add('selected');

        //dong menu lai
        dropdown.classList.remove('open');
    });
});
//3.dong menu khi nguoi dung click bat ki vi tri nao ngoai dropdown
document.addEventListener('click', (e) =>{
    //neu diem click khng nam trong khoi dropdown thi dong menu
    if(!dropdown.contains(e.target)){
        dropdown.classList.remove('open');
    }
});
