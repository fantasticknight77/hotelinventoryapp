import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomNumber: "",
    roomType: "",
    amenities: "",
    price: 0,
    photo: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }

  successMsg: string = "";

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomForm: NgForm) {
    this.roomsService.addRooms(this.room).subscribe((data) => {
      this.successMsg = "Room Added Successfully"
      roomForm.resetForm({
      roomNumber: "",
      roomType: "",
      amenities: "",
      price: 0,
      photo: "",
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 0
      });
    });
  }

}
