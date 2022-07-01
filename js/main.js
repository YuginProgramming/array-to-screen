// model 
const smartphone = [
   { Model: 'Motorola E7', Price: 4699, Memory: 64, Color: 'blue' },
   { Model: 'Xiaomi 11T', Price: 15999, Memory: 256, Color: 'gray' },
   { Model: 'Samsung M526', Price: 14500, Memory: 128, Color: 'black' },
   { Model: 'Samsung G998', Price: 35400, Memory: 128, Color: 'blue' },
   { Model: 'Samsung G780', Price: 18900, Memory: 256, Color: 'gray' },
];


const button = document.querySelector('button');
   button.addEventListener('click', ev => {
      smartphone.sort((a, b) => {
         if(a.Price < b.Price ) return -1;
         if(a.Price > b.Price ) return 1;
         if(a.Price === b.Price ) return 0;
      });

   }
   );

const render = () => {
   const rootEl = document.querySelector('.content');

   const table = document.createElement('table');
   table.insertAdjacentHTML('beforeend', `
      <table>
      <thead>
         <tr>
            <td>Model</td>
            <td>Price</td>
            <td>Memory</td>
            <td>Color</td>
         </tr>
      </thead>
      </table>
   `);

   rootEl.appendChild(table);

   smartphone.forEach(el => {
      if(el.Model) {
         const html = (`
         <tr>
         <td>${el.Model}</td>
         <td>${el.Price}</td>
         <td>${el.Memory}</td>
         <td>${el.Color}</td>
         </tr>
         `);
         table.insertAdjacentHTML('beforeend', html);
      };
   })
}

render();


