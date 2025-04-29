import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { TopicEditComponent } from './topic-edit/topic-edit.component';
interface DataItem {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  standalone: true,
  imports:[
        NzButtonModule,
        NzCardModule,
        NzTableModule,
        NzIconModule,
        NzDropDownModule,
        NzInputModule,
        FormsModule,
        NzGridModule,
        NzToolTipModule,
        NzModalModule,
  ]
})
export class TopicComponent implements OnInit {
  constructor(private _modalService: NzModalService) {}

  ngOnInit() {
  }
   searchValue = '';
    visible = false;
    listOfData: any[] = [
      {
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Parkondon No Sqevasf ' ,
      },
      {
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
    ];
    listOfDisplayData = [...this.listOfData];
  
    reset(): void {
      this.searchValue = '';
      this.search();
    }
  
    search(): void {
      this.visible = false;
      this.listOfDisplayData = this.listOfData.filter(
        (item: DataItem) => item.name.indexOf(this.searchValue) !== -1
      );
    }
  
   onCreateTopic(): void {
       this._modalService.create({
         nzTitle: 'Thêm mới chủ đề',
         nzContent: TopicEditComponent,
       });
     }
   
     onEditTopic(id: any): void {
       this._modalService.create({
         nzTitle: 'Cập nhật chủ đề',
         nzContent: TopicEditComponent,
       });
     } 

}
