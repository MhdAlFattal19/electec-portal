import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
 constructor(private modalService: NgbModal, ){
  
    }
  
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
  };
  
  announcementId
    announcements = [
      {
        title: 'Modern Apartment',
        description: 'Spacious apartment with great views.',
        location: 'New York, NY',
        contact: '123-455-7890',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
      {
        title: 'Job Opening',
        description: 'Looking for an experienced candidate.',
        location: 'Los Angeles, CA',
        contact: '987-654-3210',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      },
      {
        title: 'Vintage Chair',
        description: 'Classic wooden chair in excellent condition.',
        location: 'Chicago, IL',
        contact: '855-125-4567',
        image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c',
      },
      {
        title: 'Car for Sale',
        description: '2018 model with low mileage.',
        location: 'Houston, TX',
        contact: '555-997-6543',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70', // Replace with actual
  
      },
      {
        title: 'Office Space',
        description: 'Available office space in downtown area.',
        location: 'Phoenix, AZ',
        contact: '111-222-3333',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', // Replace with actual
      },
      {
        title: 'Guitar for Sale',
        description: 'Acoustic guitar in good condition.',
        location: 'San Francisco, CA',
        contact: '999-835-7777',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', // Replace with actual
      },
      {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', // Replace with actual
        title: 'House for Rent',
        description: 'Beautiful family home in a quiet neighborood close to ic...',
        location: 'Dalias, TX',
        phone: '444-535-6666'
      },
      {
        image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', // Replace with actual
        title: 'Lost Dog',
        description: 'Our beloved dog ba gen missing. Please-contact us if you...',
        location: 'Miami, FL',
        phone: '321-654-0687'
      },
      {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', // Replace with actual
        title: 'Mountain Bike',
        description: 'Hight quality mountain ipike with front suspension. Ideal for off-...',
        location: 'Seattle, WA',
        phone: '777-556-6333'
      }
    ];


    onApproveModalOpen(context, announcementId) {
    this.announcementId = announcementId;
    this.modalService.open(context, { centered: true });
  }

    closePopUp() {
    this.modalService.dismissAll();
  }

  approveAnnouncement()
  {
    console.log("Approve API")
    this.closePopUp()
  }

  onDeclineModalOpen(context, announcementId) {
    this.announcementId = announcementId;
    this.modalService.open(context, { centered: true });
  }

  declineAnnouncement()
  {
    console.log("Decline API")
    this.closePopUp()
  }
}
