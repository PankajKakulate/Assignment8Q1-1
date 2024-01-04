import { Component, Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

   public dataInput : string="";
   
   @Output() public dataemit=new EventEmitter()

   public fun(test:string){
    
     this.dataemit.emit(this.dataInput.toString());
   }
}
