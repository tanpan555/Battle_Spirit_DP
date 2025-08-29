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
    core_life : 0,
    soul_core_life : 0,
    core_reserve : 0,
    soul_core_reserve : 0,
    core_trash : 0,
    soul_core_trash : 0,
    counter : 0,

};

let coin_result ;

function add_core(p_zone,p_amt){
    const selected_zone = document.querySelector('div[zone="'+p_zone+'"]');
    switch(p_zone){
        case 'LIFE':    player1_core.core_life    += p_amt; break;
        case 'RESERVE': player1_core.core_reserve += p_amt; break;
        case 'COUNTER': player1_core.counter      += p_amt; break;
    }

    if(p_zone == 'RESERVE'){
      if(player1_core.core_reserve <= 6){
        for(let i = 1; i<=p_amt;i++){ 
          selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
        }
      }else{
        selected_zone.classList.add("many_core");
        selected_zone.classList.remove("slots");
        while (selected_zone.firstElementChild) {selected_zone.firstElementChild.remove();}
        selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
        selected_zone.insertAdjacentHTML('beforeend','<div class="CORE_NUMBER"> ×'+player1_core.core_reserve+'</div>');
      }
    }else if(p_zone == 'LIFE'){
      if(player1_core.core_life <= 6){
        for(let i = 1; i<=p_amt;i++){ 
          selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
        }
      }else{
        selected_zone.classList.add("many_core");
        selected_zone.classList.remove("slots");
        while (selected_zone.firstElementChild) {selected_zone.firstElementChild.remove();}
        selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
        selected_zone.insertAdjacentHTML('beforeend','<div class="CORE_NUMBER"> ×'+player1_core.core_life+'</div>');
      }
    }
    // load_core();
}

function remove_core(p_zone,p_amt){
   let selected_zone = document.querySelector('div[zone="'+p_zone+'"]');
    if ('LIFE' == p_zone && (player1_core.core_life > 6) && (player1_core.core_life - p_amt <= 6)){
      if(selected_zone.lastElementChild) {
        selected_zone.lastElementChild.remove();
        selected_zone.lastElementChild.remove();
      }
      selected_zone.classList.remove("many_core");
      selected_zone.classList.add("slots");
      for(let i = 0; i<= player1_core.core_life - p_amt;i++){ 
          selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
      }
    }else if ('RESERVE' == p_zone && (player1_core.core_reserve > 6) && (player1_core.core_reserve - p_amt <= 6)){
      if(selected_zone.lastElementChild) {
        selected_zone.lastElementChild.remove();
        selected_zone.lastElementChild.remove();
      }
      selected_zone.classList.remove("many_core");
      selected_zone.classList.add("slots");
      for(let i = 0; i<= player1_core.core_reserve - p_amt;i++){ 
          selected_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
      }
    }
   switch(p_zone){
        case 'LIFE':    player1_core.core_life    -= p_amt; break;
        case 'RESERVE': player1_core.core_reserve -= p_amt; break;
        case 'COUNTER': player1_core.counter      -= p_amt; break;
    }
    if(p_zone == 'RESERVE'){
      if(player1_core.core_reserve > 6){
        if(selected_zone.lastElementChild) selected_zone.lastElementChild.remove();
        selected_zone.insertAdjacentHTML('beforeend','<div class="CORE_NUMBER"> ×'+player1_core.core_reserve+'</div>');
      }else{
        for(let i = 1; i<=p_amt;i++){
          if(selected_zone.lastElementChild) selected_zone.lastElementChild.remove();
        }
      }
    }else if(p_zone == 'LIFE'){
      if(player1_core.core_life > 6){
        if(selected_zone.lastElementChild) selected_zone.lastElementChild.remove();
        selected_zone.insertAdjacentHTML('beforeend','<div class="CORE_NUMBER"> ×'+player1_core.core_life+'</div>');
      }else{
        for(let i = 1; i<=p_amt;i++){
          if(selected_zone.lastElementChild) selected_zone.lastElementChild.remove();
        }
      }
    }
}

function set_default_core(){
    player1_core.core_life = 5;
    player1_core.core_reserve = 3;
    player1_core.soul_core_reserve = 1;
    player1_core.counter = 0;
    load_core();
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
    let zone = document.querySelector('[zone="COUNTER"] .COUNTER_NUMBER');   

    if(zone) zone.innerHTML = player1_core.counter;
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
    test_deck.forEach(function(v,i,a){ player1_board.CARD_IN_DECK.push(v); });
    return player1_board.CARD_IN_DECK;
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
    player1_board.CARD_IN_DECK = await get_deck(1);
    load_deck(player1_board.CARD_IN_DECK);
    set_default_core();
}

function draw_deck(p_amt){
  p_amt = p_amt || 1;
  for(let i = 1; i<=p_amt;i++){
    if(player1_board.CARD_IN_DECK.length > 0){
      player1_board.CARD_IN_HAND.push(player1_board.CARD_IN_DECK.pop());
    }
  }
  if(player1_board.CARD_IN_DECK.length == 0){
    document.getElementById('P1_DECK').style.display = "none";
  }
  load_card();
}

function load_deck(){
    if(player1_board.CARD_IN_DECK.length > 0){
        document.getElementById('P1_DECK').src="images/SLEEVE.png";
        document.getElementById('P1_DECK').style.display = "block";
    }else{
        document.getElementById('P1_DECK').style.display = "none";
    }
}

function load_card(){
  const hand = document.querySelector('div[zone="'+'HAND'+'"]');
  const spirit_zone = document.querySelector('div[zone="'+'SPIRIT'+'"]');
  const nexus_zone = document.querySelector('div[zone="'+'NEXUS'+'"]');
  while (hand.firstElementChild) {hand.firstElementChild.remove();}
  while (spirit_zone.firstElementChild) {spirit_zone.firstElementChild.remove();}
  while (nexus_zone.firstElementChild) {nexus_zone.firstElementChild.remove();}
  player1_board.CARD_IN_HAND.forEach(function(v,i,a){
      hand.insertAdjacentHTML('beforeend','<img class="CARD_CSS" onclick="open_dialog(\'CARD\',\''+v['cid_id']+'\');" src="images/'+v['card_image']+'.webp">');
  })

  player1_board.CARD_IN_BOARD.forEach(function(v,i,a){
      if(v['card_type'] == 'spirit'){
          spirit_zone.insertAdjacentHTML('beforeend','<img class="CARD_CSS" src="images/'+v['card_image']+'.webp">');
      }else if(v['card_type'] == 'nexus'){
          nexus_zone.insertAdjacentHTML('beforeend','<img class="CARD_CSS" src="images/'+v['card_image']+'.webp">');
      }
  })

}

function load_core(){
    const life_zone    = document.querySelector('div[zone="'+'LIFE'+'"]');
    const reserve_zone = document.querySelector('div[zone="'+'RESERVE'+'"]');
    const counter_zone = document.querySelector('div[zone="'+'COUNTER'+'"] .COUNTER_NUMBER');
    while (life_zone.firstElementChild) {life_zone.firstElementChild.remove();}
    while (reserve_zone.firstElementChild) {reserve_zone.firstElementChild.remove();}
    if(player1_core.core_life <= 6){
        for(let i = 1; i<=player1_core.core_life;i++){
            life_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
        }
      }else{
            life_zone.classList.add("many_core");
            life_zone.classList.remove("slots");
            life_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
            life_zone.insertAdjacentHTML('beforeend','<div class="CORE_NUMBER"> ×'+player1_core.core_life+'</div>');
        }
    if(player1_core.core_reserve <= 6){ 
        for(let i = 1; i<=player1_core.core_reserve;i++){
            reserve_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
        }
      }else{      
            reserve_zone.classList.add("many_core");
            reserve_zone.classList.remove("slots");
            reserve_zone.insertAdjacentHTML('beforeend','<div class="slot"><img class="Blue_core" src="images/Blue_core.webp"></div>');
            reserve_zone.insertAdjacentHTML('beforeend','<div class="CORE_NUMBER"> ×'+ player1_core.core_reserve+'</div>');
        }
    counter_zone.innerHTML = player1_core.counter;
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
    load_card();
}

function open_dialog(p_type,p_cid_id){
  const dialog = document.getElementById("Dialog");
  let p_card = test_deck.find(card => card.cid_id == p_cid_id);
  console.log(p_card);
  console.log(p_type);
  console.log(p_cid_id);
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
  }else if(p_type == 'CARD' && p_card){
      document.getElementById("Dialog_title").innerText = p_card['card_name']; //+'\n' +
      let reduct_html = '';
      p_card['card_cost_reduct'].split(',').forEach(function(v,i,a){
          if(v == 'red') reduct_html += '<img src="images/Reduct_Red.png">';
          else if(v == 'blue') reduct_html += '<img src="images/Reduct_Blue.png">';
          else if(v == 'green') reduct_html += '<img src="images/Reduct_Green.png">';
          else if(v == 'god') reduct_html += '<img src="images/Reduct_God.png">';
          else if(v == 'colorless') reduct_html += '<img src="images/Reduct_Colorless.png">';
      });

      let detail = 
        '<div class="CARD_INFO">'+'\n' +
        '<img class="CARD_CSS_INFO" src="'+get_img(p_card['card_image'])+'">'+'\n' +
        '<div>'+'\n' +
        '<div class="CARD_TEXT">'+'\n' +
        '<div class="Label_info">Card Type : <div class="detail_info">'+p_card['card_type'] +'</div></div>'+'\n' +
        '<div class="Label_info">Color : <div class="detail_info">'+p_card['card_color'] +'</div></div>'+'\n' +
        '<div class="Label_info">Cost : <div class="detail_info">'+p_card['card_cost']+'</div></div>'+'\n' +
        '<div class="Label_info">Reductions : <div class="detail_info">'+reduct_html+'</div></div>'+'\n' +
        '<div class="Label_info">Families : <div class="detail_info">'+p_card['card_families']+'</div></div>'+'\n' +
        '</div>'+'\n' +
        '<div class="CARD_EFFECT">'+'\n' +
        '<div class="Label_info"> Effect : </div>'+'\n' +
        '<div class="detail_info">'+'\n' +
        '<div class="CARD_EFFECT_LIST" onclick="use_skill(\''+p_card['cid_id']+'\' , \''+'1'+'\')">1. เมื่อ Nexus นี้เข้าสู่สนามรบ คุณสามารถจั่วการ์ด 1 ใบ</div>'+'\n' +
        '<div class="CARD_EFFECT_LIST" onclick="use_skill(\''+p_card['cid_id']+'\' , \''+'2'+'\')">2. คุณสามารถจ่าย 2 [R] : สร้าง Spirit 1 ตัวที่มี Cost 2 หรือต่ำกว่า จากมือของคุณเข้าสู่สนามรบโดยไม่ต้องจ่ายค่าตัวมัน</div>'+'\n' +
        '</div></div></div></div>';
        console.log(detail);


      document.getElementById("Dialog_detail").insertAdjacentHTML('beforeend',detail);
      dialog.showModal();
      return;
  }
  
}

function use_skill(p_card_id,p_skill_no){
    p_card = test_deck.find(card => card.cid_id == p_card_id);
    alert("ใช้สกิลของ : " + p_card['card_name'] + ' สกิลที่ : ' + p_skill_no);
    close_dialog();
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
    start_game();
    close_dialog();
}

function get_img(p_card_image){
    return 'images/'+p_card_image+'.webp';
}