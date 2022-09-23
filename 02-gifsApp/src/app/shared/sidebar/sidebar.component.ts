import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})


export class SidebarComponent {

  //Inyecto el servicio:
  constructor(private gifsService: GifsService){
    
  }

  buscar(item: string){
    
    this.gifsService.buscarGifs(item)
  }

  get historial(){
    return this.gifsService.historial
  }


}
