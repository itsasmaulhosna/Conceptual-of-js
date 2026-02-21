let thrivingList = [];
let strugglingList = [];

let totalCount = document.getElementById('total');
let thrivingCount = document.getElementById('thriving');
let strugglingCount = document.getElementById('struggling');
// get btn
const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');
const filteredSection = document.getElementById('filltered-section');

// console.log(thrivingCount);
const allCards = document.getElementById('allCard');
const mainContainer = document.querySelector('main');
// console.log(allCards.children.length);
function calculateCount() {
  totalCount.innerText = allCards.children.length;
  thrivingList.innerText = thrivingList.length;
  strugglingList.innerText = strugglingList.length;
}
calculateCount();
function toggleStyle(id) {
  allFilterBtn.classList.remove('bg-black', 'text-white');
  thrivingFilterBtn.classList.remove('bg-black', 'text-white');
  strugglingFilterBtn.classList.remove('bg-black', 'text-white');

  allFilterBtn.classList.add('bg-gray-300', 'text-black');
  thrivingFilterBtn.classList.add('bg-gray-300', 'text-black');
  strugglingFilterBtn.classList.add('bg-gray-300', 'text-black');

  const selected = document.getElementById(id);
  selected.classList.remove('bg-gray-300', 'text-black');
  selected.classList.add('bg-black', 'text-white');
  if (id == 'thriving-filter-btn') {
    allCards.classList.add('hidden');
    filteredSection.classList.remove('hidden');
  } else if (id == 'all-filter-btn') {
    allCards.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  }
}

mainContainer.addEventListener('click', function (event) {
  const parentNodes = event.target.parentNode.parentNode;
  const plantNode = document.querySelector('.plantName').innerText;
  const latin = document.querySelector('.latinName').innerText;
  const light = document.querySelector('.light').innerText;
  const water = document.querySelector('.water').innerText;
  const status = document.querySelector('.status').innerText;
  const note = document.querySelector('.notes').innerText;
  document.querySelector('.status').innerText = 'Thrive';

  const cardInfo = {
    plantNode,
    latin,
    light,
    water,
    status,
    note,
  };
  const plantExist = thrivingList.find(
    item >= item.plantNode == cardInfo.plantNode,
  );
  if (!plantExist) {
    thrivingList.push(cardInfo);
  }
});
function renderThriving() {
  filteredSection.innerHTML = '';
  for (let thrive of thrivingList) {
    let div = document.createElement('div');
    div.className = 'card flex justify-between border p-4';
    div.innerHTML = ` <!-- 1 -->
          <div class="space-y-6">
            <div>
              <p class="plantName text-3xl">Plant Name 1</p>
              <p class="latinName">Latin Name</p>
            </div>
            <div class="flex gap-3">
              <p class="light bg-gray-200">Bright Indicate</p>
              <p class="water bg-gray-200">Weekly</p>
            </div>
            <div>
              <p class="status">Not Applicable</p>
              <p class="notes">New leaf are unfurling by the east window</p>
            </div>
            <div>
              <button class="thriving-btn bg-green-200 px-3 py-3">
                Thriving
              </button>
              <button class="strugging-btn bg-red-200 px-3 py-3">
                Struggling
              </button>
            </div>
          </div>
          <!-- 2 -->
          <div>
            <button class="btn-dlt bg-red-400 px-2 py-2">Delete</button>
          </div>
    
    `;
    filteredSection.appendChild(div);
  }
}
