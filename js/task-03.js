const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('ul');
//ul.style.listStyleType = "none";

function renderList() {
  const markup  =  images.map(({url, alt }) => {
    return `<li class="list" style="list-syle-type:none;" ><img src='${url}' alt='${alt}' width = "400" style="border-radius: 20%; border: inset 10px #DCDCDC  ; " /></li>`;
  
  }) // зробили массив
    .join() // зробили рядок
  ul.insertAdjacentHTML('afterend', markup) // мeтод додавання рядків  розмітку  
  
  console.log(markup);
}
 renderList()
