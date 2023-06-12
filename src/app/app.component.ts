import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plus_game';
  listPositions: Item[] = []
  constructor(){
    this.reset();
  }
  public reset(){
    this.listPositions = []
    this.listPositions.push( new Item(0,[1,3])) //0
    this.listPositions.push( new Item(1,[0,2,4]))//1
    this.listPositions.push( new Item(2,[1,5]))//2

    this.listPositions.push( new Item(3,[0,4,6]))//3
    this.listPositions.push( new Item(4,[1,3,5,7]))//4
    this.listPositions.push( new Item(5,[2,4,8]))//5

    this.listPositions.push( new Item(6,[3,7]))//6
    this.listPositions.push( new Item(7,[6,8,4]))//7
    this.listPositions.push( new Item(8,[7,5]))//8
  }
  winCheck(){
    
    return this.listPositions.filter(p=> !p.status).length == 0
  }
  changePositions(atualPosition:number){
    var item = this.listPositions.find(p=> p.position == atualPosition);

    if(item){
      item.status = !item.status;
      item.changes.forEach(p=>{
        var subItem = this.listPositions.find(q=> q.position == p);
        if(subItem)
          subItem.status = !subItem.status
      });
    }
  }
  GetPositionStatus(position:number):boolean{
    var item = this.listPositions.find(p=> p.position == position);
    return item?.status ?? false;
  }
}
export class Item{
  position:number;
  changes:number[];
  status:boolean;
  constructor(position:number, changes:number[]){
    this.changes = changes;
    this.position = position;
    this.status = false;
  }
}

