let test_deck =[
    {
      "cid_id": 1,
      "card_id": "1",
      "card_name": "SD68-X01",
      "card_cost": 8,
      "card_cost_reduct": "red,red,red,god",
      "card_type": "spirit",
      "card_families": "astral dragon",
      "card_image": "SD68-X01"
    },
    {
      "cid_id": 2,
      "card_id": "1",
      "card_name": "SD68-X01",
      "card_cost": 8,
      "card_cost_reduct": "red,red,red,god",
      "card_type": "spirit",
      "card_families": "astral dragon",
      "card_image": "SD68-X01"
    },
    {
      "cid_id": 3,
      "card_id": "1",
      "card_name": "SD68-X01",
      "card_cost": 8,
      "card_cost_reduct": "red,red,red,god",
      "card_type": "spirit",
      "card_families": "astral dragon",
      "card_image": "SD68-X01"
    },
    {
      "cid_id": 4,
      "card_id": "2",
      "card_name": "SD68-CX01",
      "card_cost": 2,
      "card_cost_reduct": "red",
      "card_type": "nexus",
      "card_families": null,
      "card_image": "SD68-CX01"
    },
    {
      "cid_id": 5,
      "card_id": "2",
      "card_name": "SD68-CX01",
      "card_cost": 2,
      "card_cost_reduct": "red",
      "card_type": "nexus",
      "card_families": null,
      "card_image": "SD68-CX01"
    },
    {
      "cid_id": 6,
      "card_id": "2",
      "card_name": "SD68-CX01",
      "card_cost": 2,
      "card_cost_reduct": "red",
      "card_type": "nexus",
      "card_families": null,
      "card_image": "SD68-CX01"
    },
    {
      "cid_id": 7,
      "card_id": "3",
      "card_name": "SD68-003",
      "card_cost": 4,
      "card_cost_reduct": "red,red,god",
      "card_type": "spirit",
      "card_families": null,
      "card_image": "SD68-003"
    },
    {
      "cid_id": 8,
      "card_id": "3",
      "card_name": "SD68-003",
      "card_cost": 4,
      "card_cost_reduct": "red,red,god",
      "card_type": "spirit",
      "card_families": null,
      "card_image": "SD68-003"
    },
    {
      "cid_id": 9,
      "card_id": "3",
      "card_name": "SD68-003",
      "card_cost": 4,
      "card_cost_reduct": "red,red,god",
      "card_type": "spirit",
      "card_families": null,
      "card_image": "SD68-003"
    },
    {
      "cid_id": 10,
      "card_id": "4",
      "card_name": "SD68-005",
      "card_cost": 3,
      "card_cost_reduct": "red,red",
      "card_type": "magic",
      "card_families": null,
      "card_image": "SD68-005"
    },
    {
      "cid_id": 11,
      "card_id": "4",
      "card_name": "SD68-005",
      "card_cost": 3,
      "card_cost_reduct": "red,red",
      "card_type": "magic",
      "card_families": null,
      "card_image": "SD68-005"
    },
    {
      "cid_id": 12,
      "card_id": "4",
      "card_name": "SD68-005",
      "card_cost": 3,
      "card_cost_reduct": "red,red",
      "card_type": "magic",
      "card_families": null,
      "card_image": "SD68-005"
    }
  ]

let player1_board ={
    CARD_IN_HAND   : [],
    CARD_IN_BUSRT  : [],
    CARD_IN_MIRAGE : [],
    CARD_IN_BOARD  : [],
    CARD_IN_DECK   : [],
    CARD_IN_GY     : [],
    CARD_IN_BANISH : [],
};

let player1_core = {
    life : 5,
    core_reserve : 4,
    counter : 0,

};

let coin_result ;

function add_core(p_zone,p_amt){
    const selected_zone = document.querySelector('div[zone="'+p_zone+'"]');
    if(p_zone == 'LIFE'){
      player1_core.life += p_amt;
    }

    switch(p_zone){
        case 'LIFE':    player1_core.life         += p_amt; break;
        case 'RESERVE': player1_core.core_reserve += p_amt; break;
        case 'COUNTER': player1_core.counter      += p_amt; break;
    }
    for(let i = 1; i<=p_amt;i++){
        selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
    }
}

function remove_core(p_zone,p_amt){
   let zone = document.querySelector('div[zone="'+p_zone+'"]');
   for(let i = 1; i<=p_amt;i++){
    if(zone.lastElementChild) zone.lastElementChild.remove();
   }
}

function add_card(p_zone,p_card_id){
    const selected_zone = document.querySelector('div[zone="'+p_zone+'"]');
    selected_zone.insertAdjacentHTML('beforeend','<img class="CARD_CSS" src="images/SLEEVE.png">');
}

function remove_card(p_zone,p_card_id){
   let zone = document.querySelector('div[zone="'+p_zone+'"]');
    if(zone.lastElementChild) zone.lastElementChild.remove();
}

function add_counter(p_value){
    player1_core.counter +=p_value;
    let zone = $('[zone="COUNTER"] .COUNTER_NUMBER');   if(zone.length > 0) zone[0].innerHTML = player1_core.counter;
}

function get_card_info(p_id){
    if (p_id == 1) {
        test = {'test' : 'TEST','img' : 'images/SD68-003.webp'};
    }else if (p_id == 2) {
        test = {'test' : 'TEST','img' : 'images/SD68-X01.webp'};
    }
    return test;
}

async function get_deck(p_deck_id) {
//   const apiUrl = 'https://oracleapex.com/ords/wksp_rmutttransfer/bst/DECK?DECK_ID=' + p_deck_id;
//   console.log("apiUrl:", apiUrl);
//   try {
//     const response = await fetch(apiUrl, {
//       method: "GET",
//       headers: {"Content-Type": "application/json"}
//     });
//     const data = await response.json();
//     player1_board.CARD_IN_DECK = shuffle(data.items);
//     return shuffle(data.items);
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
    test_deck = shuffle(test_deck);
    player1_board.CARD_IN_DECK = test_deck;
    console.log("test_deck:", test_deck);
    console.log("player1_board.CARD_IN_DECK:", player1_board.CARD_IN_DECK);
    return test_deck;
}

function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));

        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

async function start_game() {
    console.log("Start Game");
    player1_board.CARD_IN_DECK = await get_deck(1);
    console.log(player1_board);
    load_deck(player1_board.CARD_IN_DECK);
}

function load_deck(){
    if(player1_board.CARD_IN_DECK.length > 0){
        document.getElementById('DECK').src="images/SLEEVE.png";
        document.getElementById('DECK').style.display = "block";
        // selected_zone.insertAdjacentHTML('beforeend','<img class="CARD_CSS" src="images/SLEEVE.png">');
    }else{
        document.getElementById('DECK').style.display = "none";
    }
}

function draw_deck(){
    if(player1_board.CARD_IN_DECK.length > 0){
      player1_board.CARD_IN_HAND.push(player1_board.CARD_IN_DECK.pop());
      load_hand();

      if(player1_board.CARD_IN_DECK.length == 0){
          document.getElementById('DECK').style.display = "none";
      }
  }
}

function load_hand(){
    const selected_zone = document.querySelector('div[zone="'+'HAND'+'"]');
    while (selected_zone.firstElementChild) {selected_zone.firstElementChild.remove();}
    player1_board.CARD_IN_HAND.forEach(function(v,i,a){
        selected_zone.insertAdjacentHTML('beforeend','<img class="CARD_CSS" src="images/'+v['card_image']+'.webp">');
    })
}

function set_burst(p_cid){
    const selected_zone = document.querySelector('div[zone="'+'BURST'+'"]');
    while (selected_zone.firstElementChild) {
        selected_zone.firstElementChild.remove();
        send_GY();
    }
    if(p_cid) selected_zone.insertAdjacentHTML('beforeend','<img class="CARD_CSS" src="images/SLEEVE.png">');
}

function send_GY(card_id) {
    player1_board.CARD_IN_GY.push(card_id);
}

function card_function(p_cid,p_func){

}

function open_dialog(p_type){
  const dialog = document.getElementById("Dialog");
  p_type = p_type || 'COIN';

  if(p_type == 'COIN'){
      document.getElementById("Dialog_title").innerText = "ทอยมาสิ หัว/ก้อย ?";
      const coin = document.createElement("div");   coin.id = "coin"; 
      const sideA = document.createElement("div");  sideA.className = "side-a";
      const sideB = document.createElement("div");  sideB.className = "side-b";
      coin.appendChild(sideA);  coin.appendChild(sideB);

      const button_container = document.createElement("div"); button_container.classList.add("button-container");
      const head = document.createElement("button"); head.onclick = function(){ flip_coin('HEAD'); }; head.innerText = "HEAD";
      const tail = document.createElement("button"); tail.onclick = function(){ flip_coin('TAIL'); }; tail.innerText = "TAIL";
      button_container.appendChild(head); button_container.appendChild(tail);

      document.getElementById("Dialog_detail").appendChild(coin);
      document.getElementById("Dialog_detail").appendChild(button_container);
      dialog.showModal();
      return;
  }
  
}

function close_dialog(){
  const dialog = document.getElementById("Dialog");
  dialog.close();
  document.getElementById("Dialog_title").innerText = "";
  document.getElementById("Dialog_detail").innerText = "";
}

function flip_coin(p_side) {
  var flipResult = Math.random();
  var coin = document.getElementById('coin');
  coin.classList.remove('heads');
  coin.classList.remove('tails');
  document.getElementById("Dialog_detail").removeChild(document.getElementById("Dialog_detail").lastChild);
    setTimeout(function(){
      if(flipResult <= 0.5){
        coin.classList.add('heads');
        coin_result = 'HEAD';
      }
      else{
        coin.classList.add('tails');
        coin_result = 'TAIL';
      }
    }, 100);
    setTimeout(function(){
      let result = '';
      if(p_side){
          if(p_side == coin_result) result = "คุณทายถูก";
          else result = "คุณทายผิด";
      }
      // document.getElementById("Dialog_detail").appendChild(document.createElement("p")).innerText = "ผลการทอยเหรียญ = " + coin_result + " (" + result + ")";
      const button_container = document.createElement("div"); button_container.classList.add("button-container");
      const First = document.createElement("button"); First.onclick = function(){ sel_turn('FIRST'); }; First.innerText = "First";
      const Second = document.createElement("button"); Second.onclick = function(){ sel_turn('LAST'); }; Second.innerText = "Second";
      button_container.appendChild(First); button_container.appendChild(Second);
      document.getElementById("Dialog_title").innerText = "เลือกเล่นก่อนหรือหลัง ?";
      document.getElementById("Dialog_detail").appendChild(button_container);
    }, 3100);
}
function sel_turn(p_side) {
    console.log("เลือกเล่นเป็น : " + p_side);
    close_dialog();
}