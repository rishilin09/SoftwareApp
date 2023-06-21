import { Injectable } from '@angular/core';

export interface Product {
  img: string;
  name: string;
}

export interface Contact {
  email: string;
  phone: string;
  facebook: string;
  insta: string;
  tweet: string;
  linkedIn: string;
}

export interface Testimony {
  testimony: string;
  designation: string;
  company: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: Product[] = [
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/9e39a7018c30082ee835a784b1ab994a/freshping-by-freshworks.svg",
      name: "Freshping"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/6e246ff896f288b2dc8d7d22f68db0a8/hubspot-marketing-hub.svg",
      name: "HubSpot Marketing Hub"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/bd6131cf9b0260bb95666ba5a37a54bb/paylocity.svg",
      name: "Paylocity"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/1505148164/confluence.png",
      name: "Confluence"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/cfdd193e704c12959c87009a64a19156/attentive.svg",
      name: "Attentive"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/4cea0db5065cf554c6d9c7fe0ffa564d/zoho-desk.svg",
      name: "Zoho Desk"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/e05962a9c2200d64db94bd586e527764/klaviyo.svg",
      name: "Klaviyo"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/2d7d739fe8da7f95fb6c5939128ad4bc/bamboohr.svg",
      name: "BambooHR"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/afed04a3233113ad511ce052cd848826/servicenow-app-engine.svg",
      name: "ServiceNow App Engine"
    },
    {
      img: "https://images.g2crowd.com/uploads/product/hd_favicon/1553875590/braze.png",
      name: "Braze"
    }
  ];

  testimony: Testimony[] = [
    {
      testimony: `A robust congratulations to the team at Flatworld Solutions for a job well done. We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired the Flatworld team and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!`,
      designation: "CMO",
      company: "Leading Medical Care Company in Seattle, WA"
    },
    {
      testimony: `I am really impressed by the quality of services I received from Flatworld Solutions. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Flatworld and I will definitely use your services again.`,
      designation: "General Manager",
      company: "Sports Equipment Company, UK"
    },
    {
      testimony: `We thank Flatworld Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.`,
      designation: "Spokesperson",
      company: "Leading System Integrator, EMEA Region"
    },
    {
      testimony: `I wanted to take a moment to thank you for the services your team has provided. Your team has been a pleasure to work with, professional and timely. The only delay in work that we have experienced has been due to our own lack of organization managing our projects, not yours. Job well done and I hope we can continue to grow together.`,
      designation: "Spokesperson",
      company: "Video Marketing company in Chicago"
    },
    {
      testimony: `After evaluating a few outsourcers I decided to work with Flatworldsolutions because of their professional approach and ability to make changes to what we wanted. In the beginning, we had to make adjustments to the task every week. Flatworldsolutions was very responsive to these changes. I am very satisfied with our engagement and would consider working together on future projects too. I appreciate their promptness, quality of work, IT expertise and would recommend their services.`,
      designation: "Coordinator",
      company: "University in the United States"
    },
  ];

  contact: Contact =
    {
      email: "abcCompany.pvtLmtd@org.com",
      phone: "+022 22531032",
      facebook: "https://www.facebook.com",
      insta: "https://www.instaram.com",
      tweet: "https://www.twitter.com",
      linkedIn: "https://www.linkedin.com",
    };

  getTestimonies(): Testimony[] {
    return this.testimony;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getContacts(): Contact {
    return this.contact;
  }

}
