/**
 * Created by satuk on 21.07.17.
 */
const threePerTwo = {
  text: '3 per 2',
  amount: 3,
};

const items = [
  {
    id: 1,
    name: 'Apples',
    price: 0.25,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pYkeB46y8ouauRE3OaQASNX8wfMAggrv2TftPrSFdPMJ6X53'
  },
  {
    id: 2,
    name: 'Oranges',
    price: 0.35,
    img: 'https://whydyoueatthat.files.wordpress.com/2011/12/oranges-vitamin-c-lg.jpg'
  },
  { id: 3, name: 'Bananas', price: 0.15, img: 'https://surrenderfast.files.wordpress.com/2015/02/banana3.jpg' },
  {
    id: 4,
    name: 'Papayas',
    price: 0.45,
    discount: threePerTwo,
    img: 'http://www.hawaiipapaya.com/wp-content/uploads/2015/01/cut-uncut-papayas.jpg'
  },
  {
    id: 5,
    name: 'Strawberries',
    price: 0.05,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhKfyUFqU81Stk_5CrhVamMiPfyw_sQKK-7pfK0ug8EzVVNe8'
  },
  {
    id: 6,
    name: 'Pear',
    price: 0.55,
    discount: threePerTwo,
    img: 'http://adelgazar.lifestyle.netdna-cdn.com/wp-content/uploads/2015/07/nutrientes-peras.jpg'
  },
  {
    id: 7,
    name: 'Avocado',
    price: 1.05,
    discount: threePerTwo,
    img: 'https://avocadosfrommexico.com/wp-content/uploads/2016/11/hmaimg2.png'
  },
  {
    id: 8,
    name: 'Watermelon',
    price: 0.25,
    discount: threePerTwo,
    img: 'https://cdn.authoritynutrition.com/wp-content/uploads/2016/08/four-watermelon-slices.jpg'
  },
  {
    id: 9,
    name: 'Honeymelon',
    price: 0.35,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dU8OSbfKhZGgzE_PtfPdfdr1X5MUydroSqK1a3BeWjo1Qsuj'
  },
  {
    id: 10,
    name: 'Tomatoe',
    price: 0.45,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg'
  },
  {
    id: 11,
    name: 'Fig',
    price: 0.15,
    discount: threePerTwo,
    img: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Fig2.jpg'
  },
  {
    id: 12,
    name: 'Pineapple',
    price: 0.75,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/220px-Pineapple_and_cross_section.jpg'
  },
];

export default items.reduce((acc, item) => Object.assign(acc, {[item.id]: item}), {});
