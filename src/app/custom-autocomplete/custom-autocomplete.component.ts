import { Component, OnInit } from '@angular/core';
import {CustomSearchService} from '../custom-search.service'
import { debounce, debounceTime } from 'rxjs';
@Component({
  selector: 'app-custom-autocomplete',
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.scss']
})
export class CustomAutocompleteComponent implements OnInit {

  constructor(private service:CustomSearchService ) { }
  showPopover:boolean=false;
  suggestionList:any;
  searchInputValue:string="";
  ngOnInit(): void {
    this.service.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(val=>{
      console.log('val--',val)
this.searchValueFilter(val);
    })
  }
onKeyUp(inputSearchedValue:string){
console.log("inputSearchedValue",inputSearchedValue);
this.service.searchSubject.next(inputSearchedValue)

}
searchValueFilter(val:any){
  this.service.searchSubject.subscribe
 let result:any=this.service.getSearchQuery(val);
 if(val===''){
  this.showPopover=false;
 }
 for(let i in result){
if(i===val){
this.suggestionList=result[i];
this.showPopover=true;
}
 }
//  .subscribe(output=>{
//   console.log("output",output);
//  });

}
}