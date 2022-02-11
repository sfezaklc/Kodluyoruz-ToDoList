
let tasks = JSON.parse(localStorage.getItem('task'))
console.log(tasks)
update()
function update(){
    var ListDOM = document.querySelector("#list")
    ListDOM.innerHTML = ''
    
    tasks.forEach((taskItem, index) => {
        // let LiDOM = document.createElement('li')
        // LiDOM.innerHTML = `${taskItem}`
        // LiDOM.dataset.index = index
        let LiDOM = `<li data-index="${index}">${taskItem}  <i class="fas fa-times"  onclick="deleteElement(${index})"></i></li>`
        ListDOM.insertAdjacentHTML('beforeend', LiDOM)
    })
}

function deleteElement(index){
    // let deletedItem = document.querySelector('#list>li>i.fa-times').parentNode
    console.log(this)
    let deletedItem = document.querySelector('li[data-index="'+index+'"]')
    console.log(deletedItem)
    deletedItem.remove()
    tasks = tasks.filter((task, i) => i != index)   
    localStorage.setItem('task', JSON.stringify(tasks)) 
}

function newElement(){
    let Item = document.querySelector("#task")
    let taskItem = Item.value
    if(taskItem.length > 0){
    tasks.push(taskItem)
    Item.value = ""
    localStorage.setItem('task', JSON.stringify(tasks))
    console.log(tasks)
    update();
    $(document).ready(function(){
        $('.success').toast('show');
      });
    }
    else{
        $(document).ready(function(){
            $('.error').toast('show');
          });
    }
    
}
